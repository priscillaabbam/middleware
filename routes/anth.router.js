const { Router } = require("express");
const { login, register } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.use("/", (req, res, next) => {
  console.log("Auth Router"); 
  next();
});

authRouter.get("/login", login);
authRouter.get("/register", register);

module.exports = authRouter;
