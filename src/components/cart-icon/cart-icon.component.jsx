import React from 'react';
//import './cart-icon.style.scss';

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {toggleCartHidden} from "../../redux/cart/cart.action";

//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';

//this for use the style .jsx
import {CartContainer, ShoppingIcon, ItemCountContainer} from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartContainer>

);

const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
