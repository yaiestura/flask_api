import urllib2
import base64


def get_snapshot(url, username, password):
    try:
        request = urllib2.Request(url)
        base64string = base64.b64encode('%s:%s' % (username, password))
        request.add_header("Authorization", "Basic %s" % base64string)   
        result = urllib2.urlopen(request)
        encoded_snapshot = base64.b64encode(result.read())
        return 'data:image/jpeg;base64,'+encoded_snapshot
    except Exception as e:
        print 'Get snapshot error: %s' % e
        return ''
