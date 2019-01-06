import logging
from flask import Flask, jsonify
from core import Core

app = Flask(__name__)

@app.route("/api/snapshoturi", methods=['GET'])
def discovery:
    return 'List of Devices'

@app.route("/api/init", methods=['GET'])
def init():
    return 'Initialize Camera'   

@app.route("/api/deviceinfo", methods=['GET'])
def deviceinfo():
    cam = Core('192.168.11.42', 80, 'admin', 'Supervisor')
    response = cam.GetDeviceInformation()  
    return jsonify(Manufacturer = response[0],
                   Model = response[1],
                   FirmwareVersion = response[2],
                   SerialNumber = response[3],
                   HardwareId = response[4])
    

@app.route("/api/snapshoturi", methods=['GET'])
def snapshoturi():
    cam = Core('192.168.11.42', 80, 'admin', 'Supervisor')
    return jsonify(Uri = cam.GetSnapshotUri())

if __name__ == '__main__':
    app.run(debug=True)