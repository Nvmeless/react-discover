import React from "react";
import {Text} from '../atoms/Text/Text';
import { Menu } from "../molecules/Menu";
import "./index.css"; 
import { CiApple, CiAvocado,CiBacon, CiBowlNoodles } from "react-icons/ci";
import { Todo } from "../molecules/Todo";
import { ReduxPlaylist } from "../molecules/ReduxPlaylist";
export default class Home extends React.Component {

    constructor(props){
        super(props)
        let date = new Date( )
        this.state = {date: date, content:"hour"}
        
        this.changeDate = this.changeDate.bind(this)

        this.changeContent = this.changeContent.bind(this);
    }

    changeDate(){
        let date = new Date( )

        this.setState({date: date});
    }
    changeContent(content){
        this.setState({content: content});
    }

    renderContent(state){
        switch (state) {
            case "hour":
                return <Text>{this.state.date.toLocaleTimeString()}</Text>
                
                break;
            case "hello":
                return <Text>Hello few</Text>
                
                break;
        
            default:
                return <Text>{state}</Text>


                break;
        }
    }

    render(){
        console.log("Rendering")
        return(
            <>
            {/* <Todo></Todo> */}
            <ReduxPlaylist></ReduxPlaylist>

            </>
            )
    }
}