const mongoose = require("mongoose");

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Beef Steak 3",
    description: "Medium raw 3",
    slogan: "Ngon lam dung dua 3",
  })

    .then((dish) => {
      console.log(dish);

      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: { description: "Updated Ngon lam dung dua 3" },
        },
        {
          new: true,
        }
      ).exec();
    })
    .then((dish) => {
      console.log(dish);

      dish.comments.push({
        rating: 5,
        comment: "Ngon vai lon!",
        author: "Em tien ngu",
      });

      return dish.save();
    })
    .then((dish) => {
      console.log(dish);

      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
