const debug = require('debug')('hellojs')

function hello() {
  debug("hello world - hellojs # v0.2 update");
}

exports.hello = hello;
