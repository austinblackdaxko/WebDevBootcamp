const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num**2;
    },
    cube: function (num) {
        return num**3;
    },
    add(x, y) {
        return x + y;
    }
}

const cat = {
    name: 'Luna',
    color: 'Grey',
    breed: 'cat',
    meow() {
        console.log(`${this.name} says meow, meow, meow`)
    }
}

const meow2 = cat.meow;



// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("doesn't exist")
// }



function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e);
        console.log('Please pass a string next time!')
    }
}