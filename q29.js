function calculateDeliveryCharge(
    orderAmount,
    deliveryFee = 50
) {
    return orderAmount + deliveryFee;
}

console.log(calculateDeliveryCharge(1000));

console.log(calculateDeliveryCharge(1000, 100));
