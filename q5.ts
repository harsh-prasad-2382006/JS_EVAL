interface DiscountService{
    applyDiscount(discount:number,price:number):number 
}
class PremiumDiscount implements DiscountService{
    applyDiscount(discount:number,price:number): number {
        return price-discount;
    }

}

const a = new PremiumDiscount()
console.log(a.applyDiscount(10,300))