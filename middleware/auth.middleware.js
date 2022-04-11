const authRequire = (req, res, next) => {
  const body = req.body;

  if (body.username !== "Priscilla" || body.password !== "secret") {
    res.send("<h1>Invalid credential</h1>");
  }

  next();
};

module.exports = {
  authRequire,
};
