import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';

const Login = lazy(() => import('./page/login/Login'));
const GoogleCallback = lazy(() => import('./page/google/GoogleCallback'));
const MemberList = lazy(() => import('./page/member/MemberList'));
const Organization = lazy(() => import('./page/organization/OrganizationList'));

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/auth/google/callback"
              component={GoogleCallback}
            />
            <Route exact path="/organizations" component={Organization} />
            <Route exact path="/members" component={MemberList} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
