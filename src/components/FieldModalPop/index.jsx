import React from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_CONTENT_TYPE as updateContentType, GET_CONTENT_FIELDS as getContentFields} from "../../constants/apiEndPoints";

import './FieldModalPop.css';

export default function FieldModalPop(props) {
    if(!props.show) {
        return null;
    }
    const handleClick = async () => {
        const FieldData = document.getElementById('modal-input').children[0].value;
        await makeRequest(updateContentType(props.contentId), {
            data: {
                field: [FieldData],
                activity: 'add',
            },
        });
        const updatedFields = await makeRequest(getContentFields(props.contentId), {});
        await props.setFields(updatedFields);
    };
    return (
        <div id="modal">
            <div id="modal-content">
                <div id="modal-header">
                    Create a new content field
                </div>
                <div id="modal-sub-header">
                    Name of the field
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

FieldModalPop.propTypes = {
    onClose: PropTypes.func.isRequired,
    setFields: PropTypes.func.isRequired,
    contentId: PropTypes.number,
    show: PropTypes.bool,
};