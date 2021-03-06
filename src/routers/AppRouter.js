import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import createHistory from 'history/createBrowserHistory';

// This is used to rediect user to certain pagaes duing login and logout
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
          <Switch>
              <PublicRoute path='/' component={LoginPage} exact={true} />
              <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} exact={true} />
              <PrivateRoute path='/create' component={AddExpensePage} />
              <PrivateRoute path='/edit/:id' component={EditExpensePage} />
              <Route component={NotFoundPage} />
          </Switch>
    </Router>
);

export default AppRouter;
