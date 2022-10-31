'use strict';

const event = require('./events');

function createFlight(details,eventname) {
  console.log(
    {
      event: eventname,
      time: new Date(),
      Details: {
        airLine: 'saudi airlines',
        flightID: details.id,
        pilot: details.pilot,
        destination: details.destination,
      }
    }
  )
}
module.exports = { createFlight };