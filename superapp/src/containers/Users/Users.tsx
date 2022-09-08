import React from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
    return (
        <div>
            <h2>Users</h2>
            <Link to={'/about'}>Перейти в эбаут (кликни меня)</Link>
        </div>
    )
}