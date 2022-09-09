import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import cn from 'classnames';
import { getUsers } from '../../data/users';

import {Props} from './types';

import './style.scss';

export default function Users({className}: Props) {
  const users = getUsers();
    return (
      <>
        <div className={cn('users', className)}>
          <h2 className="users__header" >Пользователи: </h2>
          {users.map((user) => (
            <Link className="users__link" key={user.id} to={`/users/${user.id}`}>{user.name}</Link>
          ))}
        </div>
        <Outlet />
      </>
    )
}
