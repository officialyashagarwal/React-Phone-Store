"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        font-size:1.4rem;\n        background:transparent;\n        border:0.05rem solid var(--lightBlue);\n        border-color : ", ";\n        color:", ";\n        border-radius: 0.5rem;\n        padding: 0.2rem 0.5rem;\n        cursor: pointer;\n        margin:0.2rem 0.5rem 0.2rem 0;\n        transition:all 0.5s ease-in-out;\n        &:hover{\n            background:", ";\n            color:var(--mainBlue);\n        }\n        &:focus{\n            outline:none;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.cart ? "var(--mainYellow)" : "var(--lightBlue)";
}, function (props) {
  return props.cart ? "var(--mainYellow)" : "var(--lightBlue)";
}, function (props) {
  return props.cart ? "var(--mainYellow)" : "var(--lightBlue)";
});

exports.ButtonContainer = ButtonContainer;