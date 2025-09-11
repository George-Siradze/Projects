limit = 1000
not_perfect = 0
for i in range(1,limit+1):
    sqrt = int(i**(1/2))
    cube = int(i**(1/3))
    fifth = int(i**(1/5))
if sqrt**2 != i and cube**3 != i and fifth**5 !=i:
    not_perfect+=1

print(f"Not perfect squares, cubes, or fifths {not_perfect}")    