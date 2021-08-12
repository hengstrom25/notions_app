import React, { Component } from 'react';
import RowCounter from '../RowCounter/index';
import ProjectList from '../ProjectList/index';


class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: {
                ravelryUser: {}
            }
        };
    }

    getUser() {
        fetch("/api/current_user")
            .then(res => res.json())
            .then((data) => {
                this.setState({ user: data.user })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        return (
            <div className="bg-white">
                <header className="pt-4 pl-4">
                    <img className="inline-block pb-1" style={{ width: "65px" }} src={this.state.user.ravelryUser.large_photo_url} alt="Ravelry Avatar" />
                    <p className="text-xl font-bold">
                        Welcome {this.state.user.username}!
                    </p>
                </header>
                <ProjectList />
            </div>
        );
    }
}

export default Dashboard;
