const express = require("express");
const bodyParser = require("body-parser");
const booksRouter = express.Router();

booksRouter.use(bodyParser.json());

booksRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the books to Thanh!");
  })
  .post((req, res, next) => {
    res.end(
      "isbn: " +
        req.body.isbn +
        " title: " +
        req.body.title +
        "subTitle" +
        req.body.subTitle +
        "publish_date" +
        req.body.publish_date +
        "publisher" +
        req.body.publisher +
        "pages" +
        req.body.pages +
        "description" +
        req.body.description +
        "website" +
        req.body.website
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /books");
  })
  .delete((req, res, next) => {
    res.end("Deleting all books");
  });

booksRouter
  .route("/:bookId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send details of the book: " + req.params.bookId + " to you!");
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /books/" + req.params.bookId);
  })
  .put((req, res, next) => {
    res.write("Updating the book: " + req.params.bookId + "\n");
    res.end(
      "Will update the book: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting book: " + req.params.bookId);
  });

module.exports = booksRouter;