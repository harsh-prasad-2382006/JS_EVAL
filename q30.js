function calculateCheckoutTotal(...amounts) {
    return amounts.reduce(
        (total, amount) => total + amount,
        0
    );
}
console.log(calculateCheckoutTotal());
console.log(calculateCheckoutTotal(1000));
console.log(calculateCheckoutTotal(1000, 200, 50, 30));