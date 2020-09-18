import { getData } from "./App/api";

/*EVENT*/

/*CATEGORY-ID*/
const categoryContainer = document.querySelector('#category-container').addEventListener('click', function(e) {
  if (e.target.className === "categories" && e.target.id <= 2) {
    let categoryId = e.target.id
    localStorage.CategoryId = categoryId
    console.log(localStorage.CategoryId, 'categoryid 1 el 2')
  }
  if (e.target.className === "categories" && 3 <= e.target.id) {
    localStorage.CategoryId = 1;
    console.log(localStorage.CategoryId, 'default id')
  }
});

/*USER-DROP-DOWN*/ 
const customerDropDown = document.getElementById('user');
customerDropDown.onchange = (e) => {
let customerId = customerDropDown.options[customerDropDown.selectedIndex].id;
localStorage.CustomerId = customerId;
getData();
console.log(customerId);
}
