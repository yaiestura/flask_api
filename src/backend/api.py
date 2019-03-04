from flask import Flask, jsonify, request, render_template, Response
from core import Core
from class_core import Core_Test
import json
import io
import os
import sys
import csv
import datetime
import rtsp

from utils.discovery import discovery
from utils.get_snapshot import save_snapshot

prod = True

if '--production' not in sys.argv:
    prod = False
    from flask_cors import CORS


app = Flask(__name__,
 static_folder = 'templates/build/static',
 template_folder="templates/build")

if not prod:
    CORS(app)

@app.route("/api/discovery", methods=['GET'])
def wsdiscovery():
    data = discovery()
    return jsonify(data)


@app.route("/api/core_test/<method_name>", methods=['GET'])
def core_test(method_name):
    if request.method == 'GET':
        ip = request.args.get('ip')
        port = int(request.args.get('port'))
        try:
            cam = Core_Test(ip, port, 'admin', 'Supervisor')
        except:
            return jsonify(error = "ONVIFError, " + method_name + " method does not respond. You may check VPN Connection")
        try:
            method = getattr(cam, method_name)
            return jsonify(response = method())
        except AttributeError:
            return jsonify(error = "Sorry, " + method_name + " method doesn't exist")
        except:
            return jsonify(error = "ONVIFError, " + method_name + " method does not respond. You may check VPN Connection")


@app.route("/api/core_test/load", methods=['GET'])
def core_load():
    with open('core.json', 'r') as f:
        data = json.load(f)
        print data
    print jsonify(data)
    return jsonify(data)


@app.route("/api/deviceinfo", methods=['GET'])
def deviceinfo():
    if request.method == 'GET':
        ip = request.args.get('ip')
        port = int(request.args.get('port'))
        cam = Core(ip, port, 'admin', 'Supervisor')
        response = cam.GetDeviceInformation()
        print(response)

        return jsonify(
            IP = ip,
            Port = port,
            Uri = save_snapshot(cam.GetSnapshotUri(), 'admin', 'Supervisor'),
            StreamUri = cam.GetStreamUri(),
            Manufacturer = response[0],
            Model = response[1],
            FirmwareVersion = response[2],
            SerialNumber = response[3],
            HardwareId = response[4]
        )


@app.route("/api/writecsv", methods=['GET'])
def writecsv():
    if request.method == 'GET':
        ip = request.args.get('ip')
        port = int(request.args.get('port'))
        cam = Core_Test(ip, port, 'admin', 'Supervisor')
        date = str(datetime.datetime.now())
        date = date.split('.')
        header = [['Device IP', ip], ['Test Performed', date[0]]]
        summary = [['Services', cam.DeviceCapabilities()]]
        reportn = os.getcwd() + '/reports/' + ip + '.csv'

        with open(reportn, 'w') as csvFile:
            writer = csv.writer(csvFile)
            writer.writerows(header)
            writer.writerows(summary)
            writer.writerows(
                [
                    ['GetCapabilities', cam.GetCapabilities()], 
                    ['GetDiscoveryMode', cam.GetDiscoveryMode()], 
                    ['SetDiscoveryMode', cam.SetDiscoveryMode()], 
                    ['GetScopes', cam.GetScopes()], 
                    ['AddScopes', cam.AddScopes()], 
                    ['RemoveScopes', cam.RemoveScopes()], 
                    ['GetHostname', cam.GetHostname()], 
                    ['SetHostname', cam.SetHostname()], 
                    ['GetNetworkInterfaces', cam.GetNetworkInterfaces()], 
                    ['GetDNS', cam.GetDNS()], 
                    ['GetNetworkProtocols', cam.GetNetworkProtocols()], 
                    ['GetNetworkDefaultGateway', cam.GetNetworkDefaultGateway()], 
                    ['SetNetworkDefaultGateway', cam.SetNetworkDefaultGateway()], 
                    ['GetDeviceInformation', cam.GetDeviceInformation()], 
                    ['GetUsers', cam.GetUsers()], 
                    ['DeleteUsers', cam.DeleteUsers()], 
                    ['GetNTP', cam.GetNTP()], 
                    ['GetServices', cam.GetServices()], 
                    ['GetSystemDateAndTime', cam.GetSystemDateAndTime()], 
                    ['GetSystemUris', cam.GetSystemUris()]
                ])

        return "POSTED_CSV"


@app.route("/api/snapshoturi", methods=['GET', 'POST'])
def snapshoturi():
    if request.method == 'GET':
        ip = request.args.get('ip')
        port = int(request.args.get('port'))
        cam = Core(ip, port, 'admin', 'Supervisor')
        return jsonify(Uri = cam.GetSnapshotUri())


@app.route("/snapshots/<path:path>")
def get_public_snapshot_url(path):
    return send_from_directory('snapshots', path)

def gen(url):
    client = rtsp.Client(rtsp_server_uri=url)

    while True:
        if client.read() is None:
            continue
            
        img = client.read().resize((640, 480))
        imgByteArr = io.BytesIO()
        img.save(imgByteArr, format='jpeg')
        b_img = imgByteArr.getvalue()

        yield (b'--frame\r\n' +
               b'Content-Type: image/jpeg\r\n\r\n' + b_img + b'\r\n')
    else:
        client.close()


@app.route("/api/livestream", methods=['GET'])
def get_livestream():
    url = 'rtsp://admin:Supervisor@192.168.15.42:554/Streaming/Channels/101?transportmode=unicast&profile=Profile_1'
    #ip = request.args.get('ip')
    #port = int(request.args.get('port'))
    #cam = Core(ip, port, 'admin', 'Supervisor')
    #url = cam.GetStreamUri()
    return Response(gen(url),
            mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

if __name__ == '__main__':
    if '--dev' not in sys.argv:
        print "Please use uWSGI instead of dev server or run this script with --dev flag"
    else:
        app.run('10.0.3.234', 5000, debug=True)
