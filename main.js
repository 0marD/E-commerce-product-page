// ! number items to buy
let plusBtn = document.querySelector(".input__plus");
let minusBtn = document.querySelector(".input__minus");
let userInput = document.querySelector(".input__number");
const productsContainer = document.querySelector(".cart-modal__contents");
const cartEmptyModal = document.querySelector(".cart-modal__empty");

let userInputItems = 0;

plusBtn.addEventListener("click", () => {
  userInputItems++;
  userInput.value = userInputItems;
});

minusBtn.addEventListener("click", () => {
  userInputItems--;
  if (userInputItems <= 0) {
    userInputItems = 0;
  }
  userInput.value = userInputItems;
});

//!  add items to cart with "Add to cart" button
const addToCartBtn = document.querySelector(".details__quantity__button");
let cartAddedNotification = document.querySelector(
  ".header__cart-avatar__cart__notification"
);

let lastValue = parseInt(cartAddedNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputItems;
  cartAddedNotification.innerText = lastValue;

  cartAddedNotification.style.display = "flex";
  productsContainer.style.display = "flex";
  cartEmptyModal.style.display = "none";
});

//!show modal cart
const cartIconBtn = document.querySelector(".header__cart-avatar__cart");
const cartModal = document.querySelector(".cart-modal");
let priceModal = document.querySelector(".cart-modal__contents__price");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("cart-modal--show");
  priceModal.innerHTML = `$125.00 x ${lastValue} &nbsp<span>$${
    lastValue * 125
  }.00</span>`;
});
let main = document.querySelector(".main");
main.addEventListener("click", () => {
  console.log(cartModal.classList.length);
  if ((cartModal.classList.length = 2)) {
    cartModal.classList.remove("cart-modal--show");
  }
});

//! clear cart items
const clearItemsBtn = document.querySelector(".cart-modal__contents__delete");

clearItemsBtn.addEventListener("click", () => {
  cartEmptyModal.style.display = "flex";
  productsContainer.style.display = "none";
  cartAddedNotification.style.display = "none";
  lastValue = 0;
});

if (lastValue >= 1) {
  cartEmptyModal.style.display = "none";
  productsContainer.style.display = "flex";
} else {
  cartEmptyModal.style.display = "flex";
  productsContainer.style.display = "none";
  cartAddedNotification.style.display = "none";
}

// !modal menu, show and hidden
let menuHamburger = document.querySelector(".header__hamburger");
let menuModal = document.querySelector(".nav--modal__background");
let menuModalClose = document.querySelector(".nav--modal__menu");

menuHamburger.addEventListener("click", () => {
  menuModal.style.width = "100%";
});
menuModalClose.addEventListener("click", () => {
  menuModal.style.width = "0";
});

//! gallery mobile
let imgArray = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let imgIndex = 1;
let nextBtn = document.querySelector(".gallery__image--next");
let previousBtn = document.querySelector(".gallery__image--previous");
let galleryImage = document.querySelector(".gallery__image");

nextBtn.addEventListener("click", () => {
  changeNextImage(galleryImage);
});

previousBtn.addEventListener("click", () => {
  changePreviousImage(galleryImage);
});
// functions
function changeNextImage(galleryImage) {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  galleryImage.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(galleryImage) {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  galleryImage.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

//?  gallery desktop
let galleryThumbnails = document.querySelectorAll(
  ".gallery__thumbnails__thumbnail"
);
galleryThumbnails = [...galleryThumbnails];

galleryThumbnails.forEach((galleryThumbnails) => {
  galleryThumbnails.addEventListener("click", (e) => {
    galleryImage.style.backgroundImage = `url('./images/image-product-${e.target.id}.jpg')`;
  });
});

// ! lightbox
const galleryModal = document.querySelector(".gallery-modal__background");
const galleryModalExit = document.querySelector(".gallery-modal__exit-icon");
let modalNextBtn = document.querySelector(".gallery-modal__image--next");
let modalPreviousBtn = document.querySelector(
  ".gallery-modal__image--previous"
);
let galleryModalThumbnails = document.querySelectorAll(
  ".gallery-modal__thumbnails__thumbnail"
);
galleryModalThumbnails = [...galleryModalThumbnails];
const imageModalContainer = document.querySelector(".gallery-modal__image");

modalNextBtn.addEventListener("click", () => {
  changeNextImage(imageModalContainer);
});

modalPreviousBtn.addEventListener("click", () => {
  changePreviousImage(imageModalContainer);
});

galleryImage.addEventListener("click", () => {
  galleryModal.style.display = "flex";
});

galleryModalExit.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

galleryModalThumbnails.forEach((galleryModalThumbnails) => {
  galleryModalThumbnails.addEventListener("click", (e) => {
    imageModalContainer.style.backgroundImage = `url('../images/image-product-${e.target.id.slice(
      -1
    )}.jpg')`;
  });
});
