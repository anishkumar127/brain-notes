

```
localhost:5000/api/users/find/63931d20de7c22e61c4ffd63
```
ager ye krta hu to. mujhe ye milta hai

```json
{
	"_id": "63931d20de7c22e61c4ffd63",
	"name": "anish",
	"email": "anish@gmail.com",
	"password": "$2a$10$6Qr42gHsfk2jQrs4G6E4S.uPP0PB92TbWMU1FS55L96QAdGZQZUl6",
	"subscribers": 0,
	"subscribedUsers": [],
	"fromGoogle": false,
	"createdAt": "2022-12-09T11:33:52.153Z",
	"updatedAt": "2022-12-09T11:33:52.153Z",
	"__v": 0
}
```

Jo ki userId hai. user ki user ki object id h but video me ye userId hai ok.

ager me video ki api call karu to.


```
localhost:5000/api/videos/find/63931d20de7c22e61c4ffd63
```

to esme mujhe null mileag kyuki ye user ki id h or mujhe video id deni hai.
to ager me video id du..

```
localhost:5000/api/videos/find/63931e44de7c22e61c4ffd6c
```
to mujhe json me ye data mil jayega sath me ye userId krke user ki id bhi show kr dega.

```json
{
	"_id": "63931e44de7c22e61c4ffd6c",
	"userId": "63931d20de7c22e61c4ffd63",
	"title": "testing",
	"desc": "testing",
	"imgUrl": "https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f6cfa.appspot.com/o/1670585919828vlcsnap-2022-11-15-15h18m14s078.png?alt=media&token=9e0cb54f-683e-4fb2-ad62-6c27214e3837",
	"videoUrl": "https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f6cfa.appspot.com/o/1670585768116video9069832096.mp4?alt=media&token=5ff59166-0c18-48d9-b3e5-d0e7628b9e40",
	"views": 0,
	"tags": [
		"js",
		"java"
	],
	"likes": [],
	"dislikes": [],
	"createdAt": "2022-12-09T11:38:44.411Z",
	"updatedAt": "2022-12-09T11:38:44.411Z",
	"__v": 0
}
```


but dikkat ye aa rahi h ki.
ager front end me ye api call karu me

```
http://localhost:3000/video/63931e44de7c22e61c4ffd6c
```

to muje error ata hai ki.

![](https://i.imgur.com/clnywhT.png)


na mujhe videoUrl mil raha h na hi mujhe igmUrl na title na desc kuch nahi mil raha
sab null mil raha hai why ?





maybe a solution ? https://github.com/reduxjs/redux/issues/3603
Js closures issue




https://overreacted.io/a-complete-guide-to-useeffect/

https://redux-starter-kit.js.org/

https://stackoverflow.com/questions/71277021/react-redux-useeffect-useselector-stale-closures-and-event-listeners











https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux

https://stackoverflow.com/questions/71065246/i-get-null-as-result-in-useselector-from-react-redux-toolkit

https://stackoverflow.com/questions/71137675/using-useselector-from-redux-and-useeffect-from-react-but-the-value-doesnt-cha

