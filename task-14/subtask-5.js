function removeObj(arrayOfObj, keyName, value) {
    let res = []

    arrayOfObj.forEach(item => {
        if(item?.[keyName] !== value)
        res.push(item)
    });

    console.log(res)
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

removeObj(arr, "age", 2);
removeObj(arr, "year", 2);