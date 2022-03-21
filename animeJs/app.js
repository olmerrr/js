const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", handleToggle);
const info = document.querySelector(".info");

function handleToggle() {
  if (info.style.opacity == 0) {
    anime({
      targets: info,
      opacity: 1,
      height: info.scrollHeight,
      duration: 640,
      easing: "easeInOutSine",
    });
  } else
    anime({
      targets: info,
      opacity: 0,
      height: 0,
      duration: 740,
      easing: "easeInOutSine",
    });
}

// если целе несколько в targets указываю [целей]
// height: info.scrollHeight - высота элемента,
