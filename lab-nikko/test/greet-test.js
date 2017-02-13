'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#greeting', function(){
    it('function should return Hello Nikko, pleasure to meet you', function(){
      var output = greet.greeting('Nikko');
      assert.ok(output === 'Hello Nikko, pleasure to meet you', 'Output does not match - fail');
    });
  });
  describe('#goodbye', function() {
    it('function should log: thanks for stopping by!', function() {
      var goodbye = greet.goodbye();
      assert.ok(goodbye === 'thanks for stopping by!', 'Output does not match - fail');
    });
  });
});
