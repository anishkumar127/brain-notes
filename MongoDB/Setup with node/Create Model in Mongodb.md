
- create **model** folder
	 - inside folder create **user.js** file..

- inside file create model.

```js
import mongoose from "mongoose";

  

const Student = new mongoose.Schema({

  name: {

    type: String,

  },

  email: {

    type: String,

  },

  favColor: {

    type: String,

  },

  height: {

    type: Number,

  },

  workout:{

    type:Boolean

  }

});

  

const Student_table = new mongoose.model("user", Student);
```

![[Pasted image 20221120153646.png]]






## above file in single file
# Real world Export level file

```js
import mongoose from "mongoose";

  

const Student = new mongoose.Schema({

  name: {

    type: String,

  },

  email: {

    type: String,

  },

  height: {

    type: Number,

  },

  workout:{

    type:Boolean

  }

});

  

 const Student_table = new mongoose.model("user", Student);

export default Student_table;
```

![[Pasted image 20221120155251.png]]


- its default export
# advanced export 

