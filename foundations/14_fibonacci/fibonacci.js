const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } else {
        let [prev, curr] = [0, 1];

        for (let i=0; i<Number(num); i++) {
            [prev, curr] = [curr, prev + curr];
        }
        return prev
    } 
};

// Do not edit below this line
module.exports = fibonacci;
