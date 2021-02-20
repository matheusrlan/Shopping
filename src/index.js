import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './views/Home.view'
import { store, persisetdStore } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <PersistGate persistor={persisetdStore}>
          <HomeView />
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

