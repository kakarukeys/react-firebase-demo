"use strict";

var React = require("react");

/* The NotFound component */

var NotFound = React.createClass({
  render: function() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                  <h1 className="text-center login-title">404 Not Found</h1>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = NotFound;
