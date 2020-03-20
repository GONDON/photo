import React from "react";

function proxyHoc(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }

    onChange = (event) => {
      const { onChange } = this.props;
      this.setState({
        value: event.target.value,
      }, () => {
        if(typeof onChange ==='function'){
          onChange(event);
        }
      })
    }

    render() {
      const newProps = {
        value: this.state.value, //双向绑定
        onChange: this.onChange,
      }
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
}

class HOC extends React.Component {
  render() {
    return <input {...this.props} ></input>
  }
}

export default proxyHoc(HOC);