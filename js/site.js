"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Responsive Navigation
  const navMain = document.querySelector("#nav-main");
  const navMobile = document.querySelector("#nav-mobile");
  const navTriggerSpan = document.querySelector("#nav-trigger span");

  // Copy content from #nav-main to #nav-mobile
  if (navMain && navMobile) {
    navMobile.innerHTML = navMain.innerHTML;
  }

  // Add click event for the nav trigger
  if (navTriggerSpan) {
    navTriggerSpan.addEventListener("click", function () {
      const navMobileUl = document.querySelector("nav#nav-mobile ul");
      if (navMobileUl) {
        if (navMobileUl.classList.contains("expanded")) {
          navMobileUl.classList.remove("expanded");
          navMobileUl.style.display = "none";
          this.classList.remove("open");
        } else {
          navMobileUl.classList.add("expanded");
          navMobileUl.style.display = "block";
          this.classList.add("open");
        }
      }
    });
  }

  // Add click event for navigation links in mobile navigation
  const navLinks = document.querySelectorAll("#nav-mobile ul a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navMobileUl = document.querySelector("nav#nav-mobile ul");
      if (navMobileUl && navMobileUl.classList.contains("expanded")) {
        navMobileUl.classList.remove("expanded");
        navMobileUl.style.display = "none";
        if (navTriggerSpan) {
          navTriggerSpan.classList.remove("open");
        }
      }
    });
  });
});
