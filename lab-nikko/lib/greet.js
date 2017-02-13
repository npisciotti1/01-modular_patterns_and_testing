'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  if(arguments.length === 0) throw new Error('No name name given, please input a name!');
  return `Hello ${name}, pleasure to meet you`;
};

exports.goodbye = function() {
  return 'thanks for stopping by!';
};
