'use strict';

var User = require('./user');
var l10n = require('./l10n/en');

var user = new User('John');
console.log(user.getName);

function message(name) {
    user.setName = name;
    return l10n.hello + ' ' + user.getName;
}

module.exports = message;