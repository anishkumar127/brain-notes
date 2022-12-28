
```python
name = 'anish'

for i in name:
  print(i)
```

output
a
n
i
s
h


```python
name = 'anish'

for i in name:
  print(i)
  if(i=='h'):
    print("found h done!")
```


# print list

```python
colors = ["green","black","blue","white"]

for color in colors:
  print(color)

```

green
black
blue
white




# inside for loop inside loop

```python
colors = ["green","black","blue","white"]

for color in colors:
  print(color)
  for insideColor in color:
    print(insideColor)

```

output
green
g
r
e
e
n
black
b
l
a
c
k
blue
b
l
u
e
white
w
h
i
t
e





# Range


```python
for i in range(5):
  print(i)
```

0
1
2
3
4



# Range between 1 to 5

```python
for i in range(1,5):
  print(i)
```
output
1
2
3
4


# Range and increase by

```python
for i in range(0,5,2):
  print(i)
```

0
2
4
increasement by 2. third parameter is increasement by 




# While loop


```python
i = 0
while(i<5):
  print(i)
  i = i+1
```

0
1
2
3
4



# Take input till i< something


```python
i = int(input("enter "))
while(i<20):
  i = int(input("enter "))
  print(i)


print("loop done")
```



# Else with while loop

```python
count = 5

while(count>0):
  print(count)
  count = count -1;
else: 
  print("loop done i'm inside else")
```


5
4
3
2
1
loop done i'm inside else




