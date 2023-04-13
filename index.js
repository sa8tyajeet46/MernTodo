const app = require("./app");
const connectDatabase = require("./connectDeatabase");
require("dotenv").config({ path: "./config/config.env" });

//
connectDatabase();
process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(1);
});
const server = app.listen(process.env.PORT, () => {
  console.log(`app is running at port ${process.env.PORT}`);
});
