meal_price = float(input("Enter a meals price: "))
tip_percent = int(input("enter a tip %: "))

tip_amount = (meal_price*tip_percent)/100
total_bill = meal_price+tip_amount
print ("Tip is " + str(tip_amount) + " and total bill is "+str(total_bill))