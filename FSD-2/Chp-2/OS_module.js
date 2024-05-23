const http = require('http');
const fs = require('fs');
const url = require('url');
// import chalk from "chalk";

// Parse the URL
const inputUrl = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
const parsedUrl = new URL(inputUrl);

const c1 = parsedUrl.searchParams.get('c1');
const c2 = parsedUrl.searchParams.get('c2').replace(/\+/g, ' ');
const c3 = parsedUrl.searchParams.get('c3').replace(/\+/g, ' ');
const fragment = parsedUrl.hash;

// Create the output string
const output = `${c1}!\n${c3} ${c2}\n${fragment}`;

// Write to the file exam.txt
const fileName = 'exam.txt';
fs.writeFileSync(fileName, output, 'utf8');

// Set up the HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Read content from file
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            // Send response with data in H1 tags and red color
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head>
                        <style>
                            h1 { color: red; }
                        </style>
                    </head>
                    <body>
                        ${data.split('\n').map(line => `<h1>${line}</h1>`).join('')}
                    </body>
                </html>
            `);
        });
    } else {
        // Handle other paths
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
