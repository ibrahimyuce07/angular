var Customer = /** @class */ (function () {
    //define a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
/**
    let myCustomer = new Customer();
    myCustomer.firstName = "Martin";
    myCustomer.lastName = "Freeman";
*/
var myCustomer = new Customer("Martin", "Freeman");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
