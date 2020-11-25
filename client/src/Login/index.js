import React, { Component } from 'react';
import LoginButton from '../LoginButton/index';

class Login extends Component {

    render() {

        return (
            <div className="bg-white text-center">
                <header className="pt-20 pb-4">
                    <p className="text-xl font-bold">
                        Welcome to Notions App
                    </p>
                </header>
                <LoginButton />
            </div>
        );
    }
}

export default Login;
