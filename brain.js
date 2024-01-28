const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("navSub");

openMenu.addEventListener("click",()=>{
    closeMenu.classList.remove("hidden");
    menu.classList.remove("hidden");
    openMenu.classList.add("hidden");
});

const Close_Menu = () => {
       // closeMenu.classList.add("show");
       openMenu.classList.add("show");
       openMenu.classList.remove("hidden");
       menu.classList.add("hidden");
};

closeMenu.addEventListener("click", Close_Menu);



   