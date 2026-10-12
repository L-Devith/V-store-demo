const menuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".navbar__menu");
const cartCounter = document.getElementById("cart-counter");
const addToCartbtns = document.querySelectorAll(".product-card__btn");
const navLinks = document.getElementById(".navbar__link");

let count = 0;

addToCartbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    count++;
    cartCounter.innerText = count;

    const originalText = this.innerHTML;
    this.innerHTML = "Added!";
    setTimeout(() => {
      this.innerHTML = originalText;
    }, 1000);
  });
});

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const searchInput = document.querySelector(".navbar__search-input");
const searchBtn = document.querySelector(".navbar__search-btn");

searchBtn.addEventListener("click", function () {
  const keyword = searchInput.value.trim();

  if (keyword !== "") {
    alert("កំពុងស្វែងរកផលិតផល៖ " + keyword);

    searchInput.value = "";
  } else {
    alert("សូមវាយបញ្ចូលឈ្មោះផលិតផលមុននឹងចុច Search!");
  }
});

