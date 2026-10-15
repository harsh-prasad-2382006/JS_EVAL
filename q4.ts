abstract class PaymentMethod{
    abstract  processPayment():void
    abstract getPaymentDetails():void
}
class CreditCardPayment extends PaymentMethod{
    processPayment(): void {
        console.log("Payment is happening with credit card....")
    }
    getPaymentDetails(): void {
        console.log("Payment done...")
    }

}
class UPIPayment extends PaymentMethod{
    processPayment(): void {
        console.log("Payment is happening via UPI....")
    }
    getPaymentDetails(): void {
        console.log("Payment done...")
    }

}
const credit  =  new CreditCardPayment();
credit.processPayment()
credit.getPaymentDetails()
const upi  =  new UPIPayment();
upi.processPayment()
upi.getPaymentDetails()