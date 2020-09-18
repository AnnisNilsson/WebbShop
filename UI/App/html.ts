import { Customer } from './Classes/customer';
import { Category } from './Classes/category';
import { BasicCart } from './Classes/basicCart';
import {Product} from './Classes/product';
import {FavoriteCount} from './Classes/favoritesCount';

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

export const displayBasicCart = (basicCarts: Array<BasicCart>): void => {
  const cartContainer = document.getElementById('cart-container');
  if(cartContainer !== null) {
    basicCarts.forEach((a: BasicCart, idx: number) => {
      cartContainer.innerHTML += a.html();
    })
  };
};


export const displayProduct = (products: Array<Product>): void => {
  const productContainer = document.getElementById('products-container');
  if(productContainer !== null) {
    products.forEach((a: Product, idx: number) => {
      productContainer.innerHTML += a.html();
    })
  };
};

export const displayFavoriteCount = (favoritesCount: Array<FavoriteCount>): void => {
  const favoriteCountContainer = document.getElementById('favorite-container');
  if(favoriteCountContainer !== null) {
    favoritesCount.forEach((a: FavoriteCount, idx: number) => {
      favoriteCountContainer.innerHTML += a.html();
    })
  };
};



