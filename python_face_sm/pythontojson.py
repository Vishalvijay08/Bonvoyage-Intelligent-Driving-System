#!/usr/bin/python
from urllib.request import urlopen
import json
import os	

url = 'https://api.myjson.com/bins/w1qto'
cwd = os.path.join(os.getcwd(), "final.py --shape-predictor shape_predictor_68_face_landmarks.dat --alarm alarm.wav")
crd = os.path.join(os.getcwd(), "send_sms.py")
while True:
	response = urlopen(url)
	json_obj = json.load(response)
	print(json_obj)
	for i in json_obj:

		if i['drowsybutton'] ==1:
			print('Clicked')		
			os.system('{} {}'.format('python', cwd))
			
		elif i['drowsybutton'] ==0:	
			print('Not Clicked')

		if i['sos']==0:
			print('Safe')
		elif i['sos']==1:
			print('SOS!!')
			os.system('{} {}'.format('python', crd))	
