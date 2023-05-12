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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _workspace_test_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3;\n        // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n        var amount = myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.amount) === null || ref === void 0 ? void 0 : ref.toString();\n        var tokenId = myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toNumber();\n        console.log(amount);\n        co;\n        if (tokenId == 0) {\n            setTokenType(\"ERC20\");\n        } else {\n            if (amount == 0) setTokenType(\"ERC721\");\n            else setTokenType(\"ERC1155\");\n        }\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-semibold max-w-50 justify-center\",\n                                children: \"Check Your Inheritance\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center\",\n                                children: \"This is the Assumed Inheritance you will be recieving from this Account\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Beneficiary\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Token ID\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this),\n                            myNFTs.map(function(legacy, index) {\n                                var ref, ref5, ref6;\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"truncate\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.beneficiary) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, _this),\n                                        tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center truncate\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 23\n                                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: legacy === null || legacy === void 0 ? void 0 : (ref6 = legacy.tokenId) === null || ref6 === void 0 ? void 0 : ref6.toString()\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"justify-self-center\",\n                                            children: tokenType\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                            onClick: function() {\n                                                return removeLegacy();\n                                            },\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: \"snull\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/test/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMYixTQUFTLEVBQUMsZ0dBQWdHOzRDQUMxR2MsT0FBTyxFQUFFO3VEQUFNQyxZQUFZLEVBQUU7NkNBQUE7c0RBQzlCLEdBRUQ7Ozs7O2lEQUFTOzs7Ozs7eUNBQ0w7NkJBQ1AsQ0FBQzs7b0NBQ0QsaUJBRUg7a0NBQUUsT0FBSztxQ0FBRzs7Ozs7d0JBRVA7Ozs7OztnQkFDSDtxQkFFUCxDQUNIO0NBQ0g7R0F6R1EzQyxLQUFLOztRQUNxQlAsNkNBQVU7OztBQURwQ08sS0FBQUEsS0FBSztBQTJHZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luaGVyaXRhbmNlL2luZGV4LmpzPzZhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyAgY29udHJhY3RBYmksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5jb25zdCBiZW5lZmljaWFyeUFkZHJlc3MgPSBcIjB4NDJlOGQxQkJCNjEzZGM2M0E2ZkRiRjM5QjBiMDE2RTc4ZEY0RTRmNlwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBORlRzOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBMZWdhY3lORlRzWyR7bmZ0SWR9XTogJHtuZnRzPy50b1N0cmluZygpfWApXG4gICAgLy8gZ2V0TXlORlRzKCk7XG4gICAgZ2V0TXlORlRzKCk7XG4gICAgY29uc29sZS5sb2cobXlORlRzKVxuICAgIGNvbnN0IGFtb3VudCA9IG15TkZUcz8uYW1vdW50Py50b1N0cmluZygpO1xuICAgIGNvbnN0IHRva2VuSWQgPSBteU5GVHM/LnRva2VuSWQ/LnRvTnVtYmVyKCk7XG4gICAgY29uc29sZS5sb2coYW1vdW50KTtcbiAgICBjb1xuICAgIGlmICh0b2tlbklkID09IDApeyBzZXRUb2tlblR5cGUoXCJFUkMyMFwiKX1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChhbW91bnQgPT0gMCkgc2V0VG9rZW5UeXBlKFwiRVJDNzIxXCIpO1xuICAgICAgZWxzZSBzZXRUb2tlblR5cGUoXCJFUkMxMTU1XCIpO1xuICAgIH1cbiAgICBcbiAgfSwgW215TkZUc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0Nvbm5lY3RlZCAmJiBhZGRyZXNzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGhyPjwvaHI+XG5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtYXgtdy01MCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgQ2hlY2sgWW91ciBJbmhlcml0YW5jZVxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTIgdGV4dC1ncmF5LTQwMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBwYi0zIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBUaGlzIGlzIHRoZSBBc3N1bWVkIEluaGVyaXRhbmNlIHlvdSB3aWxsIGJlIHJlY2lldmluZyBmcm9tXG4gICAgICAgICAgICAgICAgICB0aGlzIEFjY291bnRcbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ3JpZC1yb3ctZmxvdyBnYXAtNCB3LWZ1bGwgbXgtYXV0byBtdC01IG1sLTUganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VG9rZW48L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5CZW5lZmljaWFyeTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkFtb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRva2VuIElEPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VHlwZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkRlbGV0ZTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge215TkZUcy5tYXAoKGxlZ2FjeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bGVnYWN5Py50b2tlbj8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bGVnYWN5Py5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAge3Rva2VuVHlwZSA9PSBcIkVSQzIwXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobGVnYWN5Py5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihsZWdhY3k/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtsZWdhY3k/LnRva2VuSWQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+e3Rva2VuVHlwZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsYWNrIGhvdmVyOmJnLXJlZC01MDAgdGV4dC1ib2xkIHJvdW5kZWQtZnVsbCBweC02IHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlTGVnYWN5KCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5zbnVsbDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJjb250cmFjdEFkZHJlc3MiLCJIZWFkZXIiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImdldE15TkZUcyIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJuZnRzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImdldEJlbmVmaWNpYXJ5TGVnYWNpZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJhbW91bnQiLCJ0b1N0cmluZyIsInRva2VuSWQiLCJ0b051bWJlciIsImNvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJtYWluIiwiaDIiLCJwIiwiaDMiLCJtYXAiLCJsZWdhY3kiLCJpbmRleCIsInRva2VuIiwiYmVuZWZpY2lhcnkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUxlZ2FjeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});