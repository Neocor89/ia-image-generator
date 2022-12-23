const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

//: Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//: static Data
app.use(express.static(path.join(__dirname, "public")));

app.use("/openia", require("./routes/openiaRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
