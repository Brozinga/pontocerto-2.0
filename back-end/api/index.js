"use strict";

const app = require("./bin/server");

const server = require("http").Server(app);

server.listen(process.env.PORT, () => {
  console.log(
    "\x1b[32m%s\x1b[0m",
    `\nAPI rodando na porta: ${process.env.PORT} no ambiente: ${process.env.NODE_ENV}\n`
  );
});
