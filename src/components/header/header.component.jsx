import React from 'react';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import {auth} from "../../firebase/firebase.utils";

import {connect} from 'react-redux';

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
//  import {setCurrentUser} from "../../redux/user/user.actions";
import {selectCurrentUser} from "../../redux/user/user.selectors";


import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.style";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/shop'> CONTACT </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
                ) : (
                    <OptionLink to='/signin'> SIGN IN</OptionLink>
                )}
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}

    </HeaderContainer>
);

const mapStateTpProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateTpProps)(Header);
