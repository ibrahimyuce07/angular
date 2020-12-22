export class Customer {
    //properties + constructor:
    constructor(private _firstName: string,
        private _lastName: string) {

    }
    //getter methods
    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName
    }
    //setter methods
    public set firstName(v: string) {
        this._firstName = v;
    }

    public set lastName(v: string) {
        this._lastName = v;
    }
}