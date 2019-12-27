import React from 'react';
//import './cart-item.style.scss';
import {CartItemContainer, ItemDetailsContainer, CartItemImage} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
