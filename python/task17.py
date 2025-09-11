import random
score = 0

for i in range (5):
    num = random.randint(1,10)
    print("!RANDOM NUMBER HAS BEEN GENERATED!")
    print(num)
    for J in range (3):
        guess  = int(input("guess the random number: "))
        if guess == num:
            print("🟢 +10 points")
            score+=10
        else:
            print("🟥 -1 point")
            score-=1
print(f"final socre is {score}")