from wsdiscovery import WSDiscovery
import re

# need to exclude two cameras .13 and .0
def discovery():
    cameras = []

    wsd = WSDiscovery()
    wsd.start()
    ret = wsd.searchServices()

    for index, service in enumerate(ret):
        address = service.getXAddrs()[0]

        if 'onvif' not in address:
            continue

        res = re.findall(r'\d+\.\d+\.\d+\.\d+|(?<=:)\d+', address)
        cam = {
            'id': index+1,
            'ip': res[0],
            'port': res[1] if len(res) > 1 else '80',
        }
        cameras.append(cam)

    wsd.stop()
    print cameras
    return cameras
