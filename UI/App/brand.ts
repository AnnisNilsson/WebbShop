export class Brand {
  id: number;
  brand: string;

  constructor(brand: any) {
    this.id = brand.Id;
    this.brand = brand.Brand;
  }

  public html() {
    return `
      <ul>
<li>${this.id}</li>
<li>${this.brand}</li>
      </ul>
          `;
  }
}
