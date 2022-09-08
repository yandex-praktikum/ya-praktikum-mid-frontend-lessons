import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import App from './containers/App';
import About from './containers/About';
import Users from './containers/Users';

import './styles/reset.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/redirect" element={<Navigate to="/" replace />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </BrowserRouter>
);