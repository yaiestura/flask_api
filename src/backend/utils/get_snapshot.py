import urllib2
import base64
import re
import os


NO_SNAPSHOT_URL = 'http://www.inspiredbydrive.com/wp-content/uploads/2016/12/no-image.png'

def get_base64_snapshot(url, username, password):
    encoded_snapshot = NO_SNAPSHOT_URL
    image = fetch_snapshot(url, username, password)
    if image is not None:
        encoded_snapshot = 'data:image/jpeg;base64,' + base64.b64encode(image)
    else:
        print 'Camera returned empty snapshot'
        return ''


def fetch_snapshot(url, username, password):
    image = None
    try:
        request = urllib2.Request(url)
        base64string = base64.b64encode('%s:%s' % (username, password))
        request.add_header("Authorization", "Basic %s" % base64string)   
        result = urllib2.urlopen(request)
        image = result.read()
    except Exception as e:
        print 'utils:fetch_snapshot error: %s' % e
    return image


def save_snapshot(url, username, password):
    image = fetch_snapshot(url, username, password)
    snapshot_url = NO_SNAPSHOT_URL
    path = './src/backend/templates/build/static/snapshots'
    if not os.path.isdir(path):
        os.makedirs(path)

    if image is not None:
        res = re.findall(r'\d+\.\d+\.\d+\.\d+|(?<=:)\d+', url)
        ip, port = res if len(res) == 2 else res[0], '80'
        with open('%s/%s:%s.jpg' % (path, str(ip), str(port)) , 'wb') as i:
            t.write(image)
        snapshot_url = '/snapshots/%s:%s.jpg' % (str(ip), str(port))
    return snapshot_url

