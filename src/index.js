import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App
                value1="This is the value X"
                value2={{name: "Subin"}}/>, document.getElementById('root'));
registerServiceWorker();
