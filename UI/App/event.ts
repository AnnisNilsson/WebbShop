/*EVENT*/

/*USER-DROP-DOWN*/
const customerDropDown = document.getElementById('user');
const selectCustomer = async (event: MouseEvent) =>  {
try {
  event.stopPropagation(); //stop bubbling
  let target = event.target as Element;
  localStorage.CustomerId = target.id;
  localStorage.CategoryId = 1;
  console.log(target.id);
}
catch(err) {
  console.log("selectCustomer: ERROR");
}
};

