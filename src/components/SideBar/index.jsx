import React from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";
import { GET_CONTENT } from "../../constants/apiEndPoints";
import { CONTENT_TYPE_ROUTE, CONTENT_ROUTE } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

import './SideBar.css';

export default function SideBar(props) {
    const [collections, setCollections] = React.useState([]);
    const navigate = useNavigate();
    const navigateToContentTypeRoute = () => {
        navigate(CONTENT_TYPE_ROUTE);
    };

    const navigateToContentRoute = () => {
        const url = CONTENT_ROUTE.replace(':contentId', id);
        navigate(url);
    };

    React.useEffect(() => {
        makeRequest(GET_CONTENT, {})
            .then((response) => {
                setCollections(response);
            });
    }, []);
    
    return (
        <div id="sidebar">
            <div id="sidebar-header">
                CMS+
            </div>
            <div id="sidebar-content">
                <div id="collection-types">
                    <div id="collection-types-header">
                        Collection Types
                    </div>
                    <div id="collection-content">
                        <ul>
                            {collections.map((collection) => {
                                return (
                                    <li key={collection.id} id="collection-ele" onClick={() => navigateToContentRoute(collection.id)}>{collection.contentTypeName}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div id="content-type-builder" onClick={navigateToContentTypeRoute}>
                Content Type Builder
            </div>
        </div>
    );
}
SideBar.propTypes = {
    collections: PropTypes.array,
};
