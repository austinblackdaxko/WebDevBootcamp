function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("SO")
}

// singSong();
// singSong();
// singSong();
// singSong();

function greet(firstName, lastName) {
    console.log(`Hey there ${firstName} ${lastName[0]}`)
}

function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 + num2;
}