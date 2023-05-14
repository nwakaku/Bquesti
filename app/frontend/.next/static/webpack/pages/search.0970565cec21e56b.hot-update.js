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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uauth/js */ \"./node_modules/@uauth/js/build/index.module.mjs\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // setUserWallet(\"Login With Unstoppable\")\n        uauth.user().then((user)=>{\n            setUserWallet(user.sub);\n            // user exists\n            console.log(\"User information:\", user);\n        }).catch((err)=>{\n            console.log(err);\n        // user does not exist\n        });\n    }, []);\n    const login = async ()=>{\n        try {\n            const authorization = await uauth.loginWithPopup();\n            uauth.user().then((user)=>{\n                setUserWallet(user.sub);\n                // user exists\n                console.log(\"User information:\", user);\n            });\n            // setUserWallet(authorization.sub)\n            // window.location.reload();\n            console.log(authorization);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const [userWallet, setUserWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const logout = async ()=>{\n        try {\n            await uauth.logout();\n            setUserWallet(null);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            class: \"fixed w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                class: \"bg-white border-gray-200 py-2.5 dark:bg-gray-900\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            class: \"flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                class: \"self-center text-xl font-semibold whitespace-nowrap dark:text-white text-yellow-500\",\n                                children: \"BQuesti\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex items-center lg:order-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.ConnectButton, {}, void 0, false, {\n                                    fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-collapse-toggle\": \"mobile-menu-2\",\n                                    type: \"button\",\n                                    class: \"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                                    \"aria-controls\": \"mobile-menu-2\",\n                                    \"aria-expanded\": \"false\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            class: \"sr-only\",\n                                            children: \"Open main menu\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            class: \"w-6 h-6\",\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            class: \"hidden w-6 h-6\",\n                                            fill: \"currentColor\",\n                                            viewBox: \"0 0 20 20\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                \"fill-rule\": \"evenodd\",\n                                                d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                \"clip-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1\",\n                            id: \"mobile-menu-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                class: \"flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/\",\n                                            class: \"block py-2 pl-3 pr-4 text-white bg-yellow-400 rounded lg:bg-transparent lg:text-yellow-400 lg:p-0 dark:text-white\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/dashboard\",\n                                            class: \"block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700\",\n                                            children: \"Dashboard\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/inheritance\",\n                                            class: \"block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700\",\n                                            children: \"Check Inherit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/search\",\n                                            class: \"block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700\",\n                                            children: \"Search Txn\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            class: \"block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/test/app/frontend/components/header.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"JWymLQLIwuBBVm/NVwr8Z1SKzUg=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ3JCO0FBQ3lCO0FBR2hELE1BQU1LLFNBQVMsSUFBTTs7SUFFeEJKLGdEQUFTQSxDQUFDLElBQU07UUFDZCwwQ0FBMEM7UUFDMUNLLE1BQ0dDLElBQUksR0FDSkMsSUFBSSxDQUFDLENBQUNELE9BQVM7WUFDZEUsY0FBY0YsS0FBS0csR0FBRztZQUN0QixjQUFjO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJMO1FBQ25DLEdBQ0NNLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWixzQkFBc0I7UUFDeEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxRQUFRLFVBQVk7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLGdCQUFnQixNQUFNVixNQUFNVyxjQUFjO1lBQ2hEWCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQyxDQUFDRCxPQUFTO2dCQUMxQkUsY0FBY0YsS0FBS0csR0FBRztnQkFDdEIsY0FBYztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkw7WUFDbkM7WUFDQSxtQ0FBbUM7WUFDbkMsNEJBQTRCO1lBQzVCSSxRQUFRQyxHQUFHLENBQUNJO1FBQ2QsRUFBRSxPQUFPRSxPQUFPO1lBQ2RQLFFBQVFPLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVFLE1BQU0sQ0FBQ0MsWUFBWVYsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWhELE1BQU1rQixTQUFTLFVBQVk7UUFDekIsSUFBSTtZQUNGLE1BQU1kLE1BQU1jLE1BQU07WUFFbEJYLGNBQWMsSUFBSTtRQUNwQixFQUFFLE9BQU9TLE9BQU87WUFDZFAsUUFBUU8sS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUwscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFPQyxPQUFNO3NCQUNaLDRFQUFDQztnQkFBSUQsT0FBTTswQkFDVCw0RUFBQ0Y7b0JBQUlFLE9BQU07O3NDQUNULDhEQUFDRTs0QkFBRUMsTUFBSzs0QkFBSUgsT0FBTTtzQ0FDaEIsNEVBQUNJO2dDQUFLSixPQUFNOzBDQUFzRjs7Ozs7Ozs7Ozs7c0NBSXBHLDhEQUFDRjs0QkFBSUUsT0FBTTs7OENBQ1QsOERBQUNuQixpRUFBYUE7Ozs7OzhDQUVkLDhEQUFDd0I7b0NBQ0NDLHdCQUFxQjtvQ0FDckJDLE1BQUs7b0NBQ0xQLE9BQU07b0NBQ05RLGlCQUFjO29DQUNkQyxpQkFBYzs7c0RBRWQsOERBQUNMOzRDQUFLSixPQUFNO3NEQUFVOzs7Ozs7c0RBQ3RCLDhEQUFDVTs0Q0FDQ1YsT0FBTTs0Q0FDTlcsTUFBSzs0Q0FDTEMsU0FBUTs0Q0FDUkMsT0FBTTtzREFFTiw0RUFBQ0M7Z0RBQ0NDLGFBQVU7Z0RBQ1ZDLEdBQUU7Z0RBQ0ZDLGFBQVU7Ozs7Ozs7Ozs7O3NEQUdkLDhEQUFDUDs0Q0FDQ1YsT0FBTTs0Q0FDTlcsTUFBSzs0Q0FDTEMsU0FBUTs0Q0FDUkMsT0FBTTtzREFFTiw0RUFBQ0M7Z0RBQ0NDLGFBQVU7Z0RBQ1ZDLEdBQUU7Z0RBQ0ZDLGFBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtsQiw4REFBQ25COzRCQUNDRSxPQUFNOzRCQUNOa0IsSUFBRztzQ0FFSCw0RUFBQ0M7Z0NBQUduQixPQUFNOztrREFDUiw4REFBQ29CO2tEQUNDLDRFQUFDbEI7NENBQ0NDLE1BQUs7NENBQ0xILE9BQU07NENBQ05xQixnQkFBYTtzREFDZDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNEO2tEQUNDLDRFQUFDbEI7NENBQ0NDLE1BQUs7NENBQ0xILE9BQU07c0RBQ1A7Ozs7Ozs7Ozs7O2tEQUtILDhEQUFDb0I7a0RBQ0MsNEVBQUNsQjs0Q0FDQ0MsTUFBSzs0Q0FDTEgsT0FBTTtzREFDUDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNvQjtrREFDQyw0RUFBQ2xCOzRDQUNDQyxNQUFLOzRDQUNMSCxPQUFNO3NEQUNQOzs7Ozs7Ozs7OztrREFJSCw4REFBQ29CO2tEQUNDLDRFQUFDbEI7NENBQ0NDLE1BQUs7NENBQ0xILE9BQU07c0RBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkIsRUFBQztHQWxKWWxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUF1dGggZnJvbSBcIkB1YXV0aC9qc1wiO1xuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gc2V0VXNlcldhbGxldChcIkxvZ2luIFdpdGggVW5zdG9wcGFibGVcIilcbiAgICAgIHVhdXRoXG4gICAgICAgIC51c2VyKClcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICBzZXRVc2VyV2FsbGV0KHVzZXIuc3ViKTtcbiAgICAgICAgICAvLyB1c2VyIGV4aXN0c1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvcm1hdGlvbjpcIiwgdXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAvLyB1c2VyIGRvZXMgbm90IGV4aXN0XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGF3YWl0IHVhdXRoLmxvZ2luV2l0aFBvcHVwKCk7XG4gICAgICAgIHVhdXRoLnVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgc2V0VXNlcldhbGxldCh1c2VyLnN1Yik7XG4gICAgICAgICAgLy8gdXNlciBleGlzdHNcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaW5mb3JtYXRpb246XCIsIHVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0VXNlcldhbGxldChhdXRob3JpemF0aW9uLnN1YilcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhhdXRob3JpemF0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgIGNvbnN0IFt1c2VyV2FsbGV0LCBzZXRVc2VyV2FsbGV0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgYXdhaXQgdWF1dGgubG9nb3V0KCk7XG5cbiAgICAgICAgICAgc2V0VXNlcldhbGxldChudWxsKTtcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgfVxuICAgICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBjbGFzcz1cImZpeGVkIHctZnVsbFwiPlxuICAgICAgICA8bmF2IGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHB5LTIuNSBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWF4LXctc2NyZWVuLXhsIHB4LTQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1jZW50ZXIgdGV4dC14bCBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZSB0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgICBCUXVlc3RpXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBsZzpvcmRlci0yXCI+XG4gICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPVwibW9iaWxlLW1lbnUtMlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIG1sLTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbGc6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudS0yXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCJcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGlkZGVuIHctNiBoLTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gdy1mdWxsIGxnOmZsZXggbGc6dy1hdXRvIGxnOm9yZGVyLTFcIlxuICAgICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG10LTQgZm9udC1tZWRpdW0gbGc6ZmxleC1yb3cgbGc6c3BhY2UteC04IGxnOm10LTBcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNDAwIHJvdW5kZWQgbGc6YmctdHJhbnNwYXJlbnQgbGc6dGV4dC15ZWxsb3ctNDAwIGxnOnAtMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHB5LTIgcGwtMyBwci00IHRleHQtZ3JheS03MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNTAgbGc6aG92ZXI6YmctdHJhbnNwYXJlbnQgbGc6Ym9yZGVyLTAgbGc6aG92ZXI6dGV4dC15ZWxsb3ctNDAwIGxnOnAtMCBkYXJrOnRleHQtZ3JheS00MDAgbGc6ZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGxnOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9pbmhlcml0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgdGV4dC1ncmF5LTcwMCBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgaG92ZXI6YmctZ3JheS01MCBsZzpob3ZlcjpiZy10cmFuc3BhcmVudCBsZzpib3JkZXItMCBsZzpob3Zlcjp0ZXh0LXllbGxvdy00MDAgbGc6cC0wIGRhcms6dGV4dC1ncmF5LTQwMCBsZzpkYXJrOmhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbGc6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENoZWNrIEluaGVyaXRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBweS0yIHBsLTMgcHItNCB0ZXh0LWdyYXktNzAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTUwIGxnOmhvdmVyOmJnLXRyYW5zcGFyZW50IGxnOmJvcmRlci0wIGxnOmhvdmVyOnRleHQteWVsbG93LTQwMCBsZzpwLTAgZGFyazp0ZXh0LWdyYXktNDAwIGxnOmRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBsZzpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIFR4blxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHB5LTIgcGwtMyBwci00IHRleHQtZ3JheS03MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNTAgbGc6aG92ZXI6YmctdHJhbnNwYXJlbnQgbGc6Ym9yZGVyLTAgbGc6aG92ZXI6dGV4dC15ZWxsb3ctNDAwIGxnOnAtMCBkYXJrOnRleHQtZ3JheS00MDAgbGc6ZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGxnOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVQXV0aCIsIkNvbm5lY3RCdXR0b24iLCJIZWFkZXIiLCJ1YXV0aCIsInVzZXIiLCJ0aGVuIiwic2V0VXNlcldhbGxldCIsInN1YiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImxvZ2luIiwiYXV0aG9yaXphdGlvbiIsImxvZ2luV2l0aFBvcHVwIiwiZXJyb3IiLCJ1c2VyV2FsbGV0IiwibG9nb3V0IiwiZGl2IiwiaGVhZGVyIiwiY2xhc3MiLCJuYXYiLCJhIiwiaHJlZiIsInNwYW4iLCJidXR0b24iLCJkYXRhLWNvbGxhcHNlLXRvZ2dsZSIsInR5cGUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZmlsbC1ydWxlIiwiZCIsImNsaXAtcnVsZSIsImlkIiwidWwiLCJsaSIsImFyaWEtY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});