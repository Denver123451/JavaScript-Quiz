import './style.scss'
import React from 'react';
import {createRoot} from 'react-dom/client';
import { Application } from './application';


const root = createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Application/>
    </React.StrictMode>
)