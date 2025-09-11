n = int(input("enter a num: "))
a=1
b=1
count  = 0
while count < n:
    print(a,end=' ')
    a,b = b, a+b
    count = count+1