import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    // console.log(products)
    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product
                        key={product?.id}
                        product={product}
                    />)
                }
            </div>
            <div className="cart_container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;