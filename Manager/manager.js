'use strict';

//const events = require('./events.js');
// require('./system.js');
// require('./pilot.js');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

setInterval(() => {
  const info = {
    airline: 'Jordan Royal Airlines',
    flightID: uuidv4(),
    pilot: faker.name.fullName(),
    destination: `${faker.address.cityName(), faker.address.country()}`,
  };
  console.log(`Manager: new flight with ID '${info.flightID}'have been scheduled`);
  socket.emit('new-flight', info);
}, 10000);

socket.on('arrived', (info) => { console.log(`Manager: we\’re greatly thankful for the amazing flight, ${info.pilot}`) });