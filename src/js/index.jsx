import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import RoutedApp from "./components/App.jsx";

ReactDOM.render(
	<Provider store={store}>
		<RoutedApp />
	</Provider>,
	document.getElementById('root')
);