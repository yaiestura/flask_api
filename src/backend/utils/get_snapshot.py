import urllib

def get_snapshot(url, username, password):
    encoded_snapshot = ''

    try:
        snapshot = urllib.request.urlopen(cam.GetSnapshotUri()).read()
        encoded_snapshot = base64.b64encode(snapshot)
    except IOError:

        password_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()

        # Add the username and password.
        # If we knew the realm, we could use it instead of None.
        password_mgr.add_password(None, url, username, password)

        handler = urllib.request.HTTPBasicAuthHandler(password_mgr)

        # create "opener" (OpenerDirector instance)
        opener = urllib.request.build_opener(handler)

        # use the opener to fetch a URL
        opener.open(url)

        # Install the opener.
        # Now all calls to urllib.request.urlopen use our opener.
        urllib.request.install_opener(opener)
        snapshot = urllib.request.urlopen(cam.GetSnapshotUri()).read()
        encoded_snapshot = base64.b64encode(snapshot)

    return 'data:image/jpeg;base64,'+encoded_snapshot
