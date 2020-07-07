module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MatrixTable/context.tsx":
/*!********************************************!*\
  !*** ./components/MatrixTable/context.tsx ***!
  \********************************************/
/*! exports provided: MatrixTableContext, MatrixTableContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContext", function() { return MatrixTableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContextProvider", function() { return MatrixTableContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Download\\test\\interview-fullstack-master\\components\\MatrixTable\\context.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * This is the 
 */

const emptyMatrix = {
  "36months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "24months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "12months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "mtm": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  }
};
const originState = {
  "36months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "24months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "12months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "mtm": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  }
};
const defaultState = {
  matrix: emptyMatrix,
  originalMatrix: emptyMatrix
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MATRIX':
      return _objectSpread({}, state);

    case 'SET_ORIGINAL_MATRIX':
      return _objectSpread({}, state);

    case 'CHANGE':
      return _objectSpread({}, state);

    case 'CLEAR':
      return {
        matrix: _objectSpread({}, originState),
        originalMatrix: _objectSpread({}, originState)
      };

    default:
      return state;
  }
};

const MatrixTableContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])([defaultState, () => {}]);
/**
 * This is the provider that hosts the state
 * @param param0 
 */

const MatrixTableContextProvider = ({
  initialMatrix,
  children
}) => {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, {
    matrix: initialMatrix || emptyMatrix,
    originalMatrix: initialMatrix || emptyMatrix
  });
  return __jsx(MatrixTableContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./components/MatrixTable/index.tsx":
/*!******************************************!*\
  !*** ./components/MatrixTable/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/MatrixTable/context.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "D:\\Download\\test\\interview-fullstack-master\\components\\MatrixTable\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8___default.a);
const StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a);

/**
 * Add 4 buttons: 
 * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
 * - Edit to make the fields editable (only when not in edit mode)
 * - Clear to completely clear the table
 * - Save to save the table
 * @param param0 
 */
const MatrixTable = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  // State ------------------------------------------------------------------- //
  const {
    0: {
      matrix
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["MatrixTableContext"]);
  const {
    0: editRow,
    1: setEditRow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('0');
  const {
    0: lite,
    1: setLite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: standard,
    1: setStandard
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: unlimited,
    1: setUnlimited
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const handleClickCreateDB = async () => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3000/api/save-pricing", {
      data: matrix
    });
    console.log('response ---> ', response);
  };

  const handleClickEdit = async row => {
    setEditRow(row);
    setLite(matrix[row].lite);
    setStandard(matrix[row].standard);
    setUnlimited(matrix[row].unlimited);
  };

  const handleClickClear = async () => {
    dispatch({
      type: 'CLEAR',
      payload: matrix
    });
  };

  const handleClickSave = async row => {
    matrix[row] = {
      lite: lite,
      standard: standard,
      unlimited: unlimited
    };
    dispatch({
      type: 'CHANGE',
      payload: _objectSpread({}, matrix)
    });
    setEditRow('0');
  };

  return __jsx("div", _extends({}, props, {
    className: "jsx-903402690" + " " + (props && props.className != null && props.className || classnames__WEBPACK_IMPORTED_MODULE_2___default()(['container', className]) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    onClick: () => handleClickCreateDB(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, " Create "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      margin: '0px 30px'
    },
    variant: "outlined",
    onClick: () => handleClickClear(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, " Clear "), __jsx("br", {
    className: "jsx-903402690",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("br", {
    className: "jsx-903402690",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      minWidth: '700px'
    },
    "aria-label": "customized table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "lite"), __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "standard"), __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "unlimited"), __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "action"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, Object.keys(matrix).map(row => __jsx(StyledTableRow, {
    key: row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, " ", row, " "), row != editRow ? __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
    }
  }, " ", matrix[row].lite, " ") : __jsx(StyledTableCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: lite,
    onChange: e => setLite(parseInt(e.target.value)),
    label: "lite",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 36
    }
  })), row != editRow ? __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 35
    }
  }, " ", matrix[row].standard, " ") : __jsx(StyledTableCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: standard,
    onChange: e => setStandard(parseInt(e.target.value)),
    label: "standard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 36
    }
  })), row != editRow ? __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 35
    }
  }, " ", matrix[row].unlimited, " ") : __jsx(StyledTableCell, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: unlimited,
    onChange: e => setUnlimited(parseInt(e.target.value)),
    label: "unlimited",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 36
    }
  })), __jsx(StyledTableCell, {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, row != editRow ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    onClick: () => handleClickEdit(row),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, " Edit ") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    onClick: () => handleClickSave(row),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, " Save "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    onClick: () => setEditRow('0'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, " Cancel ")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "903402690",
    __self: undefined
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZFxcdGVzdFxcaW50ZXJ2aWV3LWZ1bGxzdGFjay1tYXN0ZXJcXGNvbXBvbmVudHNcXE1hdHJpeFRhYmxlXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lrQiIsImZpbGUiOiJEOlxcRG93bmxvYWRcXHRlc3RcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTWF0cml4VGFibGVDb250ZXh0LCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuaW1wb3J0IHsgd2l0aFN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgaGVhZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICB9LFxuICB9KSxcbikoVGFibGVDZWxsKTtcblxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4pKFRhYmxlUm93KTtcblxudHlwZSBQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbi8qKlxuICogQWRkIDQgYnV0dG9uczogXG4gKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gKiAtIEVkaXQgdG8gbWFrZSB0aGUgZmllbGRzIGVkaXRhYmxlIChvbmx5IHdoZW4gbm90IGluIGVkaXQgbW9kZSlcbiAqIC0gQ2xlYXIgdG8gY29tcGxldGVseSBjbGVhciB0aGUgdGFibGVcbiAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICogQHBhcmFtIHBhcmFtMCBcbiAqL1xuY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFtlZGl0Um93LCBzZXRFZGl0Um93XSA9IHVzZVN0YXRlKCcwJylcbiAgY29uc3QgW2xpdGUsIHNldExpdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3N0YW5kYXJkLCBzZXRTdGFuZGFyZF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdW5saW1pdGVkLCBzZXRVbmxpbWl0ZWRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVDbGlja0NyZWF0ZURCID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2F2ZS1wcmljaW5nXCIsIHtkYXRhOiBtYXRyaXh9KVxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSAtLS0+ICcsIHJlc3BvbnNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tFZGl0ID0gYXN5bmMgKHJvdykgPT4ge1xuICAgIHNldEVkaXRSb3cocm93KTtcbiAgICBzZXRMaXRlKG1hdHJpeFtyb3ddLmxpdGUpXG4gICAgc2V0U3RhbmRhcmQobWF0cml4W3Jvd10uc3RhbmRhcmQpXG4gICAgc2V0VW5saW1pdGVkKG1hdHJpeFtyb3ddLnVubGltaXRlZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQ2xlYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0NMRUFSJyxcbiAgICAgIHBheWxvYWQ6IG1hdHJpeFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja1NhdmUgPSBhc3luYyAocm93KSA9PiB7XG4gICAgbWF0cml4W3Jvd10gPSB7bGl0ZTogbGl0ZSwgc3RhbmRhcmQ6IHN0YW5kYXJkLCB1bmxpbWl0ZWQ6IHVubGltaXRlZH1cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQ0hBTkdFJyxcbiAgICAgIHBheWxvYWQ6IHsuLi5tYXRyaXh9XG4gICAgfSlcbiAgICBzZXRFZGl0Um93KCcwJylcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0NyZWF0ZURCKCl9PiBDcmVhdGUgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luOiAnMHB4IDMwcHgnfX0gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tDbGVhcigpfT4gQ2xlYXIgPC9CdXR0b24+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICA8VGFibGUgc3R5bGU9e3ttaW5XaWR0aDogJzcwMHB4J319IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+bGl0ZTwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+c3RhbmRhcmQ8L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnVubGltaXRlZDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+YWN0aW9uPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMobWF0cml4KS5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3d9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4ge3Jvd30gPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiB7bWF0cml4W3Jvd10ubGl0ZX0gPC9TdHlsZWRUYWJsZUNlbGw+OlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48VGV4dEZpZWxkIHZhbHVlPXtsaXRlfSBvbkNoYW5nZT17KGUpID0+IHNldExpdGUocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gbGFiZWw9XCJsaXRlXCIgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiB7bWF0cml4W3Jvd10uc3RhbmRhcmR9IDwvU3R5bGVkVGFibGVDZWxsPjpcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+PFRleHRGaWVsZCB2YWx1ZT17c3RhbmRhcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhbmRhcmQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gbGFiZWw9XCJzdGFuZGFyZFwiIC8+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtyb3cgIT0gZWRpdFJvdyA/IDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4ge21hdHJpeFtyb3ddLnVubGltaXRlZH0gPC9TdHlsZWRUYWJsZUNlbGw+OlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48VGV4dEZpZWxkIHZhbHVlPXt1bmxpbWl0ZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VW5saW1pdGVkKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9IGxhYmVsPVwidW5saW1pdGVkXCIgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0VkaXQocm93KX0+IEVkaXQgPC9CdXR0b24+OlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tTYXZlKHJvdyl9PiBTYXZlIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdFJvdygnMCcpfT4gQ2FuY2VsIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWF0cml4VGFibGVXaXRoQ29udGV4dDogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3BzPiA9ICh7IGluaXRpYWxNYXRyaXgsIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gWW91IGNhbiBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIG9yIGluIHBhZ2VzL2luZGV4LnRzXG4gIC8vIFJlbWVtYmVyIHRoYXQgeW91IHNob3VsZCB0cnkgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgcHJpY2luZyBpbiBvcmlnaW5hbE1hdHJpeC5cbiAgLy8gbWF0cml4IHdpbGwgaG9sZCB0aGUgbGF0ZXN0IHZhbHVlIChlZGl0ZWQgb3Igc2FtZSBhcyBvcmlnaW5hbE1hdHJpeClcbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl19 */\n/*@ sourceURL=D:\\\\Download\\\\test\\\\interview-fullstack-master\\\\components\\\\MatrixTable\\\\index.tsx */"));
};

