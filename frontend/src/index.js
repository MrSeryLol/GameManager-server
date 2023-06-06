import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore';
import GameStore from './store/gameStore';
import AdminStore from './store/adminStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        game: new GameStore(),
        admin: new AdminStore(),
    }}>
        <App/>
    </Context.Provider>,
);


