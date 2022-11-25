import React from "react";
import {Text} from '../atoms/Text/Text';
import { Menu } from "../molecules/Menu";
import "./index.css"; 
import { CiApple, CiAvocado,CiBacon, CiBowlNoodles } from "react-icons/ci";
import { Todo } from "../molecules/Todo";
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
            <Todo></Todo>
            {this.renderContent(this.state.content)}
                <Menu action={this.changeDate} changeContent={this.changeContent} menus={[
                    {title:"Juli", uri:"Lezgo", icon :(<CiApple size='1.5em'/>),content:"hello"},
                    {title:"Juli", uri:"Lezgo", icon :(<CiAvocado size='1.5em'/>),content:"Fresh Avocado"},
                    {title:"Juli", uri:"Lezgo", icon :(<CiBacon size='1.5em'/>),content:"Bacon"},
                    {title:"Juli", uri:"Lezgo", icon :(<CiBowlNoodles size='1.5em'/>),content:"Noodles"}
                ]}></Menu>
            </>
            )
    }
}