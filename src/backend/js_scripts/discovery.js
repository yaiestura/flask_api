const onvif = require("node-onvif");
const fs    = require("fs");

function parseIpPort(s) {
  let port = s.match(/(?<=:)\d+/)[0];
  let ip   = s.match(/(\d+\.){3}\d+/)[0];
  port = port == null ? 80 : port;
  return { ip: ip, port: port };
}

function parseDevice(it, id) {
  return { id: id, ...parseIpPort(it) }
}

onvif.startProbe().then((devices) => {
  let mapped = devices.map(info => info.xaddrs[0]);
  let json = mapped.map(parseDevice);
  console.log(json);

  fs.writeFile(
    "./devices.json", 
    JSON.stringify(json), 
    err => err ? console.log(err) : console.log("File has been created")
  )
});
