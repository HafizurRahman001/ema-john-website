import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    // console.log("add to cart", cart)

    // console.log(products)
    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product
                        key={product?.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="main_cart_body">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;