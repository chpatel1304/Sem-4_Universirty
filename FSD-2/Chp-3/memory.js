// Describe a Node.js script designed to monitor system memory usage and emit a custom event when the memory usage exceeds a specified threshold. Explain the steps involved in monitoring system memory usage, triggering the event, and handling the event. Additionally, discuss how the script ensures that memory monitoring stops after a certain duration. Lastly, propose potential improvements to the script, such as error handling or efficiency enhancements.
const os = require('os');
const EventEmitter = require('events');

class MemoryMonitor extends EventEmitter {}
const memoryMonitor = new MemoryMonitor();

const threshold = 0.8; // 80% memory usage
const checkInterval = 1000; // Check every second
const monitoringDuration = 60000; // Monitor for 1 minute

memoryMonitor.on('memoryHigh', (usage) => {
    console.log(`High memory usage detected: ${(usage * 100).toFixed(2)}%`);
});

function checkMemoryUsage() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const usagePercentage = usedMemory / totalMemory;

    if (usagePercentage > threshold) {
        memoryMonitor.emit('memoryHigh', usagePercentage);
    }
}

let monitoringInterval = setInterval(checkMemoryUsage, checkInterval);

setTimeout(() => {
    clearInterval(monitoringInterval);
    console.log('Stopped monitoring memory usage.');
}, monitoringDuration);
