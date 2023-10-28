
import './Product.css'

const Product = (props) => {
    const { img, seller, name, price, ratings } = props.product;
    return (
        <div className='product_card'>
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_body">
                <h4>{name.slice(0, 25)}</h4>
                <p>Price:${price}</p>
            </div>
            <div className="card_bottom_up_container">
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <div className="">
                <button className='product_footer'>Add to Cart <span style={{ fontSize: '17px' }} className="material-symbols-outlined">
                    add_shopping_cart
                </span></button>
            </div>
        </div>
    );
};

export default Product;