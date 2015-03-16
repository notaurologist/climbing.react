/** @flow */

var App = require('./App');
var RouteForm = require('./RouteForm');
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route
      name="routeForm"
      path="/route"
      handler={RouteForm}
    />
  </Route>
);

module.exports = routes;
