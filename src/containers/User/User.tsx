import React from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../data/users';

export default function User() {
  const params = useParams();
  const user = getUser(params.userId);

  return (
    <div className="user">
      <div className="user__name">Имя: {user.name}</div>
      <div className="user__age">Возраст: {user.age}</div>
    </div>
  );
}
