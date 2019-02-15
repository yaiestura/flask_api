const onvif = require("node-onvif");
var fs = require("fs");

onvif.startProbe().then((devices) => {
  let mapped = devices.map(info => info.xaddrs[0]);
  var json = [];
  mapped.map((it, id) => json.push({id: id, ip: it.replace('http://','')
  .replace('/onvif/device_service','').split(':')[0],
  port: typeof(it.replace('http://','').replace('/onvif/device_service','').split(':')[1]) !== 'undefined' ? it.replace('http://','').replace('/onvif/device_service','').split(':')[1] : '80'}));
  console.log(json);
  fs.writeFile("./devices.json", JSON.stringify(json), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
});
