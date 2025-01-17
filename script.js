// sample-node-script.js

// Import the required modules
const fs = require('fs');
const os = require('os');
const path = require('path');

// Function to print system information
function printSystemInfo() {
  console.log('System Information:');
  console.log(`OS: ${os.type()} ${os.release()}`);
  console.log(`CPU: ${os.cpus()[0].model}`);
  console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB\n`);
}

// Function to create and write to a sample file
function createSampleFile() {
  const filePath = path.join(__dirname, 'sample.txt');
  const content = 'This is a sample Node.js script.\nHello, world!';

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`File created at ${filePath}`);
    }
  });
}

// Function to read the sample file
function readSampleFile() {
  const filePath = path.join(__dirname, 'sample.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File Content:');
      console.log(data);
    }
  });
}

// Main function
function main() {
  console.log('Running sample Node.js script...\n');

  // Print system info
  printSystemInfo();

  // Create a sample file
  createSampleFile();

  // Read the sample file after a short delay
  setTimeout(() => {
    readSampleFile();
  }, 1000);
}

// Run the main function
main();
