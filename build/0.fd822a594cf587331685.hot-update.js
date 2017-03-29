webpackHotUpdate(0,{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(90);

var _react2 = _interopRequireDefault(_react);

var _SourceContainer = __webpack_require__(197);

var _SourceContainer2 = _interopRequireDefault(_SourceContainer);

var _ParentContainer = __webpack_require__(196);

var _ParentContainer2 = _interopRequireDefault(_ParentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function newSource(num) {
  return _react2.default.createElement(_SourceContainer2.default, { key: num, num: num });
}

var NotesContainer = function (_Component) {
  _inherits(NotesContainer, _Component);

  function NotesContainer() {
    _classCallCheck(this, NotesContainer);

    var _this = _possibleConstructorReturn(this, (NotesContainer.__proto__ || Object.getPrototypeOf(NotesContainer)).call(this));

    _this.state = {
      numSources: 3
    };
    return _this;
  }

  _createClass(NotesContainer, [{
    key: 'addSource',
    value: function addSource() {
      this.setState({
        numSources: this.state.numSources + 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // const numSources = this.state.numSources;
      // const sources = [];

      // for (let i = 1; i <= numSources; i += 1) {
      //   sources.push(
      //     newSource(i)
      //   );
      // }

      return _react2.default.createElement(
        'div',
        { id: 'notesContainer' },
        _react2.default.createElement(_ParentContainer2.default, null),
        _react2.default.createElement(
          'h1',
          null,
          'New Topic'
        ),
        newSource(1),
        _react2.default.createElement(
          'button',
          { onClick: this.addSource.bind(this) },
          'Add Source'
        )
      );
    }
  }]);

  return NotesContainer;
}(_react.Component);

;

exports.default = NotesContainer;

/***/ })

})