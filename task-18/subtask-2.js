const car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo() {
    console.log(`Name: ${this.name}, Model: ${this.model}`);
}

showCarInfo.bind(car)()