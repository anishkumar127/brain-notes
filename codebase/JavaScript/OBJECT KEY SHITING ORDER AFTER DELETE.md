
# Some how Working
```ts
	setWorkflow(current => {
				const copy = {...current};
				console.log(copy);
				delete copy[deleteIndex+1];  
				console.log(copy);
				let entries = Object.entries(copy);
				entries.sort((a:any, b:any) => a[0] - b[0]);
				let sortedObj = Object.fromEntries(entries);
				return Object.values(sortedObj);
			  });
			  
			  for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++){
				Workflow[i] = Workflow[i+1]
					console.log(Workflow)
				}

```


# Before

```ts
         console.log(getitemLevel);

         const deleteIndex = parseInt(levelNameNumber)-1;

            getitemLevel.splice(deleteIndex, 1)

            console.log(getitemLevel);

            setitemLevel(getitemLevel);

  

            setWorkflow(current => {

                const copy = {...current};

                console.log(copy);

                delete copy[getitemLevel.length];  

                console.log(copy);

                return copy;

              });

  

              for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++){

                Workflow[i] = Workflow[i+1]

                    console.log(Workflow)

                }
```


# Also Working
# 1-index based
```ts
    setWorkflow(current => {

        const copy = {...current};

        console.log(copy);

        delete copy[deleteIndex+1];  

        console.log(copy);

        let entries = Object.entries(copy);

        entries.sort((a:any, b:any) => a[0] - b[0]);

        let sortedObj = Object.fromEntries(entries);

        let result = [];

        Object.keys(sortedObj).forEach((key, index) => {

          result[index + 1] = sortedObj[key];

        });

        return result;

      });
```



# Working
```ts
    function DeleteWorkFlow(){

        setButtonSaveTextDelete('');

        setLoading2(true);

        //  console.log(getitemLevel);

         const deleteIndex = parseInt(levelNameNumber)-1;

        //  getitemLevel.splice(deleteIndex, 1)

        //  console.log(getitemLevel);

        //  setitemLevel(getitemLevel);

  

    setWorkflow(current => {

        const copy = {...current};

        console.log(copy);

        delete copy[deleteIndex+1];  

        console.log(copy);

        let entries = Object.entries(copy);

        entries.sort((a:any, b:any) => a[0] - b[0]);

        let sortedObj = Object.fromEntries(entries);

        console.log("sortedObj",sortedObj)

        let result = [];

        Object.keys(sortedObj).forEach((key, index) => {

          result[index + 1] = sortedObj[key];

        });

        console.log("result",result);

        return result;

      });

  

    for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++){

        Workflow[i] = Workflow[i+1]

            console.log(Workflow)

        }

  

        console.log(Workflow , 'WorkFlowData');

  

        setButtonSaveTextDelete(Language.Yes ? Language.Yes : 'Yes');

        setLoading2(false);

        dismissPanel();

        hideDialog();

    };
```


- `setWorkflow` modifying object and delete which index we want to delete.
- and then sending again convert to 1-based index.
- `  for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++)` this shifting position.



# Pure JavaScript

```ts


let obj = {
  1:"one",
  2:"two",
  3:"three"
}


const index = 2; // index which is need to delete.

let obj2 = {...obj}; // copy

delete obj2[index]; // delete 

console.log(obj2);

// get as a array
let entries = Object.entries(obj2);
console.log(entries);

// Sort the array based on the keys
entries.sort((a, b) => a[0] - b[0]);

// Convert the sorted array back into an object
let sortedObj = Object.fromEntries(entries);

console.log(sortedObj);
console.log(Object.values(sortedObj));


 
// let arr = [1,2,3,4];
// let index = 2;

// for(let i =index; i<arr.length; i++){
//   arr[i] = arr[i+1];
// }

// arr.pop();
// console.log(arr);
```


# Working Code

