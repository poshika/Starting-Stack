import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App.react';
import Currency from './Currency/Currency.react';
import About from './About.react';

export default class AppRouter extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="currency" component={Currency} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}
