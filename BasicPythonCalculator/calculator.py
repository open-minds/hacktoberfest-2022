from ast import operator


print("Select An Operation To Perform")
print("1-Addition")
print("2-Substraction")
print("3-Multipication")
print("4-Division")

operation=input()

if operation == "1":
    num1=input("enter the 1st Number")
    num2=input("enter the 2nd Number")
    print("The Sum is"+str(int(num1)+int(num2)))

elif operation == "2":
    num1=input("enter the 1st Number")
    num2=input("enter the 2nd Number")
    print("The Sum is"+str(int(num1)-int(num2)))

elif operation == "3":
    num1=input("enter the 1st Number")
    num2=input("enter the 2nd Number")
    print("The Sum is"+str(int(num1)*int(num2)))
elif operation == "4":
    num1=input("enter the 1st Number")
    num2=input("enter the 2nd Number")
    print("The Sum is"+str(int(num1)/int(num2)))
else: print("Invalid Entry")



