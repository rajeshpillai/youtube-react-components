import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDragDropDemo from './AppDragDropDemo';
import AppSlideShow from './AppSlideShow';
import AppWithModal from './AppWithModal';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWithModal />, document.getElementById('root'));
registerServiceWorker();
