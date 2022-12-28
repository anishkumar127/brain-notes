
```python
name="anish kumar"

print(name[0:5]) # anish

```


# len()

```python

name="anish kumar"

print(name[0:5]) # anish

# find length of string using len() method

print(len(name)) # 11
```




```python
name="anish kumar"

print(name[0:5]) # anish

# find length of string using len() method

print(len(name)) # 11

# other method

print(name[:]) # all 0 to n

print(name[:5])  # 0 automatic take.

print(name[1:5]) # 1 to 5
```


# - working

```python
name="anish kumar"

print(name[0:5]) # anish

# find length of string using len() method


print(name[0:-3]) # 11 - 3 = 8 so its print 8.

print(name[0:-8]) # ani 11-8 = 3

# internally working is

print(name[0:len(name)-8])  # ani 11-8 = 3
```




# -:-1 working

```python
name="anish kumar"

# find length of string using len() method


print(name[-3:-1]) # -3 it will start from back -3 to -1;  so it will be
# -3 going to be 11-3 = 8
# and 11-1 = 10;
# so it going to be 8:10
# so 8:10 is ma 
# so output is ma
```