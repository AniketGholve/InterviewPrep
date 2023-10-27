import { Component } from "react";
import ClassCounter from "./ClassCounter";

class ClassCounterParent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
                <ClassCounter count={this.state.count} />
            </>
        )
    }
}
export default ClassCounterParent;