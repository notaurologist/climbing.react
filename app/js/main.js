/** @flow */

var css = require('../css/app.css');
var React = require('react');
var router = require('./router');

// Expose React for the dev tools
window.React = React;

router.run((Handler, state) => {
  React.render(<Handler params={state.params} />, document.body);
});
