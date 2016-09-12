'use strict';

require('./game/api');
require('./auth/api');
require('./auth/app');
require('./auth/ui');
require('./game/logic');

const ui = require('./game/ui');

const authEvents = require('./auth/events.js');

$(() => {
  $('container').show();
  $('form').hide();
  authEvents.addHandlers();
  ui.addHandlers();
});
