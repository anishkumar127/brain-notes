
```python
letter = "Hey my name is {} and I from {}"

country = "India"
name = "Anish"

print(letter.format(name,country))

```

output

Hey my name is Anish and I from India



```python
letter = "Hey my name is {1} and I from {0}"

country = "India"
name = "Anish"

print(letter.format(country,name))
 
```

output

Hey my name is Anish and I from India




```python
letter = "Hey my name is {1} and I from {0}"

country = "India"
name = "Anish"


print(f"Hey my name is {name} and I from {country}")
```

output
Hey my name is Anish and I from India

