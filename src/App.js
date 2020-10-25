import React, { Component, Suspense, lazy } from 'react';
import { loadPosts, loadUsers } from './api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import TestComponent from './components/Test';
import DataLoader from './components/DataLoader';
import SignInFormik from './components/forms/SignInFormik';
import styles from './components/forms/SignInFormik/SignInFormik.module.css';
import { divide } from 'lodash';

const Contact = React.lazy(() => import('./components/pages/Contact'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Test = React.lazy(() => import('./components/pages/Test'));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div> Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
            <Route path="*">
              {' '}
              <div> not found page </div>{' '}
            </Route>
          </Switch>
        </Suspense>

        <SignInFormik />
      </Router>
    );
  }
}

export default App;
