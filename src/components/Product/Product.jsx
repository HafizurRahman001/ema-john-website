
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, seller, name, price, ratings } = props.product;
    const handleAddToCart = (props.handleAddToCart)



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
                <button onClick={() => handleAddToCart(props.product)} className='product_footer'>
                    Add to Cart
                    <FontAwesomeIcon style={{ paddingLeft: "7px", }} icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
};

export default Product;