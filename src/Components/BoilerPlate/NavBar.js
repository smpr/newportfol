import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.div`
display: flex;
height: 30px;   

`
const NavLinks = styled.div`
border: 0;
border-radius: 0px;
height: 2.25em;
margin: 0px auto;
text-align:center;
background-color: grey;
color: white;
flex: 1;
text-decoration: none;
button:{
    background-color: red,
}
Link:{
    text-decoration: none;
}
`
const Button = styled.button`
color: darkblue;
font-size: 1em;
margin: 0em 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
class NavBar extends Component {
    
    render() {
        return (
            <NavContainer>
            <NavLinks>
                <Link to="/About"><Button>About Me</Button></Link> 
                <Link to="/Contact"><Button>Contact Me</Button></Link>
                <Link to="/Projects"><Button>My Projects</Button></Link>
            </NavLinks>
        </NavContainer>
            
        );
    }
}

export default NavBar;