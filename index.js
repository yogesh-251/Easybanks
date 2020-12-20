const navSection = document.getElementById("navSection");
const navbarToggle = navSection.querySelector(".navToggle");
const navbarMenu = navSection.querySelector(".navMenu");
const navbarLinks = navSection.querySelector(".navLinks");
const navbarButton = navSection.querySelector(".requestButton");

function openNavbar(){
  navSection.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu");
}

function closeNavbar(){
  navSection.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu");
}

navbarToggle.addEventListener("click", ()=>{
  if(navSection.classList.contains("opened")){
    closeNavbar();
  }
  else{
    openNavbar();
  }
});

navbarLinks.addEventListener("click",(clickEvent)=>{
  clickEvent.stopPropagation();
})

navbarButton.addEventListener("click",(clickEvent)=>{
  clickEvent.stopPropagation();
})

navbarMenu.addEventListener("click", closeNavbar);
