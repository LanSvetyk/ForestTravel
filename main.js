const burgerCloseBtn = () => {
  const headerNavBtn = document.querySelector(".header-nav-button");
  const headerNavList = document.querySelector(".header-nav-list");
  headerNavBtn.addEventListener("click", () => {
    console.log(headerNavBtn);
    if (!headerNavBtn.classList.contains("header-nav-button-close")) {
      headerNavBtn.classList.add("header-nav-button-close");
      headerNavBtn.classList.remove("header-nav-button");
      headerNavList.style.opacity = "1";
      headerNavList.style.zIndex = "9";
    } else {
      headerNavBtn.classList.remove("header-nav-button-close");
      headerNavBtn.classList.add("header-nav-button");
      headerNavList.style.opacity = "0";
      headerNavList.style.zIndex = "-1";
    }
  });
};
burgerCloseBtn();
