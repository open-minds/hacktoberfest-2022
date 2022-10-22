from ast import operator


print("Select An Operation To Perform")
print("1-Addition")
print("2-Substraction")
print("3-Multipication")
print("4-Division")

operation=input()

num1=input("enter the 1st Number")
num2=input("enter the 2nd Number")

if operation == "1":
    print("The Result is"+str(int(num1)+int(num2)))
elif operation == "2":
    print("The Result is"+str(int(num1)-int(num2)))
elif operation == "3":
    print("The Result is"+str(int(num1)*int(num2)))
elif operation == "4":
    print("The Result is"+str(int(num1)/int(num2)))
else: print("Invalid Entry")



