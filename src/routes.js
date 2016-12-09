import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/App.jsx';
import HomePage from './containers/HomePage/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
