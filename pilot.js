'use strict';

const event = require('./events');


function tookoffFlight(fDetails) {
  setTimeout(() => {
    event.emit('took-off', fDetails);
  }, 4000);
  arrived(fDetails);
}

function arrived(plane) {
  setTimeout(() => {
    event.emit('arrived', plane);
  }, 7000);
}


module.exports = { tookoffFlight };