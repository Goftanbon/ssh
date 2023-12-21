const dropdownBtn = document.querySelectorAll(".btn");
const dropdown = document.querySelectorAll(".dropdown");
const links = document.querySelectorAll(".dropdown .list-item");
const dis= document.querySelector(".one");

dis.addEventListener("click",(e) =>
{
  console.log("hello");
})

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);
    console.log(dropdownElement);
  });
});

// dropdownBtn.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const dropdownIndex = e.currentTarget.dataset.dropdown;
//     const dropdownElement = document.getElementById(dropdownIndex);

//     dropdownElement.classList.toggle("active");
//     dropdown.forEach((drop) => {
//       if (drop.id !== btn.dataset["dropdown"]) {
//         drop.classList.remove("active");
//       }
//     });
//     e.stopPropagation();
//   });
// });