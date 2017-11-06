import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectHome extends Component {
    render() {
        return (
            <div>               
                <Link to="/Projects/Project1">Project 1</Link>
                <Link to="/Projects/Project2">Project 2</Link>
                <Link to="/Projects/Project3">Project 3</Link>
                <Link to="/Projects/Project4">Project 4</Link>
                <Link to="/Projects/ProjectG1">Group Project</Link>
            </div>
        );
    }
}

export default ProjectHome;