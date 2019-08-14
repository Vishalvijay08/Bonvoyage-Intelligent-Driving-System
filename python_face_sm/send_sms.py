#!usr/bin/env/python

from twilio.rest import Client
from datetime import datetime
account_sid = "AC7a6ce3da9c5511373841a5c060e46e0d"
auth_token = "7b66c77aba7873819cc0bf8e349da01a"
my_cell = "+919543366405"
my_twilio = "+1 951 419 5742"

	# Find these values at https://twilio.com/user/account
client = Client(account_sid, auth_token)
timestr = str(datetime.now())
my_msg = "Your Friend " + my_cell + " is in danger"+" " +timestr

message = client.messages.create(to=my_cell, from_=my_twilio,body=my_msg)
print('SMS Sent')
