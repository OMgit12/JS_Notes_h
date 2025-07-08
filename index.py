# Getting Started with Python
# Python is a versatile, high-level programming language that is widely supported across all major operating systems.

print("Hello, World!")
# This is a simple Python program that prints "Hello, World!" to the console. print is a built-in function in Python that outputs text to the console.


# Python Variables and Literals
# In programming, a variable is a container (storage area) to hold  ,
number = 10   # Here, number is a variable storing the value 10.

# Changing the Value of a Variable in Python
site_name = 'programiz.pro'
print(site_name)

# assigning a new value to site_name
site_name = 'apple.com'

print(site_name)


# Assigning multiple values to multiple variables
a, b, c = 5, 3.2, 'Hello'

print (a)  # prints 5
print (b)  # prints 3.2
print (c)  # prints Hello 


# Python Type Conversion
# In programming, type conversion is the process of converting data of one type to another. For example: converting int data to str.
# There are two types of type conversion in Python.

# Implicit Conversion - automatic type conversion
# Explicit Conversion - manual type conversion

# Python Implicit Type Conversion
# In certain situations, Python automatically converts one data type to another. This is known as implicit type conversion.

# Example 1: Converting integer to float
# Let's see an example where Python promotes the conversion of the lower data type (integer) to the higher data type (float) to avoid data loss.
integer_number = 123
float_number = 1.23

new_number = integer_number + float_number

# display new value and resulting data type
print("Value:",new_number) # prints 124.23
print("Data Type:",type(new_number))   # prints <class 'float'>
# Note: It is because Python always converts smaller data types to larger data types to avoid the loss of data.


# Explicit Type Conversion
# In Explicit Type Conversion, users convert the data type of an object to required data type.
# We use the built-in functions like int(), float(), str(), etc to perform explicit type conversion.
# This type of conversion is also called typecasting because the user casts (changes) the data type of the objects.

# Addition of string and integer Using Explicit Conversion
num_string = '12'
num_integer = 23

print("Data type of num_string before Type Casting:",type(num_string))
# explicit type conversion of string to integer
num_string = int(num_string)

print("Data type of num_string after Type Casting:",type(num_string))
num_sum = num_integer + num_string
print("Sum:",num_sum)
print("Data type of num_sum:",type(num_sum))


# Python if...else Statement
# An if statement can have an optional else clause. The else statement executes if the condition in the if statement evaluates to False.
# True - the body of if executes, and the body of else is skipped.
# False - the body of else executes, and the body of if is skipped

number = int(input('Enter a number: '))

if number > 0:
    print('Positive number')
else:
    print('Not a positive number')

print('This statement always executes')


# Python if…elif…else Statement
# However, if we need to make a choice between more than two alternatives, we use the if...elif...else statement.
# Syntax
# if condition1:
#     # code block 1

# elif condition2:
#     # code block 2

# else: 
    # code block 3


number = -5

if number > 0:
    print('Positive number')

elif number < 0:
    print('Negative number')

else:
    print('Zero')

print('This statement is always executed')




# Python Nested if Statements
number = 5

# outer if statement
if number >= 0:
    # inner if statement
    if number == 0:
      print('Number is 0')
    
    # inner else statement
    else:
        print('Number is positive')

# outer else statement
else:
    print('Number is negative')



    
# Python Numbers, Type Conversion and Mathematics
# The number data types are used to store the numeric values.
# Python supports integers, floating-point numbers and complex numbers. They are defined as int, float, and complex classes in Python.

# int - holds signed integers of non-limited length.
# float - holds floating decimal points and it's accurate up to 15 decimal places.
# complex - holds complex numbers.


# Python Numeric Data Type
# Integers and floating points are separated by the presence or absence of a decimal point. For instance,
# 5 is an integer
# 5.42 is a floating-point number.

# We can use the type() function to know data type of a variable.

num1 = 5
print(num1, 'is of type', type(num1))

num2 = 5.42
print(num2, 'is of type', type(num2))

num3 = 8+2j
print(num3, 'is of type', type(num3))



# Number Systems
# The numbers we deal with every day are of the decimal (base 10) number system.

# But computer programmers need to work with binary (base 2), hexadecimal (base 16) and octal (base 8) number systems.

# In Python, we can represent these numbers by appropriately placing a prefix before that number. The following table lists these prefixes.

# Number              System Prefix
# Binary	              0b or 0B
# Octal	                  0o or 0O
# Hexadecimal	          0x or 0X