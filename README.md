## React-Firebase Demo

Simple React-Firebase architecture.

comes with
* React 0.14
* Backbone Router for url routing
* Backbone Events for component-component communication
* Jasmine for unit-testing
* Underscore
* jQuery
* Twitter Bootstrap 3

No flux, redux.

### Development
* Run `npm install`
* Run `bower install`
* Run `node_modules/gulp/bin/gulp.js`
* Run `node server.js`
* Go to `localhost:5000` to display the app
* Go to `localhost:5000/bdd/testrunner.html` to see your tests
* Any changes to `jsx`, `specs` and `styles` folder will automatically rebuild to `static/` folder
* Both tests and application changes will refresh automatically in the browser
* Run `node_modules/gulp/bin/gulp.js test` to run all tests with phantomJS and produce XML reports
* Run `npm install --save <package>` to install React related packages
* Run `bower install <package> --save` to install bower dependencies into `webapp/app/static/lib/` folder
* Edit `index.html` to wire up lib js/css files

### Deployment
* Run `node_modules/gulp/bin/gulp.js deploy` to prepare js,css files for production

### Directory
* **jsx**: Where you edit your UI scripts
* **specs/**: Where you put your test files
* **styles/**: Where you put your css files
* **static**: Where your js,css automatically builds to.
* **static/lib**: Where your bower components go to.
* **gulpfile.js**: Gulp configuration
