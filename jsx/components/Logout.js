"use strict";

var React = require("react");

/* The Logout component */

var Logout = React.createClass({
  render: function() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                  <h1 className="text-center login-title">Successfully Logged Out</h1>
                  <a href="login" className="text-center new-account">Login Again?</a>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = Logout;
