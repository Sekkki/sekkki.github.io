import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { withCookies } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Layout from './components/Layouts/index';
// import adminLayout from './components/Layouts/admin/layout';
import Main from './components/blocks/main/index';

const middleware = applyMiddleware(thunk)(createStore);

const store = middleware(reducers);

class App extends React.Component {

  render() {

    const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
      <Route {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
    )
    
    /* const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
      <Route {...rest} render={(props) => (
        store.isAuthenticated === true
          ? <Layout store={store}><Component {...props} /></Layout>
          : <Redirect to='/login' />
      )} />
    ) */
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router>
            <AppRoute exact path="/" layout={Layout} component={() => <Main />} />         
          </Router> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withCookies(App);
