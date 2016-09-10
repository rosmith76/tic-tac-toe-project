'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
// const logic = require('../game/logic');

// const boardFull = function(){
//   for(let i=0; i<board.length; i++) {
//       if(board[i] === "") { return false;
//     }
//   }
//   return true;
// };
//

const onSignUp = function (event) {
  let data = getFormFields (event.target);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
    console.log ('sign up');
};

const onSignIn = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
    console.log ('sign in');
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePassword)
    .fail(ui.failure);
};

const onSignOut =(event) => {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOut);
  $('#sign-in-button').on('click', function(){
    $('#sign-in').show();
  });
  $('#sign-in').on('submit', function(){
    $('#sign-in').hide();
  });
  $('#sign-up-button').on('click', function(){
    $('#sign-up').show();
  });
  $('#sign-up').on('submit', function(){
    $('#sign-up').hide();
  });
  $('#change-password-button').on('click', function(){
    $('#change-password').show();
  });
  $('#change-password').on('submit', function(){
    $('#change-password').hide();
  });
};

module.exports = {
  addHandlers,
};
