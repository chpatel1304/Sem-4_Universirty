// Qb 141 write js scrpit to create two listners for a common call there respective callback print number of events associated with an emitter remove one of the listners and print number of remaining listners.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Define the callback functions
const callback1 = () => {
  console.log('Callback 1 executed');
};

const callback2 = () => {
  console.log('Callback 2 executed');
};

// Function to print the number of listeners for a specific event
function printListenerCount(event) {
  const listenerCount = emitter.listenerCount(event);
  console.log(`Number of listeners for ${event}: ${listenerCount}`);
}

// Add listeners to the emitter
emitter.on('event1', callback1);
emitter.on('event1', callback2);

// Print the number of listeners
printListenerCount('event1');

// Emit the event to trigger the callbacks
emitter.emit('event1');

// Remove one of the listeners
emitter.removeListener('event1', callback1);

// Print the number of remaining listeners
printListenerCount('event1');

// Emit the event again to see the remaining listener in action
emitter.emit('event1');
