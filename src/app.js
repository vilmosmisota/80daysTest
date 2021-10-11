const button = document.querySelector(".read-more-btn");
const contentContainer = document.querySelector(".read-content-container");
const arrow = document.querySelector(".fa-chevron-down");

const readMore = () => {
  button.addEventListener("click", () => {
    arrow.classList.toggle("fa-chevron-down");
    arrow.classList.toggle("fa-chevron-up");
    contentContainer.classList.toggle("isActive");
  });
};

readMore();
