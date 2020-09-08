import React, { component } from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.state({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1> oh noo, that is not good</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
