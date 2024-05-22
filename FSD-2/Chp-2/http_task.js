const http = require('http');

// Define the JSON objects
const objects = {
    object1: { id: 1, name: 'Object One', description: 'This is the first object' },
    object2: { id: 2, name: 'Object Two', description: 'This is the second object' },
    object3: { id: 3, name: 'Object Three', description: 'This is the third object' }
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Extract the path from the request URL
    const path = req.url.slice(1); // Remove the leading '/'

    // Check if the path corresponds to one of the JSON objects
    if (objects[path]) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(objects[path]));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json' });
        res.write(JSON.stringify({ error: 'Object not found' }));
    }

    // End the response
    res.end();
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('Try accessing: /object1, /object2, or /object3');
});
