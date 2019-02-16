import csv
from flask import jsonify
from onvif import ONVIFCamera
from Naked.toolshed.shell import execute_js

class Imaging_Test:
	def __init__(self,ip,port,user,passw):
		self.ip = ip
		self.port = port
		self.user = user
		self.passw = passw
		self.cam = ONVIFCamera(self.ip, self.port, self.user, self.passw)

	def GetImagingSettings(self):
		media = self.cam.create_media_service()
        imaging = self.cam.create_imaging_service()
        vstoken = media.GetVideoSources()[0]._token
        response = imaging.GetImagingSettings({'VideoSourceToken': vstoken})
		if (response != []):
			return 'GetImagingSettings works'
		else:
			return 'GetImagingSettings does not work'
