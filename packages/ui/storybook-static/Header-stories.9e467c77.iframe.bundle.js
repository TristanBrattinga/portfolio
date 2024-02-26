"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([[927],{

/***/ "./stories/Header.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Header_stories),
  primary: () => (/* binding */ primary)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__("../../node_modules/next/dist/compiled/react/index.js");
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__("../../node_modules/next/link.js");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
;// CONCATENATED MODULE: ../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./icons/ChevronIcon.tsx


var __jsx = react.createElement;

var ChevronIcon = function ChevronIcon(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return __jsx("svg", _extends({
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), __jsx("path", {
    d: "M11.0605 16.293L3.76749 9.00003L11.0605 1.70703L9.64649 0.29303L0.939487 9.00003L9.64649 17.707L11.0605 16.293Z",
    fill: "white"
  }));
};
ChevronIcon.displayName = "ChevronIcon";
/* harmony default export */ const icons_ChevronIcon = (ChevronIcon);
;// CONCATENATED MODULE: ./components/Header/index.tsx
"use client";


var Header_jsx = react.createElement;


var Header = function Header() {
  return Header_jsx("div", {
    className: "flex px-[60px] relative group py-2 justify-between items-center after:absolute after:inset-x-0 after:bottom-0 after:h-[.5px] after:bg-white after:scale-x-0 after:transition-transform after:duration-500 after:hover:scale-x-100 after:origin-center"
  }, Header_jsx((link_default()), {
    href: "/"
  }, Header_jsx("h1", {
    className: "text-center font-ailerons text-[35px] text-white "
  }, "Tristan Brattinga")), Header_jsx("ul", {
    className: "ml-auto flex justify-between items-center gap-x-6 text-white font-semibold uppercase text-[24px] -translate-y-12 group-hover:translate-y-0 transition-all duration-500"
  }, Header_jsx("li", {
    className: "hover:text-[#759FBC] transition-colors duration-200"
  }, Header_jsx((link_default()), {
    href: "/work"
  }, "Work")), Header_jsx("li", {
    className: "hover:text-[#759FBC] transition-colors duration-200"
  }, Header_jsx((link_default()), {
    href: "/about"
  }, "About")), Header_jsx("li", {
    className: "hover:text-[#759FBC] transition-colors duration-200"
  }, Header_jsx((link_default()), {
    href: "/contact"
  }, "Contact"))), Header_jsx(icons_ChevronIcon, {
    className: "rotate-270 ml-2"
  }));
};
Header.displayName = "Header";
/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./stories/Header.stories.tsx

var Header_stories_jsx = react.createElement;

var meta = {
  title: "Components/Header",
  component: components_Header
};
/* harmony default export */ const Header_stories = (meta);
var primary = function primary() {
  return Header_stories_jsx("div", null, Header_stories_jsx(components_Header, null));
};
primary.displayName = "primary";
primary.parameters = {
  ...primary.parameters,
  docs: {
    ...primary.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <div>\n            <Header />\n        </div>;\n}",
      ...primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["primary"];

/***/ })

}]);
//# sourceMappingURL=Header-stories.9e467c77.iframe.bundle.js.map