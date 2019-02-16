from onvif import ONVIFCamera
import time

class Core:
	def __init__(self,ip,port,user,passw):
		self.ip = ip
		self.port = port
		self.user = user
		self.passw = passw
		self.cam = ONVIFCamera(self.ip, self.port, self.user, self.passw)
	def GetCapabilities(self):
		response = self.cam.devicemgmt.GetCapabilities()
		return response
	def GetDeviceInformation(self):
		data = []
		response = self.cam.devicemgmt.GetDeviceInformation()
		data.append(str(response.Manufacturer))
		data.append(str(response.Model))
		data.append(str(response.FirmwareVersion))
		data.append(str(response.SerialNumber))
		data.append(str(response.HardwareId))
		return data
	def GetSnapshotUri(self):
		media_service = self.cam.create_media_service()
		token = media_service.GetProfiles()[0]._token
		return media_service.GetSnapshotUri({'ProfileToken': token}).Uri
	