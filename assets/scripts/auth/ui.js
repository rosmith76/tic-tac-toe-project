'use strict';
const app = require ('./app');

const signInSuccess = (data) => {
  app.user = data.user;
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};
const changePassword = () => {
  console.log ('Password Changed');
};

const signOutSuccess = () => {
  app.user = null;
  console.log ('Signed out');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  signOutSuccess
};
