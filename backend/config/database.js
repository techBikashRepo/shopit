const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB database connected with HOST: ${con.connection.host}`
      );
    });
};

//Testing

module.exports = connectDatabase;
