const express = require("express");
const bodyParser = require("body-parser");
const genresRouter = express.Router();

genresRouter.use(bodyParser.json());

genresRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the genre to you!");
  })
  .post((req, res, next) => {
    res.end("id:" + req.body.id + "name:" + req.body.name);
    
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /genre");
  })
  .delete((req, res, next) => {
    res.end("Deleting all genre");
  });

genresRouter
  .route("/:genreId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "Will send details of the genre: " + req.params.genreId + " to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /genre/" + req.params.genreId);
  })
  .put((req, res, next) => {
    res.write("Updating the genre: " + req.params.genreId + "\n");
    res.end(
      "Will update the genre: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting genre: " + req.params.genreId);
  });
module.exports = genresRouter;