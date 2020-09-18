import {Customer} from './Classes/customer';
import {Category} from './Classes/category';
import {Product} from './Classes/product';
import {BasicCart} from './Classes/basicCart';
//import {FavoriteCount} from './Classes/favoritesCount';

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

    
    //BASICCART
    private _basicCarts: Array <BasicCart> = new Array <BasicCart> ();
    public get basicCarts(): Array<BasicCart> {
        return this._basicCarts;
    }
    public set basicCarts(basicCarts: Array <BasicCart>) {
        this._basicCarts = basicCarts;
    }

    //PRODUCT
    private _products: Array <Product> = new Array <Product> ();
    public get products(): Array<Product> {
        return this._products;
    }
    public set products(products: Array <Product>) {
        this._products = products;
    }
    /*
    //FAVORITECOUNT
    private _favoritesCount: Array <FavoriteCount> = new Array <FavoriteCount> ();
    public get favoritesCount(): Array<FavoriteCount> {
        return this._favoritesCount;
    }
    public set favoritesCount(favoritesCount: Array <FavoriteCount>) {
        this._favoritesCount = favoritesCount;
    }
    */
}