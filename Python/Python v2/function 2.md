
```python
def average(*numbers):
  print(type(numbers))
  sum = 0
  for i in numbers:
    sum = sum+i
    print("Average is: ",sum/len(numbers))


average(4,4)
```

output

<class 'tuple'>
Average is:  2.0
Average is:  4.0


from * getting the list / tuble of numbers.

