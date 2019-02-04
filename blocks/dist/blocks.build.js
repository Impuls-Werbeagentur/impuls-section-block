/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section_block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-block/block */ "./blocks/src/section-block/block.js");


/***/ }),

/***/ "./blocks/src/section-block/block.js":
/*!*******************************************!*\
  !*** ./blocks/src/section-block/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/section-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/section-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * BLOCK: BG Container
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.


var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock; // Import registerBlockType() from wp.blocks

var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    withColors = _wp$editor.withColors,
    MediaUpload = _wp$editor.MediaUpload,
    getColorClassName = _wp$editor.getColorClassName,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;
var ToggleControl = wp.components.ToggleControl; //const {} = wp.blocks;

/**
 * Register: Impuls Section Block
 *
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('impuls-additional-blocks/section', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Section'),
  // Block title.
  icon: 'align-full-width',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'layout',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('Row')],
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    mediaURL: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    bgImageCover: {
      type: 'boolean',
      default: false
    },
    fixedBGImage: {
      type: 'boolean',
      default: false
    },
    alignment: {
      type: 'string'
    }
  },
  supports: {
    align: ['full'],
    anchor: true
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: withColors('backgroundColor', 'textColor')(function (props) {
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className,
        setBackgroundColor = props.setBackgroundColor,
        backgroundColor = props.backgroundColor,
        setTextColor = props.setTextColor,
        textColor = props.textColor,
        alignment = props.alignment;
    var mediaURL = attributes.mediaURL,
        bgImageCover = attributes.bgImageCover,
        fixedBGImage = attributes.fixedBGImage;
    var backgroundClass = (className ? className : '') + (alignment ? ' ' + alignment : '') + (bgImageCover ? ' background-image-size-cover' : '') + (textColor ? ' ' + textColor.class + ' has-text-color' : ' has-no-text-color') + (backgroundColor ? ' ' + backgroundColor.class + ' has-background-color' : ' has-no-background-color') + (mediaURL ? ' has-background-image' : ' has-no-background-image') + (fixedBGImage ? ' fixed-background-image' : '');

    function onImageSelect(imageObject) {
      setAttributes({
        mediaURL: imageObject.sizes.full.url
      });
    }

    function onImageRemove() {
      setAttributes({
        mediaURL: ""
      });
    }

    function setbgImageCover() {
      var attributes = props.attributes;
      setAttributes({
        bgImageCover: !attributes.bgImageCover
      });
    }

    function setfixedBGImage() {
      var attributes = props.attributes;
      setAttributes({
        fixedBGImage: !attributes.fixedBGImage
      });
    }

    function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment
      });
    }

    function getbgImageCoverHelp(checked) {
      return checked ? __('The Background Image will cover the whole section.') : __('The Background Image will repeat itself');
    }

    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), wp.element.createElement("div", null, wp.element.createElement("strong", null, "Please choose the Background Image:"), wp.element.createElement(MediaUpload, {
      onSelect: onImageSelect,
      allowedTypes: "image",
      value: mediaURL,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement("button", {
          onClick: open
        }, "Upload Image!");
      }
    }), wp.element.createElement("button", {
      onClick: onImageRemove
    }, "remove Background Image")), wp.element.createElement(ToggleControl, {
      label: __('Background size'),
      checked: !!bgImageCover,
      onChange: setbgImageCover,
      help: getbgImageCoverHelp
    }), wp.element.createElement(ToggleControl, {
      label: __('Background fixed'),
      checked: !!fixedBGImage,
      onChange: setfixedBGImage
    })), wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), wp.element.createElement("div", {
      className: backgroundClass,
      style: {
        backgroundImage: mediaURL ? "url(".concat(mediaURL, ")") : 'none',
        backgroundColor: backgroundColor ? backgroundColor.color : '',
        color: textColor ? textColor.color : 'inherit'
      }
    }, wp.element.createElement("div", {
      className: 'InnerContent'
    }, wp.element.createElement(InnerBlocks, null)))];
  }),

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    var _props$attributes = props.attributes,
        mediaURL = _props$attributes.mediaURL,
        backgroundColor = _props$attributes.backgroundColor,
        textColor = _props$attributes.textColor,
        bgImageCover = _props$attributes.bgImageCover,
        alignment = _props$attributes.alignment,
        fixedBGImage = _props$attributes.fixedBGImage;
    var backgroundClass = (className ? className : '') + (alignment ? ' ' + alignment : '') + (bgImageCover ? ' background-image-size-cover' : '') + (textColor ? ' has-' + textColor + '-text-color has-text-color' : ' has-no-text-color') + (backgroundColor ? ' has-' + backgroundColor + '-background-color has-background-color' : ' has-no-background-color') + (mediaURL ? ' has-background-image' : ' has-no-background-image') + (fixedBGImage ? ' fixed-background-image' : '');
    return wp.element.createElement("div", {
      className: backgroundClass,
      style: {
        backgroundImage: mediaURL ? "url(".concat(mediaURL, ")") : 'none'
      }
    }, wp.element.createElement("div", {
      className: 'InnerContent'
    }, wp.element.createElement(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./blocks/src/section-block/editor.scss":
/*!**********************************************!*\
  !*** ./blocks/src/section-block/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/section-block/style.scss":
/*!*********************************************!*\
  !*** ./blocks/src/section-block/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zZWN0aW9uLWJsb2NrL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvc2VjdGlvbi1ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3NlY3Rpb24tYmxvY2svc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiY3JlYXRlQmxvY2siLCJlZGl0b3IiLCJJbm5lckJsb2NrcyIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwid2l0aENvbG9ycyIsIk1lZGlhVXBsb2FkIiwiZ2V0Q29sb3JDbGFzc05hbWUiLCJBbGlnbm1lbnRUb29sYmFyIiwiQmxvY2tDb250cm9scyIsIlRvZ2dsZUNvbnRyb2wiLCJjb21wb25lbnRzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwibWVkaWFVUkwiLCJ0ZXh0Q29sb3IiLCJiZ0ltYWdlQ292ZXIiLCJkZWZhdWx0IiwiZml4ZWRCR0ltYWdlIiwiYWxpZ25tZW50Iiwic3VwcG9ydHMiLCJhbGlnbiIsImFuY2hvciIsImVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzZXRUZXh0Q29sb3IiLCJiYWNrZ3JvdW5kQ2xhc3MiLCJjbGFzcyIsIm9uSW1hZ2VTZWxlY3QiLCJpbWFnZU9iamVjdCIsInNpemVzIiwiZnVsbCIsInVybCIsIm9uSW1hZ2VSZW1vdmUiLCJzZXRiZ0ltYWdlQ292ZXIiLCJzZXRmaXhlZEJHSW1hZ2UiLCJvbkNoYW5nZUFsaWdubWVudCIsIm5ld0FsaWdubWVudCIsImdldGJnSW1hZ2VDb3ZlckhlbHAiLCJjaGVja2VkIiwidmFsdWUiLCJjb2xvciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJvcGVuIiwiYmFja2dyb3VuZEltYWdlIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7SUFFUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRSxFQUFnQjs7aUJBQ21CQyxFQUFFLENBQUNFLE07SUFBdENDLGlCLGNBQUFBLGlCO0lBQW1CQyxXLGNBQUFBLFcsRUFBMkI7O2lCQUNzRkosRUFBRSxDQUFDSyxNO0lBQXZJQyxXLGNBQUFBLFc7SUFBYUMsaUIsY0FBQUEsaUI7SUFBbUJDLGtCLGNBQUFBLGtCO0lBQW9CQyxVLGNBQUFBLFU7SUFBWUMsVyxjQUFBQSxXO0lBQWFDLGlCLGNBQUFBLGlCO0lBQW1CQyxnQixjQUFBQSxnQjtJQUFrQkMsYSxjQUFBQSxhO0lBQ2xIQyxhLEdBQWtCZCxFQUFFLENBQUNlLFUsQ0FBckJELGEsRUFDUjs7QUFFQTs7Ozs7Ozs7Ozs7QUFVQVgsaUJBQWlCLENBQUUsa0NBQUYsRUFBc0M7QUFDdEQ7QUFDQWEsT0FBSyxFQUFFakIsRUFBRSxDQUFFLFNBQUYsQ0FGNkM7QUFFOUI7QUFDeEJrQixNQUFJLEVBQUUsa0JBSGdEO0FBRzVCO0FBQzFCQyxVQUFRLEVBQUUsUUFKNEM7QUFJbEM7QUFDcEJDLFVBQVEsRUFBRSxDQUNUcEIsRUFBRSxDQUFFLEtBQUYsQ0FETyxDQUw0QztBQVF0RHFCLFlBQVUsRUFBRTtBQUNYQyxtQkFBZSxFQUFFO0FBQ2hCQyxVQUFJLEVBQUU7QUFEVSxLQUROO0FBSVhDLFlBQVEsRUFBRTtBQUNURCxVQUFJLEVBQUU7QUFERyxLQUpDO0FBT1hFLGFBQVMsRUFBQztBQUNURixVQUFJLEVBQUU7QUFERyxLQVBDO0FBVVhHLGdCQUFZLEVBQUU7QUFDYkgsVUFBSSxFQUFFLFNBRE87QUFFYkksYUFBTyxFQUFFO0FBRkksS0FWSDtBQWNYQyxnQkFBWSxFQUFFO0FBQ2JMLFVBQUksRUFBRSxTQURPO0FBRWJJLGFBQU8sRUFBRTtBQUZJLEtBZEg7QUFrQlhFLGFBQVMsRUFBRTtBQUNETixVQUFJLEVBQUU7QUFETDtBQWxCQSxHQVIwQztBQThCdERPLFVBQVEsRUFBRTtBQUNUQyxTQUFLLEVBQUUsQ0FBQyxNQUFELENBREU7QUFFVEMsVUFBTSxFQUFFO0FBRkMsR0E5QjRDOztBQW9DdEQ7Ozs7Ozs7O0FBUUFDLE1BQUksRUFBRXZCLFVBQVUsQ0FBRSxpQkFBRixFQUFxQixXQUFyQixDQUFWLENBQTZDLFVBQVV3QixLQUFWLEVBQWtCO0FBQUEsUUFDNURDLGFBRDRELEdBUXRERCxLQVJzRCxDQUM1REMsYUFENEQ7QUFBQSxRQUVwRWQsVUFGb0UsR0FRdERhLEtBUnNELENBRXBFYixVQUZvRTtBQUFBLFFBRzlEZSxTQUg4RCxHQVF0REYsS0FSc0QsQ0FHOURFLFNBSDhEO0FBQUEsUUFJcEVDLGtCQUpvRSxHQVF0REgsS0FSc0QsQ0FJcEVHLGtCQUpvRTtBQUFBLFFBS3BFZixlQUxvRSxHQVF0RFksS0FSc0QsQ0FLcEVaLGVBTG9FO0FBQUEsUUFNcEVnQixZQU5vRSxHQVF0REosS0FSc0QsQ0FNcEVJLFlBTm9FO0FBQUEsUUFPcEViLFNBUG9FLEdBUXREUyxLQVJzRCxDQU9wRVQsU0FQb0U7QUFBQSxRQVFwRUksU0FSb0UsR0FRdERLLEtBUnNELENBUXBFTCxTQVJvRTtBQUFBLFFBVXRETCxRQVZzRCxHQVVmSCxVQVZlLENBVXRERyxRQVZzRDtBQUFBLFFBVTdDRSxZQVY2QyxHQVVmTCxVQVZlLENBVTdDSyxZQVY2QztBQUFBLFFBVWhDRSxZQVZnQyxHQVVmUCxVQVZlLENBVWhDTyxZQVZnQztBQVdwRSxRQUFNVyxlQUFlLEdBQUcsQ0FBQ0gsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFBekIsS0FDakJQLFNBQVMsR0FBQyxNQUFLQSxTQUFOLEdBQWdCLEVBRFIsS0FFakJILFlBQVksR0FBRyw4QkFBSCxHQUFvQyxFQUYvQixLQUdqQkQsU0FBUyxHQUFFLE1BQU1BLFNBQVMsQ0FBQ2UsS0FBaEIsR0FBc0IsaUJBQXhCLEdBQTBDLG9CQUhsQyxLQUlqQmxCLGVBQWUsR0FBRyxNQUFNQSxlQUFlLENBQUNrQixLQUF0QixHQUE4Qix1QkFBakMsR0FBeUQsMEJBSnZELEtBS2pCaEIsUUFBUSxHQUFHLHVCQUFILEdBQTZCLDBCQUxwQixLQU1qQkksWUFBWSxHQUFHLHlCQUFILEdBQThCLEVBTnpCLENBQXhCOztBQU9NLGFBQVNhLGFBQVQsQ0FBdUJDLFdBQXZCLEVBQW9DO0FBQ3pDUCxtQkFBYSxDQUFDO0FBQ2JYLGdCQUFRLEVBQUVrQixXQUFXLENBQUNDLEtBQVosQ0FBa0JDLElBQWxCLENBQXVCQztBQURwQixPQUFELENBQWI7QUFHQTs7QUFDSyxhQUFTQyxhQUFULEdBQXdCO0FBQ3BCWCxtQkFBYSxDQUFDO0FBQ1ZYLGdCQUFRLEVBQUM7QUFEQyxPQUFELENBQWI7QUFHVDs7QUFDRCxhQUFTdUIsZUFBVCxHQUEwQjtBQUFBLFVBQ2pCMUIsVUFEaUIsR0FDSGEsS0FERyxDQUNqQmIsVUFEaUI7QUFFekJjLG1CQUFhLENBQUU7QUFDZFQsb0JBQVksRUFBRSxDQUFDTCxVQUFVLENBQUNLO0FBRFosT0FBRixDQUFiO0FBR0E7O0FBQ0QsYUFBU3NCLGVBQVQsR0FBMEI7QUFBQSxVQUNqQjNCLFVBRGlCLEdBQ0hhLEtBREcsQ0FDakJiLFVBRGlCO0FBRXpCYyxtQkFBYSxDQUFFO0FBQ2RQLG9CQUFZLEVBQUUsQ0FBQ1AsVUFBVSxDQUFDTztBQURaLE9BQUYsQ0FBYjtBQUdBOztBQUNELGFBQVNxQixpQkFBVCxDQUE0QkMsWUFBNUIsRUFBMkM7QUFDakNmLG1CQUFhLENBQUM7QUFDVE4saUJBQVMsRUFBRXFCO0FBREYsT0FBRCxDQUFiO0FBR0g7O0FBQ1AsYUFBU0MsbUJBQVQsQ0FBOEJDLE9BQTlCLEVBQXdDO0FBQ3ZDLGFBQU9BLE9BQU8sR0FBR3BELEVBQUUsQ0FBRSxvREFBRixDQUFMLEdBQWdFQSxFQUFFLENBQUUseUNBQUYsQ0FBaEY7QUFDQTs7QUFDRCxXQUFRLENBQ0UseUJBQUMsaUJBQUQsUUFDUix5QkFBQyxrQkFBRDtBQUNFLFdBQUssRUFBR0EsRUFBRSxDQUFFLGdCQUFGLENBRFo7QUFFRSxpQkFBVyxFQUFHLEtBRmhCO0FBR0UsbUJBQWEsRUFBRyxDQUNmO0FBQ0NxRCxhQUFLLEVBQUUvQixlQUFlLENBQUNnQyxLQUR4QjtBQUVDQyxnQkFBUSxFQUFFbEIsa0JBRlg7QUFHQ21CLGFBQUssRUFBRXhELEVBQUUsQ0FBRSxrQkFBRjtBQUhWLE9BRGUsRUFNZjtBQUNDcUQsYUFBSyxFQUFFNUIsU0FBUyxDQUFDNkIsS0FEbEI7QUFFQ0MsZ0JBQVEsRUFBRWpCLFlBRlg7QUFHQ2tCLGFBQUssRUFBRXhELEVBQUUsQ0FBRSxZQUFGO0FBSFYsT0FOZTtBQUhsQixNQURRLEVBaUJSLHNDQUNDLCtFQURELEVBRUMseUJBQUMsV0FBRDtBQUNDLGNBQVEsRUFBRXlDLGFBRFg7QUFFQyxrQkFBWSxFQUFFLE9BRmY7QUFHQyxXQUFLLEVBQUVqQixRQUhSO0FBSUMsWUFBTSxFQUFFO0FBQUEsWUFBR2lDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGVBQ1A7QUFBUSxpQkFBTyxFQUFFQTtBQUFqQiwyQkFETztBQUFBO0FBSlQsTUFGRCxFQVlnQjtBQUFRLGFBQU8sRUFBRVg7QUFBakIsaUNBWmhCLENBakJRLEVBaUNSLHlCQUFDLGFBQUQ7QUFDRyxXQUFLLEVBQUc5QyxFQUFFLENBQUUsaUJBQUYsQ0FEYjtBQUVHLGFBQU8sRUFBRyxDQUFDLENBQUUwQixZQUZoQjtBQUdHLGNBQVEsRUFBR3FCLGVBSGQ7QUFJRyxVQUFJLEVBQUdJO0FBSlYsTUFqQ1EsRUF1Q1IseUJBQUMsYUFBRDtBQUNHLFdBQUssRUFBR25ELEVBQUUsQ0FBRSxrQkFBRixDQURiO0FBRUcsYUFBTyxFQUFHLENBQUMsQ0FBRTRCLFlBRmhCO0FBR0csY0FBUSxFQUFHb0I7QUFIZCxNQXZDUSxDQURGLEVBOENQLHlCQUFDLGFBQUQsUUFDQyx5QkFBQyxnQkFBRDtBQUNDLFdBQUssRUFBR25CLFNBRFQ7QUFFQyxjQUFRLEVBQUdvQjtBQUZaLE1BREQsQ0E5Q08sRUFvRFA7QUFDQyxlQUFTLEVBQUdWLGVBRGI7QUFFQyxXQUFLLEVBQUU7QUFDTm1CLHVCQUFlLEVBQUdsQyxRQUFRLGlCQUFVQSxRQUFWLFNBQXdCLE1BRDVDO0FBRU5GLHVCQUFlLEVBQUdBLGVBQWUsR0FBR0EsZUFBZSxDQUFDZ0MsS0FBbkIsR0FBMEIsRUFGckQ7QUFHTkEsYUFBSyxFQUFHN0IsU0FBUyxHQUFFQSxTQUFTLENBQUM2QixLQUFaLEdBQW9CO0FBSC9CO0FBRlIsT0FRYTtBQUFLLGVBQVMsRUFBRTtBQUFoQixPQUNJLHlCQUFDLFdBQUQsT0FESixDQVJiLENBcERPLENBQVI7QUFpRUEsR0FqSEssQ0E1Q2dEOztBQStKdEQ7Ozs7Ozs7O0FBUUFLLE1BQUksRUFBRSxjQUFVekIsS0FBVixFQUFrQjtBQUFBLFFBQ2ZiLFVBRGUsR0FDWWEsS0FEWixDQUNmYixVQURlO0FBQUEsUUFDRmUsU0FERSxHQUNZRixLQURaLENBQ0ZFLFNBREU7QUFBQSw0QkFFNERGLEtBQUssQ0FBQ2IsVUFGbEU7QUFBQSxRQUVmRyxRQUZlLHFCQUVmQSxRQUZlO0FBQUEsUUFFTkYsZUFGTSxxQkFFTkEsZUFGTTtBQUFBLFFBRVVHLFNBRlYscUJBRVVBLFNBRlY7QUFBQSxRQUVxQkMsWUFGckIscUJBRXFCQSxZQUZyQjtBQUFBLFFBRWtDRyxTQUZsQyxxQkFFa0NBLFNBRmxDO0FBQUEsUUFFNENELFlBRjVDLHFCQUU0Q0EsWUFGNUM7QUFHdkIsUUFBTVcsZUFBZSxHQUFHLENBQUNILFNBQVMsR0FBR0EsU0FBSCxHQUFlLEVBQXpCLEtBQ2pCUCxTQUFTLEdBQUMsTUFBSUEsU0FBTCxHQUFlLEVBRFAsS0FFakJILFlBQVksR0FBRyw4QkFBSCxHQUFvQyxFQUYvQixLQUdqQkQsU0FBUyxHQUFHLFVBQVVBLFNBQVYsR0FBcUIsNEJBQXhCLEdBQXFELG9CQUg3QyxLQUlqQkgsZUFBZSxHQUFHLFVBQVNBLGVBQVQsR0FBMkIsd0NBQTlCLEdBQXVFLDBCQUpyRSxLQUtqQkUsUUFBUSxHQUFHLHVCQUFILEdBQTZCLDBCQUxwQixLQU1qQkksWUFBWSxHQUFHLHlCQUFILEdBQThCLEVBTnpCLENBQXhCO0FBT0EsV0FDQztBQUNDLGVBQVMsRUFBR1csZUFEYjtBQUVDLFdBQUssRUFBRTtBQUNObUIsdUJBQWUsRUFBR2xDLFFBQVEsaUJBQVVBLFFBQVYsU0FBdUI7QUFEM0M7QUFGUixPQU1hO0FBQUssZUFBUyxFQUFFO0FBQWhCLE9BQ1IseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FEUSxDQU5iLENBREQ7QUFZQTtBQTdMcUQsQ0FBdEMsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUMzQkEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImltcG9ydCAnLi9zZWN0aW9uLWJsb2NrL2Jsb2NrJzsiLCIvKipcbiAqIEJMT0NLOiBCRyBDb250YWluZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIGNyZWF0ZUJsb2NrIH0gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scywgUGFuZWxDb2xvclNldHRpbmdzLCB3aXRoQ29sb3JzLCBNZWRpYVVwbG9hZCwgZ2V0Q29sb3JDbGFzc05hbWUsIEFsaWdubWVudFRvb2xiYXIsIEJsb2NrQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbi8vY29uc3Qge30gPSB3cC5ibG9ja3M7XG5cbi8qKlxuICogUmVnaXN0ZXI6IEltcHVscyBTZWN0aW9uIEJsb2NrXG4gKlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCAnaW1wdWxzLWFkZGl0aW9uYWwtYmxvY2tzL3NlY3Rpb24nLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oICdTZWN0aW9uJyApLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2FsaWduLWZ1bGwtd2lkdGgnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnbGF5b3V0JywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oICdSb3cnICksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGV4dENvbG9yOntcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YmdJbWFnZUNvdmVyOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGZpeGVkQkdJbWFnZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuXHR9LFxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbJ2Z1bGwnXSxcblx0XHRhbmNob3I6IHRydWVcbiAgICB9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogd2l0aENvbG9ycyggJ2JhY2tncm91bmRDb2xvcicsICd0ZXh0Q29sb3InICkoZnVuY3Rpb24oIHByb3BzICkge1xuXHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyxcblx0XHRhdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUsXG5cdFx0c2V0QmFja2dyb3VuZENvbG9yLFxuXHRcdGJhY2tncm91bmRDb2xvcixcblx0XHRzZXRUZXh0Q29sb3IsXG5cdFx0dGV4dENvbG9yLFxuXHRcdGFsaWdubWVudCB9ID0gcHJvcHM7XG5cdFx0XG4gICAgICAgIGNvbnN0IHsgbWVkaWFVUkwsYmdJbWFnZUNvdmVyLGZpeGVkQkdJbWFnZSB9ID0gYXR0cmlidXRlcztcblx0XHRjb25zdCBiYWNrZ3JvdW5kQ2xhc3MgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycpICsgXG5cdFx0XHRcdFx0XHRcdFx0KGFsaWdubWVudD8nICcrIGFsaWdubWVudDonJykgKyBcblx0XHRcdFx0XHRcdFx0XHQoYmdJbWFnZUNvdmVyID8gJyBiYWNrZ3JvdW5kLWltYWdlLXNpemUtY292ZXInIDogJycpICtcblx0XHRcdFx0XHRcdFx0XHQodGV4dENvbG9yPyAnICcgKyB0ZXh0Q29sb3IuY2xhc3MrJyBoYXMtdGV4dC1jb2xvcic6JyBoYXMtbm8tdGV4dC1jb2xvcicpK1xuXHRcdFx0XHRcdFx0XHRcdChiYWNrZ3JvdW5kQ29sb3IgPyAnICcgKyBiYWNrZ3JvdW5kQ29sb3IuY2xhc3MgKyAnIGhhcy1iYWNrZ3JvdW5kLWNvbG9yJzonIGhhcy1uby1iYWNrZ3JvdW5kLWNvbG9yJykgKyBcblx0XHRcdFx0XHRcdFx0XHQobWVkaWFVUkwgPyAnIGhhcy1iYWNrZ3JvdW5kLWltYWdlJyA6ICcgaGFzLW5vLWJhY2tncm91bmQtaW1hZ2UnKSArXG5cdFx0XHRcdFx0XHRcdFx0KGZpeGVkQkdJbWFnZSA/ICcgZml4ZWQtYmFja2dyb3VuZC1pbWFnZSc6ICcnKTtcbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZVNlbGVjdChpbWFnZU9iamVjdCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhVVJMOiBpbWFnZU9iamVjdC5zaXplcy5mdWxsLnVybFxuXHRcdFx0fSk7XG5cdFx0fVxuICAgICAgICBmdW5jdGlvbiBvbkltYWdlUmVtb3ZlKCl7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICBtZWRpYVVSTDpcIlwiXG4gICAgICAgICAgICB9KTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gc2V0YmdJbWFnZUNvdmVyKCl7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IFxuXHRcdFx0XHRiZ0ltYWdlQ292ZXI6ICFhdHRyaWJ1dGVzLmJnSW1hZ2VDb3ZlclxuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBzZXRmaXhlZEJHSW1hZ2UoKXtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlc30gPSBwcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgXG5cdFx0XHRcdGZpeGVkQkdJbWFnZTogIWF0dHJpYnV0ZXMuZml4ZWRCR0ltYWdlXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KCBuZXdBbGlnbm1lbnQgKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiBuZXdBbGlnbm1lbnQgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXHRcdGZ1bmN0aW9uIGdldGJnSW1hZ2VDb3ZlckhlbHAoIGNoZWNrZWQgKSB7XG5cdFx0XHRyZXR1cm4gY2hlY2tlZCA/IF9fKCAnVGhlIEJhY2tncm91bmQgSW1hZ2Ugd2lsbCBjb3ZlciB0aGUgd2hvbGUgc2VjdGlvbi4nICkgOiBfXyggJ1RoZSBCYWNrZ3JvdW5kIEltYWdlIHdpbGwgcmVwZWF0IGl0c2VsZicgKTtcblx0XHR9XG5cdFx0cmV0dXJuIChbXG4gICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdDb2xvciBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsT3Blbj17IGZhbHNlIH1cblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9eyBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogYmFja2dyb3VuZENvbG9yLmNvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBzZXRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnQmFja2dyb3VuZCBDb2xvcicgKSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0ZXh0Q29sb3IuY29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHNldFRleHRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdUZXh0IENvbG9yJyApLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Ryb25nPlBsZWFzZSBjaG9vc2UgdGhlIEJhY2tncm91bmQgSW1hZ2U6PC9zdHJvbmc+XG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRvblNlbGVjdD17b25JbWFnZVNlbGVjdH1cblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17XCJpbWFnZVwifVxuXHRcdFx0XHRcdFx0dmFsdWU9e21lZGlhVVJMfSBcblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0VXBsb2FkIEltYWdlIVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkltYWdlUmVtb3ZlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSBCYWNrZ3JvdW5kIEltYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JhY2tncm91bmQgc2l6ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBiZ0ltYWdlQ292ZXIgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHNldGJnSW1hZ2VDb3ZlciB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBnZXRiZ0ltYWdlQ292ZXJIZWxwIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JhY2tncm91bmQgZml4ZWQnICkgfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgISEgZml4ZWRCR0ltYWdlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRmaXhlZEJHSW1hZ2UgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHR2YWx1ZT17IGFsaWdubWVudCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZUFsaWdubWVudCB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+LFxuXHRcdFx0PGRpdiBcblx0XHRcdFx0Y2xhc3NOYW1lPXsgYmFja2dyb3VuZENsYXNzfSBcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IChtZWRpYVVSTCA/IGB1cmwoJHttZWRpYVVSTH0pYCA6ICdub25lJyksXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAoYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yLmNvbG9yOiAnJyksXG5cdFx0XHRcdFx0Y29sb3I6ICh0ZXh0Q29sb3I/IHRleHRDb2xvci5jb2xvciA6ICdpbmhlcml0Jylcblx0XHRcdFx0fX1cblx0XHRcdD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0lubmVyQ29udGVudCd9PlxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgICAgICBdKTtcblx0fSksXG5cblx0LyoqXG5cdCAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG5cdCAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0ICpcblx0ICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdHNhdmU6IGZ1bmN0aW9uKCBwcm9wcyApIHtcblx0XHRjb25zdCB7IGF0dHJpYnV0ZXMgLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuXHRcdGNvbnN0IHsgbWVkaWFVUkwsYmFja2dyb3VuZENvbG9yLHRleHRDb2xvciwgYmdJbWFnZUNvdmVyLGFsaWdubWVudCxmaXhlZEJHSW1hZ2V9ID0gcHJvcHMuYXR0cmlidXRlcztcblx0XHRjb25zdCBiYWNrZ3JvdW5kQ2xhc3MgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycpICsgXG5cdFx0XHRcdFx0XHRcdFx0KGFsaWdubWVudD8nICcrYWxpZ25tZW50OicnKSArIFxuXHRcdFx0XHRcdFx0XHRcdChiZ0ltYWdlQ292ZXIgPyAnIGJhY2tncm91bmQtaW1hZ2Utc2l6ZS1jb3ZlcicgOiAnJykgK1xuXHRcdFx0XHRcdFx0XHRcdCh0ZXh0Q29sb3IgPyAnIGhhcy0nICsgdGV4dENvbG9yICsnLXRleHQtY29sb3IgaGFzLXRleHQtY29sb3InOicgaGFzLW5vLXRleHQtY29sb3InKStcblx0XHRcdFx0XHRcdFx0XHQoYmFja2dyb3VuZENvbG9yID8gJyBoYXMtJysgYmFja2dyb3VuZENvbG9yICsgJy1iYWNrZ3JvdW5kLWNvbG9yIGhhcy1iYWNrZ3JvdW5kLWNvbG9yJzonIGhhcy1uby1iYWNrZ3JvdW5kLWNvbG9yJykgKyBcblx0XHRcdFx0XHRcdFx0XHQobWVkaWFVUkwgPyAnIGhhcy1iYWNrZ3JvdW5kLWltYWdlJyA6ICcgaGFzLW5vLWJhY2tncm91bmQtaW1hZ2UnKSArXG5cdFx0XHRcdFx0XHRcdFx0KGZpeGVkQkdJbWFnZSA/ICcgZml4ZWQtYmFja2dyb3VuZC1pbWFnZSc6ICcnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBcblx0XHRcdFx0Y2xhc3NOYW1lPXsgYmFja2dyb3VuZENsYXNzICB9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiAobWVkaWFVUkwgPyBgdXJsKCR7bWVkaWFVUkx9KWA6ICdub25lJyksXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydJbm5lckNvbnRlbnQnfT5cblx0XHRcdFx0ICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSApOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9