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
