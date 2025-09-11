import random

num = random.randint(1,10);
guess = 0;

print("GUESS THE RAMDOM NUMBER")

while(num!=guess):
    guess = int(input("Enter the number: "))
    if(guess > num):
        print("Too High")
    elif(guess < num):
        print("Too low")
    else:
        print("yay correct")
