const initialState = {
    products : [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 ,img:'https://media.4rgos.it/i/Argos/8839637_R_Z001A?w=750&h=440&qlt=70'},
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 ,img:'https://www.pngitem.com/pimgs/m/170-1703733_boombox-clipart-transparent-background-transparent-background-boombox-png.png' },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFH_JXHO1-6JE3lQlTMSSr_4RBQxUz6tB36g&usqp=CAU' },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStTFT2qBQpEjj0BN3n8t00Tj6q4XBrDK2QCg&usqp=CAU' },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnIlfaWXE0hDVyNGvK1ScNyxG-0uDxOnSgzA&usqp=CAU'},
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12  ,img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg?w=1155&h=1528' },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-DwW3nfQ5WGE-vt2IeJNLn2nHbd2y8j0vQw&usqp=CAU' },
    ],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            const products = initialState.products.filter(product=> product.category === payload) ;
            return {products}
        default :
        return state;
    }
}
export const active = (categoryName) => {
    return {
        type : 'ACTIVE',
        payload : categoryName,
    }
}