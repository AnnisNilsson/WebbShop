let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

/*EVENT*/

/*USER-DROP-DOWN*/
const selectUserElem = document.querySelector('.user-dropdown');

selectUserElem.onchange = (e) => {
  const result = e.target.id;
  localStorage.CustomerId = result;
  localStorage.CategoryId = 1;
  console.log(result);
}