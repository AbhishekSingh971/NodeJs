const EventEmitter = require('events');
const event = new EventEmitter();
// or
// const event = require('events');

event.on(checkPage, (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit('checkPage', 200, 'ok');