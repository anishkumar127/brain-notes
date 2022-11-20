
# Show Database

- cmd
> show dbs

![[Pasted image 20221119171135.png]]



in computer store file locally in data folder
![[Pasted image 20221119171551.png]]


# Show Collections 
- cmd
> show collections
![[Pasted image 20221119171746.png]]



# Create Database Or Use Database

- cmd
> use user

``use <here will be database name>``

![[Pasted image 20221119172111.png]]

# Create Collection and Add Data
- cmd 
``db.<collections name>.insertOne({data like json})

```database
db.students.insertOne({name:"anish",email:"anishbishnoi127@gmail.com"})
```

![[Pasted image 20221119172426.png]]


**- show collections**
![[Pasted image 20221119172905.png]]


# Find all user 

- cmd
```database
 db.students.find()
```
![[Pasted image 20221119172953.png]]



# Create another Collections

- cmd
```database
db.personal.insertOne({gender:"male",interest:"coding"})
```

![[Pasted image 20221119173240.png]]

- Show Collections
![[Pasted image 20221119173309.png]]


# Insert into collections more the One
## Insert Many data into collections
```database
db.personal.insertMany([{name:"anish"},{name:"abc"},{name:"coder"}])
```

![[Pasted image 20221119173730.png]]

- find() method

![[Pasted image 20221119173832.png]]


# find by value

```database
db.personal.find({name:"anish"})
```

![[Pasted image 20221119174002.png]]


# Limit method 
- its use for show data in limit
- when have many data we want to render only it limit then we can set the limit
```database
db.personal.find({name:"anish"}).limit(1)
```
![[Pasted image 20221119175145.png]]


# findOne method
- its find only one first and return or render

```database
 db.personal.findOne({name:"anish"})
```

![[Pasted image 20221119175313.png]]

```database
 db.personal.findOne()
```

![[Pasted image 20221119175352.png]]


# UpdateOne method

- this is update only one 
-  if have many duplicate so its choose first one and update the value of that data

```database
db.personal.updateOne({<find value which need to update>},{$set:{<put new value which u want to update>}})
```


```database
db.personal.updateOne({name:"abc"},{$set:{name:"kumar"}})
```

![[Pasted image 20221119180204.png]]


- old
 ![[Pasted image 20221119180404.png]]

- new updated
![[Pasted image 20221119180434.png]]


# UpdateMany method
- we want to update many same value to new value then we can use updateMany method same as we used updateOne
```database
 db.personal.updateMany({name:"abc"},{$set:{name:"kumar"}})
```

![[Pasted image 20221119180632.png]]


# deleteOne method

- same as updateOne we can use deleteOne
```database
db.personal.deleteOne({name:"kumar"})
```


![[Pasted image 20221119180938.png]]

# deleteMany method


```database
db.personal.deleteMany({name:"kumar"})
```

*if already delete value then its return nothing just return ack true and count 0*
![[Pasted image 20221119181132.png]]


 - if we do only deleteMany not pass anything it will delete everything.
 ```database
 db.personal.deleteMany({});
```
- we have to pass {} object into () otherwise it will throw error.

