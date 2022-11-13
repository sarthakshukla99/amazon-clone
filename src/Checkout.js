import React from 'react'
import { useStateValue } from './StateProvider';
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


const Checkout = () => {

    const [{basket}] = useStateValue()

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
              className="checkout__ad"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sep_2021/JUPITER_21/Phase_2_3/Jupiter_GW-Editorial_1150x323_P3._CB638955217_.jpg"
              alt="amazon Banner"
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty</h2>
                    <p>
                        You have no items in your cart. To buy one or more items, click "Add to cart" next to the items
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Cart</h2>
    
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
    
                </div>
            )}
        </div>

        {basket.length > 0 && (
            <div className="checkout__right">
                <h1>Subtotal</h1>
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout