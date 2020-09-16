import {Customer} from './Classes/customer';
import {Category} from './Classes/category';

export class DbResult {
    //CUSTOMERS
    private _customers: Array <Customer> = new Array <Customer> ();
    public get customers(): Array<Customer> {
        return this._customers;
    }
    public set customers(customers: Array <Customer>) {
        this._customers = customers;
    }

    //CATEGORIES
    private _categories: Array <Category> = new Array <Category> ();
    public get categories(): Array<Category> {
        return this._categories;
    }
    public set categories(categories: Array <Category>) {
        this._categories = categories;
    }

}