import { Customer } from './Classes/customer';
import { Category } from './Classes/category';

export const displayCustomers = (customers: Array<Customer>): void => {
  const customerContainer = document.getElementById('user');
  if(customerContainer !== null) {
    customers.forEach((a: Customer, idx: number) => {
      customerContainer.innerHTML += a.html();
    })
  };
};

export const displayCategories = (categories: Array<Category>): void => {
  const categoryContainer = document.getElementById('category-container');
  if(categoryContainer !== null) {
    categories.forEach((a: Category, idx: number) => {
      categoryContainer.innerHTML += a.html();
    })
  };
};


