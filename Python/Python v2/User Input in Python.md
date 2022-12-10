
```python
name = input();
print(name);

print("my name is",name);
```

type in console. -> anything. like name -> anish

**output**->
``anish``
``my name is anish``


**another ** way

```python
name = input("my name is");

print(name);
```

input -> name -> anish
output -> anish

above just a simple string it will not print. it only show on console.


# next 

```python
a = input("Enter first number: ")
b = input("Enter second number: ")
print(a+b)
```

if we enter value 10 and 20 output will be 1020 not will be 30.
why ?

and this will also do same issue

```python
x=input();
y = input();
print(x+y);
```


so why this ?

because of input take as a string. so if we put anything it will take as a string. we have to do typecast

