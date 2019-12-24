'use strict';

var User = require('./user');
var user;

if(module.parent) {
    module.exports = User;
    return;
}

user = new User('John');
user.setName = 'Phile';
console.log(user.getName);