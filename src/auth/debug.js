import React from "react";

/**
  debug
 */
function debugHOC(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      console.log('props', this.props);
      console.log('state', this.state);
      return (
        <div className="debuging">
          {super.render()}
        </div>
      )
    }
  }
}

/**
渲染劫持
 */
function hijackHOC(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      const tree = super.render();
      let newProps = {};
      if (tree && tree.type === 'input') {
        newProps = { value: '渲染被劫持了' };
      }
      const props = Object.assign({}, tree.props, newProps);
      const newTree = React.cloneElement(tree, props, tree.props.children);
      return newTree;
    }
  }
}

/**
日志打点
 */
function logHoc(WrappedComponent) {
  return class extends React.Component {
    componentWillMount() {
      this.start = Date.now();
    }
    componentDidMount() {
      this.end = Date.now();
      // console.log(`${WrappedComponent.dispalyName} 渲染时间：${this.end - this.start} ms`);
      // console.log(`${user}进入${WrappedComponent.dispalyName}`);
    }
    componentWillUnmount() {
      // console.log(`${user}退出${WrappedComponent.dispalyName}`);
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

/**
可用、权限控制
authList是我们在进入程序时向后端请求的所有权限列表，当组件所需要的权限不列表中，
或者设置的 visible是false，我们将其显示为传入的组件样式，或者null。
我们可以将任何需要进行权限校验的组件应用HOC：
  @auth
  class Input extends Component {  ...  }
  @auth
  class Button extends Component {  ...  }

  <Button auth="user/addUser">添加用户</Button>
  <Input auth="user/search" visible={false} >添加用户</Input>
 */
function auth(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { visible, auth, display = null, ...props } = this.props;
      // if (visible === false || (auth && authList.indexOf(auth) === -1)) {
      //   return display
      // }
      return <WrappedComponent {...props} />;
    }
  }
}

export {
    debugHOC,
    hijackHOC
}
 