import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';

import { Todo, TodoList } from './types';

export default function Todos() {
    const [todos, setTodos] = useState<TodoList>([]);
    const [addText, setAddText] = useState<string>('');
    const [filterText, setFilterText] = useState<string>('');

    const handleChangeAddElementInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddText(event.target.value);
    }

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    }

    const handleRemove = (id: number) => {
        return (event: React.MouseEvent<HTMLButtonElement>) => {
            setTodos(todos.filter((item: Todo) => item.id !== id));
        }
    }

    const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTodos([...todos, { title: addText, id: todos.length + 1 }]);
        setAddText('');
    }

    return (
        <div>
            <Input 
                customField="str"
                value={addText}
                placeholder="Введите название нового поля"
                onChange={handleChangeAddElementInput}
            />

            <Button onClick={handleAdd}>
                Добавить
            </Button>

            <div>
                <Input
                    customField="filter"
                    placeholder="Фильтурем"
                    onChange={handleFilter}
                />
                <ul>
                    { todos
                        .filter((item: Todo) => item.title.includes(filterText))
                        .map(({title, id}) => (
                                <li key={id}>
                                    <span>{title} ({id})</span>
                                    <Button onClick={handleRemove(id)}>
                                        Удалить
                                    </Button>
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}