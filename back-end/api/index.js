"use strict";

const clusterMode = require("../shared/Cluster");
const serverHttp2 = require("./middlewares/Http2");
const app = require("./bin/server");

const Runing = async () => {
  serverHttp2(app, process.env.PORT, async () => {
    console.log(
      `\x1b[35mAPI RUNNING - PORT: \x1b[37m${process.env
        .PORT} \x1b[35mIN ENVIRONMENT: \x1b[37m${process.env.NODE_ENV.toLocaleUpperCase()}\x1b[0m`
    );
    //DRAW TEXT ASCII TO CONSOLE
    console.log(`
 █████╗ ██████╗ ██╗    ███╗   ██╗ ██████╗ ██████╗ ███████╗        ██╗███████╗    ██████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██║    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝        ██║██╔════╝    ██╔══██╗██╔══██╗██╔══██╗
███████║██████╔╝██║    ██╔██╗ ██║██║   ██║██║  ██║█████╗          ██║███████╗    ██║  ██║██║  ██║██║  ██║
██╔══██║██╔═══╝ ██║    ██║╚██╗██║██║   ██║██║  ██║██╔══╝     ██   ██║╚════██║    ██║  ██║██║  ██║██║  ██║
██║  ██║██║     ██║    ██║ ╚████║╚██████╔╝██████╔╝███████╗██╗╚█████╔╝███████║    ██████╔╝██████╔╝██████╔╝
╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝ ╚════╝ ╚══════╝    ╚═════╝ ╚═════╝ ╚═════╝ 
`);
  });
};

clusterMode(Runing, process.env.CLUSTER_SIZE, process.env.CLUSTER_MODE);
