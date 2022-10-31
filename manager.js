'use strict';

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');
const { tookoffFlight} = require('./pilot');
const event = require('./events');


setInterval(() => {
  let fDetails = {
    id: uuidv4(),
    pilot: faker.name.fullName(),
    destination: faker.address.country(),
    time: faker.date.future()
  }
  event.emit('newFlight', fDetails);
  tookoffFlight(fDetails);
  event.once('arrived', () => {    
    console.log(`Manager: welcome home , ${fDetails.pilot}!`);
  })
}, 10000);