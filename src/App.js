import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import './config/reactotron';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={4000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
