import React from "react";
import PropTypes from "prop-types";

import './Navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar">
            {props.title}
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};