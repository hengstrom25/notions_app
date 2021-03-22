import React, { Component } from 'react';

class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.state = { user: {} };
    }

    getUser() {
        fetch("/api/current_user")
            .then(res => res.json())
            .then((data) => {
                this.setState({ user: data.user })
                console.log(data.user)
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        return (
            <div className="bg-white text-center">
                <header className="pt-20 pb-4">
                    <p className="text-xl font-bold">
                        Welcome {this.state.user.username}!
                    </p>
                </header>
            </div>
        );
    }
}

export default Dashboard;
