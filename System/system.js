'use strict';

// const events = require('./events.js');
// require('./Manager/manager.js');
// require('./pilot.js');

const io = require('socket.io')(4000);

io.on('connection', (socket)=>{

socket.on('new-flight',handleNewFlight);

function handleNewFlight(info){ 
  io.emit('new-flight',info);
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
           }
         }`    );
       
        }


         socket.on('took-off',handleTookOff);
         
function handleTookOff(info){
  io.emit('took-off',info);
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
          }
        }`    );
      
      }


        socket.on('arrived',handleArrived);
       
function handleArrived(info){
  io.emit('arrived',info);
    console.log(
        `Flight {
            event:'new-flight',
            time: ${new Date().toLocaleString()},
            Details: {
            airline:'${info.airline}',
            flightID:'${info.flightID}',
            pilot:'${info.pilot}',
            destination:'${info.destination}',
          }
        }`    )
         
        ;}

})