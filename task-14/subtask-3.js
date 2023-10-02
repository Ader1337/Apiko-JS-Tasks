function filterArray(initialArray) {
    let res = []
    initialArray.forEach(item => {
        if (typeof item === 'string')
            res.push(item)
    });

    return res
}

console.log(filterArray([2, "string", 3, , , "test"]))