const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu-ham-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-conteiner');
const productDetailClose = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click',closeProductDetailClose);

function toggleDesktopMenu(){
    const isAsideshoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if(!isAsideshoppingCartClosed){
        asideShoppingCart.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideshoppingCartClosed = asideShoppingCart.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    if(!isAsideshoppingCartClosed){
        asideShoppingCart.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    asideShoppingCart.classList.toggle('inactive');
}
function closeProductDetailClose(){
    productDetail.classList.add('inactive')
}

//Array que va obtener los datos del API
const productList = [];
productList.push({
    name: 'Laceado Brasilero',
    price: 150.00,
    image: 'https://media.istockphoto.com/id/1124238208/es/foto/j%C3%B3venes-marr%C3%B3n-pelo-hermosa-modelo-con-el-pelo-largo-recto-bien-cuidado-pelo-cuidado-y.jpg?s=612x612&w=is&k=20&c=ChuF-l-hVGne6KyIRNqDHtDD6CI8B1EkUdyCESTbFr0=',
});
productList.push({
    name: 'Masaje',
    price: 99.90,
    image: 'https://www.materialestetica.com/blog/wp-content/uploads/2022/11/beneficios-masajes-733.png',
});
productList.push({
    name: 'Manicure',
    price: 50.00,
    image: 'https://i.pinimg.com/564x/79/87/91/79879102fd5991a55410821624644d81.jpg',
});
productList.push({
    name: 'Laceado Brasilero',
    price: 150.00,
    image: 'https://media.istockphoto.com/id/1124238208/es/foto/j%C3%B3venes-marr%C3%B3n-pelo-hermosa-modelo-con-el-pelo-largo-recto-bien-cuidado-pelo-cuidado-y.jpg?s=612x612&w=is&k=20&c=ChuF-l-hVGne6KyIRNqDHtDD6CI8B1EkUdyCESTbFr0=',
});
productList.push({
    name: 'Masaje',
    price: 99.90,
    image: 'https://www.materialestetica.com/blog/wp-content/uploads/2022/11/beneficios-masajes-733.png',
});
productList.push({
    name: 'Manicure',
    price: 50.00,
    image: 'https://i.pinimg.com/564x/79/87/91/79879102fd5991a55410821624644d81.jpg',
});
productList.push({
    name: 'Laceado Brasilero',
    price: 150.00,
    image: 'https://media.istockphoto.com/id/1124238208/es/foto/j%C3%B3venes-marr%C3%B3n-pelo-hermosa-modelo-con-el-pelo-largo-recto-bien-cuidado-pelo-cuidado-y.jpg?s=612x612&w=is&k=20&c=ChuF-l-hVGne6KyIRNqDHtDD6CI8B1EkUdyCESTbFr0=',
});
productList.push({
    name: 'Masaje',
    price: 99.90,
    image: 'https://www.materialestetica.com/blog/wp-content/uploads/2022/11/beneficios-masajes-733.png',
});
productList.push({
    name: 'Manicure',
    price: 50.00,
    image: 'https://i.pinimg.com/564x/79/87/91/79879102fd5991a55410821624644d81.jpg',
});

renderProducts(productList);

function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "S/. " + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(imgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);

    /*<div class="product-card">
        <img src="" alt="">
        <div class="product-info">
            <div>
                <p>S/.120.00</p>
                <p>Laceado Brasilero</p>  
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> */
}
}
function openProductDetailAside(){
    const isAsideshoppingCartClosed = asideShoppingCart.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isAsideshoppingCartClosed){
        asideShoppingCart.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.remove('inactive');
}
