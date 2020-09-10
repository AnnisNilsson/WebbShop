export class Customer {
    id: number;
    email: string;
    avatar: string;
    firstName: string;
    lastName: string;
    phone: string;

    constructor(customer: any) {
      this.id = customer.Id;
      this.email = customer.Email;
      this.avatar = customer.AvatarUrl;
      this.firstName = customer.FirstName;
      this.lastName = customer.LastName;
      this.phone = customer.Phone;
    }
  
    public html() {
  
      return `
      <ul>
      <li>${this.id}</li>
      <li>${this.email}</li>
      <li>${this.avatar}</li>
      <li>${this.firstName}</li>
      <li>${this.lastName}</li>
      <li>${this.phone}</li>
      </ul>
          `;
    }
  }
  