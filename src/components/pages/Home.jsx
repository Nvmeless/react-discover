import React from "react";
import {Text} from '../atoms/Text/Text';
import { Menu } from "../molecules/Menu";
import "./index.css"; 
import { CiApple, CiAvocado,CiBacon, CiBowlNoodles } from "react-icons/ci";
export default class Home extends React.Component {

    constructor(props){
        super(props)
        let date = new Date( )
        this.state = {date: date}
        this.changeDate = this.changeDate.bind(this)
    }

    changeDate(){
        let date = new Date( )

        this.setState({date: date});
    }

    render(){
        console.log("Rendering")
        return(
            <>
                <Text>{this.state.date.toLocaleTimeString()}</Text>
                <Menu action={this.changeDate} menus={[
                    {title:"Juli", uri:"Lezgo", icon :(<CiApple size='1.5em'/>)},
                    {title:"Juli", uri:"Lezgo", icon :(<CiAvocado size='1.5em'/>)},
                    {title:"Juli", uri:"Lezgo", icon :(<CiBacon size='1.5em'/>)},
                    {title:"Juli", uri:"Lezgo", icon :(<CiBowlNoodles size='1.5em'/>)}
                ]}></Menu>
            </>
            )
    }
}