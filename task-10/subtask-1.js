function printPowsOf2(number) {
    if (typeof number !== 'number')
        throw new Error('Invalid argument type')

    let acum = 0
    let result = []

    for (let i = 1; acum <= number; i++) {
        result.push(acum)
        acum = i ** 2
    }

    console.log(`${number} - ${result.join(', ')}`)
}

/* printPowsOf2("302");
printPowsOf2(null); */
printPowsOf2(400);
/* printPowsOf2(60); */