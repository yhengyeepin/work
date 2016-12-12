const navButton = document.querySelector(".nav-small");
const topNav = document.querySelector(".top-nav");

navButton.addEventListener("click", toggleNav);

function toggleNav(e) {
  console.log(topNav.style.transform);
  if (!topNav.style.transform || topNav.style.transform === "translateX(100%)") {
      //topNav.style.display = "block";
      console.log(navButton.style);
      navButton.style.background = "url(../img/close.png) no-repeat";
      topNav.style.transform = "translateX(0%)";
      navButton.style.right = "160px";
      //topNav.classList.add("top-nav-active");
      console.log(navButton.style);
  } else {
    //topNav.style.display = "none";
    navButton.style.background = "url(../img/hamburger.png) no-repeat";
    //topNav.classList.remove("top-nav-active");
    topNav.style.transform = "translateX(100%)";
    navButton.style.right = "40px";
    console.log(navButton.style.background);
  }
}
