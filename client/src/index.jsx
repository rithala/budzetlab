import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

const container = document.getElementById('app');

render(
    <App />,
    container
);

if (module.hot) {
    module.hot.accept();
}
