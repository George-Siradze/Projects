hour  = int(input("Enter hour (1-12): "))
period = int (input("am (1) or pm (2)? "))
ahead = int(input("How many hours ahead? "))

if period == 1:
    total_hours = hour % 12
else:
    total_hours = (hour % 12)+12

new_hour_24 = (total_hours+ahead) % 24

new_hour = new_hour_24%12
if new_hour == 0:
    new_hour = 12

new_period = "am" if new_hour_24 < 12 else "pm"

print("New hour: ",new_hour,new_period)