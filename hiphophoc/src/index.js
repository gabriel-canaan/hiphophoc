import React from 'react';
import ReactDOM from 'react-dom';
import './puff.css'
import App from './formHoc';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
