const { EventEmitter } = require('events'); // TODO 1

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const myEmitter = new EventEmitter(); // TODO 2

myEmitter.on('birthday', birthdayEventListener); // TODO 3

myEmitter.emit('birthday', 'Farlan'); // TODO 4