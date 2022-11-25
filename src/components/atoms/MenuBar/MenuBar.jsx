import React from "react";
import './index.css';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color:${props  => props.theme.primary};
`;

export default class MenuBar extends React.Component {
    constructor(props){
        super(props);


    }
    
    render() {
        return (
            <StyledNav>{this.props.children}</StyledNav>
        )
    }
}