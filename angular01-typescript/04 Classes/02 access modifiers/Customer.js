var Customer = /** @class */ (function () {
    //define a constructor
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //getter methods
        get: function () {
            return this._firstName;
        },
        //setter methods
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (v) {
            this._lastName = v;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Martin", "Freeman");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
