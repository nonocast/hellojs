const debug = require('debug')('hellojs')

function hello() {
  debug("hello world - hellojs");
}

exports.hello = hello;