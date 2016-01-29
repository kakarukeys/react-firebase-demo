"use strict";

var Landing = require("../components/Landing"),
    Login = require("../components/Login"),
    Logout = require("../components/Logout"),
    NotFound = require("../components/NotFound"),
    Viz = require("../components/Viz");

/* linking urls to top level react components to render */

module.exports = {
  pathToName: {
    //relative path: name
    '': "home",
    "login": "login",
    "logout": "logout",
    "viz": "viz"
  },

  nameToComponent: {
    //name: [React Component, f: appState, routeParams -> props]
    login: [Login, _.constant(null)],
    logout: [Logout, _.constant(null)],
    viz: [Viz, function(appState, routeParams) {return _.pick(appState, "filters", "data");}],
    home: [Landing, _.constant(null)],
    notFound: [NotFound, _.constant(null)]
  }
};
