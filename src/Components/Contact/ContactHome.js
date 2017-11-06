import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`
class ContactHome extends Component {
    render() {
        return (
            <Container>
                <div>
                <div>Contact Me:</div>
                <div>Email: Gcbrown1116@gmail.com</div>
                <div>LinkedIn: </div>
                </div>
            </Container>
        );
    }
}

export default ContactHome;