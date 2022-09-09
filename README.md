# Router

<<<<<<< HEAD
Чтобы запустить проект локально выполните следующие команды

```bash
nvm use
npm i
npm run serve
```

Ниже представлен код, в котором используется Роутинг. Чтобы переключаться между путями используем:
* `<Link />`;

* [Весь код можно увидеть тут](/src/containers/App/App.tsx), но вставка ниже

```typescript jsx
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
=======
Ниже представлен код, в котором используется Роутинг. Чтобы переключаться между путями используем:
* `<Link/>`;
* `<Redirect/>`; // Можно проверить, перейдя по ссылке [/users/redirect](http://localhost:3000/users/redirect) (перебросит на /users)
* `history.push('/path')`;

* [Весь код можно увидеть тут](/superapp/src/containers/App/App.tsx), но вставка ниже
* [Потыкать можно тут](https://vladpereskokov.github.io/ya-praktikum-mid-frontend-lessons/index.html)

```typescript jsx
import React, {PureComponent} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    RouteComponentProps
} from 'react-router-dom';

import Todos from '../../components/Todos'

import './App.css';

function About() {
    return <h2>About</h2>;
}

function Users(props: RouteComponentProps) {
    console.log({props});

    // Для бест-практис: колбеки внутри FC надо оборачивать в React.useCallback
    const goToAbout = () => {
        props.history.push('/about');
    };

    return (
        <div>
            <h2>Users</h2>
            <p onClick={goToAbout}>
                Перейти в эбаут по пушу (кликни меня)
            </p>
        </div>
    );
}
const UsersWithRouter = withRouter(Users);

export default class App extends PureComponent {
    public render() {
        return (
            <div className="app">
                <Router>
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

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>

                            <Route path="/users/redirect" render={() => <Redirect to="/users"/>} exact/>
                            <Route path="/users" exact>
                                <UsersWithRouter/>
                            </Route>

                            <Route path="/">
                                <Todos/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
>>>>>>> 490fcfe9fb389ff3947cf593c95819b1250e83f4
```
