/*EVENT*/

/*USER-DROP-DOWN*/
const customerDropDown = document.getElementById('user');
 
customerDropDown.onchange = (e) => {
let customerId = customerDropDown.options[customerDropDown.selectedIndex].id;
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
