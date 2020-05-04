const dotenv = require("dotenv");
const mongoose = require("mongoose");

const express = require("express");

app = express();

// middelware-------------------
app.use(express.json());

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_CONNEXION.replace(
  "<PASSWORD>",
  process.env.PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(" database connected"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is listening in port ${port}`));
