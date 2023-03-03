import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HashRouter>
);
