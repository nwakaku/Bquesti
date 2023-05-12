"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/inheritance",{

/***/ "./pages/inheritance/index.js":
/*!************************************!*\
  !*** ./pages/inheritance/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3;\n        // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n        console.log(amount);\n        if (tokenId == 0) {\n            setTokenType(\"ERC20\");\n        } else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-semibold max-w-50 justify-center\",\n                                children: \"Check Your Inheritance\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center\",\n                                children: \"This is the Assumed Inheritance you will be recieving from this Account\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Beneficiary\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token ID\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            myNFTs.map(function(legacy, index) {\n                                var ref, ref5, ref6;\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, _this),\n                                        tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center truncate\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 23\n                                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.tokenId) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: tokenType\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                            onClick: function() {\n                                                return removeLegacy();\n                                            },\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: \"snull\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBZ0c7NENBQzFHYyxPQUFPLEVBQUU7dURBQU1DLFlBQVksRUFBRTs2Q0FBQTtzREFDOUIsR0FFRDs7Ozs7aURBQVM7Ozs7Ozt5Q0FDTDs2QkFDUCxDQUFDOztvQ0FDRCxpQkFFSDtrQ0FBRSxPQUFLO3FDQUFHOzs7Ozt3QkFFUDs7Ozs7O2dCQUNIO3FCQUVQLENBQ0g7Q0FDSDtHQXhHUTFDLEtBQUs7O1FBQ3FCUCw2Q0FBVTs7O0FBRHBDTyxLQUFBQSxLQUFLO0FBMEdkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5oZXJpdGFuY2UvaW5kZXguanM/NmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7ICBjb250cmFjdEFiaSwgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IGJlbmVmaWNpYXJ5QWRkcmVzcyA9IFwiMHg0MmU4ZDFCQkI2MTNkYzYzQTZmRGJGMzlCMGIwMTZFNzhkRjRFNGY2XCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IFtteU5GVHMsIHNldE15TkZUc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2tlblR5cGUsIHNldFRva2VuVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBnZXRNeU5GVHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICBjb250cmFjdEFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldEJlbmVmaWNpYXJ5TGVnYWNpZXMoKTtcbiAgICAgICAgc2V0TXlORlRzKG5mdHMpO1xuICAgICAgICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIE5GVHM6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYExlZ2FjeU5GVHNbJHtuZnRJZH1dOiAke25mdHM/LnRvU3RyaW5nKCl9YClcbiAgICAvLyBnZXRNeU5GVHMoKTtcbiAgICBnZXRNeU5GVHMoKTtcbiAgICBjb25zb2xlLmxvZyhteU5GVHMpXG4gICAgY29uc3QgYW1vdW50ID0gbXlORlRzPy5hbW91bnQ/LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdG9rZW5JZCA9IG15TkZUcz8udG9rZW5JZD8udG9OdW1iZXIoKTtcbiAgICBjb25zb2xlLmxvZyhhbW91bnQpXG4gICAgaWYgKHRva2VuSWQgPT0gMCl7IHNldFRva2VuVHlwZShcIkVSQzIwXCIpfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGFtb3VudCA9PSAwKSBzZXRUb2tlblR5cGUoXCJFUkM3MjFcIik7XG4gICAgICBlbHNlIHNldFRva2VuVHlwZShcIkVSQzExNTVcIik7XG4gICAgfVxuICAgIFxuICB9LCBbbXlORlRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cblxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG1heC13LTUwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBDaGVjayBZb3VyIEluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbXQtMiB0ZXh0LWdyYXktNDAwIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHBiLTMganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFRoaXMgaXMgdGhlIEFzc3VtZWQgSW5oZXJpdGFuY2UgeW91IHdpbGwgYmUgcmVjaWV2aW5nIGZyb21cbiAgICAgICAgICAgICAgICAgIHRoaXMgQWNjb3VudFxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNSBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Ub2tlbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkJlbmVmaWNpYXJ5PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QW1vdW50PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VG9rZW4gSUQ8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5UeXBlPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RGVsZXRlPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bXlORlRzLm1hcCgobGVnYWN5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntsZWdhY3k/LnRva2VuPy50b1N0cmluZygpfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtsZWdhY3k/LmJlbmVmaWNpYXJ5Py50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihsZWdhY3k/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGxlZ2FjeT8uYW1vdW50KS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2xlZ2FjeT8udG9rZW5JZD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj57dG9rZW5UeXBlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVMZWdhY3koKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PnNudWxsPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJldGhlcnMiLCJjb250cmFjdEFiaSIsImNvbnRyYWN0QWRkcmVzcyIsIkhlYWRlciIsImJlbmVmaWNpYXJ5QWRkcmVzcyIsIkluZGV4IiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwibXlORlRzIiwic2V0TXlORlRzIiwidG9rZW5UeXBlIiwic2V0VG9rZW5UeXBlIiwiZ2V0TXlORlRzIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsIm5mdHMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0QmVuZWZpY2lhcnlMZWdhY2llcyIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImFtb3VudCIsInRvU3RyaW5nIiwidG9rZW5JZCIsInRvTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJtYWluIiwiaDIiLCJwIiwiaDMiLCJtYXAiLCJsZWdhY3kiLCJpbmRleCIsInRva2VuIiwiYmVuZWZpY2lhcnkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUxlZ2FjeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});