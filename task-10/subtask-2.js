function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0
    initialArray.forEach(num => {
        if(typeof num === 'number')
            sum += num
    })
    
    console.log(sum)
}

calculateSumOfArray();