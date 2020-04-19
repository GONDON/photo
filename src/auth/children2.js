import React from "react";
import { debugHOC , hijackHOC } from "./debug.js";

@debugHOC
class SetState2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {index: new Date().getTime()};
    }
    componentWillUpdate() {
        console.log('componentWillUpdate222');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate222');
    }

    componentDidMount() {
        console.log('SetState调用setState222');
        this.setState({
            index: this.state.index + 1
        })
        console.log('state2222', this.state.index);
        
        console.log('SetState调用setState222');
        this.setState({
            index: this.state.index + 1
        })
        console.log('state2222', this.state.index);
    }
    render() {
        return(
            <div>
                2
            </div>
        )
    }
}

export default SetState2