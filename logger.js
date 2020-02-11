const EventEmmiter = require('events');

const uuid = require('uuid');

class Logger extends EventEmmiter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

// const Person = require('./person');
//
// const person1 = new Person("antony cheche",30);
//
// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();


logger.on('message',(data) => console.log(`Called Listener`, data));
logger.log("Hello World");

// module.exports = Logger;