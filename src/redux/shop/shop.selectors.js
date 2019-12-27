import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPeview = createSelector(
    [selectCollections],
    collections=> Object.keys(collections).map(key =>collections[key])
)

export const selectColection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
