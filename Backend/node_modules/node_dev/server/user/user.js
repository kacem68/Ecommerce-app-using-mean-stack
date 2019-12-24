'use strict';

function User(name) {
    this.name = name;
}

Object.defineProperty(User.prototype, 'getName', {
    get: function() {
        return this.name;
    }
});

Object.defineProperty(User.prototype, 'setName', {
    set: function(name) {
        return this.name = name;
    }
});

module.exports = User;
