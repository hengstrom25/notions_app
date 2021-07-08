import React, { Component } from 'react';
import ravelryLogo from '../img/ravelryLogo.png';

class LoginButton extends Component {

    render() {

        return (
            <a href={"https://www.ravelry.com/oauth2/auth?response_type=code&redirect_uri=" + process.env.REACT_APP_API_URL + "/session/ravelry/callback&client_id=" + process.env.REACT_APP_RAVELRY_CLIENT_ID + "&state=1234abcd"}
            // <a href="/session/ravelry"
                className="btn shadow-md rounded py-2 px-4 bg-red-200 hover:bg-red-300">
                <span className="pr-2 font-bold">Log in with</span>
                <img className="inline-block pb-1" style={{ width: "65px" }} src={ravelryLogo} alt="Ravelry" />
            </a>
        );
    }
}

export default LoginButton;

