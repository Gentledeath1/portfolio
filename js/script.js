// var menuIcon = document.getElementById('hamburger-container');
// var menuList = document.getElementById('menu-list');

// menuIcon.addEventListener('click', function () {
//   menuList.style.right = menuList.style.right === '0px' ? '-250px' : '0px';
// });


// test
const hamburger = document.getElementById("hamburger-container");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
});

// Optional: close menu when a link is clicked
document.querySelectorAll("#menu-list a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
  });
});
