import React from 'react';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { CREATE_CONTENT, GET_CONTENT } from '../../constants/apiEndPoints';

import './ContentModalPop.css';

export default function ContentModalPop(props) {
    if (!props.show) {
        return null;
    }
    const handleClick = async () => {
        const contentName = document.getElementById('modal-input').children[0].value;
        await makeRequest(CREATE_CONTENT, {
            data: {
                contentName,
                contentFields: [],
            },
        });
        const updatedContent = await makeRequest(GET_CONTENT, {});
        await props.setCollections(updatedContent);
    };
    return (
        <div id="modal">
            <div id="modal-content">
                <div id="modal-header">
                    Create a new content type
                </div>
                <div id="modal-sub-header">
                    Name of the content type
                </div>
                <div id="modal-input">
                    <input type="text" />
                </div>
                <div id="modal-buttons">
                    <button id="modal-delete" onClick={props.onClose}>Cancel</button>
                    <button id="modal-create" type="submit" onClick={handleClick}>Create</button>
                </div>
            </div>
        </div>
    );
}

ContentModalPop.propTypes = {
    onClose: PropTypes.func.isRequired,
    setCollections: PropTypes.func.isRequired,
    show: PropTypes.bool,
};