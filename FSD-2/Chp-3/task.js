// Write a NodeJS code to calculate and display the profit or loss incurred by an investor   who purchased 100 shares of a company's stock at Rs.50 per share and later sold them at Rs.60 per share. The script should utilize the HTTP module to create an HTTP server that serves the profit or loss details. If there is a profit, the message should be displayed in green color, and if there is a loss, it should be displayed in red color on server.
const http = require('http');

const purchasePrice = 50; // Purchase price per share in Rs.
const sellingPrice = 40; // Selling price per share in Rs.
const numberOfShares = 100; // Number of shares

const investment = purchasePrice * numberOfShares;
const returnAmount = sellingPrice * numberOfShares;
const profitOrLoss = returnAmount - investment;

const profitOrLossMessage = profitOrLoss >= 0
  ? `<span style="color:green">Profit: Rs.${profitOrLoss}</span>`
  : `<span style="color:red">Loss: Rs.${Math.abs(profitOrLoss)}</span>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<html><body><h1>Investment Result</h1><p>${profitOrLossMessage}</p></body></html>`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
