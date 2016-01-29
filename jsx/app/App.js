"use strict";

var React = require("react"),
    dispatcher = require("../backbone/dispatcher"),
    router = require("../backbone/router"),
    process = require("../controllers/handlers"),
    routes = require("../controllers/routes");

/* The primary app component */

var App = React.createClass({
  getInitialState: function() {
    return this.props.initialState;
  },

  componentWillMount: function() {
    var that = this,
        listener = {dispatcher: dispatcher, router: router};

    // update app state on all events
    dispatcher.on("all", function(eventName, eventArgs) {
      that.setState(process.call(listener, that.state, eventName, eventArgs));
    });

    // intialize router
    _.each(routes.pathToName, function(name, route) {
      router.route(route, name);
    });

    // update app state on all routes
    router.on("route", function(name, routeParams) {
      that.setState(process.call(listener, that.state, "route", {name: name, routeParams: routeParams}));
    });

    // begin monitoring hashchange events, and dispatching routes
    Backbone.history.start({pushState: true});

    // prevent hyperlink from causing request to server, use client-side routing instead
    $(document).on("click", "a:not([data-bypass])", function(e) {
      var href = $(this).attr('href'),
          protocol = this.protocol + '//';

      if (href.slice(0, protocol.length) !== protocol) {
        e.preventDefault();
        router.navigate(href, true);
      }
    });
  },

  render: function() {
    /* depending on the active route, select a component to render */
    var route = this.state.activeRoute,
        p = routes.nameToComponent[route.name] || routes.nameToComponent.notFound,
        Component = p[0],
        getProps = p[1];

    return React.createElement(Component, getProps(this.state, route.routeParams));
  }
});

module.exports = App;
