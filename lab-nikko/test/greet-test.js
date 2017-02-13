'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

var name = 'Nikko';

describe('Greet Module', function() {
  describe('#greeting', function(){
    it(`function should return Hello ${name}, pleasure to meet you`, function(){
      var output = greet.greeting(name);
      assert.ok(output === `Hello ${name}, pleasure to meet you`, 'Output does not match - fail');
    });
  });
  describe('#goodbye', function() {
    it('function should log: thanks for stopping by!', function() {
      var goodbye = greet.goodbye();
      assert.ok(goodbye === 'thanks for stopping by!', 'Output does not match - fail');
    });
  });
});
