export class BasicCart {
    customerId: number;
    count: number;

    constructor(basicCart: any) {
      this.customerId = basicCart.CustomerId;
      this.count = basicCart.Count;
    }
  
    public html() {
  
      return `
      <p>${this.count}</p>
          `;
    }
  }
  