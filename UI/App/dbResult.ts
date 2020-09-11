/*
import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
*/
import {Customer} from './customer';
import {Brand} from './brand';

export class DbResult {
    private _customers: Array <Customer> = new Array <Customer> ();
    public get customers(): Array<Customer> {
        return this._customers;
    }
    public set customers(customers: Array <Customer>) {
        this._customers = customers;
    }
    private _brands: Array <Brand> = new Array <Brand>();
    public get brands(): Array <Brand> {
        return this._brands;
    }
    public set brands(brands: Array <Brand>) {
        this._brands = brands;
    }
}