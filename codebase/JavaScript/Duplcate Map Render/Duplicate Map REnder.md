
```ts
const filteredChoiceValueElements = ChoiceValuesArraytoMap
    .filter((item, index, arr) => {
        return arr.findIndex(t => t.choice === item.choice) === index;
    })
    .map((item, index) => {
        let KeysValues = item.selctedKeys;
        KeysValues = KeysValues.split(",");
        return (
            <div className={styles.MainAlignValue}>
                <Label className={styles.MainAlignValuespan} title={item.choice}>{item.choice}</Label>
                <Label className={styles.MainAlignValueLabel}>Select Fields to Show</Label>
                <div className={styles.dropdownsBlockforCondition}>
                    <div className={styles.fieldAndPlusIcon}>
                        <Dropdown options={PendingOption} data-info={item.choice} id={item.choice.replaceAll(/\s+/g, '').toLowerCase()} className={styles.ChoiceDropdown80} multiSelect onChange={OnChangeCondition} defaultSelectedKeys={KeysValues} />
                    </div>
                </div>
            </div>
        );
    });

```



```ts
 {/* {ChoiceValuesArraytoMap.map((item, index) => { */}

                       {ChoiceValuesArraytoMap.filter((item, index, arr) => {

                        return arr.findIndex(t => t.choice === item.choice) === index;}).map((item, index) => {

                            let KeysValues =item.selctedKeys;

                            KeysValues = KeysValues.split(",");

                            return (

                                <div className={styles.MainAlignValue}>

                                    <Label className={styles.MainAlignValuespan} title={item.choice}>{item.choice}</Label>

                                    <Label className={styles.MainAlignValueLabel}>Select Fields to Show</Label>

                                    <div className={styles.dropdownsBlockforCondition}>

                                        <div className={styles.fieldAndPlusIcon}>

                                            <Dropdown options={PendingOption} data-info={item.choice} id={item.choice.replaceAll(/\s+/g, '').toLowerCase()} className={styles.ChoiceDropdown80} multiSelect onChange={OnChangeCondition} defaultSelectedKeys={KeysValues} />

                                        </div>

                                    </div>

                                </div>

                            )

                        })

                            }
```

You can chain the `Array.filter()` and `Array.map()` methods together to avoid creating a separate array for the unique `choice` values. Here's an example code snippet that shows how to do that:
In this example, we chain the `Array.filter()` method and the `Array.map()` method together. The `Array.filter()` method checks for unique `choice` values by using the `Array.findIndex()` method to find the index of the first occurrence of each `choice` value in the array. If the index of the first occurrence of the `choice` value is equal to the current index, then the item is included in the filtered array. Otherwise, it is excluded.

The `Array.map()` method then maps over the filtered `ChoiceValuesArraytoMap` array to create a new array called `filteredChoiceValueElements`, where each item in the array corresponds to one unique `choice` value. We then render the JSX code in the same way as before.