/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./dynamicWagmi/index.tsx":
/*!********************************!*\
  !*** ./dynamicWagmi/index.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/wallets */ \"@rainbow-me/rainbowkit/wallets\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _particle_network_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @particle-network/auth */ \"@particle-network/auth\");\n/* harmony import */ var _particle_network_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_particle_network_auth__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @particle-network/rainbowkit-ext */ \"@particle-network/rainbowkit-ext\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_7__, _particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_7__, _particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\nfunction DynamicWagmi(props) {\n    const particle = new _particle_network_auth__WEBPACK_IMPORTED_MODULE_9__.ParticleNetwork({\n        projectId: \"cb99c115-33fc-4838-a6ac-0e99889cd3aa\",\n        clientKey: \"cGfmojeOILJ4kDhGojjOsUyVBjvpuG1ilmflzrwI\",\n        appId: \"b6276d3d-482f-4360-b603-3dac25908935\"\n    });\n    const { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.bscTestnet\n    ], [\n        (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__.jsonRpcProvider)({\n            rpc: ()=>({\n                    http: \"https://rpc.ankr.com/bsc_testnet_chapel\"\n                })\n        }),\n        (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n    ]);\n    const popularWallets = {\n        groupName: \"Popular\",\n        wallets: [\n            (0,_particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__.particleWallet)({\n                chains,\n                authType: \"google\"\n            }),\n            (0,_particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__.particleWallet)({\n                chains,\n                authType: \"facebook\"\n            }),\n            (0,_particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__.particleWallet)({\n                chains,\n                authType: \"apple\"\n            }),\n            (0,_particle_network_rainbowkit_ext__WEBPACK_IMPORTED_MODULE_10__.particleWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.injectedWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.rainbowWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.coinbaseWallet)({\n                appName: \"RainbowKit demo\",\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.metaMaskWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.walletConnectWallet)({\n                chains\n            })\n        ]\n    };\n    const connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.connectorsForWallets)([\n        popularWallets,\n        {\n            groupName: \"Other\",\n            wallets: [\n                (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.argentWallet)({\n                    chains\n                }),\n                (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.trustWallet)({\n                    chains\n                }),\n                (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.omniWallet)({\n                    chains\n                }),\n                (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.imTokenWallet)({\n                    chains\n                }),\n                (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_2__.ledgerWallet)({\n                    chains\n                })\n            ]\n        }\n    ]);\n    const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n        autoConnect: true,\n        connectors,\n        provider,\n        webSocketProvider\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: wagmiClient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.RainbowKitProvider, {\n                chains: chains,\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspace/test/app/frontend/dynamicWagmi/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/test/app/frontend/dynamicWagmi/index.tsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicWagmi);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9keW5hbWljV2FnbWkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdnQztBQWFRO0FBRTJCO0FBQ1Q7QUFDRjtBQUNiO0FBRUQ7QUFDaEI7QUFDK0I7QUFFUztBQUVsRSxTQUFTcUIsYUFBYUMsS0FBVSxFQUFFO0lBQ2hDLE1BQU1DLFdBQVcsSUFBSUosbUVBQWVBLENBQUM7UUFDbkNLLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxrQkFBaUIsRUFBRSxHQUFHakIsc0RBQWVBLENBQzdEO1FBQUNLLG9EQUFVQTtLQUFDLEVBQ1o7UUFDRUYsd0VBQWVBLENBQUM7WUFDZGUsS0FBSyxJQUFPO29CQUFFQyxNQUFNO2dCQUEwQztRQUNoRTtRQUNBZixzRUFBY0E7S0FDZjtJQUVILE1BQU1nQixpQkFBaUI7UUFDckJDLFdBQVc7UUFDWEMsU0FBUztZQUNQZCxpRkFBY0EsQ0FBQztnQkFBRU87Z0JBQVFRLFVBQVU7WUFBUztZQUM1Q2YsaUZBQWNBLENBQUM7Z0JBQUVPO2dCQUFRUSxVQUFVO1lBQVc7WUFDOUNmLGlGQUFjQSxDQUFDO2dCQUFFTztnQkFBUVEsVUFBVTtZQUFRO1lBQzNDZixpRkFBY0EsQ0FBQztnQkFBRU87WUFBTztZQUN4QnRCLDhFQUFjQSxDQUFDO2dCQUFFc0I7WUFBTztZQUN4QmxCLDZFQUFhQSxDQUFDO2dCQUFFa0I7WUFBTztZQUN2QnhCLDhFQUFjQSxDQUFDO2dCQUFFaUMsU0FBUztnQkFBbUJUO1lBQU87WUFDcERwQiw4RUFBY0EsQ0FBQztnQkFBRW9CO1lBQU87WUFDeEJoQixtRkFBbUJBLENBQUM7Z0JBQUVnQjtZQUFPO1NBQzlCO0lBQ0g7SUFFQSxNQUFNVSxhQUFhckMsNEVBQW9CQSxDQUFDO1FBQ3RDZ0M7UUFDQTtZQUNFQyxXQUFXO1lBQ1hDLFNBQVM7Z0JBQ1BoQyw0RUFBWUEsQ0FBQztvQkFBRXlCO2dCQUFPO2dCQUN0QmpCLDJFQUFXQSxDQUFDO29CQUFFaUI7Z0JBQU87Z0JBQ3JCbkIsMEVBQVVBLENBQUM7b0JBQUVtQjtnQkFBTztnQkFDcEJ2Qiw2RUFBYUEsQ0FBQztvQkFBRXVCO2dCQUFPO2dCQUN2QnJCLDRFQUFZQSxDQUFDO29CQUFFcUI7Z0JBQU87YUFDdkI7UUFDSDtLQUNEO0lBRUQsTUFBTVcsY0FBY3pCLG1EQUFZQSxDQUFDO1FBQy9CMEIsYUFBYSxJQUFJO1FBQ2pCRjtRQUNBVDtRQUNBQztJQUNGO0lBRUEscUJBQ0U7a0JBQ0dTLDZCQUNDLDhEQUFDeEIsOENBQVdBO1lBQUMwQixRQUFRRjtzQkFDbkIsNEVBQUNyQyxzRUFBa0JBO2dCQUFDMEIsUUFBUUE7MEJBQ3pCTCxNQUFNbUIsUUFBUTs7Ozs7Ozs7Ozs7O0FBTTNCO0FBRUEsaUVBQWVwQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vZHluYW1pY1dhZ21pL2luZGV4LnRzeD85MjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbm5lY3RvcnNGb3JXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5cbmltcG9ydCB7XG4gIGFyZ2VudFdhbGxldCxcbiAgY29pbmJhc2VXYWxsZXQsXG4gIGltVG9rZW5XYWxsZXQsXG4gIGluamVjdGVkV2FsbGV0LFxuICBsZWRnZXJXYWxsZXQsXG4gIG1ldGFNYXNrV2FsbGV0LFxuICBvbW5pV2FsbGV0LFxuICByYWluYm93V2FsbGV0LFxuICB0cnVzdFdhbGxldCxcbiAgd2FsbGV0Q29ubmVjdFdhbGxldCxcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXQvd2FsbGV0c1wiO1xuXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IGJzY1Rlc3RuZXQgfSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYXJ0aWNsZU5ldHdvcmsgfSBmcm9tIFwiQHBhcnRpY2xlLW5ldHdvcmsvYXV0aFwiO1xuXG5pbXBvcnQgeyBwYXJ0aWNsZVdhbGxldCB9IGZyb20gXCJAcGFydGljbGUtbmV0d29yay9yYWluYm93a2l0LWV4dFwiO1xuXG5mdW5jdGlvbiBEeW5hbWljV2FnbWkocHJvcHM6IGFueSkge1xuICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZU5ldHdvcmsoe1xuICAgIHByb2plY3RJZDogXCJjYjk5YzExNS0zM2ZjLTQ4MzgtYTZhYy0wZTk5ODg5Y2QzYWFcIixcbiAgICBjbGllbnRLZXk6IFwiY0dmbW9qZU9JTEo0a0RoR29qak9zVXlWQmp2cHVHMWlsbWZsenJ3SVwiLFxuICAgIGFwcElkOiBcImI2Mjc2ZDNkLTQ4MmYtNDM2MC1iNjAzLTNkYWMyNTkwODkzNVwiLFxuICB9KTtcbiAgY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICAgIFtic2NUZXN0bmV0XSxcbiAgICBbXG4gICAgICBqc29uUnBjUHJvdmlkZXIoe1xuICAgICAgICBycGM6ICgpID0+ICh7IGh0dHA6IFwiaHR0cHM6Ly9ycGMuYW5rci5jb20vYnNjX3Rlc3RuZXRfY2hhcGVsXCIgfSksXG4gICAgICB9KSxcbiAgICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gICAgXVxuICApO1xuICBjb25zdCBwb3B1bGFyV2FsbGV0cyA9IHtcbiAgICBncm91cE5hbWU6IFwiUG9wdWxhclwiLFxuICAgIHdhbGxldHM6IFtcbiAgICAgIHBhcnRpY2xlV2FsbGV0KHsgY2hhaW5zLCBhdXRoVHlwZTogXCJnb29nbGVcIiB9KSxcbiAgICAgIHBhcnRpY2xlV2FsbGV0KHsgY2hhaW5zLCBhdXRoVHlwZTogXCJmYWNlYm9va1wiIH0pLFxuICAgICAgcGFydGljbGVXYWxsZXQoeyBjaGFpbnMsIGF1dGhUeXBlOiBcImFwcGxlXCIgfSksXG4gICAgICBwYXJ0aWNsZVdhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgIGluamVjdGVkV2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgICAgcmFpbmJvd1dhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgIGNvaW5iYXNlV2FsbGV0KHsgYXBwTmFtZTogXCJSYWluYm93S2l0IGRlbW9cIiwgY2hhaW5zIH0pLFxuICAgICAgbWV0YU1hc2tXYWxsZXQoeyBjaGFpbnMgfSksXG4gICAgICB3YWxsZXRDb25uZWN0V2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAgICBwb3B1bGFyV2FsbGV0cyxcbiAgICB7XG4gICAgICBncm91cE5hbWU6IFwiT3RoZXJcIixcbiAgICAgIHdhbGxldHM6IFtcbiAgICAgICAgYXJnZW50V2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgICAgICB0cnVzdFdhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgICAgb21uaVdhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgICAgaW1Ub2tlbldhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgICAgbGVkZ2VyV2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgY29ubmVjdG9ycyxcbiAgICBwcm92aWRlcixcbiAgICB3ZWJTb2NrZXRQcm92aWRlcixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dhZ21pQ2xpZW50ICYmIChcbiAgICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1dhZ21pO1xuIl0sIm5hbWVzIjpbImNvbm5lY3RvcnNGb3JXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiYXJnZW50V2FsbGV0IiwiY29pbmJhc2VXYWxsZXQiLCJpbVRva2VuV2FsbGV0IiwiaW5qZWN0ZWRXYWxsZXQiLCJsZWRnZXJXYWxsZXQiLCJtZXRhTWFza1dhbGxldCIsIm9tbmlXYWxsZXQiLCJyYWluYm93V2FsbGV0IiwidHJ1c3RXYWxsZXQiLCJ3YWxsZXRDb25uZWN0V2FsbGV0IiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJqc29uUnBjUHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImJzY1Rlc3RuZXQiLCJSZWFjdCIsIlBhcnRpY2xlTmV0d29yayIsInBhcnRpY2xlV2FsbGV0IiwiRHluYW1pY1dhZ21pIiwicHJvcHMiLCJwYXJ0aWNsZSIsInByb2plY3RJZCIsImNsaWVudEtleSIsImFwcElkIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJ3ZWJTb2NrZXRQcm92aWRlciIsInJwYyIsImh0dHAiLCJwb3B1bGFyV2FsbGV0cyIsImdyb3VwTmFtZSIsIndhbGxldHMiLCJhdXRoVHlwZSIsImFwcE5hbWUiLCJjb25uZWN0b3JzIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImNsaWVudCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dynamicWagmi/index.tsx\n");

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)\n/* harmony export */ });\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ \"./hooks/useIsMounted.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL2hvb2tzL2luZGV4LmpzPzQ4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4vdXNlSXNNb3VudGVkXCI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VJc01vdW50ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ }),

