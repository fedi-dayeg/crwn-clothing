import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

//import './collections-overview.style.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollectionForPeview} from "../../redux/shop/shop.selectors";

import {CollectionOverviewContainer} from "./collections-overview.styles";

const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPeview
});

export default connect(mapStateToProps)(CollectionsOverview);
