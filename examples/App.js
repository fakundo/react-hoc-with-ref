import React, { Component, createElement } from 'react';
import createWithRef from '../src';

const decorate = WrappedComponent =>
  class DecoratedApp extends createWithRef(WrappedComponent) {
    render() {
      return createElement(WrappedComponent, {
        ...this.props,
        ...this.getRefProps()
      });
    }
  };

@decorate
export default class App extends Component {
  render() {
    return (<div>Test</div>);
  }
}

