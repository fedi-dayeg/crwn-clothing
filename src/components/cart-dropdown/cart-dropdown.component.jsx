import React from 'react';
import {connect} from 'react-redux';
//import CustomButton from "../../custom-button/custom-button.component";
//import './cart-dropdown.style.scss';

import CartItem from "../cart-item/cart-item.component";


import {selectCartItems} from "../../redux/cart/cart.selectors";

import {createStructuredSelector} from "reselect";

import {withRouter} from 'react-router-dom'

import {toggleCartHidden} from "../../redux/cart/cart.action";


//this is for styles .jsx
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(
                        cartItem => (
                            <CartItem key={cartItem.id}
                                      item={cartItem}/>
                        ))
                    :
                    <EmptyMessageContainer> You Cart is Empty </EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
