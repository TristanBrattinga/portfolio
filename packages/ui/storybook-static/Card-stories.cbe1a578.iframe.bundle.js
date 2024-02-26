"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([[478],{

/***/ "./stories/Card.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Card_stories),
  primary: () => (/* binding */ primary)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__("../../node_modules/next/dist/compiled/react/index.js");
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__("../../node_modules/next/link.js");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Card/index.tsx
var __jsx = react.createElement;


var Card = function Card() {
  return __jsx((link_default()), {
    href: ""
  }, __jsx("div", {
    className: "group flex justify-center items-center border border-white"
  }, __jsx("h2", {
    className: "px-2 py-28 uppercase font-semibold text-white group-hover:scale-125 transition-all duration-300"
  }, "Webbers Stage")));
};
Card.displayName = "Card";
/* harmony default export */ const components_Card = (Card);
;// CONCATENATED MODULE: ./stories/Card.stories.tsx

var Card_stories_jsx = react.createElement;

var meta = {
  title: "Components/Card",
  component: components_Card
};
/* harmony default export */ const Card_stories = (meta);
var primary = function primary() {
  return Card_stories_jsx("div", {
    className: "m-10"
  }, Card_stories_jsx(components_Card, null));
};
primary.displayName = "primary";
primary.parameters = {
  ...primary.parameters,
  docs: {
    ...primary.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <div className=\"m-10\">\n            <Card />\n        </div>;\n}",
      ...primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["primary"];

/***/ })

}]);
//# sourceMappingURL=Card-stories.cbe1a578.iframe.bundle.js.map