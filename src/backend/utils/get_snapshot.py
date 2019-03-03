import urllib2
import base64
import re
import os
import rtsp
import io


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
    if url is None:
        return image

    if 'rtsp' in uri:
        image = fetch_snapshot_from_stream(url, username, password)
    else:
        try:
            request = urllib2.Request(url)
            base64string = base64.b64encode('%s:%s' % (username, password))
            request.add_header("Authorization", "Basic %s" % base64string)   
            result = urllib2.urlopen(request)
            image = result.read()
        except Exception as e:
            print 'utils:fetch_snapshot error: %s' % e

    return image


def fetch_snapshot_from_stream(url, username, password):
    image = None

    try:
        if not (username in url and password in url):
            url = url[:7] + username + ':' + password + "@" + url[7:]

        client = rtsp.Client(rtsp_server_uri=url)
        image = client.read()

        imgByteArr = io.BytesIO()
        image.save(imgByteArr, format='jpeg')
        image = imgByteArr.getvalue()

        client.close()

    except Exception as e:
        print('Unable to get snapshot from stream: ', e)
        pass

    return image


def save_snapshot(url, username, password):
    image = None

    image = fetch_snapshot(url, username, password)

    
    snapshot_url = NO_SNAPSHOT_URL
    path = './src/backend/templates/build/static/snapshots'
    if not os.path.isdir(path):
        os.makedirs(path)

    if image is not None:
        res = re.findall(r'\d+\.\d+\.\d+\.\d+|(?<=:)\d+', url)
        ip, port = res if len(res) == 2 else (res[0], '80')
        image_path = '%s/%s:%s.jpg' % (path, str(ip), str(port))
        if os.path.exists(image_path):
            os.remove(image_path)
        with open(image_path, 'wb') as i:
            i.write(image)
        snapshot_url = '/static/snapshots/%s:%s.jpg' % (str(ip), str(port))
    return snapshot_url

