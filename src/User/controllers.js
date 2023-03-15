const User = require("./model");

exports.addUser = async function (req, resCode, resObj) {
  try {
    let body;
    req.on("data", (chunk) => (body = JSON.parse(chunk)));
    req.on("end", async () => (resObj.user = await User.create(body)));
    resCode = 201;
  } catch (error) {
    resCode = 500;
    resObj = { err: error.message };
  }
};

exports.findAllUsers = async function (req, resCode, resObj) {
  try {
    resObj.users = await User.findAll();
    resCode = 200;
  } catch (error) {
    resCode = 500;
    resObj = { err: error.message };
  }
};
