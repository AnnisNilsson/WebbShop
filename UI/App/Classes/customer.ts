export class Customer {
    id: number;
    email: string;
    firstName: string;
    lastName: string;

    constructor(customer: any) {
      this.id = customer.Id;
      this.email = customer.Email;
      this.firstName = customer.FirstName;
      this.lastName = customer.LastName;
    }
  
    public html() {
  
      return `
      <option id=${this.id}>${this.firstName} ${this.lastName}</option>
          `;
    }
  }
  