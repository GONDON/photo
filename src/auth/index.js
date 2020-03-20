import React from "react";
import SetState2 from "./children2.js";
import SetState1 from "./children1.js";
import Hoc from "./hoc.js";

class Auth extends React.Component{
    componentDidMount() {
        console.log('parent componentDidMount');
    }
    render() {
        return(
            <div>
                <SetState2></SetState2>
                <SetState1></SetState1>
                <Hoc></Hoc>
            </div>
        )
    }
}

export default Auth