'use strict';

const Event = require('events');
const { createFlight } = require('./system');
const event = new Event();


event.on('new-flight', (details) => {
  console.log(` Manager : new flight with ID ${details.id} have been scheduled`);
});

event.on('took-off', (details) => {
  console.log(`Pilot : flight with ID ${details.id} took-off`);
});

event.on('arrived', (details) => {
  console.log(`Pilot : flight with ID ${details.id} has arrived`);
  createFlight(details, 'arrived');
});


module.exports = event;