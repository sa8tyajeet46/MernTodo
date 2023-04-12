const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB).then(() => {
    console.log(`Database is running`);
  });
};

module.exports = connectDatabase;
