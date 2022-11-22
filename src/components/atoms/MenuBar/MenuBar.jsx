import React from "react";
import './index.css';
export default class MenuBar extends React.Component {
    constructor(props){
        super(props);


    }
    
    render() {
        return (
            <nav>{this.props.children}</nav>
        )
    }
}