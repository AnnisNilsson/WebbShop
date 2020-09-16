import {Customer} from './Classes/customer';
import {Category} from './Classes/category';
import {BasicCart} from './Classes/basicCart';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const customers = await get('customers');
    const categories = await get('categories');
    const basicCarts = await get(`basicCart?customerId=${localStorage.CustomerId}`);
    
    let result = new DbResult();

    customers.forEach((a:any) => result.customers.push(new Customer(a)));
    categories.forEach((a:any) => result.categories.push(new Category(a)));
    basicCarts.forEach((a:any) => result.basicCarts.push(new BasicCart(a)));

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