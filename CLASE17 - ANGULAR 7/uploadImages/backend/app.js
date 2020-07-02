var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const futbolistasRouter = require("./routes/futbolistas");
var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

secured = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const publicKey = fs.readFileSync("utils/keys/publica.pem");
    const decoded = jwt.verify(token, publicKey);
    req.id = decoded.id;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", secured, adminRouter);
app.use("/auth", authRouter);
app.use("/futbolistas", futbolistasRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
