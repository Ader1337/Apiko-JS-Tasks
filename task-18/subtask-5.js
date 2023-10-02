let convert = (bytes) => {
    return bytes / 1000 / 1000 + ' Mb'
}

console.log(convert(10000))
