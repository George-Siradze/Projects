x = int(input("enetr x:"))
y = int(input("enetr y:"))
z = int(input("enetr z:"))

print(f"pre change: {x},{y},{z}")

x,y,z = y,z,x

print(f"post change: {x},{y},{z}")
