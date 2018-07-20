import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import Test from './ProjectTest'

const NavContainer = styled.div`
display:flex;

`
const NavLinks = styled.div`
border: 100px;
border-radius: 0px;
height: 20px;
margin: 30px auto;
text-align:center;
color: white;
flex: 1;
Link:{
    text-decoration: none;
}
`
const Button = styled.button`
color: darkblue;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

class ProjectHome extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavContainer>
                        <NavLinks>
                            <Link to="/Projects/Project1"><Button>Project 1</Button></Link>
                            <Link to="/Projects/Project2"><Button>Project 2</Button></Link>
                            <Link to="/Projects/Project3"><Button>Project 3</Button></Link>
                            <Link to="/Projects/Project4"><Button>Project 4</Button></Link>
                            <Link to="/Projects/ProjectG1"><Button>Group Project</Button></Link>
                        </NavLinks>
                    </NavContainer>
                    <Switch>
                        <Route exact path="/Projects/Project1" component={Test} />
                        <Route exact path="/Projects/Project2" component={Test} />
                        <Route exact path="/Projects/Project3" component={Test} />
                        <Route exact path="/Projects/Project4" component={Test} />
                        <Route exact path="/Projects/ProjectG1" component={Test} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default ProjectHome;