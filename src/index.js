import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

import createAppStore from './Lib/app-create-store';
const {store} = createAppStore()


ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, 
  document.getElementById('root'));
registerServiceWorker();
