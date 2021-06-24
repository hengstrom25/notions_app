import React, { Component } from 'react';
import RowCounter from '../RowCounter/index';

class Project extends Component {
  constructor (props) {
    super(props);

    this.state = { project: props };
  }

  getProject (id) {
    fetch("/api/projects/:id")
      .then(res => res.json())
      .then((data) => {
        this.setState({ projects: data.projects })
      })
      .catch(err => err)
  }

  componentDidMount () {
    this.getProject(this.props.id)
  }


  render () {

    return (
      <RowCounter />
    );
  }
}

export default Project;
