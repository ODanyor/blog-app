const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("colors");

// Uses
app.use(cors());
app.use(express.json());

// Database
const database = require("./config/keys").mongoURI;
const statusMSG = "Connection to the database: ";
mongoose
  .connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(statusMSG + "SUCCESS".bgGreen.brightWhite))
  .catch((err) => {
    console.log(statusMSG + "FAIL".bgRed.brightWhite);
    console.log({ error: err });
  });

// API objects
const user = require("./routes/api/user");

// Routes
app.use("/api/user", user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("Server is listening to PORT: " + `${PORT}`.bgYellow.brightWhite)
);
