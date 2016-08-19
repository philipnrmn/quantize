function ctom(chronosConfig) {
  return {
    id: chronosConfig.name,
    description: chronosConfig.description,
    run: {
      cmd: chronosConfig.command,
      cpus: chronosConfig.cpus,
      mem: chronosConfig.mem,
      disk: chronosConfig.disk
    }
  };
}

function  mtoc() {}

module.exports = {ctom, mtoc};
