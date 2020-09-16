import { Customer } from './Classes/customer';

export const displayCustomers = (customers: Array<Customer>): void => {
  const customerContainer = document.getElementById('user');
  if(customerContainer !== null) {
    customers.forEach((a: Customer, idx: number) => {
      customerContainer.innerHTML += a.html();
    })
  };
};


