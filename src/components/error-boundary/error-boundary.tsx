import React from 'react';

interface MyState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): MyState {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  handleCloseError = (): void => {
    this.setState({ hasError: false });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
