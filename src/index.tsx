import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import './style.scss';

import App from './containers/App';
import About from './containers/About';
import Users from './containers/Users';
import User from './containers/User';
import NotFound from './containers/404';
import AnotherPage from './containers/AnotherPage';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<h2>Главная</h2>}/>
              <Route path="about" element={<About />} />
              <Route path="users" element={<Users className="app__users"/>}>
                <Route index element={<p>Выберите пользователя</p>}/>
                <Route path=":userId" element={<User />} />
              </Route>
            </Route>
            <Route path="/another-page" element={<AnotherPage />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
