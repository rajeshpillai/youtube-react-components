import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDragDropDemo from './AppDragDropDemo';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppDragDropDemo />, document.getElementById('root'));
registerServiceWorker();
