# გამოიყენე ბისექციის მეთოდი ფუნქციის ფესვის საპოვნელად შუალედში [2, 3].
# # მეათიათასედის სიზუსტით. f(x) = x^2 - 5

# def f(x):
#     return x**2 - 5

# a=2
# b=3
# epsillion = 0.0001

# while(b-a)/2 > epsillion:
#     x = (a+b)/2
#     if(f(x)==0):
#         break
#     elif f(a)*f(x)<0 :
#         b = x
#     else:
#         a = x
# ans = (a+b)/2
# print(round(ans,2))



# amoxseni gantoleba f(x) = x^2 - 4x + 4 da ipovet is fesvebi romelbic moTavsebilia 1 da 3s shoris

def f(x):
    return x**2 - 4*x +4;
a = 1;
b = 3;

epsilion = 0.0001

while((b-a)/2 > epsilion):

    x = (a+b)/2
    if(f(x) == 0):
        break;
    elif(f(a)*f(x)<0):
        b = x;
    else:
        a = x;
ans = (a+b)/2
print(round(ans,2))


























# def f(x):
#     return x**2 - 4*x + 4

# a = 1
# b = 3
# epsilion = 0.0001

# while(b-a)/2 < epsilion:
#     x = (a+b)/2
#     if(f(x) == 0):
#         break
#     elif f(a)*f(x) < 0:
#         b=x
#     else:
#         a=x
# ans = (a+b)/2
# print(ans)







