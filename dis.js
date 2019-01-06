const onvif = require('node-onvif');

onvif.startProbe().then((device_info_list) => {
    device_info_list.forEach((info) => {
    console.log(info.xaddrs[0]);
  });
}).catch((error) => {
  console.error(error);
});
