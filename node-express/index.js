const express = require("express"),
  http = require("http");
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const authorRouter = require('./routes/authorRouter');
const booksRouter = require('./routes/booksRouter');
const genresRouter = require('./routes/genresRouter');
app.use('/author', authorRouter);
app.use('/book', booksRouter);
app.use('/genre', genresRouter);
// authorRouter
//  app.use(bodyParser.json());
//  app.use('/author', authorRouter);
//  app.all('/author', (req,res,next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    next();
//  });
 
//  app.get('/author', (req,res,next) => {
//      res.end('Will send all the author to you!');
//  });
 
//  app.post('/author', (req, res, next) => {
//   res.end('Will add the author: ' + req.body.name + ' with details: ' + req.body.description);
//  });
 
//  app.put('/author', (req, res, next) => {
//    res.statusCode = 403;
//    res.end('PUT operation not supported on /author');
//  });
  
//  app.delete('/author', (req, res, next) => {
//      res.end('Deleting all author');
//  });
 
//  app.get('/author/:authorId', (req,res,next) => {
//      res.end('Will send details of the author: ' + req.params.dishId +' to you!');
//  });
 
// app.post('/author/:authorId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /author/'+ req.params.dishId);
// });

// app.put('/author/:authorId', (req, res, next) => {
//   res.write('Updating the author: ' + req.params.dishId + '\n');
//   res.end('Will update the author: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/author/:authorId', (req, res, next) => {
//     res.end('Deleting author: ' + req.params.dishId);
// });


// //booksRouter
// app.use(bodyParser.json());
//  app.use('/book', booksRouter);
//  app.all('/book', (req,res,next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    next();
//  });
 
//  app.get('/book', (req,res,next) => {
//      res.end('Will send all the book to you!');
//  });
 
//  app.post('/book', (req, res, next) => {
//   res.end('Will add the book: ' + req.body.name + ' with details: ' + req.body.description);
//  });
 
//  app.put('/book', (req, res, next) => {
//    res.statusCode = 403;
//    res.end('PUT operation not supported on /book');
//  });
  
//  app.delete('/book', (req, res, next) => {
//      res.end('Deleting all book');
//  });
 
//  app.get('/book/:booksId', (req,res,next) => {
//      res.end('Will send details of the book: ' + req.params.dishId +' to you!');
//  });
 
// app.post('/book/:booksId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /book/'+ req.params.dishId);
// });

// app.put('/book/:booksId', (req, res, next) => {
//   res.write('Updating the book: ' + req.params.dishId + '\n');
//   res.end('Will update the book: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/book/:booksId', (req, res, next) => {
//     res.end('Deleting book: ' + req.params.dishId);
// });

// //genresRouter
// app.use(bodyParser.json());
//  app.use('/genre', genresRouter);
//  app.all('/genre', (req,res,next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    next();
//  });
 
//  app.get('/genre', (req,res,next) => {
//      res.end('Will send all the genre to you!');
//  });
 
//  app.post('/genre', (req, res, next) => {
//   res.end('Will add the genre: ' + req.body.name + ' with details: ' + req.body.description);
//  });
 
//  app.put('/genre', (req, res, next) => {
//    res.statusCode = 403;
//    res.end('PUT operation not supported on /genre');
//  });
  
//  app.delete('/genre', (req, res, next) => {
//      res.end('Deleting all genre');
//  });
 
//  app.get('/genre/:genresId', (req,res,next) => {
//      res.end('Will send details of the genre: ' + req.params.dishId +' to you!');
//  });
 
// app.post('/genre/:genresId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /genre/'+ req.params.dishId);
// });

// app.put('/genre/:genresId', (req, res, next) => {
//   res.write('Updating the genre: ' + req.params.dishId + '\n');
//   res.end('Will update the genre: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// });

// app.delete('/genre/:genresId', (req, res, next) => {
//     res.end('Deleting genre: ' + req.params.dishId);
// });



// app.use(morgan("dev"));
// app.use(express.static(__dirname + "/public"));
// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<html><body><h1>This is an Express Server</h1></body></html>");
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});
  