const mongoose = require("mongoose");

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Ngo Le Thanh",
    description: "SE",
    slogan: "Hello new day| I'm Thanh",
  })

    .then((dish) => {
      console.log(dish);

      return Dishes.find({});
    })
    .then((dishes) => {
      console.log(dishes);

      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
