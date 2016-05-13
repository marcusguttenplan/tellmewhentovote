import csv
import datetime
with open("_dates.csv", 'rb') as f:
    reader = csv.reader(f, delimiter=';')
    count=0
    for row in reader:
	    if row[0] !="date":
	        date = datetime.datetime.strptime (row [0],"%m-%d-%Y")
	        if date < datetime.datetime.strptime ("2014-09-26", "%Y-%m-%d")and date > datetime.datetime.strptime ("2014-09-25", "%Y-%m-%d"):
		        count = count+1
		    result = (count/3927.2)*100
			print "Date:", date
			print "SLA:", result, "%"
