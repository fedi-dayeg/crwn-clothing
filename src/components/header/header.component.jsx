import React from 'react';
import {Link} from "react-router-dom";
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import {auth} from "../../firebase/firebase.utils";

import {connect} from 'react-redux';
import {setCurrentUser} from "../../redux/user/user.actions";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateTpProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateTpProps)(Header);
