const express = require("express");
require("dotenv").config(); // dotenv
const path = require("path");
const morgan = require("morgan");
const connect = require("./schemas");
const router = require("./routes");
const cors = require("cors");

const app = express();
// port settings
app.set("port", process.env.PORT);

// db connection
connect();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// router connection
router(app);

// general error handling
app.use((error, req, res, next) => {
  const { statusCode, message } = error;
  const status = statusCode || 500;
  error.statusCode = statusCode || 500;
  console.log(error);
  res.status(status).json({ message });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
