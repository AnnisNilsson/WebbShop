const customerDropDown = document.getElementById('user');
const categoryBtn = document.querySelectorAll('.product-container');
/*EVENT*/

const categoryContainer = document.querySelector('#category-container').addEventListener('click', function(e) {
  if(e.target.className === 'categories') {
    console.log(e.target.id);
    let categoryId = e.target.id;
    localStorage.CategoryId = categoryId;
  }
})


/*USER-DROP-DOWN*/ 
customerDropDown.onchange = (e) => {
let customerId = customerDropDown.options[customerDropDown.selectedIndex].id;
localStorage.CustomerId = customerId;
console.log(customerId);
}
/*
const selectCustomer = async (e, onclick) =>  {
try {
  e.stopPropagation(); //stop bubbling
  const customerName = document.querySelectorAll('.customer-name');
  localStorage.CustomerId = customerName.id;
  localStorage.CategoryId = 1;
  console.log(target.id);
}
catch(err) {
  console.log("selectCustomer: ERROR");
}
};
*/
