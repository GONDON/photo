// import React from "react";
// class Demo1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "alife"
//     };
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Count: {count}
//         <button onClick={() => this.setState({ count: count + 1 })}>+</button>
//         <button onClick={() => this.setState({ count: count - 1 })}>-</button>
//       </div>
//     );
//   }
// }



// import React, { useState } from "react";
// function Demo1() {
//   const [obj, setObject] = useState({
//     count: 0,
//     name: "alife"
//   });
//   return (
//     <div className="App">
//       Count: {obj.count}
//       <button onClick={() => setObject({ ...obj, count: obj.count + 1 })}>+</button>
//       <button onClick={() => setObject({ ...obj, count: obj.count - 1 })}>-</button>
//     </div>
//   );
// }


// import React, { Component } from "react";
// class Demo1 extends Component {
//   state = {
//     count: 1
//   };
//   componentDidMount() {
//     const { count } = this.state;
//     document.title = "componentDidMount" + count;
//     this.timer = setInterval(() => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     }, 1000);
//   }
//   componentDidUpdate() {
//     const { count } = this.state;
//     document.title = "componentDidMount" + count;
//   }
//   componentWillUnmount() {
//     document.title = "componentWillUnmount";
//     clearInterval(this.timer);
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Count:{count}
//         <button onClick={() => clearInterval(this.timer)}>clear</button>
//       </div>
//     );
//   }
// }

// import React, { useState, useEffect,useContext } from "react";
// let timer = null;
// function Demo1() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = "componentDidMount" + count;
//   },[count]);

//   useEffect(() => {
//     timer = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);
//     return () => {
//       document.title = "componentWillUnmount";
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <div>
//       Count: {count}
//       <button onClick={() => clearInterval(timer)}>clear</button>
//     </div>
//   );
// }

// const { Provider, Consumer } = React.createContext(null);
// function Bar() {
//   return <Consumer>{color => <div>{color}</div>}</Consumer>;
// }
// function Foo() {
//   return <Bar />;
// }
// function Demo1() {
//   return (
//     <Provider value={"grey"}>
//       <Foo />
//     </Provider>
//   );
// }

// const colorContext = React.createContext("gray");
// function Bar() {
//   const color = useContext(colorContext);
//   return <div>{color}</div>;
// }
// function Foo() {
//   return <Bar />;
// }
// function Demo1() {
//   return (
//     <colorContext.Provider value={"red"}>
//       <Foo />
//     </colorContext.Provider>
//   );
// }

// class Demo1 {
//     render() {
//         return <div>
//             <SomeComponent style={{ fontSize: 14 }} doSomething={ () => { console.log('do something'); }}  />
//         </div>;
//     }
// }

import React, { useState, useRef } from "react";
// function Demo1() {
//   let [name, setName] = useState("Nate");
//   let nameRef = useRef();
//   const submitButton = () => {
//     setName(nameRef.current.value);
//   };
//   return (
//     <div className="App">
//       <p>{name}</p>

//       <div>
//         <input ref={nameRef} type="text" />
//         <button type="button" onClick={submitButton}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }
// var  _state = 0

// function Demo1() {
    // const [message, setMessage] = useState("");
  
    // const showMessage = () => {
    //   alert("You said: " + message);
    // };
  
    // const handleSendClick = () => {
    //   setTimeout(showMessage, 3000);
    // };
  
    // const handleMessageChange = e => {
    //   setMessage(e.target.value);
    // };
  
    // return (
    //   <>
    //     <input value={message} onChange={handleMessageChange} />
    //     <button onClick={handleSendClick}>Send</button>
    //   </>
//     // );

//     // function Counter() {
//         function useState1(initialValue) {
//             _state = initialValue;
//             debugger
//             function setState(newState) {
//                 _state = newState;
//             //   render();
//             }
//             return [_state, setState];
//           }
//         var [count, setCount] = useState1(0);
      
//         return (
//           <div>
//             <div>{count}</div>
//             <div onClick={() => { setCount(count + 1); }}>
//               点击
//             </div>
//           </div>
//         );
//     //   }
      
//   }
  
// let _deps; // _deps 记录 useEffect 上一次的 依赖

// function useEffect(callback, depArray) {
//   const hasNoDeps = !depArray; // 如果 dependencies 不存在
//   const hasChangedDeps = _deps
//     ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
//     : true;
//   /* 如果 dependencies 不存在，或者 dependencies 有变化*/
//   if (hasNoDeps || hasChangedDeps) {
//     callback();
//     _deps = depArray;
//   }
// }

import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <Title title='计数器'></Title>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

// class Title extends React.PureComponent {
//   render() {
//     // 检查是否多次打印
//     console.log('Title render')
//     return (
//       <p>{this.props.title}</p>
//     );
//   }
// }
const Title = React.memo(props => {
    console.log('Title render')
    return <p>{props.title}</p>
  })

//   function memo (Func) {
//     class Proxy extends React.PureComponent {
//       render() {
//         return (
//           <Func {...this.props} />
//         );
//       }
//     }
//     return Proxy
//   }


// import React, { Component } from 'react';

//PureComponent原理
// function shallowEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true
//   }
//   if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
//     return false
//   }
//   let keys1 = Object.keys(obj1)
//   let keys2 = Object.keys(obj2)
//   if (keys1.length !== keys2.length) {
//     return false
//   }
//   for (const key of keys1) {
//     if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
//       return false
//     }
//   }
//   return true
// }

// class PureComponent extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
//   }
//   render() {
//     return this.props.children;
//   }
// }

// export default PureComponent;

export default Counter