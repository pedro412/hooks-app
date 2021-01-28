import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
