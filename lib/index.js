import { Component } from 'react';

export default WrappedComponent =>
  class HoCWithRef extends Component {

    static getWrappedClass = () => {
      return 'getWrappedClass' in WrappedComponent ?
        WrappedComponent.getWrappedClass() :
        WrappedComponent;
    };

    getWrappedInstance = () => {
      return 'getWrappedInstance' in this._wrappedComponent ?
        this._wrappedComponent.getWrappedInstance() :
        this._wrappedComponent;
    };

    _wrappedComponentRef = wrappedComponent => (this._wrappedComponent = wrappedComponent);

    getRefProps = () => ({ ref: this._wrappedComponentRef });

  };
