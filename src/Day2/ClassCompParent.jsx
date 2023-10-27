import { Component } from "react";
import ClassComp from "./ClassComp";

class ClassCompParent extends Component{
    constructor(){
        super()
        this.state={
            data:"hello aniket"
        }
    }
    render(){
        return(
            <>
                <ClassComp data={this.state.data}/>
            </>
        )
    }
}
export default ClassCompParent;