import React from 'react';
import { Link } from 'react-router-dom';

import Todos from '../../components/Todos';

import './App.css';

export default function App() {
    return (
        <div className="app">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Todos/>
            </div>
        </div>
    );
}