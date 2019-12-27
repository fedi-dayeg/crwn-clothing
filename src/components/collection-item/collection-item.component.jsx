import React from 'react';
//import './collection-item.style.scss';

import CustomButton from "../../custom-button/custom-button.component";

import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.action";

//styles from jsx
import {CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer} from "./collection-styles.styles";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage
                className='image'
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <NameContainer>{price}</NameContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() =>addItem(item)} inverted>
                Add to Cart
            </AddButton>

        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
