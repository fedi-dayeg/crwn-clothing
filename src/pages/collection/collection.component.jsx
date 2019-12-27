import React from 'react';
import CollectionItem from "../../components/collection-item/collection-item.component";

import {connect} from 'react-redux';
import {selectColection} from "../../redux/shop/shop.selectors";

//import './collection.style.scss';
import {CollectionPageContainer, CollectionItemsContainer, CollectionTitle} from "./collection.styles";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    console.log(collection);
    return(
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item =><CollectionItem key={item.id} item={item}/>)
            }
        </CollectionItemsContainer>
    </CollectionPageContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectColection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);



