function findHighestValueOrder(orders) {
    return orders.reduce((highest, order) =>
        order.totalAmount > highest.totalAmount? order: highest
    );
}

const orders = [
    { orderId: 1, totalAmount: 2500 },
    { orderId: 2, totalAmount: 7000 },
    { orderId: 3, totalAmount: 4500 }
];

console.log(findHighestValueOrder(orders));