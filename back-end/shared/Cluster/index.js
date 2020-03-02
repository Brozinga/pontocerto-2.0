const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
module.exports = (callback, NumberOfCPUs = 0, enable = false) => {
  let CPUs = numCPUs;

  if (NumberOfCPUs) CPUs = NumberOfCPUs;

  if (enable) {
    if (cluster.isMaster) {
      for (var i = 0; i < CPUs; i += 1) {
        cluster.fork();
      }
    } else {
      callback();
    }
  } else {
    callback();
  }
};
