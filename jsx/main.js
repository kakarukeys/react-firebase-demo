"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require("./app/App.js"),
    initialState = require("./app/initialState");

/* bind main app component to DOM */

ReactDOM.render(React.createElement(App, {initialState: initialState}), document.getElementById("app"));
