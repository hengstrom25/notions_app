import React, { Component } from 'react';
import RowCounter from '../RowCounter/index';

class Project extends Component {
  constructor (props) {
    super(props);

    this.state = { name: '' };
  }

  getProject (id) {
    fetch(`/api/current_user/projects/${id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ name: data.project['name'] })
      })
      .catch(err => err)
  }

  getRowCountersForProject (projectId) {
    fetch(`/api/current_user/projects/${projectId}/row_counters`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ name: data.project['name'] })
      })
      .catch(err => err)
  }

  componentDidMount () {
    const {id} = this.props.match.params
    this.getProject(id)
    this.getRowCountersForProject(id)
  }


  render () {

    return (
      <div>
      <p>Name: {this.state.name}</p>
      <RowCounter />
      </div>
    );
  }
}

export default Project;
