import React from 'react';
import ReactDOM from 'react-dom';
import App from './hoc1stgo';
import './puff.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
