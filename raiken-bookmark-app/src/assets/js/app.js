//alertbutton show test code


// variables
const sidebar = document.querySelector("#nav-category-list");
const sidebarOpenIcon = document.querySelector(".nav-icon__menu");
const sidebarCloseIcon = document.querySelector('.nav-icon__close');
const userIcon = document.querySelector('.nav-icon__user');
const userMenu = document.querySelector('.nav-user-menu');
const alertModel = document.querySelector('.alert-model');
let alertButton;

//sidebar-show-close
sidebarOpenIcon.addEventListener('click', () => {
    sidebar.classList.add('show-menu');
});
sidebarCloseIcon.addEventListener('click',() => {
    sidebar.classList.remove('show-menu');
});

//user-submenu-show-close
userIcon.addEventListener('click', () => {
   userMenu.classList.add('show-user-menu');
});
document.addEventListener('click', (e) => {
    if(!e.target.classList.contains("nav-icon__user")){
        if(userMenu.classList.contains('show-user-menu')){
            userMenu.classList.remove('show-user-menu');
        }
    }
});

//alert model kodları burada
function showAlertModel(){
    let html = ` <div class="alert-model">
        <div class="alert-model-content">
            <div class="alert-icon">
                <i class='bx bx-error-alt'></i>
            </div>
            <h1 class="alert-title">
                An error occurred while
                adding the bookmark</h1>
            <button class="btn btn__dark alert-btn" id="alert-btn">Okay !</button>
        </div>
    </div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin",html);

    const alertButton = document.querySelector('#alert-btn');
    alertButton.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('d-none');
    });
}
