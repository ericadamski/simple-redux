import React from 'react';

import { Clock } from './components/clock';

import './main.scss';

const Main = ({ title }) => (
    <div>
        <h1>{ title || 'Clock' }</h1>
        <Clock />
    </div>
);

export default Main;
