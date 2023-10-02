function findUser(initialObject) {
    let res = []

    for (let userName in initialObject) {
        let userInfo = initialObject[userName]
        if (userInfo.age > 18 && userInfo.city === 'London')
            res.push(userName)
    }

    return res
}

let users = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "NY" }
}

console.log(findUser(users))