import React from "react";
import makeRequest from "../../utils/makeRequest";
import PropTypes from "prop-types";
import { GET_CONTENT } from "../../constants/apiEndPoints";
import ContentType from "../ContentType";
import ContentModalPop from "../ContentModalPop";

import './ContentContainer.css';

export default function ContentContainer(props) {
    const [content, setContent] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    
    React.useEffect(() => {
        makeRequest(GET_CONTENT, {})
        .then((response) => {
            setContent(response);
            props.setCollection(response);
        });
    }, []);
    return (
        <div id="content-container">
            <div id="content-container-content">
                <div id="add-btn" onClick={() => setShowModal(true)}>
                    + New type
                </div>
                <ContentModalPop show={showModal} onClose={() => setShowModal(false)} setContent={setContent} setCollection={props.setCollection} />
                <div id="content-container-content-types">
                    {content.map((contentType) => (
                        <ContentType key={contentType.id} {...ContentType} setFields={props.setFields} setContainerTitle={props.setContainerTitle} setContent={setContent} setContentId={props.setContentId} />
                    ))}
                </div>
            </div>
        </div>
    );
}

ContentContainer.propTypes = {
    setCollection: PropTypes.func.isRequired,
    setFields: PropTypes.func.isRequired,
    setContainerTitle: PropTypes.func.isRequired,
    setContentId: PropTypes.func.isRequired,
};