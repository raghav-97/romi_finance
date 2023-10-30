let dropDownContent = document.getElementsByClassName("dropdown-menu");
let menuBtn = document.getElementsByClassName("user");
let aumP = document.getElementsByClassName("aumP");
let hoverCard = document.getElementsByClassName("hv-card");
let bbr = document.getElementsByClassName("bbr");

function hideDropDown() {
  for (let i = 0; i < dropDownContent.length; i++) {
    let currentDropDownContent = dropDownContent[i];
    if (currentDropDownContent) {
      currentDropDownContent.classList.toggle("visible");
    }
  }
}

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    hideDropDown();
  });
}

function showCard(ele) {
  for (let i = 0; i < ele.length; i++) {
    let c = hoverCard[i].classList;
    console.log(ele.length)
    ele[i].addEventListener("mouseover", () => {
      console.log("C");
      c.remove("dn");
    });

    ele[i].addEventListener("mouseout", () => {
      c.add("dn");
    });
  }
}
showCard(bbr);
