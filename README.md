## Common way to get access to wrapped component through HoC

```
npm install react-hoc-with-ref
```

App.js
```javascript
import React, { Component, createElement } from 'react';
import createWithRef from 'react-hoc-with-ref';

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
```

index.js
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class TestComponent extends Component {
  appRef = (appComponent) => {
    if (appComponent) {
      console.log(appComponent.getWrappedInstance()); // App
    }
  };

  render() {
    return (<App ref={this.appRef} />);
  }
}

ReactDOM.render(<TestComponent />, document.querySelector('#app'));
```
