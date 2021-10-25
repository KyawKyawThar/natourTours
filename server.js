const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection Successful"));

const port = 3000;

console.log(app.get("env"));

app.listen(port || process.env.PORT, () => {
  console.log(`App is listening on ${port}`);
});
