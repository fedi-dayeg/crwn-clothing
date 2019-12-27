import React from 'react'
//import './checkout.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotlal} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
    CheckOutPageContainer,
    CheckOutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from "./checkout.styles";

const CheckoutPage = ({cartItems, total}) => (
    <CheckOutPageContainer>
        <CheckOutHeaderContainer>
            <HeaderBlockContainer>
                <span>
                    Product
                </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>
                    Description
                </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>
                    Quantity
                </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>
                    Price
                </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>
                    Remove
                </span>
            </HeaderBlockContainer>
        </CheckOutHeaderContainer>
        {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}

        <TotalContainer>
                Total: ${total}
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckOutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotlal
});

export default connect(mapStateToProps)(CheckoutPage);
