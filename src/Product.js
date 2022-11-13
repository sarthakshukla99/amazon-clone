import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
    
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <span>{price}</span>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}><b>Add to Cart</b></button>
        </div>
    );
};

export default Product;