/***/ "./hooks/useIsMounted.js":
/*!*******************************!*\
  !*** ./hooks/useIsMounted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = ()=>{\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>setMounted(true), []);\n    return mounted;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc01vdW50ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLGVBQWUsSUFBTTtJQUNoQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsMkNBQWMsQ0FBQyxLQUFLO0lBRWxEQSw0Q0FBZSxDQUFDLElBQU1HLFdBQVcsSUFBSSxHQUFHLEVBQUU7SUFFMUMsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vaG9va3MvdXNlSXNNb3VudGVkLmpzP2NhOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSXNNb3VudGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgcmV0dXJuIG1vdW50ZWQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUlzTW91bnRlZCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useIsMounted.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dynamicWagmi_index_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamicWagmi/index.tsx */ \"./dynamicWagmi/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dynamicWagmi_index_tsx__WEBPACK_IMPORTED_MODULE_4__]);\n_dynamicWagmi_index_tsx__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dynamicWagmi_index_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/workspace/test/app/frontend/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/test/app/frontend/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRTtBQUNGO0FBQ3NCO0FBRWI7QUFFeEMsTUFBTUksTUFBTSxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDeEMsTUFBTUMsWUFBWUosb0RBQVlBO0lBRTlCLElBQUksQ0FBQ0ksV0FBVyxPQUFPLElBQUk7SUFDM0IscUJBQ0UsOERBQUNMLCtEQUFZQTtrQkFDWCw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IER5bmFtaWNXYWdtaSBmcm9tIFwiLi4vZHluYW1pY1dhZ21pL2luZGV4LnRzeFwiO1xuXG5pbXBvcnQgeyB1c2VJc01vdW50ZWQgfSBmcm9tIFwiLi4vaG9va3NcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcblxuICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPER5bmFtaWNXYWdtaT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0R5bmFtaWNXYWdtaT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5leHRIZWFkIiwiRHluYW1pY1dhZ21pIiwidXNlSXNNb3VudGVkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNNb3VudGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@particle-network/auth":
/*!*****************************************!*\
  !*** external "@particle-network/auth" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@particle-network/auth");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@particle-network/rainbowkit-ext":
/*!***************************************************!*\
  !*** external "@particle-network/rainbowkit-ext" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@particle-network/rainbowkit-ext");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@rainbow-me/rainbowkit/wallets":
/*!*************************************************!*\
  !*** external "@rainbow-me/rainbowkit/wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit/wallets");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/jsonRpc");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();