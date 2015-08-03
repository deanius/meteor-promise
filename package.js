Package.describe({
  name: 'deanius:promise',
  version: '2.3.0',
  summary: 'Get a Promise for the result of a Meteor method. Create reactive functions based on the results of Promises.',
  git: 'https://github.com/deanius/meteor-promise',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('ddp', 'client');
  api.addFiles('promise.js', ['client', 'server']);
  api.addFiles('reactivePromise.js', ['client', 'server']);
  api.export("ReactivePromise", ['client', 'server']);
});

Npm.depends({
  'es6-promise': '2.0.1' /* TODO meteor add promise */
})

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:promise');
  api.use('grigio:babel');
  api.addFiles('tests/support.es6.js', ['client', 'server']);
  api.addFiles('tests/identity-tests.es6.js', ['client', 'server']);
  api.addFiles('tests/chaining-tests.es6.js', ['client', 'server']);
  api.addFiles('tests/error-tests.es6.js', ['client', 'server']);
  api.addFiles('tests/call-wo-callback.es6.js', ['client']);
  api.addFiles('tests/reactive-promise.es6.js', ['client', 'server']);
});
