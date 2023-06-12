function toggle(){
    const toggle = document.querySelector(".toggle"); 
    const banner = document.querySelector(".banner"); 

    toggle.classList.toggle("active");
    banner.classList.toggle("active");
}
const toggle1 = document.querySelector(".fa-bars");

toggle1.addEventListener("click",() => {
    toggle1.classList.toggle("fa-bars");
    toggle1.classList.toggle("fa-times");
});

