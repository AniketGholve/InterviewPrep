/* eslint-disable react/prop-types */
import { Component } from "react";

class ClassComp extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <h1>{this.props.data}</h1>
            </>
        )
    }
}
export default ClassComp;