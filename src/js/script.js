const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

//
const specialist = document.getElementById("specialist");
let count = 0;
setInterval(() => {
  if (count == 0) {
    specialist.innerText = `Front-End Developer`;
    count++;
  } else if (count == 1) {
    specialist.innerText = `Web Designer`;
    count++;
  } else if (count == 2) {
    specialist.innerText = `Content Writing`;
    count++;
  } else if (count == 3) {
    specialist.innerText = `Mahasiswa Teknik`;
    count++;
  } else if (count == 4) {
    count = 0;
  }
}, 1000);
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    swipeUp.style.display = "flex";
    toggleTheme.style.bottom = "72px";
  } else {
    setTimeout(() => {
      swipeUp.style.display = "none";
    }, 400);
    toggleTheme.style.bottom = "36px";
  }
});

toggleTheme.addEventListener("click", () => {
  if (toggle) {
    mode("#1c1c1d", colorBackground, "white", "0 0 2px rgba(28, 28, 29, 0.7)");
    toggleIcon.setAttribute("src", "src/img/sun.svg");
    toggleTheme.style.backgroundColor = "white";
    toggle = false;
    modeIcon = "dark";
  } else {
    mode("rgba(255, 255, 255, 0.3)", "white", "black", "white");
    toggleIcon.setAttribute("src", "src/img/moon.svg");
    toggleTheme.style.backgroundColor = "#b815b0";
    toggle = true;
    modeIcon = "light";
  }
});

setInterval(() => {
  icons.forEach((element) => {
    let attr = element.getAttribute("src").split("-");
    element.setAttribute("src", `${attr[0]}-${modeIcon}.svg`);
  });
}, 1000);

function mode(colorNav, colorBackground, color, shadow) {
  document.body.style.backgroundColor = colorBackground;
  nav.style.backgroundColor = colorNav;
  document.querySelector("#find_me h1").style.textShadow = shadow;
  textDark.forEach((element) => {
    element.style.color = color;
  });
  span.forEach((element) => {
    element.style.backgroundColor = color;
  });
}

burgerMenu.addEventListener("click", () => {
  if (toggleNav) {
    navItem.style.display = "none";
    buttonCV.style.display = "none";
    span.forEach((element) => {
      element.style.width = "100%";
    });
    toggleNav = false;
  } else {
    navItem.style.display = "flex";
    buttonCV.style.display = "flex";
    toggleNav = true;
    span[1].style.width = "70%";
    span[2].style.width = "50%";
  }
});
