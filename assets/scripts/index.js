'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./api');
require('./app');
require('./ui');


const authEvents = require('./events.js');

$(() => {
  $('container').show();
  $('form').hide();
  authEvents.addHandlers();
});
