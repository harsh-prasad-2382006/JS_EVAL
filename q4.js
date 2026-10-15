"use strict";
class PaymentMethod {
}
class CreditCardPayment extends PaymentMethod {
    processPayment() {
        console.log("Payment is happening with credit card....");
    }
    getPaymentDetails() {
        console.log("Payment done...");
    }
}
class UPIPayment extends PaymentMethod {
    processPayment() {
        console.log("Payment is happening via UPI....");
    }
    getPaymentDetails() {
        console.log("Payment done...");
    }
}
const credit = new CreditCardPayment();
credit.processPayment();
credit.getPaymentDetails();
const upi = new UPIPayment();
upi.processPayment();
upi.getPaymentDetails();
