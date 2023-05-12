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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3;\n        // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n        console.log(amount);\n        console.log(tokenId);\n        if (tokenId == 0) {\n            setTokenType(\"ERC20\");\n        } else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-semibold max-w-50 justify-center\",\n                                children: \"Check Your Inheritance\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center\",\n                                children: \"This is the Assumed Inheritance you will be recieving from this Account\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Beneficiary\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token ID\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this),\n                            myNFTs.map(function(legacy, index) {\n                                var ref, ref5, ref6;\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, _this),\n                                        tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center truncate\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 23\n                                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.tokenId) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: tokenType\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                            onClick: function() {\n                                                return removeLegacy();\n                                            },\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: \"snull\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aURBQU07c0RBQ3BELDhEQUFDbUMsUUFBTTs0Q0FDTGIsU0FBUyxFQUFDLGdHQUFnRzs0Q0FDMUdjLE9BQU8sRUFBRTt1REFBTUMsWUFBWSxFQUFFOzZDQUFBO3NEQUM5QixHQUVEOzs7OztpREFBUzs7Ozs7O3lDQUNMOzZCQUNQLENBQUM7O29DQUNELGlCQUVIO2tDQUFFLE9BQUs7cUNBQUc7Ozs7O3dCQUVQOzs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBekdRMUMsS0FBSzs7UUFDcUJQLDZDQUFVOzs7QUFEcENPLEtBQUFBLEtBQUs7QUEyR2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgIGNvbnRyYWN0QWJpLCBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuY29uc3QgYmVuZWZpY2lhcnlBZGRyZXNzID0gXCIweDQyZThkMUJCQjYxM2RjNjNBNmZEYkYzOUIwYjAxNkU3OGRGNEU0ZjZcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgW215TkZUcywgc2V0TXlORlRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rva2VuVHlwZSwgc2V0VG9rZW5UeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QmVuZWZpY2lhcnlMZWdhY2llcygpO1xuICAgICAgICBzZXRNeU5GVHMobmZ0cyk7XG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgTkZUczogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgTGVnYWN5TkZUc1ske25mdElkfV06ICR7bmZ0cz8udG9TdHJpbmcoKX1gKVxuICAgIC8vIGdldE15TkZUcygpO1xuICAgIGdldE15TkZUcygpO1xuICAgIGNvbnNvbGUubG9nKG15TkZUcylcbiAgICBjb25zdCBhbW91bnQgPSBteU5GVHM/LmFtb3VudD8udG9TdHJpbmcoKTtcbiAgICBjb25zdCB0b2tlbklkID0gbXlORlRzPy50b2tlbklkPy50b051bWJlcigpO1xuICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4gICAgY29uc29sZS5sb2codG9rZW5JZClcbiAgICBpZiAodG9rZW5JZCA9PSAwKXsgc2V0VG9rZW5UeXBlKFwiRVJDMjBcIil9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoYW1vdW50ID09IDApIHNldFRva2VuVHlwZShcIkVSQzcyMVwiKTtcbiAgICAgIGVsc2Ugc2V0VG9rZW5UeXBlKFwiRVJDMTE1NVwiKTtcbiAgICB9XG4gICAgXG4gIH0sIFtteU5GVHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxocj48L2hyPlxuXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdyBteC01XCI+XG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWF4LXctNTAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIENoZWNrIFlvdXIgSW5oZXJpdGFuY2VcbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtdC0yIHRleHQtZ3JheS00MDAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgcGItMyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgQXNzdW1lZCBJbmhlcml0YW5jZSB5b3Ugd2lsbCBiZSByZWNpZXZpbmcgZnJvbVxuICAgICAgICAgICAgICAgICAgdGhpcyBBY2NvdW50XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdyaWQtcm93LWZsb3cgZ2FwLTQgdy1mdWxsIG14LWF1dG8gbXQtNSBtbC01IGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRva2VuPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QmVuZWZpY2lhcnk8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5BbW91bnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Ub2tlbiBJRDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlR5cGU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5EZWxldGU8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtteU5GVHMubWFwKChsZWdhY3ksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ3JpZC1yb3ctZmxvdyBnYXAtNCB3LWZ1bGwgbXgtYXV0byBtdC01IG1sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2xlZ2FjeT8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIHt0b2tlblR5cGUgPT0gXCJFUkMyMFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGxlZ2FjeT8uYW1vdW50KS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobGVnYWN5Py5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bGVnYWN5Py50b2tlbklkPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+c251bGw8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsImV0aGVycyIsImNvbnRyYWN0QWJpIiwiY29udHJhY3RBZGRyZXNzIiwiSGVhZGVyIiwiYmVuZWZpY2lhcnlBZGRyZXNzIiwiSW5kZXgiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJteU5GVHMiLCJzZXRNeU5GVHMiLCJ0b2tlblR5cGUiLCJzZXRUb2tlblR5cGUiLCJnZXRNeU5GVHMiLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwibmZ0cyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiYW1vdW50IiwidG9TdHJpbmciLCJ0b2tlbklkIiwidG9OdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJoMiIsInAiLCJoMyIsIm1hcCIsImxlZ2FjeSIsImluZGV4IiwidG9rZW4iLCJiZW5lZmljaWFyeSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlTGVnYWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});