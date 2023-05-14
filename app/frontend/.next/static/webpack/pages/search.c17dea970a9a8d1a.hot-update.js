"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search/index.js":
/*!*******************************!*\
  !*** ./pages/search/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Search() {\n    _s();\n    const [hash, setHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/search?hash=\".concat(hash));\n            setSearchResult(res.data);\n            console.log(res.data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-gradient-to-r from-yellow-800 to-green-500 shadow-lg transform skew-y-0 rotate-3 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSearch,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"hash\",\n                                                className: \"block text-gray-700 font-bold mb-2\",\n                                                children: \"Transaction Hash:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                name: \"hash\",\n                                                id: \"hash\",\n                                                value: hash,\n                                                onChange: (e)=>setHash(e.target.value),\n                                                placeholder: \"Enter transaction hash\",\n                                                className: \"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/test/app/frontend/pages/search/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"zSt4b3W60rHYFEuJ1VDF6OpnirA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpQztBQUNQO0FBQ3VCO0FBRWpELFNBQVNHLFNBQVM7O0lBQ2hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNUSxlQUFlLE9BQU9DLElBQU07UUFDaENBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTVYsaURBQVMsQ0FBQyxvQkFBeUIsT0FBTEc7WUFDaERHLGdCQUFnQkksSUFBSUUsSUFBSTtZQUN4QkMsUUFBUUMsR0FBRyxDQUFDSixJQUFJRSxJQUFJO1FBQ3RCLEVBQUUsT0FBT0csT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0E7MEJBRUEsOERBQUNkLHNEQUFNQTs7Ozs7MEJBQ0wsOERBQUNlO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBS0MsVUFBVVo7O2tEQUNkLDhEQUFDUzt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNHO2dEQUNDQyxTQUFRO2dEQUNSSixXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNLO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMQyxJQUFHO2dEQUNIQyxPQUFPdkI7Z0RBQ1B3QixVQUFVLENBQUNuQixJQUFNSixRQUFRSSxFQUFFb0IsTUFBTSxDQUFDRixLQUFLO2dEQUN2Q0csYUFBWTtnREFDWlosV0FBVTs7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDYTt3Q0FDQ1AsTUFBSzt3Q0FDTE4sV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0F2RFNmO0tBQUFBO0FBeURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC9pbmRleC5qcz9jMWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCBbaGFzaCwgc2V0SGFzaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlYXJjaFJlc3VsdCwgc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9zZWFyY2g/aGFzaD0ke2hhc2h9YCk7XG4gICAgICBzZXRTZWFyY2hSZXN1bHQocmVzLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPD5cbiAgICA8Lz5cbiAgICA8SGVhZGVyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIHB5LTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBzbTpweS0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMgc206bWF4LXcteGwgc206bXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20teWVsbG93LTgwMCB0by1ncmVlbi01MDAgc2hhZG93LWxnIHRyYW5zZm9ybSBza2V3LXktMCByb3RhdGUtMyBzbTpza2V3LXktMCBzbTotcm90YXRlLTMgc206cm91bmRlZC0zeGxcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTQgcHktMTAgYmctd2hpdGUgc2hhZG93LWxnIHNtOnJvdW5kZWQtM3hsIHNtOnAtMjBcIj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJoYXNoXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uIEhhc2g6XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYXNoXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaGFzaFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGFzaH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SGFzaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRyYW5zYWN0aW9uIGhhc2hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiSGVhZGVyIiwiU2VhcmNoIiwiaGFzaCIsInNldEhhc2giLCJzZWFyY2hSZXN1bHQiLCJzZXRTZWFyY2hSZXN1bHQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search/index.js\n"));

/***/ })

});