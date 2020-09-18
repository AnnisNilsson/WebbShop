import {Customer} from './Classes/customer';
import {Category} from './Classes/category';
import {BasicCart} from './Classes/basicCart';
import {Product} from './Classes/product';
import {FavoriteCount} from './Classes/favoritesCount';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const customers = await get('customers');
    const categories = await get('categories');
    const basicCarts = await get(`basicCart?customerId=${localStorage.CustomerId}`);
    const products = await get(`products?customerId=${localStorage.CustomerId}&categoryId=${localStorage.CategoryId}`);
    const favoritesCount = await get(`favoritesCount?customerId=${localStorage.CustomerId}`);
    let result = new DbResult();

    customers.forEach((a:any) => result.customers.push(new Customer(a)));
    categories.forEach((a:any) => result.categories.push(new Category(a)));
    basicCarts.forEach((a:any) => result.basicCarts.push(new BasicCart(a)));
    products.forEach((a:any) => result.products.push(new Product(a)));
    favoritesCount.forEach((a:any) => result.favoritesCount.push(new FavoriteCount(a)));

    return result;
}
    const get = async(uri:string) => {
        try {
            const result = axios.get(`${baseUrl}${uri}`);
            const {data} = await result;
            return data;
        }
        catch(err) {
            console.log(err);
        }
    }