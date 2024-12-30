const express = require('express');
const app = express();

const path = require('path')

// const myLogger = (req, res, next) => {
//   console.log('middleware log 1');
//   next();
// };

// const myLogger2 = (req, res, next) => {
//   console.log('middleware log 2');
//   next();
// };

//Middlewares
app.use(express.static('public')); // static dosyalara erişim
// app.use(myLogger);
// app.use(myLogger2);


app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname,'temp/index.html'))
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
