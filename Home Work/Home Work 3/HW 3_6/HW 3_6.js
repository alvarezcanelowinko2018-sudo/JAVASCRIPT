let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        title: 'Juice',
        price: 47,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

for(const product of products) {
    const TITLE = product.title;
    const PRICE = product.price;
    const IMAGE = product.image;

    document.write(`
            <div class='product-card'>
                <h3 class='product-title'>${TITLE}. Price – ${PRICE}</h3>
                <img src='${IMAGE}' alt='photo' class='product-image'>
            </div>
`)
}
