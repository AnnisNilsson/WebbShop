/*
import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
*/

import {Customer} from './customer';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const customers = await get('customers');
    let result = new DbResult();

    customers.forEach((a:any) => result.customers.push(new Customer(a)));

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