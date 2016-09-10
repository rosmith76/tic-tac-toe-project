'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./game/api');
require('./auth/api');
require('./auth/app');
require('./auth/ui');
require('./game/ui');
require('./game/logic');

const authEvents = require('./auth/events.js');

const onCellClick = require('./game/logic.js');

$(() => {
  $('container').show();
  $('form').hide();
  authEvents.addHandlers();
  onCellClick.addHandlers();
});
