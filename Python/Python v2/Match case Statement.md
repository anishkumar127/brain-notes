
```python
x = int(input("input"))

match x:
  case 0:
    print("x is zero")
  case 1:
    print("1")
  case 4:
    print("4 printed")
  case _:
    print("default printed", x)
```


its like siwtch case.

case_: is the default

in python no need to break statement.
like we see in the cpp and java their we need to break after the case. their python no need that things.

```python
x = int(input("input"))

match x:
  case 0:
    print("x is zero")
  case 1:
    print("1")
  case 4:
    print("4 printed")
  case _ if x!=20:
      print( x)
  case _ :
      print("this is default")
```

their we can also use if state inside the default case. and create multiple default case also the  if statement

