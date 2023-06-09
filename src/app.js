const http = require("http");
const endpoints = require("./User");

const server = http.createServer(async (req, res) => {
  const resObj = {};
  let resCode = 200;
  if (endpoints[req.url][req.method]) {
    await endpoints[req.url][req.method](req, resCode, resObj);
    res.writeHead(resCode, { "Content-Type": "application/json" });
  } else {
    resObj.msg = "Not Found";
    res.writeHead(404, { "Content-Type": "application/json" });
  }
  res.end(JSON.stringify(resObj));
});

module.exports = server;
