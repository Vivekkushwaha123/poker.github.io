import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can log the error or handle it in any way you prefer
      console.error(error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render an error message here
        return <div>Something went wrong.</div>;
      }
  
      // Render the child components if there are no errors
      return this.props.children;
    }
  }

  export default ErrorBoundary