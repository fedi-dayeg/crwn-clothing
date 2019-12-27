import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
//import './directory.style.scss';
import {DirectoryMenuContainer} from "./directory.styles";

import {connect} from 'react-redux';

import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => (

    <DirectoryMenuContainer>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </DirectoryMenuContainer>
);

const mapToStateProps = createStructuredSelector({
    sections: selectDirectorySection
});
export default connect(mapToStateProps)(Directory);
