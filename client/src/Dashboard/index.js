import React, { Component } from 'react';

class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.state = { user: {} };
    }

    getUser() {
        fetch("http://localhost:8080/session/ravelry")
            .then(res => res.text())
            .then(res => this.setState({ user: res.user }))
            .catch(err => err)
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        const { user } = this.props;

        return (
            <div className="bg-white text-center">
                <header className="pt-20 pb-4">
                    <p className="text-xl font-bold">
                        Welcome {user}!
                    </p>
                </header>
            </div>
        );
    }
}

export default Dashboard;
