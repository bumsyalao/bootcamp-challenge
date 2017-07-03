function getPrimes(value) {

    var arrayList = [];
    if (typeof(value) != "number") {

        return "positive integers only";
    }

    if (value <= 1) {

        return value + " is not a prime number";
    }

    for (var i = 2; i < value; i++ ) {

        var isPrime = true;

        for(var j = 2; j < i; j++){
            if(i % j === 0) {
                isPrime = false;
            }
        }
    
        if (isPrime === true) {
            arrayList.push(i);
        }
        
    }
    return arrayList;
}

console.log(getPrimes(2));

module.exports = getPrimes;