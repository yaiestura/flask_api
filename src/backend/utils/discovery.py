from wsdiscovery import WSDiscovery
import re

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
        #Exclude devices on local Server Network
        if cam['ip'] != '10.0.3.229':
            cameras.append(cam)

    wsd.stop()
    #Sort cameras
    cameras = sorted(cameras, key=lambda x: (len(x), x['ip']))
    print cameras
    return cameras
