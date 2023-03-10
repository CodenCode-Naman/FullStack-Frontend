import React from "react";
import {useParams} from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
    const {code} = useParams();
    return (
        <div className="errorContents">
            <p className="errorMsg">Oops!, something goes wrong!</p>
            {errorCode && <p className="errorMsg">{`Error code: ${errorCode}`}</p>}
    </div>
    );
}