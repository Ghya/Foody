import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from './config/store';

import Router from './config/router';

console.disableYellowBox = true;

/**
 * ================================================
 * {@class} App
 * {@extends} Component
 *
 * First Component, contains firebase init and
 * set up redux store and redux persist with Provider
 * Then, mount Router component to access
 * all app's routes
 * ================================================
 */

class App extends React.Component {
	componentDidMount() {
		const firebase = require('firebase');
		const config = {
			apiKey: 'AIzaSyAdsNZsvf7FdHu6pWVTtn3cNUQi8ZkSUak',
			authDomain: 'flane-9ccfb.firebaseapp.com',
			databaseURL: 'https://flane-9ccfb.firebaseio.com',
			projectId: 'flane-9ccfb',
			storageBucket: 'flane-9ccfb.appspot.com',
			messagingSenderId: '713148127418',
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
		);
	}
}

export default App;
