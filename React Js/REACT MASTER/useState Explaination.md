
![](https://i.imgur.com/qcTKZsK.png)
![](https://i.imgur.com/W3VUp6M.png)



**count only increase by 1. if we do multiple count plus 1 still only 1 count will increase.**

**because of this run in batches and everyone receive  0 1 2 3 like that.**




# snapshot
**kuch delay to update value in snapshot**


![](https://i.imgur.com/jW6aLMK.png)


**speed click but in ui render some time after**
![](https://i.imgur.com/j6GfUvr.png)


![](https://i.imgur.com/dS4ZDw3.png)


# Next
**if we do like this**

![](https://i.imgur.com/jO027uq.png)


![](https://i.imgur.com/6m6DqWj.png)


**from this way its go to queue**

![](https://i.imgur.com/tdbSm7L.png)
![](https://i.imgur.com/XTRsnb0.png)


![](https://i.imgur.com/w0Ia21r.png)


# next

**directly 3 because of ()=> inside this. because of this become as a queue.**

![](https://i.imgur.com/ksXcxFR.png)


![](https://i.imgur.com/ejvOpex.png)



# NEXT

**react always don't want to directly change the state.**
**if we do then it will not change the state. and not visible to ui**

**react always want to make a copy and that copy will become the new state.**
**so always try to make copy and then that copy add to state.**
![](https://i.imgur.com/CTk7Ule.png)


**above pic we directly pushing to state and it will not rerender the ui and state will not change.**


**so we do this way we make a copy using spread operator ... and then add new item into this.**
![](https://i.imgur.com/eiQYNgH.png)




# next
![](https://i.imgur.com/8on4uI9.png)



**now there is a issue**
**when we do add video. all components re re render like app , button , video etc.**
**but we do only one another data to add to array its should not re render the all components again.**

**so there all things are inside app components our array inside app js and video components and button components so there is case all things also re render because of app components re render **

**so here we need to optimization**





