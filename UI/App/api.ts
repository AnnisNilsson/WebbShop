/*
import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
*/

import {Customer} from './customer';
import {Brand} from './brand';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const customers = await get('customers');
    const brands = await get('brands');
    let result = new DbResult();

    customers.forEach((a:any) => result.customers.push(new Customer(a)));
    brands.forEach((a:any) => result.brands.push(new Brand(a)));

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