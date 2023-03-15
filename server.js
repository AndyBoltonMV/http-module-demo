const server = require("./src/app");
const { db } = require("./config/db");

server.listen(5001, async () => {
  await db.sync();
});
