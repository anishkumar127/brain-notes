
# append method


```python
l = [1,2,3,4,5]

print(l)


l.append(10)


print(l)
```


[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 10]




# sort

```python
l = [11,2,35,47,5]

print(l)

l.sort()


print(l)
```

[11, 2, 35, 47, 5]
[2, 5, 11, 35, 47]


above sort accending order


# sort decending order sort


```python
l = [11,2,35,47,5]

print(l)

l.sort(reverse=True)


print(l)

```


[11, 2, 35, 47, 5]
[47, 35, 11, 5, 2]


# reverse method

```python
l = [11,2,35,47,5]

print(l)


l.reverse()

print(l)
```

reverse the original list.



# index

only first occurence return

```python
l = [11,2,35,47,5]

# print(l)


print(l.index(35))

# print(l)
```

2 index.

if not present then return the error.


# count

```python
l = [11,2,35,47,5]

# print(l)

print(l.count(2))

# print(l)
```

return the elements how much time occurence in the list

if not present elements and search the count then return the 0




# copy


```python
l = [11,2,35,47,5]

print(l)


m = l

m[0] = 99

print(l)


```
output
[11, 2, 35, 47, 5]
[99, 2, 35, 47, 5]

from this way original list change.
that's not copying the copy its chaneging the actual addresss
we doing reference. we created the reference.

now we need to copy method



```python
l = [11,2,35,47,5]

print(l)


m = l.copy()

m[0] = 99

print(l)
print (m)

```
its created the copy. not doing the references.

output

[11, 2, 35, 47, 5]
[11, 2, 35, 47, 5]
[99, 2, 35, 47, 5]

now original list not chaging.




# insert


```python
l = [11,2,35,47,5]

print(l)

l.insert(1,888)
print(l)

```

output
[11, 2, 35, 47, 5]
[11, 888, 2, 35, 47, 5]


inserted index 1. and its did previous 1 index elements to right shift.




# extend

```python
l = [11,2,35,47,5]

print(l)

m = [900,1000,1100]

l.extend(m)

print(l)
```


output

[11, 2, 35, 47, 5]
[11, 2, 35, 47, 5, 900, 1000, 1100]


its. doing open first list and then put the second list elements to end the first list.





# merge + sign


```python
l = [11,2,35,47,5]

print(l)

m = [900,1000,1100]

k = l+m

print(k)
```

l and m list merge to the k and become new list.

