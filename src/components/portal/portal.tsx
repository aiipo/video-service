import React from 'react';
import ReactDOM from 'react-dom';

interface PropsType {
  children: React.ReactNode;
}

class Portal extends React.Component<PropsType, {}> {
  el = document.createElement('div');

  componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  render(): React.ReactPortal {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
