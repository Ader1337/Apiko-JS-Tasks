function isEvenArray(initialArray) {
    let isHasUnevenNumber = false

    initialArray.forEach(num => {
        if(num % 2 != 0){
            isHasUnevenNumber = true
            return
        }
    });

    return isHasUnevenNumber ? 'NO' : 'YES'
}

console.log(isEvenArray([2, 2, 4, 12]))