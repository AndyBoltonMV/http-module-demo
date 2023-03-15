module.exports = {
  "/user": {
    POST: require("./controllers").addUser,
  },
  "/users": {
    GET: require("./controllers").findAllUsers,
  },
};
