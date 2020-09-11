import { Customer } from './customer';
import {Brand} from './brand';

export const displayCustomers = (customers: Array<Customer>): void => {
  ///const teachersElement = document.getElementById('teacher-container');
  console.log(customers);
  /*
  if (teachersElement !== null) {
    teachers.forEach((a: Teacher, idx: number) => {
      teachersElement.innerHTML += a.html();
    });
}
   */
};

export const displayBrands = (brands: Array<Brand>): void => {
  console.log(brands);
}

