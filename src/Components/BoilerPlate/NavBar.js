import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(){
        super()
        this.state ={
         navStatus: false,
        }
    }
    toggleNavStatus=()=>{
        
        this.setState({navStatus: !this.state.navStatus})
    }
    render() {
        return (
            <div>
                <Link to="/About">About Me </Link>| 
                <Link to="/Contact"> Contact Me </Link>| 
                <Link to="/Projects"> My Projects</Link>
            </div>
        
            
        );
    }
}

export default NavBar;