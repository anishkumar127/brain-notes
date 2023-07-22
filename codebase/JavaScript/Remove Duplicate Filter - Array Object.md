

```js
const data = [
    {
        "text": "Hardware issues",
        "key": "Hardware issues",
        "team": "IT",
        "default": null
    },
    {
        "text": "Office 365",
        "key": "Office 365",
        "team": "IT",
        "default": null
    },
    {
        "text": "Hardware issues",
        "key": "Hardware issues",
        "team": "IT",
        "default": null
    },
    {
        "text": "Office 365",
        "key": "Office 365",
        "team": "IT",
        "default": null
    }
];

const filteredData = data.filter((item, index, self) => 
    index === self.findIndex(t => (t.key === item.key && t.text === item.text))
);

console.log(filteredData);

```



# Next

```js
let uniqueServicesData = ServiesData.filter(function(item, pos) {

            return ServiesData.indexOf(item) == pos;

        })
```