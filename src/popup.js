import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './components/Popup';
import './styles/global.css';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
