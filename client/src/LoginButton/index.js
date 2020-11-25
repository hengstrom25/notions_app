import React, { Component } from 'react';
import ravelryLogo from '../img/ravelryLogo.png';

class LoginButton extends Component {

    render() {

        return (
            // <a href="https://www.ravelry.com/oauth2/auth?client_id=3e8acf8f3a5ebe9953d579569ba4ebe4&redirect_uri=https://localhost:8080/session/ravelry&response_type=code&state=abcdef123"
            <a href="/session/ravelry"
                className="btn shadow-md rounded py-2 px-4 bg-red-200 hover:bg-red-300">
                <span className="pr-2 font-bold">Log in with</span>
                <img className="inline-block pb-1" style={{ width: "65px" }} src={ravelryLogo} alt="Ravelry" />
            </a>
        );
    }
}

export default LoginButton;

