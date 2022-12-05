
Running Vercel API -> https://youtube-api-only-backend.vercel.app/api/anish

and other API not working -> https://youtube-api-only-backend.vercel.app/api/videos/random
Screenshot

![](https://i.imgur.com/wooWwKB.png)


Render API also stopped working. -> https://api-server-1edp.onrender.com/ but after redeploy its started working again.

Screenshots 

![](https://i.imgur.com/43yXEMX.png)




# 1. Issue

Load video components then show dislike error dislikes is **null**

![](https://i.imgur.com/qBx7oYO.png)


# 2. Issue

try to open subscription routes showing error 401 unauthorized.

![](https://i.imgur.com/Ix9lpzm.png)


subscribe channel api working screenshot below
![](https://i.imgur.com/RPkx7ZF.png)


get all sub channel video list api is working below img

localhost:5000/api/videos/sub/

![](https://i.imgur.com/oSXr9Qd.png)



logged in user which has subscribed the channel.

![](https://i.imgur.com/rddcZQg.png)




# 3. Issue Upload video
upload video also not working showing error -> 

xhr.js:220  POST http://localhost:3000/videos 404 (Not Found)

![](https://i.imgur.com/HHsLgrC.png)



![](https://i.imgur.com/ZDnNXBx.png)



but dislike api working. in backend but front end not working.
screenshot working api
![](https://i.imgur.com/mOXemSf.png)




# 4. how to add view increase method in front end.
backend api is working whenever visit or api hit its increase the view count of video.

