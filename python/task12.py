import random
a = random.randint(1,10)
b = random.randint(1,10)
for i in range (3):
    a = random.randint(1,10)
    b = random.randint(1,10)
    result = a*b
    ans = int(input(f"Q {i}: {a} * {b} = "))
    if result == ans:
        print("rigth")
    else:
        print(f"ans is {result}")