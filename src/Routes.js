import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Layout from './HOC/Layout/Layout';

class Routes extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
