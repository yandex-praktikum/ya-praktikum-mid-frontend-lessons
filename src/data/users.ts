const users = [
  {
    id: '1',
    name: 'Денис',
    age: 25
  },
  {
    id: '2',
    name: 'Маша',
    age: 23
  },
  {
    id: '3',
    name: 'Саша',
    age: 28
  },
  {
    id: '4',
    name: 'Иван',
    age: 24
  }
];

export function getUsers() {
  return users;
}

export function getUser(userId: string) {
  return users.find((user) => user.id === userId);
}
