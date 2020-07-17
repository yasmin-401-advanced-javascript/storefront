import React from 'react';
import reactDom from 'react-dom';
import App from './app.js';
import {Provider} from 'react-redux';
import store from './store/';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main (){
    return (
        <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
    )
}
const rootElement = document.getElementById('root');
reactDom.render(<Main/> ,  rootElement)