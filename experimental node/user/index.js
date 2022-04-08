var db = require('db');
var log = require('logger')(module);
db.connect();
let phrases = require('db/ru.json');


function user (name) {
    this.name = name;
}

user.prototype.hello = function (who) {
    console.log(db.getPhrase('hello') + who.name);


};
// console.log(module);
module.exports = user;
// global.user = user;