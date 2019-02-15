const onvif = require("node-onvif");
var fs = require("fs");

onvif.startProbe().then((devices) => {
  //let mapped = devices.map(info => info.xaddrs[0]);
  //console.log(mapped);
  json = { ...devices.map(info => info.xaddrs[0].replace('http://','').replace('/onvif/device_service',''))};
  console.log(json);
  fs.writeFile("./test.json", JSON.stringify(json), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
});
