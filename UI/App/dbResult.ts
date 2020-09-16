import {Customer} from './Classes/customer';

export class DbResult {
    private _customers: Array <Customer> = new Array <Customer> ();
    public get customers(): Array<Customer> {
        return this._customers;
    }
    public set customers(customers: Array <Customer>) {
        this._customers = customers;
    }
}