import React from "react";
import { useNavigate } from "react-router-dom";
import { CONTENT_TYPE_ROUTE } from "../../constants/routes";
import authRequest from "../../utils/authRequest";
import { LOGIN, VALIDATE_TOKEN } from "../../constants/apiEndPoints";
const loginImg = require('../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx@3x.png');

import './Login.css';

export default function Login() {
    const [msg, setMsg] = React.useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        authRequest(LOGIN, {
            data: {
                email: document.getElementById('login-inputs').children[0].value,
                password: document.getElementById('login-inputs').children[1].value,
            },
        })
            .then((response) => {
                localStorage.setItem('token', response.token);
                authRequest(VALIDATE_TOKEN, {
                    headers: {
                        Authorization: `Bearer ${response.token}`,
                    },
                });
            })
            .then((response) => {
                setMsg('');
                navigate(CONTENT_TYPE_ROUTE);
            })
            .catch((error) => {
                localStorage.removeItem('token');
                setMsg('Invalid credentials');
            });
    };
    return (
        <div id="login">
            <div id="login-img">
                <div>
                    Design APIs fast,
                </div>
                <div>
                    Manage content easily.
                </div>
                <img src={loginImg} alt="login-image" />
            </div>
            <div id="login-form">
                <div id="login-header">
                    Login to your CMS+ account
                </div>
                <div id="login-inputs">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div id="login-btn" onClick={handleLogin}>Login</div>
                    {msg && <div id="login-error">{msg}</div>}
                </div>
            </div>
        </div>
    );
}