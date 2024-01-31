const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("navSub");

openMenu.addEventListener("click",()=>{
    menu.classList.remove('hidden');
});

const Close_Menu = () => {
       menu.classList.add("hidden");
};

closeMenu.addEventListener("click", Close_Menu);


   