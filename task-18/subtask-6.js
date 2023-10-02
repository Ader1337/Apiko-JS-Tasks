const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

let logPersonNameAndInterests = (...args) => {
    return `${Person.getFullName()} loves ${args.join(', ')}`
} 

console.log(logPersonNameAndInterests('sushi', 'hiking', 'cooking'))