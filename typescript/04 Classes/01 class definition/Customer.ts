class Customer {
    //define properties
    firstName:string;
    lastName:string;

    //define a constructor
    constructor(theFirst:string, theLast:string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    
    
    
}
//let's create an instance
/**
    let myCustomer = new Customer();
    myCustomer.firstName = "Martin";
    myCustomer.lastName = "Freeman";
*/

let myCustomer = new Customer("Martin", "Freeman"); 

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

