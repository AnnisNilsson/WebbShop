export class Product {
    id: number;
    product: string;
    price: number;
    description: string;

    constructor(product: any) {
      this.id = product.Id;
      this.product = product.Product;
      this.price = product.Price;
      this.description = product.Description;
    }
  
    public html() {
  
      return `
      <!--PRODUCT-CARD-->
      <div class="product-container" id=${this.id}>
          <div class="product-img"></div>
          <div class="product-information-container">
              <h1 class="product-heading">${this.product}</h1>
              <p class="product-information">Category</p>
              <p class="product-information">${this.price}</p>
              <p class="product-description">${this.description}</p>
              <div class="product-icon-container">
                  <div class="shop-icon-container">
                      <i class="fas fa-cart-arrow-down"></i>
                      <i class="far fa-heart"></i>
                  </div>
                  <div class="rating-icon-container">
                      <i class="far fa-star"></i>
                      <p class="product-information">3.5</p>
                  </div>
              </div>
          </div>
          </div>
      </div>
  </div>
          `;
    }
  }