document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');
    const close = document.querySelector('.close');

    const products = {
        cafe: {
            img: 'ruta/a/imagen/cafe.jpg',
            title: 'Café',
            description: 'Un delicioso café artesanal hecho con los mejores granos.',
            price: '$50'
        },
        pastel: {
            img: 'ruta/a/imagen/pastel.jpg',
            title: 'Pastel',
            description: 'Un exquisito pastel elaborado con ingredientes frescos y naturales.',
            price: '$150'
        }
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const productKey = item.getAttribute('data-product');
            const product = products[productKey];

            popupImg.src = product.img;
            popupTitle.textContent = product.title;
            popupDescription.textContent = product.description;
            popupPrice.textContent = product.price;

            popup.style.display = 'block';
        });
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
});
