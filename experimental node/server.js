var log = require('logger')(module);
var user = require('./user');
var db = require('db');
// db.connect();
function run(){
var vasya = new user('Вася');
var petya = new user('Петя');

vasya.hello(petya);
log(db.getPhrase('Run sucsessful'));
}
if(module.parent) {
    exports.run = run;
} else {
    run();
}
//module.exports = exports = this