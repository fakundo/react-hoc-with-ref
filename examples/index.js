import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class TestComponent extends Component {
  appRef = (appComponent) => {
    if (appComponent) {
      console.log(appComponent.getWrappedInstance());
    }
  };

  render() {
    return (<App ref={this.appRef} />);
  }
}

ReactDOM.render(<TestComponent />, document.querySelector('#app'));

