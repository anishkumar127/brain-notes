
# list in python

```python
marks = [1,2,3]

print(marks) # [1, 2, 3]

print(type(marks))  # <class 'list'>

print(marks[0]) # 1



```




# python allow all data type in same list


```python

randomData = [1,2,3,"Anish",True]

print(randomData) # [1, 2, 3, 'Anish', True]


```



# negative index

convert to positive index for better understand.


```python
marks = [1,2,3,"Anish",True]


print(marks[-3]) # negative indexing

print(marks[len(marks)-3]) # positive index converted


print(marks[5-3]) # positive index

print(marks[2]) # positive index
```


output
3
3
3
3



# in keyword. check present or not elements in list



```python
marks = [1,2,3,"Anish",True]


if 7 in marks:
  print("Yes")
else:
  print("No")
```

output 
No




# String Case Search

```python

if "sh" in "Anish":
  print("Yes")
```

output Yes



# index 


```python
marks = [1,2,3,"Anish",True]


print(marks[:]) # all list

print(marks[1:]) # 1 to all reaming 


```



# Jump third parameter


```python
marks = [1,2,3,"Anish",True]

print(marks[1:4:2]) # 2 ka jump
# 1st take then 2 skip then 3rd include

```



# List Comprehension

``` python
lst = [i for i in range(4)]

print(lst)
```

output 0 1 2 3





# more complext list comprehension


```python
lst = [i*i for i in range(10) if i%2 == 0]

print(lst)
```

output
[0, 4, 16, 36, 64]


