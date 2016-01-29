"use strict";

var React = require("react");

/* The Login component */

var Login = React.createClass({
  render: function() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                  <h1 className="text-center login-title">Sign in to use the app</h1>
                  <div className="account-wall">
                      <form className="form-signin">
                      <input type="text" className="form-control" placeholder="Email" required autofocus />
                      <input type="password" className="form-control" placeholder="Password" required />
                      <button className="btn btn-lg btn-primary btn-block" type="submit">
                          Sign in</button>
                      </form>
                  </div>
                  <a href="signup" className="text-center new-account">Create an account </a>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = Login;
