const subMenu = document.querySelectorAll(".dep2 > li");

subMenu[0].classList.add("bold");
subMenu.forEach((el, index) => {
  el.onclick = () => {
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.remove("bold");
    }
    subMenu[index].classList.add("bold");
  };
});
