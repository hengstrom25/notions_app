import React, { Component } from 'react';

class ProjectList extends Component {
  constructor (props) {
    super(props);

    this.state = { projects: [] };
  }

  getProjectList () {
    fetch("/api/current_user/projects")
      .then(res => res.json())
      .then((data) => {
        this.setState({ projects: data.projects })
      })
      .catch(err => err)
  }

  componentDidMount () {
    this.getProjectList()
  }


  render () {
    const projectList = this.state.projects.filter(project => {
      return project.status_name !== 'Finished'
    }).map((project) => {
      return <li><a href={'/projects/' + project.id}>{project.name}</a></li>
    }
    )

    return (
      <ul>{projectList}</ul>
    );
  }
}

export default ProjectList;
