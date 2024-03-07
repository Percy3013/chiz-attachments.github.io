primClick = () => {
  document.querySelector(".primary-items").classList.toggle("drop");
};

document.querySelectorAll(".primary-items a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation(); // Stop the event propagation
    document.querySelector(".primary-items").classList.remove("drop");
  });
});

document.addEventListener("click", (event) => {
  const primaryItems = document.querySelector(".primary-items");
  const primaryLi = document.querySelector(".primary-li");

  // Check if the clicked element is not inside .primary-li or its descendants
  if (!primaryLi.contains(event.target) || !dropdownLi.contains(event.target)) {
    primaryItems.classList.remove("drop");
  }
});

moreClick = () => {
  document.querySelector(".dropdown").classList.toggle("drop");
};

document.querySelectorAll(".dropdown a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation(); // Stop the event propagation
    document.querySelector(".dropdown").classList.remove("drop");
  });
});

document.addEventListener("click", (event) => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownLi = document.querySelector(".dropdown-li");

  // Check if the clicked element is not inside .dropdown-li or its descendants
  if (!dropdownLi.contains(event.target)) {
    dropdown.classList.remove("drop");
  }
});
