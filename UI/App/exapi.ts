import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';
import {DbResult} from './dbResult';
import axios from "axios";

const baseUrl = 'http://localhost:4000/api/';

export const getData = async () => {
    const teachers = await get('teachers');
    const classes = await get('classes');
    
    let result = new DbResult();
    
    teachers.forEach((a: any )=> result.teachers.push(new Teacher(a)));
    classes.forEach((a: any) => result.schoolClasses.push(new SchoolClass(a)));
    console.log('getTeachers:',result);

    return result;
}

/* export const getClasses = async () => {
    const classes = await get('classes');
    let result = new DbResult();
    classes.forEach((a: any) => result.schoolClasses.push(new SchoolClass(a)));
} */

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