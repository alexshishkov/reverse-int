module.exports = function reverse (n) {
    if (n > 0) {
        return n.toString().split('').reverse().join("")
    } else if ((n < 0)) {
        let number = Math.abs(n)
        return (number.toString().split('').reverse().join(""))
    }
}
