import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import userReducer from './reducers/user/user'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import interceptors from "../src/Interceptors";

const user_store = createStore(
  userReducer, applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={user_store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
