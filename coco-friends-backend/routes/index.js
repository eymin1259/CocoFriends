const postRouter = require("./postRouter");
const addressRouter = require("./addressRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

const router = function (app) {
  app.use("/posts", postRouter);
  app.use("/addr", addressRouter);
  app.use("/user", userRouter);
  app.use("/auth", authRouter);
};

module.exports = router;
