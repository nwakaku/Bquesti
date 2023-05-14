"use strict";
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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst apiKey = \"c427f781bb3b4c6c8d9c88200e752664\";\nconst chainEndpoints = [\n    `https://bsc-mainnet.nodereal.io/v1/${apiKey}`,\n    `https://bsc-testnet.nodereal.io/v1/${apiKey}`,\n    `https://eth-mainnet.nodereal.io/v1/${apiKey}`,\n    `https://eth-goerli.nodereal.io/v1/${apiKey}`,\n    `https://eth2-beacon-mainnet.nodereal.io/v1/${apiKey}`,\n    `https://aptos-mainnet.nodereal.io/v1/${apiKey}`,\n    `https://aptos-testnet.nodereal.io/v1/${apiKey}`,\n    `https://opt-mainnet.nodereal.io/v1/${apiKey}`,\n    `https://polygon-mainnet.nodereal.io/v1/${apiKey}`\n];\nasync function handler(req, res) {\n    const { hash  } = req.query;\n    // Perform search on each chain\n    for (const endpoint of chainEndpoints){\n        try {\n            const options = {\n                method: \"POST\",\n                url: endpoint,\n                headers: {\n                    accept: \"application/json\",\n                    \"content-type\": \"application/json\"\n                },\n                data: {\n                    id: 1,\n                    jsonrpc: \"2.0\",\n                    params: [\n                        hash\n                    ],\n                    method: \"eth_getTransactionReceipt\"\n                }\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].request(options);\n            if (response.data.result) {\n                return res.send(response.data.result);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return res.status(404).send(\"Transaction not found\");\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFNBQVM7QUFFZixNQUFNQyxpQkFBaUI7SUFDckIsQ0FBQyxtQ0FBbUMsRUFBRUQsT0FBTyxDQUFDO0lBQzlDLENBQUMsbUNBQW1DLEVBQUVBLE9BQU8sQ0FBQztJQUM5QyxDQUFDLG1DQUFtQyxFQUFFQSxPQUFPLENBQUM7SUFDOUMsQ0FBQyxrQ0FBa0MsRUFBRUEsT0FBTyxDQUFDO0lBQzdDLENBQUMsMkNBQTJDLEVBQUVBLE9BQU8sQ0FBQztJQUN0RCxDQUFDLHFDQUFxQyxFQUFFQSxPQUFPLENBQUM7SUFDaEQsQ0FBQyxxQ0FBcUMsRUFBRUEsT0FBTyxDQUFDO0lBQ2hELENBQUMsbUNBQW1DLEVBQUVBLE9BQU8sQ0FBQztJQUM5QyxDQUFDLHVDQUF1QyxFQUFFQSxPQUFPLENBQUM7Q0FDbkQ7QUFFYyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBRTFCLCtCQUErQjtJQUMvQixLQUFLLE1BQU1DLFlBQVlOLGVBQWdCO1FBQ3JDLElBQUk7WUFDRixNQUFNTyxVQUFVO2dCQUNkQyxRQUFRO2dCQUNSQyxLQUFLSDtnQkFDTEksU0FBUztvQkFDUEMsUUFBUTtvQkFDUixnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNO29CQUNKQyxJQUFJO29CQUNKQyxTQUFTO29CQUNUQyxRQUFRO3dCQUFDWDtxQkFBSztvQkFDZEksUUFBUTtnQkFDVjtZQUNGO1lBRUEsTUFBTVEsV0FBVyxNQUFNbEIscURBQWEsQ0FBQ1M7WUFDckMsSUFBSVMsU0FBU0osSUFBSSxDQUFDTSxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU9mLElBQUlnQixJQUFJLENBQUNILFNBQVNKLElBQUksQ0FBQ00sTUFBTTtZQUN0QyxDQUFDO1FBQ0gsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLE9BQU9qQixJQUFJbUIsTUFBTSxDQUFDLEtBQUtILElBQUksQ0FBQztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3NlYXJjaC5qcz81ZDNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXBpS2V5ID0gXCJjNDI3Zjc4MWJiM2I0YzZjOGQ5Yzg4MjAwZTc1MjY2NFwiO1xuXG5jb25zdCBjaGFpbkVuZHBvaW50cyA9IFtcbiAgYGh0dHBzOi8vYnNjLW1haW5uZXQubm9kZXJlYWwuaW8vdjEvJHthcGlLZXl9YCxcbiAgYGh0dHBzOi8vYnNjLXRlc3RuZXQubm9kZXJlYWwuaW8vdjEvJHthcGlLZXl9YCxcbiAgYGh0dHBzOi8vZXRoLW1haW5uZXQubm9kZXJlYWwuaW8vdjEvJHthcGlLZXl9YCxcbiAgYGh0dHBzOi8vZXRoLWdvZXJsaS5ub2RlcmVhbC5pby92MS8ke2FwaUtleX1gLFxuICBgaHR0cHM6Ly9ldGgyLWJlYWNvbi1tYWlubmV0Lm5vZGVyZWFsLmlvL3YxLyR7YXBpS2V5fWAsXG4gIGBodHRwczovL2FwdG9zLW1haW5uZXQubm9kZXJlYWwuaW8vdjEvJHthcGlLZXl9YCxcbiAgYGh0dHBzOi8vYXB0b3MtdGVzdG5ldC5ub2RlcmVhbC5pby92MS8ke2FwaUtleX1gLFxuICBgaHR0cHM6Ly9vcHQtbWFpbm5ldC5ub2RlcmVhbC5pby92MS8ke2FwaUtleX1gLFxuICBgaHR0cHM6Ly9wb2x5Z29uLW1haW5uZXQubm9kZXJlYWwuaW8vdjEvJHthcGlLZXl9YCxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBoYXNoIH0gPSByZXEucXVlcnk7XG5cbiAgLy8gUGVyZm9ybSBzZWFyY2ggb24gZWFjaCBjaGFpblxuICBmb3IgKGNvbnN0IGVuZHBvaW50IG9mIGNoYWluRW5kcG9pbnRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogZW5kcG9pbnQsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgICBwYXJhbXM6IFtoYXNoXSxcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX2dldFRyYW5zYWN0aW9uUmVjZWlwdFwiLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZChyZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZChcIlRyYW5zYWN0aW9uIG5vdCBmb3VuZFwiKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaUtleSIsImNoYWluRW5kcG9pbnRzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhhc2giLCJxdWVyeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJhY2NlcHQiLCJkYXRhIiwiaWQiLCJqc29ucnBjIiwicGFyYW1zIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicmVzdWx0Iiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.js"));
module.exports = __webpack_exports__;

})();