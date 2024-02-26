(self["webpackChunkui"] = self["webpackChunkui"] || []).push([[463],{

/***/ "./stories/Button.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Button_stories),
  primary: () => (/* binding */ primary)
});

;// CONCATENATED MODULE: ../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
// EXTERNAL MODULE: ../../node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__("../../node_modules/next/dist/compiled/react/index.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./components/Button/index.tsx
"use client";


var _excluded = ["as", "className", "variant", "onClick", "children"];

var __jsx = react.createElement;


var _require = __webpack_require__("./components/Button/classes.js"),
  buttonClasses = _require.buttonClasses;
var Button = function Button(_ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? "button" : _ref$as,
    className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    onClick = _ref.onClick,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var typedProps = props;
  typedProps.className = classnames_default()("".concat(buttonClasses(variant)), className);
  typedProps.onClick = function (e) {
    if (onClick) {
      onClick(e);
    } else {
      e.preventDefault();
    }
  };
  return /*#__PURE__*/(0,react.createElement)(as, typedProps, __jsx(react.Fragment, null, children));
};
/* harmony default export */ const components_Button = (Button);
try {
    // @ts-ignore
    Button.displayName = "Button";
    // @ts-ignore
    Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "as": { "defaultValue": { value: "button" }, "description": "", "name": "as", "required": false, "type": { "name": "any" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "(e: any) => void" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "variant": { "defaultValue": { value: "primary" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"dark\"" }, { "value": "\"outlined\"" }, { "value": "\"white\"" }, { "value": "\"contact\"" }, { "value": "\"disabled\"" }, { "value": "\"selected\"" }] } }, "contactFormButton": { "defaultValue": null, "description": "", "name": "contactFormButton", "required": false, "type": { "name": "boolean" } }, "sidebarButton": { "defaultValue": null, "description": "", "name": "sidebarButton", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"] = { docgenInfo: Button.__docgenInfo, name: "Button", path: "components/Button/index.tsx#Button" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./stories/Button.stories.tsx
var Button_stories_jsx = react.createElement;


var meta = {
  title: "Components/Button",
  component: components_Button
};
/* harmony default export */ const Button_stories = (meta);
var primary = function primary() {
  return Button_stories_jsx("div", {
    className: "m-10"
  }, Button_stories_jsx(components_Button, {
    href: "#",
    variant: "primary"
  }, "Hello"));
};
primary.displayName = "primary";
primary.parameters = {
  ...primary.parameters,
  docs: {
    ...primary.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <div className=\"m-10\">\n            <Button href={\"#\"} variant={\"primary\"}>\n                Hello\n            </Button>\n        </div>;\n}",
      ...primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["primary"];

/***/ }),

/***/ "./components/Button/classes.js":
/***/ ((__unused_webpack_module, exports) => {

var btn = "flex items-center [&>*]:shrink-0 [&>*]:mr-1.5 rounded-full font-ailerons leading-none text-sm px-[22px] py-[14px] border border-[1px] text-center transition block w-fit";
exports.buttonClasses = function (variant) {
  if (variant === "primary") {
    return "".concat(btn, "(\n          \n        )} bg-blue900new text-white border-transparent hover:bg-transparent hover:border-[1px] hover:border-blue900new hover:text-blue900new dark:hover:text-white dark:hover:border-white/50");
  } else if (variant === "secondary") {
    return "".concat(btn, "(\n          \n        )} border-black/50 text-black hover:text-blue900new hover:border-blue900new dark:hover:border-white dark:border-white dark:border-white/25 dark:text-white");
  } else if (variant === "white") {
    return "".concat(btn, "(\n          \n        )} bg-white border-white text-blue900new hover:bg-blue900new dark:border-blue900new hover:text-white dark:text-white dark:bg-blue900new dark:border-blue900new dark:hover:bg-black dark:hover:border-white");
  } else if (variant === "outlined") {
    return "".concat(btn, "(\n          \n        )} border-white text-white bg-blue900new hover:bg-white hover:text-blue900new dark:border-white/50 dark:text-white dark:bg-black dark:border-white dark:hover:bg-blue900new dark:hover:border-blue900new");
  } else if (variant === "dark") {
    return "".concat(btn, "(\n          \n        )} bg-transparent border-[1px] border-white text-white hover:bg-blue900new hover:text-white hover:border-blue900new");
  } else if (variant === "disabled") {
    return "".concat(btn, " text-black/30 pointer-events-none cursor-default");
  } else if (variant === "contact") {
    return "".concat(btn, " border-[#CBCBCB] hover:border-blue900new hover:text-blue900new");
  } else if (variant === "selected") {
    return "".concat(btn, " border-blue900new text-blue900new");
  }
  return "";
};

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);
//# sourceMappingURL=Button-stories.784d361b.iframe.bundle.js.map