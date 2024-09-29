let nav = document.getElementById("nav"),
    button = document.getElementById("open")
    button.addEventListener("click", () => {
      nav.classList.toggle('header__nav--active')
    });
    