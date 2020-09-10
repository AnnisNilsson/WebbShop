/*
import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
*/
import {Customer} from './customer';


export class DbResult {
    private _customers: Array <Customer> = new Array <Customer> ();
    public get customers(): Array<Customer> {
        return this._customers;
    }
    public set customers(customers: Array <Customer>) {
        this._customers = customers;
    }
}