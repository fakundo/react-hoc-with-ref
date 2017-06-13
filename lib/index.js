'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (WrappedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(HoCWithRef, _Component);

    function HoCWithRef() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HoCWithRef);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HoCWithRef.__proto__ || Object.getPrototypeOf(HoCWithRef)).call.apply(_ref, [this].concat(args))), _this), _this.getWrappedInstance = function () {
        return 'getWrappedInstance' in _this._wrappedComponent ? _this._wrappedComponent.getWrappedInstance() : _this._wrappedComponent;
      }, _this._wrappedComponentRef = function (wrappedComponent) {
        return _this._wrappedComponent = wrappedComponent;
      }, _this.getRefProps = function () {
        return { ref: _this._wrappedComponentRef };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return HoCWithRef;
  }(_react.Component), _class.getWrappedClass = function () {
    return 'getWrappedClass' in WrappedComponent ? WrappedComponent.getWrappedClass() : WrappedComponent;
  }, _temp2;
};

module.exports = exports['default'];
//# sourceMappingURL=index.js.map
