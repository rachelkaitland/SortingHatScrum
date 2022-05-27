//modules
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
//const spells = requre('spells') 

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipHat = Math.ceil(Math.random() * 4)
        let house 
        let imgUrl
        if (flipHat === 1) {
          house = 'Gryffindor'
          imgUrl = 'https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SL1200_.jpg'
        } else if (flipHat === 2) {
          house = 'Ravenclaw'
          imgUrl = 'https://i.pinimg.com/736x/7f/d2/73/7fd273912c5104ca81124464b8f73937.jpg'
        } else if (flipHat === 3) {
          house = 'Hufflepuff' 
          imgUrl = 'https://m.media-amazon.com/images/I/71SHyMkX6gL._AC_SL1200_.jpg'
        } else {
          house = 'Slytherin'
          imgUrl = 'https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg'
        }
        const objToJson = {
          house: house,
          imgUrl: imgUrl
        }
        res.end(JSON.stringify(objToJson));
      }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
