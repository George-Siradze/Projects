width = int(input("Enter width: "))
height =  int(input("Enter height: "))

print(width*"*")
for i in range(height-2):
    print("*"+" "*(width-2)+"*")
if(height>1):
    print(width*"*")