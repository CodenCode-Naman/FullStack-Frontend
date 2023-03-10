import React from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";
import { GET_CONTENT_FIELDS as getContentFields} from "../../constants/apiEndPoints";

import './ContentType.css';

export default function ContentType(props) {
    const [fields, setFields] = React.useState([]);
    React.useEffect(() => {
        makeRequest(getContentFields(props.id), {})
            .then((response) => {
                setFields(response);
            });
    }, [fields]);
    const handleClick = () => {
        props.setFields(fields);
        props.setContainerTitle(props.contentTypeName);
        props.setContentId(props.id);
    };
    return (
        <div id="content-type" onClick={handleClick}>
            <div id="content-type-name">{props.contentTypeName}</div>
            <div id="content-type-total">{fields.length}</div>
        </div>
    );
}

ContentType.propTypes = {
    contentTypeName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    setFields: PropTypes.func.isRequired,
    setContainerTitle: PropTypes.func.isRequired,
    setContentId: PropTypes.func.isRequired,
};
