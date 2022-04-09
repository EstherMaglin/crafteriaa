const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
            <img src="images/logo.jpg" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li><a href="#" class="footer-link"> 3D Crafts</a></li>
                    <li><a href="#" class="footer-link"> Scrapbook</a></li>
                    <li><a href="#" class="footer-link"> Explosion Box</a></li>
                    <li><a href="#" class="footer-link"> Hampers</a></li>
                    <li><a href="#" class="footer-link"> Layouts</a></li>

                </ul>
            </div>
            <p class="footer-credit">Essy's Crafteriaa | An Handcrafted Online Store</p>
        </div>
    
    
    
    
    `;
}

createFooter();