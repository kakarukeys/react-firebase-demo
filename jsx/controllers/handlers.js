"use strict";

/* event handlers: modify app state and return the new one */

var handlers = {
  filterChange: function(appState, eventArgs) {
    appState.filters[eventArgs.name] = eventArgs.value;
    return appState;
  },

  route: function(appState, eventArgs) {
    if (eventArgs.name === "login") {
      // redirect to home if authenticated
      if (!_.isNull(appState.user)) {
        this.router.navigate('');
        eventArgs = {name: "home", routeParams: []};
      }

    } else if (eventArgs.name === "logout") {
      // log user out
      appState.user = null;

    } else {
      // redirect to login if not authenticated
      if (_.isNull(appState.user)) {
        this.router.navigate("login");
        eventArgs = {name: "login", routeParams: []};
      }
    }

    appState.activeRoute = eventArgs;
    return appState;
  }
};

function process(appState, eventName, eventArgs) {
  /* dispatch to individual event handler */
  return handlers[eventName].call(this, appState, eventArgs);
}

module.exports = process;
