const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
        <img src="images/logo.jpg" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input stpe="text" class="search-box" placeholder="search products">
                    <button class="search-btn">search</button>
                </div>
                <a>
                     <img src="images/user.png" id="user-img">
                    <div class="login-logout-popup hide">
                         <p class="account-info">Log in as, name</p>
                         <button class="btn" id="user-btn">Log out</button>
                    </div>

                </a>
                <a href="#"><img src="images/cart.png"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="index.html" class="link">Products</a></li>
            <li class="link-item"><a href="index.html" class="link">About</a></li>
            <li class="link-item"><a href="index.html" class="link">Contact</a></li>  
        </ul>
    
    
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        }) 
    }else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}