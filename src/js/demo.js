var navBarList = document.querySelector(".navbar__list");

var navBarItems = navBarList.getElementsByClassName("navbar__item");

for (var i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("is-active");
    current[0].className = current[0].className.replace(" is-active", "");
    this.className += " is-active";
  });
}