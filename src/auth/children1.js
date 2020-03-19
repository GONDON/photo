import React from "react";


class SetState1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {index: new Date().getTime()};
    }
    componentWillUpdate() {
        console.log('componentWillUpdate1111');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate1111');
    }

    componentDidMount() {
        console.log('SetState调用setState1111');
        this.setState({
            index: this.state.index + 1
        })
        console.log('state11111', this.state.index);
        
        console.log('SetState调用setState11111');
        this.setState({
            index: this.state.index + 1
        })
        console.log('state1111', this.state.index);
    }
    render() {
        return(
            <div>
                1
            </div>
        )
    }
}

export default SetState1