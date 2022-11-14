'use strict';
// const events = require( './events.js' );
//  require('../system.js');
//  require('../Manager/manager.js');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000');
const socketAirline = io.connect('http://localhost:4000/airline');

socket.on('new-flight', handleNewFlight);

function handleNewFlight(info) {
  setInterval(() => {
    console.log(`Pilot: flight with ID'${info.flightID}' took-off`);
    socketAirline.emit('took-off', info);
  }, 4000);
  setInterval(() => {
    console.log(`Pilot: flight with ID'${info.flightID}' arrived`);
    socket.emit('arrived', info);
  }, 7000);
}
