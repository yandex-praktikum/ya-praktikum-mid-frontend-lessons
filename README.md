# Router

Ниже представлен код, в котором используется Роутинг. Чтобы переключаться между путями используем:
* `<Link />`;
* `<Navigate />`; // Можно проверить, перейдя по ссылке [/redirect](http://localhost:3000/redirect) (перебросит на /)

* [Весь код можно увидеть тут](/superapp/src/containers/App/App.tsx), но вставка ниже

```typescript jsx
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
```
