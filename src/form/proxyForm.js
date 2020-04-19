import React from "react";
import PropTypes from 'prop-types'

function proxyHoc(WrappedComponent) {
  return class extends React.Component {
    static contextTypes = {
      model: PropTypes.object,
      changeModel: PropTypes.func
    }

    onChange = (event) => {
      const { changeModel } = this.context;
      const { onChange } = this.props;
      const { v_model } = this.props;
      changeModel(v_model, event.target.value);
      if(typeof onChange === 'function'){onChange(event);}
    }

    render() {
      const { model } = this.context;
      const { v_model } = this.props;
      return <WrappedComponent
        {...this.props}
        value={model[v_model]}
        onChange={this.onChange}
      />;
    }
  }
}

@proxyHoc
class Input extends React.Component {
  render() {
    return <input {...this.props}></input>
  }
}

export default Input