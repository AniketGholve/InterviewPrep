/* eslint-disable react/prop-types */
import { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.count
        }
    }
    render() {
        return (
            <>
                <h1>count:{this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment</button>
            </>
        )
    }
}
export default ClassCounter;