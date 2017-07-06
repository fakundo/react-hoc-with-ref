'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WrappedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(HoCWithRef, _Component);

    function HoCWithRef() {
      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, HoCWithRef);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getWrappedInstance = function () {
        return 'getWrappedInstance' in _this._wrappedComponent ? _this._wrappedComponent.getWrappedInstance() : _this._wrappedComponent;
      }, _this._wrappedComponentRef = function (wrappedComponent) {
        return _this._wrappedComponent = wrappedComponent;
      }, _this.getRefProps = function () {
        return { ref: _this._wrappedComponentRef };
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return HoCWithRef;
  }(_react.Component), _class.getWrappedClass = function () {
    return 'getWrappedClass' in WrappedComponent ? WrappedComponent.getWrappedClass() : WrappedComponent;
  }, _temp2;
};
//# sourceMappingURL=index.js.map
