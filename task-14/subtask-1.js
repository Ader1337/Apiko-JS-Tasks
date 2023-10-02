function unicFn(initialArray) {
    let resultArr = []
    initialArray.forEach(item => {
        if(!resultArr.includes(item))
            resultArr.push(item)
    });

    return resultArr
}

console.log(unicFn([2, 3, 7, 1, 3, 3, 7]))