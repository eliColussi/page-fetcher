const fs = require("fs");
const request = require("request");

const input = process.argv.slice(2);
const url = input[0];
const fileName = input[1];

  request (url, (error, body, response) => {
    if (error) {
      console.log(error);
      return;
    }
    fs.stat("example_file.txt", (error, stats) => {
      if (error) {
        console.log(error);
      }
fs.writeFile(fileName, body, err => {
  if (err) {
    console.log(response);
    return;
  } 
  console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`)
});
  });
    });
