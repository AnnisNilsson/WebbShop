const customerDropDown = document.getElementById('user');

/*EVENT*/
/*USER-DROP-DOWN*/
 
customerDropDown.onchange = (e) => {
let customerId = customerDropDown.options[customerDropDown.selectedIndex].id;
localStorage.CustomerId = customerId;
localStorage.CategoryId = 1;
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
