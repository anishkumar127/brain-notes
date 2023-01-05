```python
tup = (1,5,6)

print(type(tup),tup)
```
output
<class 'tuple'> (1, 5, 6)







# 1 value confusion

```python
tup = (1)

print(type(tup),tup)
```

output
  <class 'int'> 1

# avoid issue need to be  , insert

```python
tup = (1,)

print(type(tup),tup)
```
output
<class 'tuple'> (1,)

if use 1 value then we need to pass the , otherwise it will understand as a integer.




# not assign value not able to cahnge
```python
tup = (1,)
tup[0]=90
print(type(tup),tup)
```

output

```
 python3 main.py
Traceback (most recent call last):
  File "/home/runner/python/main.py", line 2, in <module>
    tup[0]=90
TypeError: 'tuple' object does not support item assignment
exit status 1
```

# Tuple Method

![](https://i.imgur.com/HcRGmBg.png)






![](https://i.imgur.com/JQKXKyd.png)
