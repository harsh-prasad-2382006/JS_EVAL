"use strict";
class PremiumDiscount {
    applyDiscount(discount, price) {
        return price - discount;
    }
}
const a = new PremiumDiscount();
console.log(a.applyDiscount(10, 300));