```ts
    function DeleteWorkFlow(){

        setButtonSaveTextDelete('');

        setLoading2(true);

        //  console.log(getitemLevel);

         const deleteIndex = parseInt(levelNameNumber)-1;

        //  getitemLevel.splice(deleteIndex, 1)

        //  console.log(getitemLevel);

        //  setitemLevel(getitemLevel);

  

    setWorkflow(current => {

        const copy = {...current};

        console.log(copy);

        delete copy[deleteIndex+1];  

        console.log(copy);

        let entries = Object.entries(copy);

        entries.sort((a:any, b:any) => a[0] - b[0]);

        let sortedObj = Object.fromEntries(entries);

        console.log("sortedObj",sortedObj)

        let result = [];

        // Object.keys(sortedObj).forEach((key, index) => {

        //   result[index + 1] = sortedObj[key];

        // });

        for (const key in sortedObj) {

            const index = parseInt(key);

            result[index] = sortedObj[key];

          }

        console.log("result",result);

        return result;

      });

  

    for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++){

        if(i>1){

            Workflow[i] = Workflow[i+1]

            console.log(Workflow)

        }

            console.log(Workflow)

        }

  

        console.log(Workflow , 'WorkFlowData');

  

        setButtonSaveTextDelete(Language.Yes ? Language.Yes : 'Yes');

        setLoading2(false);

        dismissPanel();

        hideDialog();

    };
```

- Work with 2 ways.
- First way is with Next value is Updated after delete in the end
- Second way is updated right way which is deleted.

# Final Working

```ts
function DeleteWorkFlow(){

        setButtonSaveTextDelete('');

        setLoading2(true);

        //  console.log(getitemLevel);

         const deleteIndex = parseInt(levelNameNumber)-1;

        //  getitemLevel.splice(deleteIndex, 1)

        //  console.log(getitemLevel);

        //  setitemLevel(getitemLevel);

  

        // 1st Way Working

    // setWorkflow(current => {

    //  const copy = {...current};

    //  console.log(copy);

    //  delete copy[deleteIndex+1];  

    //  console.log(copy);

    //  let entries = Object.entries(copy);

    //  entries.sort((a:any, b:any) => a[0] - b[0]);

    //  let sortedObj = Object.fromEntries(entries);

    //  console.log("sortedObj",sortedObj)

    //  let result = [];

    //  // Object.keys(sortedObj).forEach((key, index) => {

    //  //   result[index + 1] = sortedObj[key];

    //  // });

    //  for (const key in sortedObj) {

    //      const index = parseInt(key);

    //      result[index] = sortedObj[key];

    //    }

    //  console.log("result",result);

    //  return result;

    //   });

  

    // for(let i=parseInt(levelNameNumber);i<getitemLevel.length; i++){

    //  if(i>1){

    //      Workflow[i] = Workflow[i+1]

    //      console.log(Workflow)

    //  }

    //      console.log(Workflow)

    //  }

  

// 2nd way Working

     setWorkflow(current => {

          const copy = {...current};

          console.log(copy);

          delete copy[deleteIndex+1];

          console.log(copy);

          let entries = Object.entries(copy);

          entries.sort((a:any, b:any) => a[0] - b[0]);

          let sortedObj = Object.fromEntries(entries);

          console.log("sortedObj",sortedObj)

          let result = [];

          Object.keys(sortedObj).forEach((key, index) => {

          result[index + 1] = sortedObj[key];

          });

          console.log("result",result);

          return result;

         });

        console.log(Workflow , 'WorkFlowData');

  

        setButtonSaveTextDelete(Language.Yes ? Language.Yes : 'Yes');

        setLoading2(false);

        dismissPanel();

        hideDialog();

    };
```



# Last Final Working

```ts
// 2nd way Working

     setWorkflow(current => {

          const copy = {...current};

          console.log(copy);

          delete copy[deleteIndex+1];

          console.log(copy);

          let entries = Object.entries(copy);

          entries.sort((a:any, b:any) => a[0] - b[0]);

          let sortedObj = Object.fromEntries(entries);

          console.log("sortedObj",sortedObj)

          let result = [];

          Object.keys(sortedObj).forEach((key, index) => {

          result[index + 1] = sortedObj[key];

          });

          console.log("result",result);

          return result;

         });

            getitemLevel.splice(-1, 1)

             setitemLevel(getitemLevel);

        console.log(Workflow , 'WorkFlowData');

  

        setButtonSaveTextDelete(Language.Yes ? Language.Yes : 'Yes');

        setLoading2(false);

        dismissPanel();

        hideDialog();

    };
```


