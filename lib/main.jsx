import React from 'react';

import { Clock, Weather } from './components';

import './main.scss';

const Main = ({ title }) => (
    <div>
        <h1>{ title || 'Clock' }</h1>
        <Clock />
        <Weather />
    </div>
);

export default Main;
