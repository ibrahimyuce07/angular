class Customer {
    //define properties
    private _firstName:string;
    private _lastName:string;

    //define a constructor
    constructor(theFirst:string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    //getter methods
    public get firstName() : string {
        return this._firstName;
    }
    
    public get lastName() : string {
        return this._lastName
    }

    //setter methods
    
    public set firstName(v : string) {
        this._firstName = v;
    }
    
    public set lastName(v : string) {
        this._lastName = v;
    }

    //tsc -t es5 Customer.ts
}


let myCustomer = new Customer("Martin", "Freeman"); 

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