const MatrixTableWithContext = (_ref2) => {
  let {
    initialMatrix
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["initialMatrix"]);

  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)
  return __jsx(_context__WEBPACK_IMPORTED_MODULE_4__["MatrixTableContextProvider"], {
    initialMatrix: initialMatrix,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MatrixTableWithContext);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MatrixTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MatrixTable */ "./components/MatrixTable/index.tsx");
var _jsxFileName = "D:\\Download\\test\\interview-fullstack-master\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Home() {
  // You can either fetch the pricing here and pass it to MatrixTable
  // or, you can let MatrixTable handle the fetching
  return __jsx("div", {
    className: "jsx-1799183244" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Matrix Calculation"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_MatrixTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Good Luck - Flux"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345803726",
    __self: this
  }, ".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}.description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1799183244{height:1em;}@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZFxcdGVzdFxcaW50ZXJ2aWV3LWZ1bGxzdGFjay1tYXN0ZXJcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUc0QixBQVNGLEFBU0osQUFTUSxBQUlOLEFBTUMsQUFLQSxBQU9ZLEFBSWpCLEFBT1MsQUFJRixBQUtHLEFBU04sQUFVRCxBQWNFLEFBS0ksQUFLVCxBQU1FLEFBS0UsU0FyRUksQUEyREMsRUE5RkwsQUFvR2YsQUFLMEIsQ0FuQ1QsRUFuRE0sQUFLQSxBQTREQSxDQTdGZCxDQXVEVSxDQWhFQSxDQTREbkIsQUErQ21CLENBaEZuQixBQTBDb0IsS0FsRFcsRUFtQ2QsQ0EyREMsTUFoRGxCLENBaEVlLENBc0dmLEFBS0EsRUF0Q2tCLElBZmxCLEVBMkRBLEtBeEdlLEtBVUEsQUFtREksT0F0Qm5CLElBWEEsQUFLQSxNQThCc0UsSUExQzdDLEFBK0NKLElBV0osV0FtQ2YsSUFsQ2dCLGVBeEZNLENBeUZSLGFBaEZRLENBaUZELElBdkVFLHdDQTBEQSxNQS9DSixBQTZETSxhQTFGRixLQXVFekIsT0FvQnFCLEVBbEZJLGlCQW1GOEIsU0F6RWxDLHdDQVdyQixBQStDaUIsbUJBNUVJLGNBU0Esb0JBVXJCLElBMkRrQixNQWNsQixVQWJrQixnQkFDbEIsdUJBL0VBLGNBU0EiLCJmaWxlIjoiRDpcXERvd25sb2FkXFx0ZXN0XFxpbnRlcnZpZXctZnVsbHN0YWNrLW1hc3RlclxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYXRyaXhUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL01hdHJpeFRhYmxlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIFlvdSBjYW4gZWl0aGVyIGZldGNoIHRoZSBwcmljaW5nIGhlcmUgYW5kIHBhc3MgaXQgdG8gTWF0cml4VGFibGVcbiAgLy8gb3IsIHlvdSBjYW4gbGV0IE1hdHJpeFRhYmxlIGhhbmRsZSB0aGUgZmV0Y2hpbmdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hdHJpeCBDYWxjdWxhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxNYXRyaXhUYWJsZSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBHb29kIEx1Y2sgLSBGbHV4XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=D:\\\\Download\\\\test\\\\interview-fullstack-master\\\\pages\\\\index.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb3dubG9hZFxcdGVzdFxcaW50ZXJ2aWV3LWZ1bGxzdGFjay1tYXN0ZXJcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEp5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkQ6XFxEb3dubG9hZFxcdGVzdFxcaW50ZXJ2aWV3LWZ1bGxzdGFjay1tYXN0ZXJcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWF0cml4VGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYXRyaXhUYWJsZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBZb3UgY2FuIGVpdGhlciBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIGFuZCBwYXNzIGl0IHRvIE1hdHJpeFRhYmxlXG4gIC8vIG9yLCB5b3UgY2FuIGxldCBNYXRyaXhUYWJsZSBoYW5kbGUgdGhlIGZldGNoaW5nXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYXRyaXggQ2FsY3VsYXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TWF0cml4VGFibGUgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgR29vZCBMdWNrIC0gRmx1eFxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=D:\\\\Download\\\\test\\\\interview-fullstack-master\\\\pages\\\\index.tsx */"));
}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Download\test\interview-fullstack-master\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRyaXhUYWJsZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJlbXB0eU1hdHJpeCIsIm9yaWdpblN0YXRlIiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiTWF0cml4VGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbE1hdHJpeCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiaG92ZXIiLCJUYWJsZVJvdyIsIk1hdHJpeFRhYmxlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJlZGl0Um93Iiwic2V0RWRpdFJvdyIsInVzZVN0YXRlIiwibGl0ZSIsInNldExpdGUiLCJzdGFuZGFyZCIsInNldFN0YW5kYXJkIiwidW5saW1pdGVkIiwic2V0VW5saW1pdGVkIiwiaGFuZGxlQ2xpY2tDcmVhdGVEQiIsInJlc3BvbnNlIiwiQXhpb3MiLCJwb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja0VkaXQiLCJyb3ciLCJoYW5kbGVDbGlja0NsZWFyIiwicGF5bG9hZCIsImhhbmRsZUNsaWNrU2F2ZSIsImNsYXNzbmFtZXMiLCJtYXJnaW4iLCJQYXBlciIsIm1pbldpZHRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiTWF0cml4VGFibGVXaXRoQ29udGV4dCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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O0FBR2UsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QjtBQUNBO0FBRUEsU0FDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRwTEFERjtBQWtLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFLRCxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgXG4gKi9cbmludGVyZmFjZSBNYXRyaXhUYWJsZVN0YXRlIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHByaWNlIG1hdHJpeCB0aGF0IGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWVcbiAgICovXG4gIG1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICAvKipcbiAgICogV2Ugd2lsbCB1c2Ugb3JpZ2luYWwgbWF0cml4IHRvIGhlbHAgdXMgXCJyZXNldFwiIHRoZSB0YWJsZSB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGVkaXRpbmcgaXQuXG4gICAqIFJlbWVtYmVyIHRoYXQgKip3aGVuZXZlcioqIHlvdSBnZXQgdGhlIG1hdHJpeCBmcm9tIHRoZSBzZXJ2ZXIsIHlvdSBtdXN0IHNldCBvcmlnaW5hbE1hdHJpeFxuICAgKiB0byB0aGF0IHZhbHVlOyBvcmlnaW5hbE1hdHJpeCBzaG91bGQgdHJ5IHRvIG1pcnJvciB0aGUgbWF0cml4IGluIG91ciBkYXRhYmFzZS5cbiAgICovXG4gIG9yaWdpbmFsTWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhY3Rpb25zIHlvdSBjYW4gZGlzcGF0Y2guIEFkZCBhY3Rpb25zIHlvdSB3YW50IHRvIGhlbHAgeW91XG4gKiB0eXBlIHRoZSBkaXNwYXRjaCBmdW5jdGlvblxuICovXG50eXBlIE1hdHJpeEFjdGlvbiA9IHtcbiAgdHlwZTogJ1NFVF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBwYXlsb2FkIGlzIGVtcHR5LCB3ZSB3aWxsIG5lZWQgdG8gc2V0IHRoZSB2YWx1ZXMgZnJvbSBvcmlnaW5hbE1hdHJpeFxuICAgKi8gXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIG1ldGFkYXRhPzoge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gdGhlIG9yaWdpbmFsTWF0cml4LFxuICAgICAqIHdlIHJlc2V0IHRvIHRoZSBlbXB0eU1hdHJpeFxuICAgICAqL1xuICAgIHJlc2V0VG9FbXB0eT86IGJvb2xlYW5cbiAgfVxufSB8IHtcbiAgdHlwZTogJ1NFVF9PUklHSU5BTF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBlbXB0eSwgc2V0IHRoZSB2YWx1ZSBmcm9tIGVtcHR5TWF0cml4XG4gICAqL1xuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnQ0hBTkdFJyxcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gfCB7XG4gIHR5cGU6ICdDTEVBUicsXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cblxuLyoqXG4gKiBUaGlzIGlzIGZvciB0aGUgUHJvdmlkZXIgY29tcG9uZW50XG4gKi9cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuY29uc3QgZW1wdHlNYXRyaXggPSB7XG4gIFwiMzZtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwLFxuICB9LFxuICBcIjI0bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIjEybW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIm10bVwiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfVxufVxuXG5jb25zdCBvcmlnaW5TdGF0ZSA9IHtcbiAgXCIzNm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDAsXG4gIH0sXG4gIFwiMjRtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwiMTJtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwibXRtXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogTWF0cml4VGFibGVTdGF0ZSA9IHtcbiAgbWF0cml4OiBlbXB0eU1hdHJpeCxcbiAgb3JpZ2luYWxNYXRyaXg6IGVtcHR5TWF0cml4LFxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlLCBhY3Rpb246IE1hdHJpeEFjdGlvbik6IE1hdHJpeFRhYmxlU3RhdGUgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfTUFUUklYJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgIGNhc2UgJ1NFVF9PUklHSU5BTF9NQVRSSVgnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlICdDSEFOR0UnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlICdDTEVBUic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRyaXg6IHsuLi5vcmlnaW5TdGF0ZX0sXG4gICAgICAgIG9yaWdpbmFsTWF0cml4OiB7Li4ub3JpZ2luU3RhdGV9LFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG4gIHJldHVybiAoXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTWF0cml4VGFibGVDb250ZXh0LCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuaW1wb3J0IHsgd2l0aFN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgaGVhZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICB9LFxuICB9KSxcbikoVGFibGVDZWxsKTtcblxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4pKFRhYmxlUm93KTtcblxudHlwZSBQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbi8qKlxuICogQWRkIDQgYnV0dG9uczogXG4gKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gKiAtIEVkaXQgdG8gbWFrZSB0aGUgZmllbGRzIGVkaXRhYmxlIChvbmx5IHdoZW4gbm90IGluIGVkaXQgbW9kZSlcbiAqIC0gQ2xlYXIgdG8gY29tcGxldGVseSBjbGVhciB0aGUgdGFibGVcbiAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICogQHBhcmFtIHBhcmFtMCBcbiAqL1xuY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFtlZGl0Um93LCBzZXRFZGl0Um93XSA9IHVzZVN0YXRlKCcwJylcbiAgY29uc3QgW2xpdGUsIHNldExpdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3N0YW5kYXJkLCBzZXRTdGFuZGFyZF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdW5saW1pdGVkLCBzZXRVbmxpbWl0ZWRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVDbGlja0NyZWF0ZURCID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2F2ZS1wcmljaW5nXCIsIHtkYXRhOiBtYXRyaXh9KVxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSAtLS0+ICcsIHJlc3BvbnNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tFZGl0ID0gYXN5bmMgKHJvdykgPT4ge1xuICAgIHNldEVkaXRSb3cocm93KTtcbiAgICBzZXRMaXRlKG1hdHJpeFtyb3ddLmxpdGUpXG4gICAgc2V0U3RhbmRhcmQobWF0cml4W3Jvd10uc3RhbmRhcmQpXG4gICAgc2V0VW5saW1pdGVkKG1hdHJpeFtyb3ddLnVubGltaXRlZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQ2xlYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0NMRUFSJyxcbiAgICAgIHBheWxvYWQ6IG1hdHJpeFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja1NhdmUgPSBhc3luYyAocm93KSA9PiB7XG4gICAgbWF0cml4W3Jvd10gPSB7bGl0ZTogbGl0ZSwgc3RhbmRhcmQ6IHN0YW5kYXJkLCB1bmxpbWl0ZWQ6IHVubGltaXRlZH1cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQ0hBTkdFJyxcbiAgICAgIHBheWxvYWQ6IHsuLi5tYXRyaXh9XG4gICAgfSlcbiAgICBzZXRFZGl0Um93KCcwJylcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0NyZWF0ZURCKCl9PiBDcmVhdGUgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luOiAnMHB4IDMwcHgnfX0gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tDbGVhcigpfT4gQ2xlYXIgPC9CdXR0b24+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICA8VGFibGUgc3R5bGU9e3ttaW5XaWR0aDogJzcwMHB4J319IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+bGl0ZTwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+c3RhbmRhcmQ8L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnVubGltaXRlZDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+YWN0aW9uPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMobWF0cml4KS5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3d9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4ge3Jvd30gPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiB7bWF0cml4W3Jvd10ubGl0ZX0gPC9TdHlsZWRUYWJsZUNlbGw+OlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48VGV4dEZpZWxkIHZhbHVlPXtsaXRlfSBvbkNoYW5nZT17KGUpID0+IHNldExpdGUocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gbGFiZWw9XCJsaXRlXCIgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiB7bWF0cml4W3Jvd10uc3RhbmRhcmR9IDwvU3R5bGVkVGFibGVDZWxsPjpcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+PFRleHRGaWVsZCB2YWx1ZT17c3RhbmRhcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhbmRhcmQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gbGFiZWw9XCJzdGFuZGFyZFwiIC8+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtyb3cgIT0gZWRpdFJvdyA/IDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4ge21hdHJpeFtyb3ddLnVubGltaXRlZH0gPC9TdHlsZWRUYWJsZUNlbGw+OlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48VGV4dEZpZWxkIHZhbHVlPXt1bmxpbWl0ZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VW5saW1pdGVkKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9IGxhYmVsPVwidW5saW1pdGVkXCIgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge3JvdyAhPSBlZGl0Um93ID8gPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0VkaXQocm93KX0+IEVkaXQgPC9CdXR0b24+OlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tTYXZlKHJvdyl9PiBTYXZlIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdFJvdygnMCcpfT4gQ2FuY2VsIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWF0cml4VGFibGVXaXRoQ29udGV4dDogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3BzPiA9ICh7IGluaXRpYWxNYXRyaXgsIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gWW91IGNhbiBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIG9yIGluIHBhZ2VzL2luZGV4LnRzXG4gIC8vIFJlbWVtYmVyIHRoYXQgeW91IHNob3VsZCB0cnkgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgcHJpY2luZyBpbiBvcmlnaW5hbE1hdHJpeC5cbiAgLy8gbWF0cml4IHdpbGwgaG9sZCB0aGUgbGF0ZXN0IHZhbHVlIChlZGl0ZWQgb3Igc2FtZSBhcyBvcmlnaW5hbE1hdHJpeClcbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hdHJpeFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0cml4VGFibGUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gWW91IGNhbiBlaXRoZXIgZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBhbmQgcGFzcyBpdCB0byBNYXRyaXhUYWJsZVxuICAvLyBvciwgeW91IGNhbiBsZXQgTWF0cml4VGFibGUgaGFuZGxlIHRoZSBmZXRjaGluZ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWF0cml4IENhbGN1bGF0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPE1hdHJpeFRhYmxlIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIEdvb2QgTHVjayAtIEZsdXhcbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=