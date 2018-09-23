/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/styles/Styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader??ref--7!./src/styles/Styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nbody {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.UeJMY7peMlry1IGl2c7kn input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px #4e5d6c inset;\n  -webkit-text-fill-color: #FFFFFF;\n\n}\n._2x1U_54odc29N8ZS6FBwO7 p {\n    font-size: 18px;\n}\n\n._35UuK4wysCuxrpZmOhcD7m {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 20px;\n  color: white;\n  padding-top: 200px;\n}\n\n._2qS26b_Y7G_tM4hh9ypplz {\n  background-color: transparent !important;\n\n  font-size: 20px !important;\n  font-family: \"Crimson Text\", serif;\n  text-align: left !important;\n\n  width: 30%;\n}\n._2qS26b_Y7G_tM4hh9ypplz.active{\n  box-shadow: inset 4px -1px 20px 10px rgba(0,0,0,0.12) ;\n}\n.dMsXG5mwx7DfjIcNFCfOf {\n  background-color: transparent !important;\n  font-size: 20px;\n  font-family: \"Crimson Text\", serif;\n}\n.dMsXG5mwx7DfjIcNFCfOf.active{\n  box-shadow: inset 4px -1px 20px 10px rgba(0,0,0,0.12) ;\n}\n._1L3IG7m8Gwklx_or8z48Kn {\n  font-size: 15px !important;\n  font-family: \"Crimson Text\", serif;\n  text-align: center !important;\n}\n\n._1oF0cbVxo9Rp-a4dzzLFOJ {\n  font-size: 20px !important;\n  font-family: \"Crimson Text\", serif;\n  text-align: left !important;\n  width: 100%;\n}\n._2rYC0Sk1P0MyH7ItFVJAOC {\n  background: transparent;\n  font-size: 18px;\n  font-family: \"Crimson Text\", serif;\n  text-align: center !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n._37dBhTi67mBsWCh4AVVAG {\n  padding-bottom: 10px;\n  margin-top: 30px;\n  width: 1050px;\n  border-style: solid;\n  border-width: 1px thin thin thin;\n  border-color: #df691a;\n  background: transparent;\n}\n._3Kh5WRq35fZpfCwMVnlVxM {\n  padding-bottom: 10px;\n  margin-top: 30px;\n  width: 1700px;\n  border-style: solid;\n  border-width: 1px thin thin thin;\n  border-color: #df691a;\n    background: transparent;\n}\n\n._3rnzRwNdbmenCN76NHMmtg {\n  margin-bottom: 25px;\n  text-align: left;\n  background-color:SlateGray !important;\n  background:rgba(255,255,255,0.12) !important;  /*background-image: url(\"../../public/assets/vector-grunge-background.jpg\");*/\n}\n._26CV-HX4ZXn5afOoFjFkOk {\n  font-size: 23px;\n  font-family: \"Cinzel Decorative\", cursive;\n  text-align: left;\n  word-spacing: 10px;\n  /*color: saddlebrown;*/\n  /*text-shadow: 2px 2px 0px white;*/\n  color: white;\n  /*text-shadow: 2px 2px 0px #fa621f;*/\n  border-bottom-style: groove;\n  border-bottom-width: thin;\n  border-color: #df691a;\n  margin-left: 70px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  margin-right: 500px;\n}\n._2LdKJikrrFHaDCkm4Ix0_H {\n  margin-top: 35px;\n}\n.oB28C7GJDdwqlCYvd48r {\n  padding-top: 20px;\n}\n\n\n\n._19-tzvIC99bsuwI8S-oBN6 {\n  font-size: 18px;\n  font-family: \"Crimson Text\", serif;\n  text-align: left !important;\n  align-content: left !important;\n  align-items: left !important;\n}\n._3PLrmQ3pVEs3fThMHR8Gqu {\n  margin-left: 25%;\n  background-color: transparent;\n  margin-bottom: 40px;\n}\n\n._118T_chXRqzIjgDusUJ0bx li {\n  font-family: \"Crimson Text\", serif !important;\n  font-size: 16px;\n}\n\n._1au4PTHPHqarkizjO-Zf4B {\n  color: #fa621f;\n  outline: none;\n  border: none;\n  background-color: transparent !important;\n}\n\n._2bXfH5IfvpaXKr-1LdHJEf {\n  font-family: \"Cinzel Decorative\", cursive;\n\n  font-size: 35px;\n  color: ghostwhite;\n  text-shadow: 2px 2px 0px #fe8f3e;\n}\n\n.hBaUb-OVzuJ3JTddJs08g {\n  font-family: \"Cinzel Decorative\", cursive;\n\n  font-size: 30px;\n  color: white;\n  text-shadow: 2px 2px 0 #ff6c00;\n  padding-top: 5px;\n  text-align: center;\n}\n\n._1MXh2x-aK3SnE1XGkz3soX {\n  background-color: transparent !important;\n\n  font-size: 20px;\n  font-family: \"Crimson Text\", serif;\n  margin-right: 20px;\n}\n._1MXh2x-aK3SnE1XGkz3soX.active{\n  box-shadow: inset 4px -1px 20px 10px rgba(0,0,0,0.12) ;\n}\n._3eSpfOdL7aQTrgPM46mqJP {\n  background-color: SlateGray;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  -moz-opacity: 20%;\n  -webkit-opacity: 20%;\n  z-index: 2;\n}\n\n._2N37s73umOxLLPonQo_Xhb {\n  font-size: 17px;\n}\n\n._3bsM5Zh81356AM__L91oT3 {\n  margin-right: 20px;\n  font-size: 18px;\n  font-family: \"Crimson Text\", serif;\n  background-color: #df691a;\n}\n\n.TthrdTEPet-8-ADzA0hNY {\n  font-size: 20px;\n  font-family: \"Josefin Sans\", sans-serif;\n  text-align: center !important;\n  align-content: center !important;\n}\n\n._1L5U5kJpirUBy-BQD5tECl {\n  text-align: center !important;\n}\n.bnGeTGLUuf8VU5tAblRLo {\n  text-align: center;\n  width: 850px;\n}\n\n._3nfIKyGu_--OQr10aq2a0q {\n  font-size: 24px;\n  font-family: \"Crimson Text\", serif;\n\n  /*background-color: #FA621F;*/\n  background-color: #df691a;\n}\n._27a9B-F08t6UcGEtG-wJ44 {\n  text-align: center;\n}\n\n.zvW7WWnOPxz1q3LBimdEg {\n  text-align: center;\n  font-size: 18px;\n  line-height: normal;\n  font-family: \"Merriweather\", serif;\n}\n._2U64YKFE7Trxc5YWvH6qvk {\n  display: block;\n  position: relative;\n  padding: 0;\n  margin: 8px auto;\n  height: 0;\n  width: 80%;\n  max-height: 0;\n  font-size: 1px;\n  line-height: 0;\n  clear: both;\n  border: none;\n  border-top: 1px solid #485563;\n  border-bottom: 1px solid #697785;\n  margin-bottom: 25px;\n  margin-top: 25px;\n}\n._3iES6f3Y9yB37ptkpG8Jzy {\n  display: block;\n  position: relative;\n  padding: 0;\n  margin: 8px auto;\n  height: 0;\n  width: 80%;\n  max-height: 0;\n  font-size: 1px;\n  line-height: 0;\n  clear: both;\n  border: none;\n  border-top: 1px solid #485563;\n  border-bottom: 1px solid #df691a;\n  margin-bottom: 25px;\n}\n._2sZahgOE8hd43CNSAX8JrZ {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.jc2PM9QU16jeKc2sX5Dlw {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 18px;\n  color: white;\n  padding-top: 20px;\n  text-shadow: none;\n  text-align: left;\n}\n\n._3NV23_cY-tozSHc0BE9as_ {\n  text-align: center;\n  padding: 100px 25px;\n}\n.jga1Hkttp-foqx1wNN25L {\n  vertical-align: middle;\n  line-height: normal;\n  font-family: \"Merriweather\", serif;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n}\n\n._2vk3Du-80gOGz9B_Rz_Fi5 {\n  align-content: space-around;\n  background-color: white;\n    display: flex;\n}\n.k8w9cqMHlAMU2r67FERqg {\n  width: 25%;\n    display: flex;\n}\n.QZul3UBz3z4gpg8xWR5R7 {\n  background: transparent;\n  z-index: 9999;\n  width: 100vw !important;\n    display: flex;\n    align-content: center;\n    -webkit-align-content: center;\n}\n._2eAIvpPe7oqz3CaApc8iqh {\n  font-family: \"Merriweather\", serif;\n  font-size: 18px;\n  text-align: center;\n}\n._1steMoEVUVyK2p9c3ot_rJ {\n  font-family: \"Merriweather\", serif;\n  font-size: 18px;\n  text-align: center;\n}\n._2Ex8N_so0dAg3nWxxEaQQp {\n  padding-top: 30px;\n}\n\n._1g1QTChTxkafGGrfG0yFxN {\n  align-content: space-around;\n}\n\n._1FSfoZtQsd-ZFWBDHz4nY0 {\n  border: thin groove #df691a;\n  background: transparent;\n\n}\n._1EfAOR613TfEQdveVkLatU {\n  background: transparent;\n}\n._1N1skf_sTjbYhvhL_Vi7LX {\n  background: transparent;\n  font-size: 22px !important;\n  font-family: \"Crimson Text\", serif !important;\n}\n\n.sNP5KRvhTWQxSfvKP2rvS {\n  font-size: 18px;\n  font-family: \"Crimson Text\", serif;\n  color: white;\n}\n._28IZxteOVQM6pteA2Ad4sO {\n  border-bottom-style: groove;\n  border-bottom-width: thin;\n  border-color: #df691a;\n\n  background: #2b3e50;\n  z-index: 9999;\n  width: 100%;\n}\n\n._1_urJNBbXDWrqXsQrjOkl5 a {\n}\n._2LJoBP79CjPjoltLxGakLK a {\n  border-color: #df691a;\n  border-bottom-style: groove;\n  border-bottom-width: thin;\n  font-size: 14px !important;\n}\n._3kUQ440OepZFIIYw-9iOFD {\n  margin-top: 10px;\n}\n\n._2FW4MgJRCkD0Ei9Jk890FF {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n._1gPsqR-gjtiuoMrrMNKq_r {\n  /*background-image: url(\"../assets/GolarionMap.png\");*/\n  background-image: url(" + escape(__webpack_require__(/*! ../../public/assets/BlogBannerOne.jpg */ "./public/assets/BlogBannerOne.jpg")) + ");\n  object-fit: cover;\n  background-size: cover;\n  background-position: center;\n  -ms-background-position-x: center;\n  -ms-background-position-y: bottom;\n  margin-top: 42px;\n  margin-bottom: 30px;\n}\n.lYmLohIJTkWjA_7m7qG7U {\n  /*background-image: url(\"../assets/GolarionMap.png\");*/\n  background-image: url(" + escape(__webpack_require__(/*! ../../public/assets/BlogBannerOne.jpg */ "./public/assets/BlogBannerOne.jpg")) + ");\n  object-fit: cover;\n  background-size: cover;\n  background-position: center;\n  -ms-background-position-x: center;\n  -ms-background-position-y: bottom;\n}\n\n._3DtO-rprLO5w9tO-5XABes {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n    background-image: url(" + escape(__webpack_require__(/*! ../../public/assets/PZO1140-Chapter1.jpg */ "./public/assets/PZO1140-Chapter1.jpg")) + ");\n    background-repeat: repeat-y;\n    background-size: 100%;\n}\n\n._1KzIo5gt2mHBR20dLat7e9 {\n  flex: 1;\n}\n\n._3kOykWKpQuAezSDfHVIz7J {\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  width: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"formcontainer": "UeJMY7peMlry1IGl2c7kn",
	"jss": "_2x1U_54odc29N8ZS6FBwO7",
	"aboutSiteText": "_35UuK4wysCuxrpZmOhcD7m",
	"alignmentButtonGroup": "_2qS26b_Y7G_tM4hh9ypplz",
	"favouredClassButtonGroup": "dMsXG5mwx7DfjIcNFCfOf",
	"alignmentInfoDiv": "_1L3IG7m8Gwklx_or8z48Kn",
	"alignmentButtonGroupParent": "_1oF0cbVxo9Rp-a4dzzLFOJ",
	"createColStyle": "_2rYC0Sk1P0MyH7ItFVJAOC",
	"createCharacterPanelParent": "_37dBhTi67mBsWCh4AVVAG",
	"editCharacterPanelParent": "_3Kh5WRq35fZpfCwMVnlVxM",
	"createCharacterPanelHeaderStyle": "_3rnzRwNdbmenCN76NHMmtg",
	"createCharacterPanelHeaderStyleText": "_26CV-HX4ZXn5afOoFjFkOk",
	"createCharacterClassModal": "_2LdKJikrrFHaDCkm4Ix0_H",
	"createCharacterFormPadding": "oB28C7GJDdwqlCYvd48r",
	"createColLabelStyle": "_19-tzvIC99bsuwI8S-oBN6",
	"classModalImageDiv": "_3PLrmQ3pVEs3fThMHR8Gqu",
	"dropdown-menu": "_118T_chXRqzIjgDusUJ0bx",
	"deleteButton": "_1au4PTHPHqarkizjO-Zf4B",
	"headingText": "_2bXfH5IfvpaXKr-1LdHJEf",
	"homeBodyText": "hBaUb-OVzuJ3JTddJs08g",
	"genderButtonGroup": "_1MXh2x-aK3SnE1XGkz3soX",
	"genderImageStyle": "_3eSpfOdL7aQTrgPM46mqJP",
	"rollForStatsButton": "_2N37s73umOxLLPonQo_Xhb",
	"statsMethodButtons": "_3bsM5Zh81356AM__L91oT3",
	"genStatsNumberStyle": "TthrdTEPet-8-ADzA0hNY",
	"customStatsIcons": "_1L5U5kJpirUBy-BQD5tECl",
	"characterTableParent": "bnGeTGLUuf8VU5tAblRLo",
	"characterTableHeader": "_3nfIKyGu_--OQr10aq2a0q",
	"HTRtextAt": "_27a9B-F08t6UcGEtG-wJ44",
	"characterTableRow": "zvW7WWnOPxz1q3LBimdEg",
	"hr": "_2U64YKFE7Trxc5YWvH6qvk",
	"hrCharacterList": "_3iES6f3Y9yB37ptkpG8Jzy",
	"homeImageDiv": "_2sZahgOE8hd43CNSAX8JrZ",
	"homeTextParagraph": "jc2PM9QU16jeKc2sX5Dlw",
	"Legaldiv": "_3NV23_cY-tozSHc0BE9as_",
	"LegalSpan": "jga1Hkttp-foqx1wNN25L",
	"loginDiv": "_2vk3Du-80gOGz9B_Rz_Fi5",
	"loginPanelParent": "k8w9cqMHlAMU2r67FERqg",
	"loginParent": "QZul3UBz3z4gpg8xWR5R7",
	"loginPanelHeading": "_2eAIvpPe7oqz3CaApc8iqh",
	"loginModalStyle": "_1steMoEVUVyK2p9c3ot_rJ",
	"LegalImgDiv": "_2Ex8N_so0dAg3nWxxEaQQp",
	"loadingIcon": "_1g1QTChTxkafGGrfG0yFxN",
	"panelHeaderParent": "_1FSfoZtQsd-ZFWBDHz4nY0",
	"panelHeader": "_1EfAOR613TfEQdveVkLatU",
	"panelHeaderText": "_1N1skf_sTjbYhvhL_Vi7LX",
	"navBarFont": "sNP5KRvhTWQxSfvKP2rvS",
	"navbarStyle": "_28IZxteOVQM6pteA2Ad4sO",
	"navDropDown": "_1_urJNBbXDWrqXsQrjOkl5",
	"navBarMenuItem": "_2LJoBP79CjPjoltLxGakLK",
	"HeaderImage": "_3kUQ440OepZFIIYw-9iOFD",
	"titleImage": "_2FW4MgJRCkD0Ei9Jk890FF",
	"splash_img": "_1gPsqR-gjtiuoMrrMNKq_r",
	"splash_imgLogin": "lYmLohIJTkWjA_7m7qG7U",
	"Site": "_3DtO-rprLO5w9tO-5XABes",
	"SiteContent": "_1KzIo5gt2mHBR20dLat7e9",
	"styleFooter": "_3kOykWKpQuAezSDfHVIz7J"
};

/***/ }),

/***/ "./public/assets/Barbarian - Ostog.png":
/*!*********************************************!*\
  !*** ./public/assets/Barbarian - Ostog.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Barbarian - Ostog-58656fe6.png";

/***/ }),

/***/ "./public/assets/Bard - Lem.png":
/*!**************************************!*\
  !*** ./public/assets/Bard - Lem.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Bard - Lem-c6748f7b.png";

/***/ }),

/***/ "./public/assets/BlogBannerOne.jpg":
/*!*****************************************!*\
  !*** ./public/assets/BlogBannerOne.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/BlogBannerOne-f52d94a5.jpg";

/***/ }),

/***/ "./public/assets/Cleric - Kyra.png":
/*!*****************************************!*\
  !*** ./public/assets/Cleric - Kyra.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Cleric - Kyra-f68f39a7.png";

/***/ }),

/***/ "./public/assets/Druid - Maznar.png":
/*!******************************************!*\
  !*** ./public/assets/Druid - Maznar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Druid - Maznar-f163d207.png";

/***/ }),

/***/ "./public/assets/Fighter - Valeros.png":
/*!*********************************************!*\
  !*** ./public/assets/Fighter - Valeros.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Fighter - Valeros-d58623a3.png";

/***/ }),

/***/ "./public/assets/HeaderText1nobezel.png":
/*!**********************************************!*\
  !*** ./public/assets/HeaderText1nobezel.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/HeaderText1nobezel-3d9dbf90.png";

/***/ }),

/***/ "./public/assets/Monk - Sajan.png":
/*!****************************************!*\
  !*** ./public/assets/Monk - Sajan.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Monk - Sajan-5ff7b724.png";

/***/ }),

/***/ "./public/assets/OccultYoon.png":
/*!**************************************!*\
  !*** ./public/assets/OccultYoon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/OccultYoon-e6724f91.png";

/***/ }),

/***/ "./public/assets/PZO1140-Chapter1.jpg":
/*!********************************************!*\
  !*** ./public/assets/PZO1140-Chapter1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/PZO1140-Chapter1-9275e61d.jpg";

/***/ }),

/***/ "./public/assets/Paizo.png":
/*!*********************************!*\
  !*** ./public/assets/Paizo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Paizo-883c2a30.png";

/***/ }),

/***/ "./public/assets/Paladin - Seelah.png":
/*!********************************************!*\
  !*** ./public/assets/Paladin - Seelah.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Paladin - Seelah-01141087.png";

/***/ }),

/***/ "./public/assets/PathfinderRpg.png":
/*!*****************************************!*\
  !*** ./public/assets/PathfinderRpg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/PathfinderRpg-d26ee409.png";

/***/ }),

/***/ "./public/assets/Ranger - Harsk.png":
/*!******************************************!*\
  !*** ./public/assets/Ranger - Harsk.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Ranger - Harsk-df004eda.png";

/***/ }),

/***/ "./public/assets/Rogue - Wu-Shen.png":
/*!*******************************************!*\
  !*** ./public/assets/Rogue - Wu-Shen.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Rogue - Wu-Shen-e98f29ea.png";

/***/ }),

/***/ "./public/assets/Sorcerer - Qualzar.png":
/*!**********************************************!*\
  !*** ./public/assets/Sorcerer - Qualzar.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Sorcerer - Qualzar-4e10a2cc.png";

/***/ }),

/***/ "./public/assets/Wizard - Ezren.png":
/*!******************************************!*\
  !*** ./public/assets/Wizard - Ezren.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/assets/Wizard - Ezren-445e20de.png";

/***/ }),

/***/ "./src/js/actions/CharacterActionCreators.js":
/*!***************************************************!*\
  !*** ./src/js/actions/CharacterActionCreators.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCharacters = exports.createCharacter = exports.deleteCharacter = exports.fetchCharacter = exports.updateCharacter = exports.clearCharacterEdit = undefined;

var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ "./src/js/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _index = __webpack_require__(/*! ../store/index */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var clearCharacterEdit = exports.clearCharacterEdit = function clearCharacterEdit() {
  return {
    type: types.CLEAR_CHARACTER_EDIT
  };
};

function updatingCharacter() {
  return {
    type: types.UPDATING_CHARACTER
  };
}

var updateCharacter = exports.updateCharacter = function updateCharacter(_updateCharacter, callBackSetState) {
  return function (dispatch) {
    var URL = "/api/characters/" + _updateCharacter._id;
    dispatch(updatingCharacter());
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: _index2.default.getState().userReducer.authToken
      },
      body: JSON.stringify(_updateCharacter)
    }).then(function (response) {
      if (!response.ok) {
        response.json().then(function (error) {
          alert("Failed to update character: " + error);
          dispatch({
            type: types.UPDATING_CHARACTER_FAIL,
            payload: error,
            error: true
          });
        });
      } else {
        response.json().then(function (data) {
          function resolveDispatch() {
            return new Promise(function (resolve) {
              resolve(dispatch({
                type: types.UPDATING_CHARACTER_SUCCESS,
                updatedCharacter: data
              }));
            });
          }
          async function asyncDispatch() {
            await resolveDispatch();
            callBackSetState();
          }
          asyncDispatch();
        });
      }
    });
  };
};

function requestCharacter(URL) {
  return {
    type: types.FETCHING_CHARACTER,
    url: URL
  };
}

var fetchCharacter = exports.fetchCharacter = function fetchCharacter(characterID, callbackSetState) {
  return function (dispatch, getState) {
    dispatch(requestCharacter(URL));
    fetch("/api/characters/" + characterID, {
      method: "GET",
      headers: { authorization: _index2.default.getState().userReducer.authToken }
    }).then(function (response) {
      if (!response.ok) {
        response.json().then(function (error) {
          alert("Failed to fetch character: " + error.message);
          dispatch({
            type: types.FETCHING_CHARACTER_FAIL,
            payload: error,
            error: true
          });
        });
      } else {
        response.json().then(function (data) {
          function resolveDispatch() {
            return new Promise(function (resolve) {
              resolve(dispatch({
                type: types.FETCHING_CHARACTER_SUCCESS,
                editCharacter: data
              }));
            });
          }
          async function asyncDispatch() {
            var result = await resolveDispatch();
            callbackSetState();
          }
          asyncDispatch();
        });
      }
    });
  };
};

function deletingCharacter(characterID) {
  return {
    type: types.DELETING_CHARACTERS_START,
    id: characterID
  };
}

var deleteCharacter = exports.deleteCharacter = function deleteCharacter(characterID) {
  return function (dispatch, getState) {
    dispatch(deletingCharacter(characterID));
    fetch("/api/characters/" + characterID, {
      method: "DELETE",
      headers: { authorization: _index2.default.getState().userReducer.authToken }
    }).then(function (response) {
      if (!response.ok) {
        alert("Failed to delete character");
        dispatch({
          type: types.DELETING_CHARACTERS_FAIL,
          payload: response.status,
          error: true
        });
      } else {
        dispatch({
          type: types.DELETING_CHARACTERS_SUCCESS,
          characterID: characterID
        });
      }
    });
  };
};

function creatingCharacter(newCharacter) {
  return {
    type: types.CREATE_CHARACTER,
    payload: newCharacter
  };
}

var createCharacter = exports.createCharacter = function createCharacter(newCharacter, callBackRedirect) {
  return function (dispatch, getState) {
    dispatch(creatingCharacter(newCharacter));
    fetch("/api/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: _index2.default.getState().userReducer.authToken
      },
      body: JSON.stringify(newCharacter)
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (updatedCharacter) {
          updatedCharacter.created = new Date(updatedCharacter.created);

          function resolveDispatch() {
            return new Promise(function (resolve) {
              resolve(dispatch({
                type: types.CREATING_CHARACTER_SUCCESS,
                character: updatedCharacter
              }));
            });
          }
          async function asyncDispatch() {
            var result = await resolveDispatch();
            callBackRedirect();
            return result;
          }
          asyncDispatch();
        });
      } else {
        response.json().then(function (error) {
          alert("Failed to create character: " + error.message);
          dispatch({
            type: types.CREATING_CHARACTER_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};

function requestCharacterList(URL) {
  return {
    type: types.FETCHING_CHARACTERS,
    url: URL
  };
}

var fetchCharacters = exports.fetchCharacters = function fetchCharacters() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return function (dispatch) {
    dispatch(requestCharacterList(filter));
    fetch("/api/characters" + filter, {
      method: "GET",
      headers: { authorization: _index2.default.getState().userReducer.authToken }
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dispatch({
            type: types.FETCHING_CHARACTERS_SUCCESS,
            characters: data.characters
          });
        });
      } else {
        response.json().then(function (error) {
          alert("Failed to fetch characters: " + error.message);
          dispatch({
            type: types.FETCHING_CHARACTERS_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};

/***/ }),

/***/ "./src/js/actions/UserActionCreators.js":
/*!**********************************************!*\
  !*** ./src/js/actions/UserActionCreators.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.logoutGuestUser = exports.createGuestUser = exports.fetchRegisteredUser = exports.loginRegisteredUser = exports.logoutRegisteredUser = exports.createRegisteredUser = undefined;

var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ "./src/js/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Registered User Actions Creators
 */
function createRegisteredUserStart(newUser) {
	return {
		type: types.CREATE_USER_START,
		payload: newUser
	};
}

var createRegisteredUser = exports.createRegisteredUser = function createRegisteredUser(newRegisteredUser) {
	return function (dispatch, getState) {
		dispatch(createRegisteredUserStart(newRegisteredUser));
		fetch('api/authenticate').then(function (response) {
			response.json().then(function (data) {
				var token = JSON.parse(data.body);
				fetch("/api/users", {
					method: "POST",
					headers: { "Content-Type": "application/json", authorization: token.token_type + ' ' + token.access_token },
					body: JSON.stringify(newRegisteredUser)
				}).then(function (response) {
					if (response.ok) {
						response.json().then(function (newUser) {

							newUser.created = new Date(newUser.created);
							dispatch({
								type: types.CREATE_USER_SUCCESS,
								newUser: newUser
							});
						});
					} else {
						response.json().then(function (error) {
							alert("Failed to create registered user: " + error.message);
							dispatch({
								type: types.CREATE_USER_FAIL,
								payload: error,
								error: true
							});
						});
					}
				});
			});
		});
	};
};

function logoutRegisteredUserStart() {
	return {
		type: types.USER_LOGOUT_START,
		payload: null
	};
}

var logoutRegisteredUser = exports.logoutRegisteredUser = function logoutRegisteredUser() {
	return function (dispatch, getState) {
		dispatch(logoutRegisteredUserStart());

		return dispatch({
			type: types.USER_LOGOUT_SUCCESS,
			payload: null
		});
	};
};

function loginRegisteredUserStart() {
	return {
		type: types.USER_LOGIN_START,
		payload: null
	};
}

var loginRegisteredUser = exports.loginRegisteredUser = function loginRegisteredUser(callbackRedirect) {
	return function (dispatch, getState) {
		dispatch(loginRegisteredUserStart());
		fetch('api/authenticate').then(function (response) {
			response.json().then(function (data) {
				var token = JSON.parse(data.body);
				dispatch({
					type: types.USER_LOGIN_SUCCESS,
					auth0Token: token.token_type + ' ' + token.access_token
				});
				callbackRedirect();
			});
		});
	};
};

function fetchRegisteredUserStart() {
	return {
		type: types.FETCH_USER_START,
		payload: null
	};
}

var fetchRegisteredUser = exports.fetchRegisteredUser = function fetchRegisteredUser() {
	var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var queryCallBack = arguments[1];

	return function (dispatch, getState) {
		dispatch(fetchRegisteredUserStart());

		fetch('api/authenticate').then(function (response) {
			response.json().then(function (data) {
				var token = JSON.parse(data.body);
				fetch("/api/users" + filter, {
					method: 'GET',
					headers: { authorization: token.token_type + ' ' + token.access_token }
				}).then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							if (data.users && data.users.length === 1) {
								data = data.users[0];
							}
							function resolveDispatch() {
								return new Promise(function (resolve) {
									resolve(dispatch({
										type: types.FETCH_USER_SUCCESS,
										registeredUser: data
									}));
								});
							}
							async function asyncDispatch() {
								var result = await resolveDispatch();
								queryCallBack();
							}
							asyncDispatch();
						});
					} else {
						response.json().then(function (error) {
							alert("Failed to fetch characters: " + error.message);
							dispatch({
								type: types.FETCH_USER_FAIL,
								payload: error,
								error: true
							});
						});
					}
				});
			});
		});
	};
};

/**
 * Guest User actions creators
 */
function createGuestUserStart(newUser) {
	return {
		type: types.CREATE_GUEST_USER_START,
		payload: newUser
	};
}

var createGuestUser = exports.createGuestUser = function createGuestUser(newGuestUser, callbackRedirect) {
	return function (dispatch, getState) {
		dispatch(createGuestUserStart(newGuestUser));
		fetch('api/authenticate').then(function (response) {
			response.json().then(function (data) {
				var token = JSON.parse(data.body);
				fetch("/api/users", {
					method: "POST",
					headers: { "Content-Type": "application/json", authorization: token.token_type + ' ' + token.access_token },
					body: JSON.stringify(newGuestUser)
				}).then(function (response) {
					if (response.ok) {
						response.json().then(function (updatedUser) {
							updatedUser.created = new Date(updatedUser.created);
							dispatch({
								type: types.CREATE_GUEST_USER_SUCCESS,
								newGuest: updatedUser,
								auth0Token: token.token_type + ' ' + token.access_token
							});
							callbackRedirect();
						});
					} else {
						response.json().then(function (error) {
							alert("Failed to create guest user: " + error.message);
							dispatch({
								type: types.CREATE_GUEST_USER_FAIL,
								payload: error,
								error: true
							});
						});
					}
				});
			});
		});
	};
};

function logoutGuestUserStart() {
	return {
		type: types.USER_LOGOUT_START,
		payload: null
	};
}

var logoutGuestUser = exports.logoutGuestUser = function logoutGuestUser(userName, callbackRedirect) {
	return function (dispatch, getState) {
		dispatch(logoutGuestUserStart());

		fetch('api/authenticate').then(function (response) {
			response.json().then(function (data) {
				var token = JSON.parse(data.body);
				fetch("/api/users/" + userName, {
					method: "DELETE",
					headers: { "Content-Type": "application/json", authorization: token.token_type + ' ' + token.access_token }
				}).then(function (response) {
					if (!response.ok) {
						alert("Failed to delete user");
						dispatch({
							type: types.USER_LOGOUT_FAIL,
							payload: error,
							error: true
						});
					} else {
						dispatch({
							type: types.USER_LOGOUT_SUCCESS,
							loggedOut: true
						});
						callbackRedirect();
					}
				});
			});
		});
	};
};

/***/ }),

/***/ "./src/js/components/App.jsx":
/*!***********************************!*\
  !*** ./src/js/components/App.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NavItem = __webpack_require__(/*! react-bootstrap/lib/NavItem */ "./node_modules/react-bootstrap/lib/NavItem.js");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _react3 = __webpack_require__(/*! redux-persist/lib/integration/react */ "./node_modules/redux-persist/lib/integration/react.js");

var _LinkContainer = __webpack_require__(/*! react-router-bootstrap/lib/LinkContainer */ "./node_modules/react-router-bootstrap/lib/LinkContainer.js");

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _CharacterList = __webpack_require__(/*! ./CharacterList/CharacterList.jsx */ "./src/js/components/CharacterList/CharacterList.jsx");

var _CharacterList2 = _interopRequireDefault(_CharacterList);

var _CharacterEdit = __webpack_require__(/*! ./CharacterEdit/CharacterEdit.jsx */ "./src/js/components/CharacterEdit/CharacterEdit.jsx");

var _CharacterEdit2 = _interopRequireDefault(_CharacterEdit);

var _CreateCharacterComponent = __webpack_require__(/*! ./CreateCharacterComponents/CreateCharacterComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterComponent.jsx");

var _CreateCharacterComponent2 = _interopRequireDefault(_CreateCharacterComponent);

var _BeastComponent = __webpack_require__(/*! ./WorldInfo/BeastComponent.jsx */ "./src/js/components/WorldInfo/BeastComponent.jsx");

var _BeastComponent2 = _interopRequireDefault(_BeastComponent);

var _SkillsComponent = __webpack_require__(/*! ./WorldInfo/SkillsComponent.jsx */ "./src/js/components/WorldInfo/SkillsComponent.jsx");

var _SkillsComponent2 = _interopRequireDefault(_SkillsComponent);

var _ItemsComponent = __webpack_require__(/*! ./WorldInfo/ItemsComponent.jsx */ "./src/js/components/WorldInfo/ItemsComponent.jsx");

var _ItemsComponent2 = _interopRequireDefault(_ItemsComponent);

var _HomeComponent = __webpack_require__(/*! ./HomeComponent.jsx */ "./src/js/components/HomeComponent.jsx");

var _HomeComponent2 = _interopRequireDefault(_HomeComponent);

var _AboutSiteComponent = __webpack_require__(/*! ./SiteInfo/AboutSiteComponent.jsx */ "./src/js/components/SiteInfo/AboutSiteComponent.jsx");

var _AboutSiteComponent2 = _interopRequireDefault(_AboutSiteComponent);

var _CreateNPCComponent = __webpack_require__(/*! ./CreateNPC/CreateNPCComponent.jsx */ "./src/js/components/CreateNPC/CreateNPCComponent.jsx");

var _CreateNPCComponent2 = _interopRequireDefault(_CreateNPCComponent);

var _PathfinderCommunityUse = __webpack_require__(/*! ./SiteInfo/PathfinderCommunityUse.jsx */ "./src/js/components/SiteInfo/PathfinderCommunityUse.jsx");

var _PathfinderCommunityUse2 = _interopRequireDefault(_PathfinderCommunityUse);

var _CreateEncounter = __webpack_require__(/*! ./Arena/CreateEncounter.jsx */ "./src/js/components/Arena/CreateEncounter.jsx");

var _CreateEncounter2 = _interopRequireDefault(_CreateEncounter);

var _OGL = __webpack_require__(/*! ./SiteInfo/OGL.jsx */ "./src/js/components/SiteInfo/OGL.jsx");

var _OGL2 = _interopRequireDefault(_OGL);

var _CreateCampaign = __webpack_require__(/*! ./Arena/CreateCampaign.jsx */ "./src/js/components/Arena/CreateCampaign.jsx");

var _CreateCampaign2 = _interopRequireDefault(_CreateCampaign);

var _Login = __webpack_require__(/*! ./AuthenticateUser/Login.jsx */ "./src/js/components/AuthenticateUser/Login.jsx");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(/*! ./AuthenticateUser/Signup.jsx */ "./src/js/components/AuthenticateUser/Signup.jsx");

var _Signup2 = _interopRequireDefault(_Signup);

var _ForgotPassword = __webpack_require__(/*! ./AuthenticateUser/ForgotPassword.jsx */ "./src/js/components/AuthenticateUser/ForgotPassword.jsx");

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _CreateCharacterSkillsComponent = __webpack_require__(/*! ./CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx */ "./src/js/components/CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx");

var _CreateCharacterSkillsComponent2 = _interopRequireDefault(_CreateCharacterSkillsComponent);

var _index = __webpack_require__(/*! ../store/index */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _Styles = __webpack_require__(/*! ../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _SiteHeaderComponent = __webpack_require__(/*! ./SiteHeaderComponent */ "./src/js/components/SiteHeaderComponent.jsx");

var _SiteHeaderComponent2 = _interopRequireDefault(_SiteHeaderComponent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    "p",
    null,
    "Page Not Found"
  );
};
var theme = (0, _styles.createMuiTheme)({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': { //underline color when textfield is inactive
          backgroundColor: '#697785',
          height: '1px'
        },
        '&:hover:not($disabled):before': { //underline color when hovered
          backgroundColor: 'white',
          height: '1px'
        },
        '&:after': {
          backgroundColor: '#df691a',
          height: '1px'
        }
      }, focused: {
        '&:before': { //underline color when textfield is inactive
          color: '#df691a',
          height: '1px'
        },
        '&:hover:not($disabled):before': { //underline color when hovered
          color: '#df691a', height: '1px'
        },
        '&:after': {
          color: '#df691a', height: '1px'
        }
      }
    }
  }
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      loggedIn: false,
      showFooter: true
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var PrivateRoute = function PrivateRoute(_ref) {
        var Component = _ref.component,
            rest = _objectWithoutProperties(_ref, ["component"]);

        return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
          render: function render(props) {
            return _index2.default.getState().userReducer.loggedIn ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {
              to: {
                pathname: "/login",
                state: { from: props.location }
              }
            });
          }
        }));
      };
      return _react2.default.createElement(
        "div",
        { className: ["card", cssStyles.Site].join(" ") },
        _react2.default.createElement(_SiteHeaderComponent2.default, null),
        _react2.default.createElement(
          "div",
          { className: ["container-fluid", cssStyles.SiteContent].join(" "), style: { paddingLeft: 0, paddingRight: 0 } },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(PrivateRoute, {
              exact: true,
              path: "/home",
              component: _HomeComponent2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              path: "/createCharacter/skills",
              component: _CreateCharacterSkillsComponent2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              path: "/createCharacter",
              component: _CreateCharacterComponent2.default
            }),
            _react2.default.createElement(_reactRouterDom.Route, { path: !_index2.default.getState().userReducer.loggedIn ? "/login" : "/home", component: !_index2.default.getState().userReducer.loggedIn ? _Login2.default : _HomeComponent2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/campaign", component: _CreateCampaign2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/encounter", component: _CreateEncounter2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: "/OGL", component: _OGL2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: !_index2.default.getState().userReducer.loggedIn ? "/signup" : "/home", component: _index2.default.getState().userReducer.loggedIn ? _HomeComponent2.default : _Signup2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/createNPC", component: _CreateNPCComponent2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/beasts", component: _BeastComponent2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/skills", component: _SkillsComponent2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/items", component: _ItemsComponent2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/characters/:id", component: _CharacterEdit2.default }),
            _react2.default.createElement(PrivateRoute, { path: "/characters", component: _CharacterList2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: "/legal", component: _PathfinderCommunityUse2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: !_index2.default.getState().userReducer.loggedIn ? "/forgotPassword" : "/home", component: _index2.default.getState().userReducer.loggedIn ? _HomeComponent2.default : _ForgotPassword2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: _AboutSiteComponent2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: !_index2.default.getState().userReducer.loggedIn ? _Login2.default : _HomeComponent2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: "*", component: !_index2.default.getState().userReducer.loggedIn ? _Login2.default : _HomeComponent2.default })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: cssStyles.styleFooter },
          _react2.default.createElement(
            "div",
            null,
            " Hernan Rossi \xA9 2018"
          ),
          _react2.default.createElement(
            _LinkContainer2.default,
            { to: "/legal" },
            _react2.default.createElement(
              _NavItem2.default,
              null,
              "Pathfinder content used under Open Gaming License, and Community Use Policy"
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  children: _propTypes2.default.object
};

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _index2.default },
  _react2.default.createElement(
    _react3.PersistGate,
    { persistor: _index.persistor },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(App, null)
      )
    )
  )
), document.getElementById("contents"));

if (false) {}

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: _index2.default.getState().userReducer.loggedIn,
    user: _index2.default.getState().userReducer.currentUserName
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),

/***/ "./src/js/components/Arena/CreateCampaign.jsx":
/*!****************************************************!*\
  !*** ./src/js/components/Arena/CreateCampaign.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCampaign = function (_React$Component) {
	_inherits(CreateCampaign, _React$Component);

	function CreateCampaign() {
		_classCallCheck(this, CreateCampaign);

		return _possibleConstructorReturn(this, (CreateCampaign.__proto__ || Object.getPrototypeOf(CreateCampaign)).apply(this, arguments));
	}

	_createClass(CreateCampaign, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Under construction'
			);
		}
	}]);

	return CreateCampaign;
}(_react2.default.Component);

exports.default = CreateCampaign;

/***/ }),

/***/ "./src/js/components/Arena/CreateEncounter.jsx":
/*!*****************************************************!*\
  !*** ./src/js/components/Arena/CreateEncounter.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateEncounter = function (_React$Component) {
	_inherits(CreateEncounter, _React$Component);

	function CreateEncounter() {
		_classCallCheck(this, CreateEncounter);

		return _possibleConstructorReturn(this, (CreateEncounter.__proto__ || Object.getPrototypeOf(CreateEncounter)).apply(this, arguments));
	}

	_createClass(CreateEncounter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Under construction'
			);
		}
	}]);

	return CreateEncounter;
}(_react2.default.Component);

exports.default = CreateEncounter;

/***/ }),

/***/ "./src/js/components/AuthenticateUser/ForgotPassword.jsx":
/*!***************************************************************!*\
  !*** ./src/js/components/AuthenticateUser/ForgotPassword.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _FormControl = __webpack_require__(/*! react-bootstrap/es/FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _UserActionCreators = __webpack_require__(/*! ../../actions/UserActionCreators */ "./src/js/actions/UserActionCreators.js");

var UserActionCreators = _interopRequireWildcard(_UserActionCreators);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _store = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var passwordHash = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");

var ForgotPassword = function (_React$Component) {
	_inherits(ForgotPassword, _React$Component);

	function ForgotPassword(props, context) {
		_classCallCheck(this, ForgotPassword);

		var _this = _possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this));

		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleShow = _this.handleShow.bind(_this);
		_this.sendUserInfo = _this.sendUserInfo.bind(_this);
		_this.state = {
			password: "",
			email: "",
			user: {}
		};
		var dispatch = props.dispatch;

		_this.boundActionCreators = (0, _redux.bindActionCreators)(UserActionCreators, dispatch);
		return _this;
	}

	_createClass(ForgotPassword, [{
		key: "handleClose",
		value: function handleClose() {
			this.setState({ show: false });
		}
	}, {
		key: "handleShow",
		value: function handleShow() {
			this.setState({ show: true });
		}
	}, {
		key: "sendUserInfo",
		value: function sendUserInfo() {
			var email = this.email.value;
			//query server for email info then send a email with the users info
			var thisInst = this;
			var callbackModalTrigger = function callbackModalTrigger() {
				thisInst.setState({ show: true });
			};

			var queryUser = "?email=" + email + "&sendEmail=true";
			var dispatch = this.props.dispatch;

			var action = UserActionCreators.fetchRegisteredUser(queryUser, callbackModalTrigger);
			dispatch(action);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var divContainerStyle = {
				display: "flex",
				width: "100%",
				flexDirection: "column",
				alignItems: "center"
			};
			var divContainerStyleChild = {
				width: "25%",
				alignItems: "center"
			};
			var panelBody = {
				alignItems: "center"
			};
			var panelParentStyle = {
				borderRadius: "5px",
				marginTop: "25%",
				width: "100%"
			};
			var buttonToolbarStyle = {
				alignItems: "center"
			};
			var panelHeadingStyle = {
				borderRadius: "5px 5px 0 0",
				textAlign: "center",
				fontFamily: '"Merriweather", serif',
				marginBottom: "20px",
				borderBottom: "1px solid #df691a"
			};

			return _react2.default.createElement(
				"div",
				{ className: cssStyles.loginParent },
				_react2.default.createElement(
					"div",
					{ style: divContainerStyle },
					_react2.default.createElement(
						"div",
						{ style: divContainerStyleChild },
						_react2.default.createElement(
							_reactBootstrap.Panel,
							{ style: panelParentStyle },
							_react2.default.createElement(
								_reactBootstrap.Panel.Heading,
								{ style: panelHeadingStyle },
								_react2.default.createElement(
									_reactBootstrap.Panel.Title,
									null,
									"Welcome to the",
									" ",
									_react2.default.createElement(
										"span",
										{ style: { fontFamily: "'Cinzel Decorative', cursive" } },
										"Arena"
									),
									_react2.default.createElement("br", null),
									" Input your email address and we will send you a temporary password"
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Form,
								{ horizontal: true, style: panelBody },
								_react2.default.createElement(
									_reactBootstrap.FormGroup,
									null,
									_react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
									_react2.default.createElement(
										_reactBootstrap.Col,
										{
											componentClass: _reactBootstrap.ControlLabel,
											sm: 2,
											className: cssStyles.createColLabelStyle
										},
										"Email"
									),
									" ",
									_react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
									_react2.default.createElement(
										_reactBootstrap.Col,
										{ sm: 5 },
										_react2.default.createElement(_FormControl2.default, {
											name: "email",
											inputRef: function inputRef(ref) {
												_this2.email = ref;
											},
											placeholder: "Enter email"
										})
									)
								),
								_react2.default.createElement(
									_reactBootstrap.FormGroup,
									null,
									_react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
									_react2.default.createElement(
										_reactBootstrap.Col,
										{ sm: 6, style: buttonToolbarStyle },
										_react2.default.createElement(
											_reactBootstrap.ButtonToolbar,
											{ style: buttonToolbarStyle },
											_react2.default.createElement(
												_reactBootstrap.Button,
												{ bsStyle: "primary", onClick: this.sendUserInfo },
												"Submit"
											),
											_react2.default.createElement(
												_reactRouterBootstrap.LinkContainer,
												{
													to: "/signin",
													style: { margin: "0px 0px 0px 5px" }
												},
												_react2.default.createElement(
													_reactBootstrap.Button,
													null,
													"Back"
												)
											)
										)
									)
								),
								_react2.default.createElement(
									_reactBootstrap.FormGroup,
									null,
									_react2.default.createElement(
										_reactBootstrap.Modal,
										{ show: this.state.show, onHide: this.handleClose },
										_react2.default.createElement(
											_reactBootstrap.Modal.Header,
											{ closeButton: true },
											_react2.default.createElement(
												_reactBootstrap.Modal.Title,
												null,
												"Email Sent"
											)
										),
										_react2.default.createElement(
											_reactBootstrap.Modal.Body,
											null,
											_react2.default.createElement(
												"p",
												null,
												"An email with your temporary password has been sent to the address provided"
											)
										),
										_react2.default.createElement(
											_reactBootstrap.Modal.Footer,
											null,
											_react2.default.createElement(
												_reactBootstrap.Button,
												{ onClick: this.handleClose },
												"Close"
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return ForgotPassword;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()(ForgotPassword));

/***/ }),

/***/ "./src/js/components/AuthenticateUser/Login.jsx":
/*!******************************************************!*\
  !*** ./src/js/components/AuthenticateUser/Login.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _FormGroup = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _UserActionCreators = __webpack_require__(/*! ../../actions/UserActionCreators */ "./src/js/actions/UserActionCreators.js");

var UserActionCreators = _interopRequireWildcard(_UserActionCreators);

var _store = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _stylescss = __webpack_require__(/*! ./stylescss */ "./src/js/components/AuthenticateUser/stylescss.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var passwordHash = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");

var styles = {
  root: {
    fontColor: 'white'
  },
  input: {
    color: "white",
    fontSize: 18,
    fontColor: 'white'
  },
  labelStyle: {
    color: '#df691a',
    fontSize: 16,
    fontFamily: "'Crimson Text', sans-serif"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleSignIn = _this.handleSignIn.bind(_this);
    _this.handleSignInGuest = _this.handleSignInGuest.bind(_this);
    _this.state = {
      name: "",
      password: "",
      email: "",
      authToken: "",
      authenticated: false,
      show: false,
      tempToken: ''
    };
    var dispatch = props.dispatch;

    _this.boundActionCreators = (0, _redux.bindActionCreators)(UserActionCreators, dispatch);
    return _this;
  }

  _createClass(Login, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "handleSignIn",
    value: function handleSignIn() {
      var email = this.email.value;
      var password = this.password.value;
      var hashedPassword = passwordHash.generate(password);
      var queryUser = "?email=" + email + "&password=" + passwordHash.generate(hashedPassword);
      var thisInst = this;
      var callbackRedirect = function callbackRedirect() {
        thisInst.props.history.push("/home");
      };

      var dispatch = this.props.dispatch;

      function resolveDispatch() {
        return new Promise(function (resolve) {
          var action = UserActionCreators.fetchRegisteredUser(queryUser, function () {
            var databaseQueryUserResult = _store2.default.getState().userReducer.currentUser;

            if (databaseQueryUserResult && databaseQueryUserResult.email !== email) {
              alert("Password/Email combination does not match any registered user.");
            } else {
              var actionLogin = UserActionCreators.loginRegisteredUser(callbackRedirect);
              dispatch(actionLogin);
            }
          });
          resolve(dispatch(action));
        });
      }

      async function asyncDispatch() {
        var result = await resolveDispatch();
      }
      asyncDispatch();
    }
  }, {
    key: "handleSignInGuest",
    value: function handleSignInGuest() {
      var newGuestUser = {
        name: "guest",
        email: "guest@gmail.com",
        password: "12345",
        isGuest: true
      };
      var thisInst = this;
      var callbackRedirect = function callbackRedirect() {
        thisInst.props.history.push("/home");
      };
      var dispatch = this.props.dispatch;

      var action = UserActionCreators.createGuestUser(newGuestUser, callbackRedirect);
      dispatch(action);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      var divContainerStyle = {
        backgroundColor: 'transparent',
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center"

      };
      var divContainerStyleChild = {};
      var panelBody = {
        backgroundColor: 'transparent',
        alignItems: "center"
      };
      var panelParentStyle = {
        borderRadius: "5px",
        marginTop: "25%",
        width: "100%"
      };
      var buttonToolbarStyle = {
        alignItems: "center",
        marginLeft: '-10px'
      };
      var panelHeadingStyle = {
        borderRadius: "5px 5px 0 0",
        textAlign: "center",
        fontFamily: '"Merriweather", serif',
        marginBottom: "20px",
        borderBottom: "1px solid #df691a"
      };
      return _react2.default.createElement(
        "div",
        { className: cssStyles.loginParent },
        _react2.default.createElement(
          "div",
          { style: divContainerStyle },
          _react2.default.createElement(
            _stylescss.LoginContainer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: panelParentStyle },
              _react2.default.createElement(
                _reactBootstrap.Panel.Heading,
                { style: panelHeadingStyle },
                _react2.default.createElement(
                  _reactBootstrap.Panel.Title,
                  null,
                  "Welcome to the",
                  " ",
                  _react2.default.createElement(
                    "span",
                    { style: { fontFamily: "'Cinzel Decorative', cursive" } },
                    "Arena"
                  ),
                  _react2.default.createElement("br", null),
                  " Please Log In"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: cssStyles.formcontainer },
                _react2.default.createElement(
                  _reactBootstrap.Form,
                  { horizontal: true, style: panelBody },
                  _react2.default.createElement(
                    _FormGroup.FormGroupM,
                    null,
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 3 }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2.default.createElement(_core.TextField, {
                        id: "email",
                        placeholder: "User Email",
                        label: _react2.default.createElement(
                          "span",
                          { style: { fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' } },
                          "User Email"
                        ),
                        inputRef: function inputRef(ref) {
                          _this2.email = ref;
                        },
                        className: classes.root,
                        InputProps: {
                          className: classes.input

                        },
                        InputLabelProps: {
                          root: classes.labelStyle
                        }
                      })
                    ),
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 3 })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 3 }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { sm: 6 },
                      _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_core.TextField, {
                          id: "password",
                          placeholder: "User Password",
                          type: "password",
                          inputRef: function inputRef(ref) {
                            _this2.password = ref;
                          },
                          className: classes.root,
                          InputProps: {
                            className: classes.input
                          },
                          InputLabelProps: {
                            className: classes.labelStyle
                          },
                          label: _react2.default.createElement(
                            "span",
                            { style: { fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' } },
                            "User Password"
                          )
                        })
                      )
                    ),
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 3 })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Modal,
                      { show: this.state.show, onHide: this.handleClose },
                      _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                          _reactBootstrap.Modal.Title,
                          null,
                          "Invalid Submission"
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(
                          "p",
                          null,
                          "This needs to be created"
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { onClick: this.handleClose },
                          "Close"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { sm: 8 },
                      _react2.default.createElement(
                        _reactBootstrap.ButtonToolbar,
                        null,
                        _react2.default.createElement(
                          _reactRouterBootstrap.LinkContainer,
                          { to: "/forgotPassword", style: { fontColor: 'white' } },
                          _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            null,
                            "Forgot password?"
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { sm: 6, style: buttonToolbarStyle },
                      _react2.default.createElement(
                        _reactBootstrap.ButtonToolbar,
                        { style: buttonToolbarStyle },
                        _react2.default.createElement(
                          _reactRouterBootstrap.LinkContainer,
                          { to: "/home", style: { width: "90px" } },
                          _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: "primary", onClick: this.handleSignIn },
                            "Log In"
                          )
                        ),
                        _react2.default.createElement(
                          _reactRouterBootstrap.LinkContainer,
                          {
                            to: "/signup",
                            style: { margin: "0px 0px 0px 5px", width: "90px" }
                          },
                          _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: "primary" },
                            "Register"
                          )
                        ),
                        _react2.default.createElement(
                          _reactRouterBootstrap.LinkContainer,
                          {
                            to: "/",
                            style: { margin: "5px 0px 5px 20px" }
                          },
                          _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.handleSignInGuest },
                            "Continue as Guest"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

Login.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()((0, _styles.withStyles)(styles)(Login)));

/***/ }),

/***/ "./src/js/components/AuthenticateUser/Signup.jsx":
/*!*******************************************************!*\
  !*** ./src/js/components/AuthenticateUser/Signup.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _FormControl = __webpack_require__(/*! react-bootstrap/es/FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _UserActionCreators = __webpack_require__(/*! ../../actions/UserActionCreators */ "./src/js/actions/UserActionCreators.js");

var UserActionCreators = _interopRequireWildcard(_UserActionCreators);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _store = __webpack_require__(/*! ../../store */ "./src/js/store/index.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var passwordHash = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props, context) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleSignUp = _this.handleSignUp.bind(_this);
    _this.handleEmailChange = _this.handleEmailChange.bind(_this);
    _this.handleUserNameChange = _this.handleUserNameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.handlePasswordConfirmChange = _this.handlePasswordConfirmChange.bind(_this);
    _this.state = {
      userName: "",
      password: "",
      userEmail: "",
      authToken: "",
      authenticated: false,
      show: false,
      modalBody: _react2.default.createElement("div", null),
      passwordConfirm: ''
    };
    var dispatch = props.dispatch;

    _this.boundActionCreators = (0, _redux.bindActionCreators)(UserActionCreators, dispatch);
    return _this;
  }

  _createClass(Signup, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleSignUp",
    value: function handleSignUp() {
      var _this2 = this;

      var emailAddress = this.userEmail.value;
      //Process email

      var regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]/i;
      var regexTestResult = regexEmail.exec(emailAddress);if (regexTestResult) {} else {
        alert("Oops. Somethings wrong with your email address");
        return;
      }

      //process userName
      var newUserName = this.userName.value;

      var regexName = /[a-zA-Z0-9]+/i;
      var regexNameResult = regexName.exec(newUserName);
      if (regexNameResult) {} else {
        alert("Oops. Somethings wrong with your user name");
        return;
      }

      //process Password
      var newUserPassword = this.userPassword.value;
      var newUserPasswordConfirm = this.userPasswordConfirm.value;

      var regexPassword = /[a-zA-Z0-9]*[0-9][a-zA-Z0-9]*/i;
      var regexPasswordResult = regexPassword.exec(newUserPassword);
      if (regexPasswordResult && newUserPassword.length > 7) {} else {
        alert("Oops. Somethings wrong your password");
        return;
      }
      if (newUserPassword === newUserPasswordConfirm) {} else {
        alert("Oops. Your passwords do not match");
        return;
      }
      //query database usernames and email must be unique
      var newUser = {
        name: newUserName,
        email: emailAddress,
        password: passwordHash.generate(newUserPassword),
        isGuest: false
      };
      var queryName = "?name=" + newUserName;

      var dispatch = this.props.dispatch;

      var action = UserActionCreators.fetchRegisteredUser(queryName, function () {
        var databaseQueryUserResult = _store2.default.getState().userReducer.currentUser;
        if (databaseQueryUserResult && databaseQueryUserResult.name === newUserName) {
          alert("User name already exists");
        } else {
          var queryUserEmail = "?email=" + emailAddress;
          action = UserActionCreators.fetchRegisteredUser(queryUserEmail, function () {
            var databaseQueryUserResult = _store2.default.getState().userReducer.currentUser;
            if (databaseQueryUserResult && databaseQueryUserResult.email === emailAddress) {
              alert("Email address already exists");
            } else {
              var _dispatch = _this2.props.dispatch;

              var _action = UserActionCreators.createRegisteredUser(newUser);
              _dispatch(_action);
              var registerConfirm = _react2.default.createElement(
                "div",
                null,
                "Registration successful. ",
                _react2.default.createElement("br", null),
                "Please log in with new user"
              );
              _this2.setState({ modalBody: registerConfirm });
              _this2.handleShow();
              _this2.setState({ userName: '', userEmail: '', password: '', passwordConfirm: '' });
            }
          });
          dispatch(action);
        }
      });
      dispatch(action);
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(e) {
      this.setState({ userEmail: e.target.value });
    }
  }, {
    key: "handleUserNameChange",
    value: function handleUserNameChange(e) {
      this.setState({ userName: e.target.value });
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: "handlePasswordConfirmChange",
    value: function handlePasswordConfirmChange(e) {
      this.setState({ passwordConfirm: e.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var divContainerStyle = {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
      };
      var divContainerStyleChild = {
        width: "25%",
        alignItems: "center"
      };
      var panelBody = {
        alignItems: "center"
      };
      var panelParentStyle = {
        borderRadius: "5px",
        marginTop: "25%",
        width: "100%"
      };
      var buttonToolbarStyle = {
        alignItems: "center"
      };
      var panelHeadingStyle = {
        borderRadius: "5px 5px 0 0",
        textAlign: "center",
        fontFamily: '"Merriweather", serif',
        marginBottom: "20px",
        borderBottom: "1px solid #df691a"
      };
      var Headerstyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };

      var ModalBodyText = function ModalBodyText() {
        return _react2.default.createElement(
          "div",
          null,
          _this3.state.modalBody
        );
      };
      return _react2.default.createElement(
        "div",
        { className: cssStyles.loginParent },
        _react2.default.createElement(
          "div",
          { style: divContainerStyle },
          _react2.default.createElement(
            "div",
            { style: divContainerStyleChild },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: panelParentStyle },
              _react2.default.createElement(
                _reactBootstrap.Panel.Heading,
                { style: panelHeadingStyle },
                _react2.default.createElement(
                  _reactBootstrap.Panel.Title,
                  null,
                  "Register for the",
                  " ",
                  _react2.default.createElement(
                    "span",
                    { style: { fontFamily: "'Cinzel Decorative', cursive" } },
                    "Arena"
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Form,
                { horizontal: true, style: panelBody },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    {
                      componentClass: _reactBootstrap.ControlLabel,
                      sm: 3,
                      className: cssStyles.createColLabelStyle
                    },
                    "Email"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6 },
                    _react2.default.createElement(_FormControl2.default, {
                      name: "userEmail",
                      inputRef: function inputRef(ref) {
                        _this3.userEmail = ref;
                      },
                      onChange: this.handleEmailChange,
                      value: this.state.userEmail,
                      placeholder: "Enter email"
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    {
                      componentClass: _reactBootstrap.ControlLabel,
                      sm: 3,
                      className: cssStyles.createColLabelStyle
                    },
                    "User Name"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6 },
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        placement: "right",
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Tooltip,
                          { id: "tooltip" },
                          _react2.default.createElement(
                            "div",
                            { style: { textAlign: "left" } },
                            "Must contain only numbers or characters"
                          )
                        )
                      },
                      _react2.default.createElement(_FormControl2.default, {
                        name: "userName",
                        inputRef: function inputRef(ref) {
                          _this3.userName = ref;
                        },
                        onChange: this.handleUserNameChange,
                        value: this.state.userName,
                        placeholder: "Enter User Name"
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    {
                      componentClass: _reactBootstrap.ControlLabel,
                      sm: 3,
                      className: cssStyles.createColLabelStyle
                    },
                    "Password"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6 },
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        placement: "right",
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Tooltip,
                          { id: "tooltip" },
                          _react2.default.createElement(
                            "div",
                            { style: { textAlign: "left" } },
                            "Case sensitive, must have at least:",
                            _react2.default.createElement("br", null),
                            " 8 characters ",
                            _react2.default.createElement("br", null),
                            "1 number",
                            _react2.default.createElement("br", null),
                            "No special characters, including spaces"
                          )
                        )
                      },
                      _react2.default.createElement(_FormControl2.default, {
                        name: "userPassword",
                        type: "password",
                        inputRef: function inputRef(ref) {
                          _this3.userPassword = ref;
                        },
                        onChange: this.handlePasswordChange,
                        value: this.state.password,
                        placeholder: "Enter Password"
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    {
                      componentClass: _reactBootstrap.ControlLabel,
                      sm: 3,
                      className: cssStyles.createColLabelStyle
                    },
                    "Confirm Password"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6 },
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        placement: "right",
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Tooltip,
                          { id: "tooltip" },
                          _react2.default.createElement(
                            "div",
                            { style: { textAlign: "left" } },
                            "Must match Password above"
                          )
                        )
                      },
                      _react2.default.createElement(_FormControl2.default, {
                        name: "userPasswordConfirm",
                        type: "password",
                        inputRef: function inputRef(ref) {
                          _this3.userPasswordConfirm = ref;
                        },
                        onChange: this.handlePasswordConfirmChange,
                        value: this.state.passwordConfirm,
                        placeholder: "Retype Password"
                      })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.show, onHide: this.handleClose },
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Header,
                      { closeButton: true },
                      _react2.default.createElement(_reactBootstrap.Modal.Title, null)
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Body,
                      null,
                      _react2.default.createElement(ModalBodyText, null)
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Modal.Footer,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.handleClose },
                        "Close"
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 6, style: buttonToolbarStyle },
                    _react2.default.createElement(
                      _reactBootstrap.ButtonToolbar,
                      { style: buttonToolbarStyle },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        {
                          bsStyle: "primary",
                          style: { width: "90px", margin: "0px 0px 10px 0px" },
                          onClick: this.handleSignUp
                        },
                        "Submit"
                      ),
                      _react2.default.createElement(
                        _reactRouterBootstrap.LinkContainer,
                        {
                          to: "/login",
                          style: { margin: "0px 0px 10px 5px", width: "90px" }
                        },
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          { bsStyle: "primary" },
                          "Back"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()(Signup));

/***/ }),

/***/ "./src/js/components/AuthenticateUser/stylescss.js":
/*!*********************************************************!*\
  !*** ./src/js/components/AuthenticateUser/stylescss.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 25%;\n  background-color: transparent;\n  align-items: center;\n\n  @media (max-width: 1560px) {\n    width: 35%;\n  }\n  @media (max-width: 1170px) {\n    width: 50%;\n  }\n\n  @media (max-width: 780px) {\n    width: 90%;\n  }\n'], ['\n  width: 25%;\n  background-color: transparent;\n  align-items: center;\n\n  @media (max-width: 1560px) {\n    width: 35%;\n  }\n  @media (max-width: 1170px) {\n    width: 50%;\n  }\n\n  @media (max-width: 780px) {\n    width: 90%;\n  }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginContainer = exports.LoginContainer = _styledComponents2.default.div(_templateObject);

/***/ }),

/***/ "./src/js/components/CharacterEdit/CharacterEdit.jsx":
/*!***********************************************************!*\
  !*** ./src/js/components/CharacterEdit/CharacterEdit.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(/*! ../../store/index.js */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _CharacterActionCreators = __webpack_require__(/*! ../../actions/CharacterActionCreators.js */ "./src/js/actions/CharacterActionCreators.js");

var CharacterActionCreators = _interopRequireWildcard(_CharacterActionCreators);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _CharacterEditBasicInfoComponent = __webpack_require__(/*! ./CharacterEditBasicInfoComponent.jsx */ "./src/js/components/CharacterEdit/CharacterEditBasicInfoComponent.jsx");

var _CharacterEditBasicInfoComponent2 = _interopRequireDefault(_CharacterEditBasicInfoComponent);

var _CharacterEditStatsComponent = __webpack_require__(/*! ./CharacterEditStatsComponent.jsx */ "./src/js/components/CharacterEdit/CharacterEditStatsComponent.jsx");

var _CharacterEditStatsComponent2 = _interopRequireDefault(_CharacterEditStatsComponent);

var _CharacterEditSkillsComponent = __webpack_require__(/*! ./CharacterEditSkillsComponent.jsx */ "./src/js/components/CharacterEdit/CharacterEditSkillsComponent.jsx");

var _CharacterEditSkillsComponent2 = _interopRequireDefault(_CharacterEditSkillsComponent);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterEdit = function (_React$Component) {
  _inherits(CharacterEdit, _React$Component);

  function CharacterEdit(props) {
    _classCallCheck(this, CharacterEdit);

    var _this = _possibleConstructorReturn(this, (CharacterEdit.__proto__ || Object.getPrototypeOf(CharacterEdit)).call(this));

    var dispatch = props.dispatch;

    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.changeName = _this.changeName.bind(_this);
    _this.changeAlignment = _this.changeAlignment.bind(_this);
    _this.changeLevel = _this.changeLevel.bind(_this);
    _this.changeAge = _this.changeAge.bind(_this);
    _this.changeHeight = _this.changeHeight.bind(_this);
    _this.changeWeight = _this.changeWeight.bind(_this);
    _this.changeHair = _this.changeHair.bind(_this);
    _this.changeEyes = _this.changeEyes.bind(_this);
    _this.changePlayer = _this.changePlayer.bind(_this);
    _this.changeDeity = _this.changeDeity.bind(_this);
    _this.changeHomeland = _this.changeHomeland.bind(_this);
    _this.changeSize = _this.changeSize.bind(_this);
    _this.changeGender = _this.changeGender.bind(_this);
    _this.acceptChanges = _this.acceptChanges.bind(_this);
    _this.saveChanges = _this.saveChanges.bind(_this);
    _this.rejectChanges = _this.rejectChanges.bind(_this);
    _this.boundActionsCreator = (0, _redux.bindActionCreators)(CharacterActionCreators, dispatch);
    _this.state = {
      editCharacter: {
        name: ""
      },
      saveCharacter: false,
      show: false
    };
    return _this;
  }

  _createClass(CharacterEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCharacter();
    }
  }, {
    key: "loadCharacter",
    value: function loadCharacter() {
      var that = this;
      var dispatch = this.props.dispatch;

      var callBackSetState = function callBackSetState() {
        return that.setState({
          editCharacter: _index2.default.getState().characterReducer.editCharacter
        });
      };
      var action = CharacterActionCreators.fetchCharacter(this.props.match.params.id, callBackSetState);
      dispatch(action);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "acceptChanges",
    value: function acceptChanges() {
      this.setState({ show: false });
      this.saveChanges();
    }
  }, {
    key: "rejectChanges",
    value: function rejectChanges() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      var action = CharacterActionCreators.clearCharacterEdit();
      dispatch(action);
    }
  }, {
    key: "changeName",
    value: function changeName(newName) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.name = newName;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeAlignment",
    value: function changeAlignment(newAlignment) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.alignment = newAlignment;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeLevel",
    value: function changeLevel(newLevel) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.level = newLevel;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeAge",
    value: function changeAge(newAge) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.age = newAge;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeHeight",
    value: function changeHeight(newHeight) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.height = newHeight;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeWeight",
    value: function changeWeight(newWeight) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.weight = newWeight;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeHair",
    value: function changeHair(newHair) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.hair = newHair;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeEyes",
    value: function changeEyes(newEyes) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.eyes = newEyes;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changePlayer",
    value: function changePlayer(newPlayer) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.player = newPlayer;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeDeity",
    value: function changeDeity(newDeity) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.deity = newDeity;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeHomeland",
    value: function changeHomeland(newHomeland) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.homeland = newHomeland;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeSize",
    value: function changeSize(newSize) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.size = newSize;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "changeGender",
    value: function changeGender(newGender) {
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      updateCharacter.gender = newGender;
      this.setState({ editCharacter: updateCharacter });
    }
  }, {
    key: "saveChanges",
    value: function saveChanges() {
      var that = this;
      var updateCharacter = Object.assign({}, this.state.editCharacter);
      for (var attribute in updateCharacter) {
        if (updateCharacter.hasOwnProperty(attribute)) {
          updateCharacter[attribute] = updateCharacter[attribute].toString().trim();
        }
      }
      var dispatch = this.props.dispatch;

      var callBackSetState = function callBackSetState() {
        return that.setState({
          editCharacter: _index2.default.getState().characterReducer.editCharacter
        });
      };
      var action = CharacterActionCreators.updateCharacter(updateCharacter, callBackSetState);
      dispatch(action);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        { className: cssStyles.editCharacterPanelParent },
        _react2.default.createElement(
          _reactBootstrap.Panel.Heading,
          { className: cssStyles.createCharacterPanelHeaderStyle },
          _react2.default.createElement(
            _reactBootstrap.Panel.Title,
            {
              className: cssStyles.createCharacterPanelHeaderStyleText
            },
            "Character"
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Form,
          { horizontal: true },
          _react2.default.createElement(_CharacterEditBasicInfoComponent2.default, {
            editCharacter: this.state.editCharacter,
            changeName: this.changeName,
            changeAlignment: this.changeAlignment,
            changeLevel: this.changeLevel,
            changeAge: this.changeAge,
            changeHeight: this.changeHeight,
            changeWeight: this.changeWeight,
            changeHair: this.changeHair,
            changeEyes: this.changeEyes,
            changePlayer: this.changePlayer,
            changeDeity: this.changeDeity,
            changeHomeland: this.changeHomeland,
            changeSize: this.changeSize,
            changeGender: this.changeGender
          }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 5 },
              _react2.default.createElement(_CharacterEditStatsComponent2.default, null)
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 5 },
              _react2.default.createElement(_CharacterEditSkillsComponent2.default, null)
            ),
            _react2.default.createElement(_reactBootstrap.Col, { sm: 1 })
          ),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: cssStyles.createColStyle },
            _react2.default.createElement(_reactBootstrap.Col, { sm: 8 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: "primary", onClick: this.handleShow },
                  "Save Changes"
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal,
              {
                show: this.state.show,
                onHide: this.handleClose,
                className: cssStyles.createCharacterClassModal
              },
              _react2.default.createElement(
                _reactBootstrap.Modal.Header,
                { closeButton: true },
                _react2.default.createElement(
                  _reactBootstrap.Modal.Title,
                  null,
                  "Confirm Character Change"
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Modal.Body,
                null,
                _react2.default.createElement(
                  "div",
                  null,
                  "Are you sure you want to make these changes?"
                )
              ),
              ".",
              _react2.default.createElement(
                _reactBootstrap.Modal.Footer,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.acceptChanges },
                  "Accept"
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.rejectChanges },
                  "Cancel"
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactBootstrap.Col, { sm: 7 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/characters" },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: "link" },
                    "Back to Character List (discard changes)"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CharacterEdit;
}(_react2.default.Component);

CharacterEdit.propTypes = {
  params: _propTypes2.default.object,
  updateCharacter: _propTypes2.default.func,
  fetchCharacter: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    editCharacter: state.editCharacter
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(CharacterEdit));

/***/ }),

/***/ "./src/js/components/CharacterEdit/CharacterEditBasicInfoComponent.jsx":
/*!*****************************************************************************!*\
  !*** ./src/js/components/CharacterEdit/CharacterEditBasicInfoComponent.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _index = __webpack_require__(/*! @material-ui/core/styles/index */ "./node_modules/@material-ui/core/styles/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    fontColor: "white"
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor: "white",
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 14,
    fontColor: "white",
    fontFamily: "'Cinzel Decorative', sans-serif"
    // textShadow: '1px 1px 0px #DFFE02',
  }
};

var CharacterEditBasicInfoComponent = function (_React$Component) {
  _inherits(CharacterEditBasicInfoComponent, _React$Component);

  function CharacterEditBasicInfoComponent(props) {
    _classCallCheck(this, CharacterEditBasicInfoComponent);

    var _this = _possibleConstructorReturn(this, (CharacterEditBasicInfoComponent.__proto__ || Object.getPrototypeOf(CharacterEditBasicInfoComponent)).call(this, props));

    _this.state = {
      editCharacter: {},
      show: false
    };
    _this.changeName = _this.changeName.bind(_this);
    _this.changeAlignment = _this.changeAlignment.bind(_this);
    _this.changeLevel = _this.changeLevel.bind(_this);
    _this.changeAge = _this.changeAge.bind(_this);
    _this.changeHeight = _this.changeHeight.bind(_this);
    _this.changeWeight = _this.changeWeight.bind(_this);
    _this.changeHair = _this.changeHair.bind(_this);
    _this.changeEyes = _this.changeEyes.bind(_this);
    _this.changePlayer = _this.changePlayer.bind(_this);
    _this.changeGender = _this.changeGender.bind(_this);
    _this.changeSize = _this.changeSize.bind(_this);
    _this.changeHomeland = _this.changeHomeland.bind(_this);
    _this.changeDeity = _this.changeDeity.bind(_this);
    return _this;
  }

  _createClass(CharacterEditBasicInfoComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ editCharater: this.props.editCharacter });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (this.props !== nextProps) {
        this.setState({ editCharacter: nextProps.editCharacter });
      }
    }
  }, {
    key: "changeName",
    value: function changeName() {
      this.props.changeName(this.characterName.value);
    }
  }, {
    key: "changeAlignment",
    value: function changeAlignment() {
      this.props.changeAlignment(this.alignment.value);
    }
  }, {
    key: "changeLevel",
    value: function changeLevel() {
      this.props.changeLevel(this.level.value);
    }
  }, {
    key: "changeAge",
    value: function changeAge() {
      this.props.changeAge(this.age.value);
    }
  }, {
    key: "changeHeight",
    value: function changeHeight() {
      this.props.changeHeight(this.height.value);
    }
  }, {
    key: "changeWeight",
    value: function changeWeight() {
      this.props.changeWeight(this.weight.value);
    }
  }, {
    key: "changeHair",
    value: function changeHair() {
      this.props.changeHair(this.hair.value);
    }
  }, {
    key: "changeEyes",
    value: function changeEyes() {
      this.props.changeEyes(this.eyes.value);
    }
  }, {
    key: "changePlayer",
    value: function changePlayer() {
      this.props.changePlayer(this.player.value);
    }
  }, {
    key: "changeDeity",
    value: function changeDeity() {
      this.props.changeDeity(this.deity.value);
    }
  }, {
    key: "changeHomeland",
    value: function changeHomeland() {
      this.props.changeHomeland(this.homeland.value);
    }
  }, {
    key: "changeSize",
    value: function changeSize() {
      this.props.changeSize(this.size.value);
    }
  }, {
    key: "changeGender",
    value: function changeGender() {
      this.props.changeGender(this.gender.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(_core.TextField, {
              onChange: this.changeName,
              id: "characterName",
              helperText: "Character Name",
              value: this.state.editCharacter.name ? this.state.editCharacter.name : "",
              inputRef: function inputRef(ref) {
                _this2.characterName = ref;
              },
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(_core.TextField, {
              id: "alignment",
              helperText: "Alignment",
              onChange: this.changeAlignment,
              inputRef: function inputRef(ref) {
                _this2.alignment = ref;
              },
              value: this.state.editCharacter.alignment ? this.state.editCharacter.alignment : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(_core.TextField, {
              id: "player",
              helperText: "Player",
              onChange: this.changePlayer,
              inputRef: function inputRef(ref) {
                _this2.player = ref;
              },
              value: this.state.editCharacter.player ? this.state.editCharacter.player : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "level",
              helperText: "Level",
              onChange: this.changeLevel,
              inputRef: function inputRef(ref) {
                _this2.level = ref;
              },
              value: this.state.editCharacter.level ? this.state.editCharacter.level : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "deity",
              helperText: "Deity",
              onChange: this.changeDeity,
              inputRef: function inputRef(ref) {
                _this2.deity = ref;
              },
              value: this.state.editCharacter.deity ? this.state.editCharacter.deity : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "150px" }
            })
          ),
          " ",
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(_core.TextField, {
              id: "homeland",
              helperText: "Homeland",
              onChange: this.changeHomeland,
              inputRef: function inputRef(ref) {
                _this2.homeland = ref;
              },
              value: this.state.editCharacter.homeland ? this.state.editCharacter.homeland : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { marginLeft: "50px", width: "90%" }
            })
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { style: { marginTop: "35px" } },
          _react2.default.createElement(_reactBootstrap.Col, { sm: 2 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "race",
              helperText: "Race",
              value: this.state.editCharacter.race ? this.state.editCharacter.race : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "95%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "size",
              helperText: "size",
              onChange: this.changeSize,
              inputRef: function inputRef(ref) {
                _this2.size = ref;
              },
              value: this.state.editCharacter.size ? this.state.editCharacter.size : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "95%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "gender",
              helperText: "Gender",
              onChange: this.changeGender,
              inputRef: function inputRef(ref) {
                _this2.gender = ref;
              },
              value: this.state.editCharacter.gender ? this.state.editCharacter.gender : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "age",
              helperText: "Age",
              onChange: this.changeAge,
              inputRef: function inputRef(ref) {
                _this2.age = ref;
              },
              value: this.state.editCharacter.age ? this.state.editCharacter.age : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "height",
              helperText: "Height",
              onChange: this.changeHeight,
              inputRef: function inputRef(ref) {
                _this2.height = ref;
              },
              value: this.state.editCharacter.height ? this.state.editCharacter.height : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          " ",
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "weight",
              helperText: "Weight",
              inputRef: function inputRef(ref) {
                _this2.weight = ref;
              },
              onChange: this.changeWeight,
              value: this.state.editCharacter.weight ? this.state.editCharacter.weight : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "hair",
              helperText: "Hair",
              onChange: this.changeHair,
              inputRef: function inputRef(ref) {
                _this2.hair = ref;
              },
              value: this.state.editCharacter.hair ? this.state.editCharacter.hair : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          " ",
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(_core.TextField, {
              id: "eyes",
              helperText: "Eyes",
              inputRef: function inputRef(ref) {
                _this2.eyes = ref;
              },
              onChange: this.changeEyes,
              value: this.state.editCharacter.eyes ? this.state.editCharacter.eyes : "",
              className: classes.root,
              InputProps: {
                className: classes.input
              },
              FormHelperTextProps: {
                className: classes.helperText
              },
              style: { width: "75%" }
            })
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 })
        )
      );
    }
  }]);

  return CharacterEditBasicInfoComponent;
}(_react2.default.Component);

exports.default = (0, _index.withStyles)(styles)(CharacterEditBasicInfoComponent);

/***/ }),

/***/ "./src/js/components/CharacterEdit/CharacterEditSkillsComponent.jsx":
/*!**************************************************************************!*\
  !*** ./src/js/components/CharacterEdit/CharacterEditSkillsComponent.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _index = __webpack_require__(/*! @material-ui/core/styles/index */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    fontColor: "white"
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor: "white",
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 14,
    fontColor: "white",
    fontFamily: "'Cinzel Decorative', sans-serif"
    // textShadow: '1px 1px 0px #DFFE02',
  }
};

var CharacterEditSkillsComponent = function (_React$Component) {
  _inherits(CharacterEditSkillsComponent, _React$Component);

  function CharacterEditSkillsComponent() {
    _classCallCheck(this, CharacterEditSkillsComponent);

    return _possibleConstructorReturn(this, (CharacterEditSkillsComponent.__proto__ || Object.getPrototypeOf(CharacterEditSkillsComponent)).call(this));
  }

  _createClass(CharacterEditSkillsComponent, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        { style: { textAlign: 'center' } },
        "Skills segment under construction"
      );
    }
  }]);

  return CharacterEditSkillsComponent;
}(_react2.default.Component);

exports.default = (0, _index.withStyles)(styles)(CharacterEditSkillsComponent);

/***/ }),

/***/ "./src/js/components/CharacterEdit/CharacterEditStatsComponent.jsx":
/*!*************************************************************************!*\
  !*** ./src/js/components/CharacterEdit/CharacterEditStatsComponent.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _index = __webpack_require__(/*! @material-ui/core/styles/index */ "./node_modules/@material-ui/core/styles/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    fontColor: "white"
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor: "white",
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 14,
    fontColor: "white",
    fontFamily: "'Cinzel Decorative', sans-serif"
    // textShadow: '1px 1px 0px #DFFE02',
  }
};

var CharacterEditStatsComponent = function (_React$Component) {
  _inherits(CharacterEditStatsComponent, _React$Component);

  function CharacterEditStatsComponent() {
    _classCallCheck(this, CharacterEditStatsComponent);

    return _possibleConstructorReturn(this, (CharacterEditStatsComponent.__proto__ || Object.getPrototypeOf(CharacterEditStatsComponent)).call(this));
  }

  _createClass(CharacterEditStatsComponent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 7 },
          _react2.default.createElement(StatsHeaderFormGroup, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 5 },
          _react2.default.createElement(
            "div",
            { style: { textAlign: "center" } },
            "Hp placeholder"
          )
        )
      );
    }
  }]);

  return CharacterEditStatsComponent;
}(_react2.default.Component);

var StatsHeaderFormGroup = function StatsHeaderFormGroup() {
  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    null,
    _react2.default.createElement(
      _reactBootstrap.Col,
      {
        sm: 2,
        style: {
          background: "transparent",
          fontSize: "15px",
          fontFamily: '"Crimson Text", serif'
        }
      },
      "Ability Name"
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      {
        sm: 2,
        style: {
          background: "transparent",
          fontSize: "15px",
          fontFamily: '"Crimson Text", serif'
        }
      },
      "Ability",
      _react2.default.createElement("br", null),
      "Score"
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      {
        sm: 2,
        style: {
          background: "transparent",
          fontSize: "15px",
          fontFamily: '"Crimson Text", serif'
        }
      },
      "Ability Modifier"
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      {
        sm: 2,
        style: {
          background: "transparent",
          fontSize: "15px",
          fontFamily: '"Crimson Text", serif',
          marginRight: "15px"
        }
      },
      "Temp",
      _react2.default.createElement("br", null),
      "Adjustment"
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      {
        sm: 2,
        style: {
          background: "transparent",
          fontSize: "15px",
          fontFamily: '"Crimson Text", serif'
        }
      },
      "Temp ",
      _react2.default.createElement("br", null),
      "Modifier"
    )
  );
};
exports.default = (0, _index.withStyles)(styles)(CharacterEditStatsComponent);

/***/ }),

/***/ "./src/js/components/CharacterList/CharacterFilter.jsx":
/*!*************************************************************!*\
  !*** ./src/js/components/CharacterList/CharacterFilter.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _index = __webpack_require__(/*! ../../store/index.js */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterFilter = function (_React$Component) {
  _inherits(CharacterFilter, _React$Component);

  function CharacterFilter(props, context) {
    _classCallCheck(this, CharacterFilter);

    var _this = _possibleConstructorReturn(this, (CharacterFilter.__proto__ || Object.getPrototypeOf(CharacterFilter)).call(this, props));

    CharacterFilter.createInitFilter = CharacterFilter.createInitFilter.bind(_this);
    var newInitFilter = CharacterFilter.createInitFilter(_this.props.initFilter);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.onChangeRace = _this.onChangeRace.bind(_this);
    _this.onChangeClass = _this.onChangeClass.bind(_this);
    _this.onChangeLevelLte = _this.onChangeLevelLte.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);

    _this.state = {
      class: newInitFilter.class,
      race: newInitFilter.race,
      level_gte: newInitFilter.level_gte,
      level_lte: newInitFilter.level_lte,
      changed: false,
      open: true
    };
    return _this;
  }

  _createClass(CharacterFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      // newProps.initFilter = CharacterFilter.createInitFilter(newProps.initFilter);
      this.setState({
        class: newProps.initFilter.class,
        race: newProps.initFilter.race,
        level_gte: newProps.initFilter.level_gte,
        level_lte: newProps.initFilter.level_lte,
        changed: false
      });
    }
  }, {
    key: "onChangeRace",
    value: function onChangeRace(e) {
      this.setState({ race: e.target.value, changed: true });
    }
  }, {
    key: "onChangeClass",
    value: function onChangeClass(e) {
      this.setState({ class: e.target.value, changed: true });
    }
  }, {
    key: "onChangeLevelLte",
    value: function onChangeLevelLte(e) {
      var levelString = e.target.value;
      if (levelString.match(/^\d*$/)) {
        this.setState({ level_lte: e.target.value, changed: true });
      }
    }
  }, {
    key: "onChangeLevelGte",
    value: function onChangeLevelGte(e) {
      var levelString = e.target.value;
      if (levelString.match(/^\d*$/)) {
        this.setState({ level_gte: e.target.value, changed: true });
      }
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var filters = ['class', 'race', 'level_gte', 'level_lte'];
      for (var index in filters) {
        if (this.props.initFilter[filters[index]] === undefined) {
          this.props.initFilter[filters[index]] = '';
        }
      }
      this.setState({
        class: this.props.initFilter.class,
        race: this.props.initFilter.race,
        level_gte: this.props.initFilter.level_gte,
        level_lte: this.props.initFilter.level_lte,
        changed: false
      });
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      this.props.setFilter({});
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.race) newFilter.race = this.state.race;
      if (this.state.class) newFilter.class = this.state.class;
      if (this.state.level_gte) newFilter.level_gte = this.state.level_gte;
      if (this.state.level_lte) newFilter.level_lte = this.state.level_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        { className: cssStyles.panelHeaderParent, defaultExpanded: true },
        _react2.default.createElement(
          _reactBootstrap.Panel.Heading,
          { className: cssStyles.panelHeader },
          _react2.default.createElement(
            _reactBootstrap.Panel.Title,
            { className: cssStyles.panelHeaderText, toggle: true },
            "Filter Characters"
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel.Collapse,
          null,
          _react2.default.createElement(
            _reactBootstrap.Panel.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4, md: 3, lg: 3 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    "Class"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    {
                      componentClass: "select",
                      value: this.state.class,
                      onChange: this.onChangeClass
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "" },
                      "Any"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Monk" },
                      "Monk"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Ranger" },
                      "Ranger"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Wizard" },
                      "Wizard"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Druid" },
                      "Druid"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Fighter" },
                      "Fighter"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Paladin" },
                      "Paladin"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Sorcerer" },
                      "Sorcerer"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Rogue" },
                      "Rogue"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Cleric" },
                      "Cleric"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Warlock" },
                      "Warlock"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Bard" },
                      "Bard"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Barbarian" },
                      "Barbarian"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4, md: 3, lg: 3 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    "Race"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    {
                      componentClass: "select",
                      value: this.state.race,
                      onChange: this.onChangeRace
                    },
                    _react2.default.createElement(
                      "option",
                      { value: '' },
                      "Any"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Human" },
                      "Human"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Dwarf" },
                      "Dwarf"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Elf" },
                      "Elf"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Gnome" },
                      "Gnome"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Half-Elf" },
                      "Half-Elf"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Half-Orc" },
                      "Half-Orc"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "Halfling" },
                      "Halfling"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4, md: 3, lg: 3 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    "Level"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.InputGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      value: this.state.level_gte,
                      onChange: this.onChangeLevelGte.bind(this)
                    }),
                    _react2.default.createElement(
                      _reactBootstrap.InputGroup.Addon,
                      null,
                      "-"
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      value: this.state.level_lte,
                      onChange: this.onChangeLevelLte.bind(this)
                    })
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    "\xA0"
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        bsStyle: "primary",
                        onClick: this.applyFilter.bind(this)
                      },
                      "Apply"
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        onClick: this.resetFilter,
                        disabled: !this.state.changed
                      },
                      "Reset"
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { onClick: this.clearFilter.bind(this) },
                      "Clear"
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }], [{
    key: "createInitFilter",
    value: function createInitFilter(oldInitFilter) {
      var queryString = oldInitFilter.split("&");
      var newInitFilter = {};
      var queryLength = queryString.length;
      if (queryLength > 1) {
        for (var i = 1; i < queryLength; i += 1) {
          var currentFilter = queryString[i].split("=");
          var key = currentFilter[0];
          newInitFilter[key] = currentFilter[1];
        }
      }
      return newInitFilter;
    }
  }]);

  return CharacterFilter;
}(_react2.default.Component);

CharacterFilter.propTypes = {
  setFilter: _propTypes2.default.func.isRequired,
  initFilter: _propTypes2.default.string
};

exports.default = (0, _reactRouterDom.withRouter)(CharacterFilter);

/***/ }),

/***/ "./src/js/components/CharacterList/CharacterList.jsx":
/*!***********************************************************!*\
  !*** ./src/js/components/CharacterList/CharacterList.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CharacterFilter = __webpack_require__(/*! ./CharacterFilter.jsx */ "./src/js/components/CharacterList/CharacterFilter.jsx");

var _CharacterFilter2 = _interopRequireDefault(_CharacterFilter);

var _index = __webpack_require__(/*! ../../store/index.js */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _CharacterActionCreators = __webpack_require__(/*! ../../actions/CharacterActionCreators.js */ "./src/js/actions/CharacterActionCreators.js");

var CharacterActionCreators = _interopRequireWildcard(_CharacterActionCreators);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _CharacterTable = __webpack_require__(/*! ./CharacterTable */ "./src/js/components/CharacterList/CharacterTable.jsx");

var _CharacterTable2 = _interopRequireDefault(_CharacterTable);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _CharacterReducers = __webpack_require__(/*! ../../reducers/CharacterReducers */ "./src/js/reducers/CharacterReducers.js");

var _CharacterReducers2 = _interopRequireDefault(_CharacterReducers);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterList = function (_React$Component) {
  _inherits(CharacterList, _React$Component);

  function CharacterList(props) {
    _classCallCheck(this, CharacterList);

    var _this = _possibleConstructorReturn(this, (CharacterList.__proto__ || Object.getPrototypeOf(CharacterList)).call(this));

    _this.setFilter = _this.setFilter.bind(_this);
    _this.deleteCharacter = _this.deleteCharacter.bind(_this);
    var dispatch = props.dispatch;

    _this.boundActionCreators = (0, _redux.bindActionCreators)(CharacterActionCreators, dispatch);
    _this.state = {
      characters: []
    };
    return _this;
  }

  _createClass(CharacterList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      this.loadData(dispatch);
    }
  }, {
    key: "setFilter",
    value: function setFilter(query) {
      var filter = "";
      for (var key in query) {
        filter += "&" + key + "=" + query[key];
      }
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: filter
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps;
      var newQuery = this.props;
      if (oldQuery.location.search === newQuery.location.search) {} else if (oldQuery.location.query && newQuery.location.query) {} else {
        var dispatch = this.props.dispatch;

        this.loadData(dispatch);
      }
    }
  }, {
    key: "loadData",
    value: function loadData(dispatch) {
      var filter = "";

      if (this.props.location.query !== undefined) {
        var currentUser = _index2.default.getState().userReducer.currentUserName;
        filter += '?user=' + currentUser;
        for (var key in this.props.location.query) {
          filter += "&" + key + "=" + this.props.location.query[key];
        }
      } else {
        var _currentUser = _index2.default.getState().userReducer.currentUserName;
        filter += '?user=' + _currentUser;
        filter += this.props.location.search.substring(1);
      }
      var action = CharacterActionCreators.fetchCharacters(filter);
      dispatch(action);
    }
  }, {
    key: "deleteCharacter",
    value: function deleteCharacter(id) {
      var dispatch = this.props.dispatch;

      var action = CharacterActionCreators.deleteCharacter(id);
      dispatch(action);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_CharacterFilter2.default, {
          setFilter: this.setFilter,
          initFilter: this.props.location.search
        }),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(_CharacterTable2.default, {
          characters: _index2.default.getState().characterReducer.characters,
          isFetching: _index2.default.getState().characterReducer.isFetching,
          deleteCharacter: this.deleteCharacter
        }),
        _react2.default.createElement("hr", { className: cssStyles.hrCharacterList })
      );
    }
  }]);

  return CharacterList;
}(_react2.default.Component);

var object = _propTypes2.default.object;

CharacterList.prototypes = {
  location: object.isRequired,
  fetchCharacters: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    characters: state.characterReducer.characters
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(CharacterList));

/***/ }),

/***/ "./src/js/components/CharacterList/CharacterRow.jsx":
/*!**********************************************************!*\
  !*** ./src/js/components/CharacterList/CharacterRow.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterRow = function (_React$Component) {
  _inherits(CharacterRow, _React$Component);

  function CharacterRow() {
    _classCallCheck(this, CharacterRow);

    var _this = _possibleConstructorReturn(this, (CharacterRow.__proto__ || Object.getPrototypeOf(CharacterRow)).call(this));

    _this.deleteCharacter = _this.deleteCharacter.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.rejectChanges = _this.rejectChanges.bind(_this);
    _this.acceptChanges = _this.acceptChanges.bind(_this);
    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(CharacterRow, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "acceptChanges",
    value: function acceptChanges() {
      this.setState({ show: false });
      this.deleteCharacter();
    }
  }, {
    key: "rejectChanges",
    value: function rejectChanges() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "deleteCharacter",
    value: function deleteCharacter() {
      this.props.deleteCharacter(this.props.character._id);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          this.props.character.type
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: "/characters/" + this.props.character._id,
              params: { character: this.props.character.name }
            },
            this.props.character.name
          )
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.class
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.level
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.XP
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.race
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.STR
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.DEX
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.CON
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.INT
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.WIS
        ),
        _react2.default.createElement(
          "td",
          null,
          this.props.character.CHA
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { type: "button", bsClass: cssStyles.deleteButton, onClick: this.handleShow },
            _react2.default.createElement("i", { className: "fas fa-times-circle fa-lg" })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          {
            show: this.state.show,
            onHide: this.handleClose,
            className: cssStyles.createCharacterClassModal
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              "Confirm Character Delete"
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              "div",
              null,
              "Are you sure you want to delete this character?"
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.acceptChanges },
              "Accept"
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.rejectChanges },
              "Cancel"
            )
          )
        )
      );
    }
  }]);

  return CharacterRow;
}(_react2.default.Component);

CharacterRow.propTypes = {
  character: _propTypes2.default.object.isRequired,
  deleteCharacter: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(CharacterRow);

/***/ }),

/***/ "./src/js/components/CharacterList/CharacterTable.jsx":
/*!************************************************************!*\
  !*** ./src/js/components/CharacterList/CharacterTable.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CharacterRow = __webpack_require__(/*! ./CharacterRow.jsx */ "./src/js/components/CharacterList/CharacterRow.jsx");

var _CharacterRow2 = _interopRequireDefault(_CharacterRow);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterTable = function CharacterTable(props) {
  var characterRows = void 0;
  if (props.isFetching) {
    characterRows = _react2.default.createElement(_CharacterRow2.default, {
      key: {},
      character: { name: "Loading" },
      deleteCharacter: props.deleteCharacter
    });
  } else {
    if (props.characters) {
      characterRows = props.characters.map(function (character) {
        return _react2.default.createElement(_CharacterRow2.default, { key: character._id, character: character, deleteCharacter: props.deleteCharacter });
      });
    }
  }

  return _react2.default.createElement(
    _reactBootstrap.Table,
    { bordered: true, condensed: true, hover: true, responsive: true, className: cssStyles.characterTableParent },
    _react2.default.createElement(
      "thead",
      { className: cssStyles.characterTableHeader },
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "Type"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "Name"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "Class"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "Level"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "XP"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "Race"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "STR"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "DEX"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "CON"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "INT"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "WIS"
        ),
        _react2.default.createElement(
          "th",
          { className: cssStyles.HTRtextAt },
          "CHA"
        )
      )
    ),
    _react2.default.createElement(
      "tbody",
      { className: cssStyles.characterTableRow },
      characterRows
    )
  );
};

CharacterTable.propTypes = {
  characters: _propTypes2.default.array
};

exports.default = (0, _reactRouterDom.withRouter)(CharacterTable);

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterAlignmentComponent.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterAlignmentComponent.jsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterAlignmentComponent = function (_React$Component) {
  _inherits(CreateCharacterAlignmentComponent, _React$Component);

  function CreateCharacterAlignmentComponent(props, context) {
    _classCallCheck(this, CreateCharacterAlignmentComponent);

    var _this = _possibleConstructorReturn(this, (CreateCharacterAlignmentComponent.__proto__ || Object.getPrototypeOf(CreateCharacterAlignmentComponent)).call(this));

    _this.state = {
      alignment: "",
      alignmentInfo: "",
      showAlignment: false,
      prevButtonPressed: "",
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      clericAlignmentPrompt: "",
      defaultValue: [],
      renderKey: 0
    };
    return _this;
  }

  _createClass(CreateCharacterAlignmentComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ renderKey: this.props.renderKey });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.renderKey != this.state.renderKey) {
        this.setState({ renderKey: props.renderKey, alignmentInfo: "" });
      }
      if (props.allowedAlignments.length < 1) {
        this.setState({
          clericAlignmentPrompt: "The alignment you choose as a Cleric will determine which deities are available to choose.",
          allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
          alignment: ""
        });
      } else {
        this.setState({
          clericAlignmentPrompt: "",
          allowedAlignments: props.allowedAlignments,
          alignment: ""
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var alignmentDivStyle = {
        fontSize: "17px !important",
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: "left"

      };
      // const AlignmentTextToggle = () => {
      //
      //   if (this.state.showAlignment) {
      //     return <div style={alignmentDivStyle}> {this.state.alignmentInfo}</div>;
      //   } else {
      //     return <div />;
      //   }
      // };
      var changeAlignment = function changeAlignment(e) {
        var targetText = e.target.textContent.toString();
        if (!_this2.state.showAlignment) {
          _this2.setState({ showAlignment: true });
        }
        if (targetText === _this2.state.prevButtonPressed) {
          if (_this2.state.showAlignment) {
            _this2.setState({ showAlignment: !_this2.state.showAlignment });
          } else {}
        } else {
          _this2.setState({ showAlignment: true });
        }
        var currentAlignment = e.target.textContent.toString();
        _this2.setState({ alignment: currentAlignment });
        _this2.changeAlignmentInfo(currentAlignment);
        _this2.setState({ prevButtonPressed: targetText });
        _this2.props.updateAlignment(currentAlignment);
      };
      return _react2.default.createElement(
        "div",
        { key: this.state.renderKey },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: "alignmentValue" },
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            {
              componentClass: _reactBootstrap.ControlLabel,
              sm: 2,
              className: cssStyles.createColLabelStyle
            },
            _react2.default.createElement(
              "div",
              { style: { fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" } },
              "Alignment:"
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 8 },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.ToggleButtonGroup,
                {
                  type: "radio",
                  name: "alignmentValue",
                  ref: "alignmentValue",
                  className: cssStyles.alignmentButtonGroupParent
                },
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Lawful Good",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("LG") > -1),
                    checked: this.state.alignment.toString() === "Lawful Good",
                    onClick: !(this.state.allowedAlignments.indexOf("LG") > -1) ? null : changeAlignment
                  },
                  "Lawful Good"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Neutral Good",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("NG") > -1),
                    onClick: !(this.state.allowedAlignments.indexOf("NG") > -1) ? null : changeAlignment
                  },
                  "Neutral Good"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Chaotic Good",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("CG") > -1),
                    checked: this.state.alignment.toString() === "Chaotic Good",
                    onClick: !(this.state.allowedAlignments.indexOf("CG") > -1) ? null : changeAlignment
                  },
                  "Chaotic Good"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Lawful Neutral",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("LN") > -1),
                    checked: this.state.alignment.toString() === "Lawful Neutral",
                    onClick: !(this.state.allowedAlignments.indexOf("LN") > -1) ? null : changeAlignment
                  },
                  "Lawful Neutral"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Neutral",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("N") > -1),
                    checked: this.state.alignment.toString() === "Neutral",
                    onClick: !(this.state.allowedAlignments.indexOf("N") > -1) ? null : changeAlignment
                  },
                  "Neutral"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Chaotic Neutral",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("CN") > -1),
                    onClick: !(this.state.allowedAlignments.indexOf("CN") > -1) ? null : changeAlignment
                  },
                  "Chaotic Neutral"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Lawful Evil",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("LE") > -1),
                    onClick: !(this.state.allowedAlignments.indexOf("LE") > -1) ? null : changeAlignment
                  },
                  "Lawful Evil"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Neutral Evil",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("NE") > -1),
                    checked: this.state.alignment.toString() === "Neutral Evil",
                    onClick: !(this.state.allowedAlignments.indexOf("NE") > -1) ? null : changeAlignment
                  },
                  "Neutral Evil"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Chaotic Evil",
                    className: cssStyles.alignmentButtonGroup,
                    disabled: !(this.state.allowedAlignments.indexOf("CE") > -1),
                    checked: this.state.alignment.toString() === "Chaotic Evil",
                    onClick: !(this.state.allowedAlignments.indexOf("CE") > -1) ? null : changeAlignment
                  },
                  "Chaotic Evil"
                )
              )
            )
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 2 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 8 },
            _react2.default.createElement(
              "div",
              { className: cssStyles.alignmentInfoDiv },
              _react2.default.createElement(
                "strong",
                null,
                this.state.clericAlignmentPrompt
              ),
              this.state.allowedAlignments.length < 9 ? _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Alignments restricted due to class"
                )
              ) : _react2.default.createElement("div", null)
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 8 },
            _react2.default.createElement(
              _reactBootstrap.Collapse,
              { "in": this.state.showAlignment, style: alignmentDivStyle },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  _reactBootstrap.Well,
                  { style: { backgroundColor: 'transparent' } },
                  this.state.alignmentInfo
                )
              )
            )
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 2 })
        )
      );
    }
  }, {
    key: "changeAlignmentInfo",
    value: function changeAlignmentInfo(e) {
      switch (e) {
        case "Lawful Good":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Lawful Good:"
              ),
              _react2.default.createElement("br", null),
              " A lawful good character acts as a good person is expected or required to act. She combines a commitment to oppose evil with the discipline to fight relentlessly. She tells the truth, keeps her word, helps those in need, and speaks out against injustice.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "A lawful good character hates to see the guilty go unpunished. Lawful good combines honor with compassion."
            )
          });
          break;
        case "Neutral Good":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Neutral Good:"
              ),
              _react2.default.createElement("br", null),
              "A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Neutral good means doing what is good and right without bias for or against order."
            )
          });
          break;
        case "Chaotic Good":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Chaotic Good:"
              ),
              _react2.default.createElement("br", null),
              "A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Chaotic good combines a good heart with a free spirit."
            )
          });
          break;
        case "Lawful Neutral":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Chaotic Good:"
              ),
              _react2.default.createElement("br", null),
              "A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount. She may believe in personal order and live by a code or standard, or she may believe in order for all and favor a strong, organized government.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Lawful neutral means you are reliable and honorable without being a zealot."
            )
          });
          break;
        case "Neutral":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Neutral:"
              ),
              _react2.default.createElement("br", null),
              "A neutral character does what seems to be a good idea. She doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos (and thus neutral is sometimes called \"true neutral\"). Most neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Neutral means you act naturally in any situation, without prejudice or compulsion."
            )
          });
          break;
        case "Chaotic Neutral":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Chaotic Neutral:"
              ),
              _react2.default.createElement("br", null),
              "A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. ",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Chaotic neutral represents freedom from both society's restrictions and a do-gooder's zeal.",
              " "
            )
          });
          break;
        case "Lawful Evil":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Lawful Evil:"
              ),
              _react2.default.createElement("br", null),
              "A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order, but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. ",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Lawful evil represents methodical, intentional, and organized evil."
            )
          });
          break;
        case "Neutral Evil":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Neutral Evil:"
              ),
              _react2.default.createElement("br", null),
              "A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple. She sheds no tears for those she kills, whether for profit, sport, or convenience. Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. ",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Neutral evil represents pure evil without honor and without variation."
            )
          });
          break;
        case "Chaotic Evil":
          this.setState({
            alignmentInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Chaotic Evil:"
              ),
              _react2.default.createElement("br", null),
              "A chaotic evil character does what his greed, hatred, and lust for destruction drive him to do. He is vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal.",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              "Chaotic evil represents the destruction not only of beauty and life, but also of the order on which beauty and life depend."
            )
          });
          break;
      }
    }
  }]);

  return CreateCharacterAlignmentComponent;
}(_react2.default.Component);

exports.default = CreateCharacterAlignmentComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterClassComponent.jsx":
/*!***************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterClassComponent.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _CreateCharacterClassModalContent = __webpack_require__(/*! ./CreateCharacterClassModalContent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterClassModalContent.jsx");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterClassComponent = function (_React$Component) {
  _inherits(CreateCharacterClassComponent, _React$Component);

  function CreateCharacterClassComponent(props) {
    _classCallCheck(this, CreateCharacterClassComponent);

    var _this = _possibleConstructorReturn(this, (CreateCharacterClassComponent.__proto__ || Object.getPrototypeOf(CreateCharacterClassComponent)).call(this));

    _this.setClass = _this.setClass.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.state = {
      show: false,
      selectedClass: "",
      allowedAlignments: ['LG', 'NG', 'CG', 'LN', 'N', 'CN', 'LE', 'NE', 'CE']
    };
    return _this;
  }

  _createClass(CreateCharacterClassComponent, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "setClass",
    value: function setClass(e) {
      var targetText = e.target.textContent.toString();
      this.props.updateClass(targetText);
      this.handleShow();
      this.setState({ selectedClass: targetText });
    }
  }, {
    key: "render",
    value: function render() {
      var popover = _react2.default.createElement(
        _reactBootstrap.Popover,
        { id: "modal-popover", title: "popover" },
        "Placeholder text for popover"
      );
      var tooltip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: "modal-tooltip" },
        "Tooltip text "
      );
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            componentClass: _reactBootstrap.ControlLabel,
            sm: 2,
            className: cssStyles.createColLabelStyle
          },
          _react2.default.createElement(
            "div",
            { style: { fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" } },
            "Class:"
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 7 },
          _react2.default.createElement(
            _reactBootstrap.ButtonToolbar,
            null,
            _react2.default.createElement(
              _reactBootstrap.ToggleButtonGroup,
              {
                type: "radio",
                name: "raceValue",
                onClick: this.setClass,
                className: cssStyles.alignmentButtonGroupParent

              },
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Barbarian",
                  className: cssStyles.alignmentButtonGroup

                },
                "Barbarian"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Monk",
                  className: cssStyles.alignmentButtonGroup
                },
                "Monk"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Wizard",
                  className: cssStyles.alignmentButtonGroup
                },
                "Wizard"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Ranger",
                  className: cssStyles.alignmentButtonGroup
                },
                "Ranger"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Druid",
                  className: cssStyles.alignmentButtonGroup
                },
                "Druid"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Paladin",
                  className: cssStyles.alignmentButtonGroup
                },
                "Paladin"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Sorcerer",
                  className: cssStyles.alignmentButtonGroup
                },
                "Sorcerer"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Rogue",
                  className: cssStyles.alignmentButtonGroup
                },
                "Rogue"
              ),
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Fighter",
                  className: cssStyles.alignmentButtonGroup
                },
                "Fighter"
              ),
              " ",
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Cleric",
                  className: cssStyles.alignmentButtonGroup
                },
                "Cleric"
              ),
              " ",
              _react2.default.createElement(
                _reactBootstrap.ToggleButton,
                {
                  value: "Bard",
                  className: cssStyles.alignmentButtonGroup
                },
                "Bard"
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.show, onHide: this.handleClose, className: cssStyles.createHeroClassModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              this.state.selectedClass
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(_CreateCharacterClassModalContent.SelectedClassModalBody, { selectedClass: this.state.selectedClass })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleClose },
              "Close"
            )
          )
        )
      );
    }
  }]);

  return CreateCharacterClassComponent;
}(_react2.default.Component);

exports.default = CreateCharacterClassComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterClassModalContent.jsx":
/*!******************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterClassModalContent.jsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectedClassModalBody = undefined;

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SelectedClassModalBody = exports.SelectedClassModalBody = function SelectedClassModalBody(props) {
	var classModalBodyStyle = {
		fontSize: "17px !important",
		fontFamily: "'Josefin Sans', sans-serif",
		textAlign: "left"
	};
	switch (props.selectedClass) {
		case "Monk":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"For the truly exemplary, martial skill transcends the battlefield\u2014it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Monks excel at overcoming even the most daunting perils, striking where it's least expected, and taking advantage of enemy vulnerabilities. Fleet of foot and skilled in combat, monks can navigate any battlefield with ease, aiding allies wherever they are needed most.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The monk's class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Escape Artist (Dex), Intimidate (Cha), Knowledge (history) (Int), Knowledge (religion) (Int), Perception (Wis), Perform (Cha), Profession (Wis), Ride (Dex), Sense Motive (Wis), Stealth (Dex), and Swim (Str)",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"4 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d8",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any lawful",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.",
				_react2.default.createElement("br", null),
				"Monks are not proficient with any armor or shields.",
				_react2.default.createElement("br", null),
				"When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"AC Bonus (Ex)"
				),
				"When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Flurry of Blows (Ex)"
				),
				"Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Unarmed Strike"
				),
				"At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"sually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage; see Small or Large Monk Unarmed Damage on the table given below.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Feat"
				),
				"Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under \"Spells per Day.\" These spells are cast like any other spell, but they are not expended when cast and may be used again. A wizard can prepare a cantrip from a prohibited school, but it uses up two of his available slots.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Scribe Scroll"
				),
				"At 1st level, a wizard gains Scribe Scroll as a bonus feat.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Feats"
				),
				"At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Ex-Monks"
				),
				"A monk who becomes nonlawful cannot gain new levels as a monk but retains all monk abilities."
			);
		case "Wizard":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible\u2014such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"While universalist wizards might study to prepare themselves for any manner of danger, specialist wizards research schools of magic that make them exceptionally skilled within a specific focus. Yet no matter their specialty, all wizards are masters of the impossible and can aid their allies in overcoming any danger.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The wizard's class skills are Appraise (Int), Craft (Int), Fly (Dex), Knowledge (all) (Int), Linguistics (Int), Profession (Wis), and Spellcraft (Int).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"2 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d6",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Special Abilities"
				),
				"Arcane bond, arcane school, cantrips, Scribe Scroll",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Wizards are proficient with the club, dagger, heavy crossbow, light crossbow, and quarterstaff, but not with any type of armor or shield. Armor interferes with a wizard's movements, which can cause his spells with somatic components to fail",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"A wizard casts arcane spells drawn from the sorcerer/wizard spell list presented in Spell Lists. A wizard must choose and prepare his spells ahead of time.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To learn, prepare, or cast a spell, the wizard must have an Intelligence score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a wizard's spell is 10 + the spell level + the wizard's Intelligence modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A wizard can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Wizard. In addition, he receives bonus spells per day if he has a high Intelligence score.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A wizard may know any number of spells. He must choose and prepare his spells ahead of time by getting 8 hours of sleep and spending 1 hour studying his spellbook. While studying, the wizard decides which spells to prepare.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Arcane Bond (Ex or Sp)"
				),
				"At 1st level, wizards form a powerful bond with an object or a creature. This bond can take one of two forms: a familiar or a bonded object. A familiar is a magical pet that enhances the wizard's skills and senses and can aid him in magic, while a bonded object is an item a wizard can use to cast additional spells or to serve as a magical item. Once a wizard makes this choice, it is permanent and cannot be changed. Rules for bonded items are given below, while rules for familiars are at the end of this section.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Wizards who select a bonded object begin play with one at no cost. Objects that are the subject of an arcane bond must fall into one of the following categories: amulet, ring, staff, wand, or weapon. These objects are always masterwork quality. Weapons acquired at 1st level are not made of any special material. If the object is an amulet or ring, it must be worn to have effect, while staves, wands, and weapons must be held in one hand. If a wizard attempts to cast a spell without his bonded object worn or in hand, he must make a concentration check or lose the spell. The DC for this check is equal to 20 + the spell's level. If the object is a ring or amulet, it occupies the ring or neck slot accordingly.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A bonded object can be used once per day to cast any one spell that the wizard has in his spellbook and is capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by the wizard, including casting time, duration, and other effects dependent on the wizard's level. This spell cannot be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from the wizard's opposition schools.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A wizard can add additional magic abilities to his bonded object as if he has the required item creation feats and if he meets the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see the Craft Magic Arms and Armor feat in Feats). If the bonded object is a wand, it loses its wand abilities when its last charge is consumed, but it is not destroyed and it retains all of its bonded object properties and can be used to craft a new wand. The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a bonded object is damaged, it is restored to full hit points the next time the wizard prepares his spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. A wizard can designate an existing magic item as his bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Arcane School"
				),
				"A wizard can choose to specialize in one school of magic, gaining additional spells and powers based on that school. This choice must be made at 1st level, and once made, it cannot be changed. A wizard that does not select a school receives the universalist school instead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A wizard that chooses to specialize in one school of magic must select two other schools as his opposition schools, representing knowledge sacrificed in one area of arcane lore to gain mastery in another. A wizard who prepares spells from his opposition schools must use two spell slots of that level to prepare the spell. For example, a wizard with evocation as an opposition school must expend two of his available 3rd-level spell slots to prepare a fireball. In addition, a specialist takes a \u20134 penalty on any skill checks made when crafting a magic item that has a spell from one of his opposition schools as a prerequisite. A universalist wizard can prepare spells from any school without restriction.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Each arcane school gives the wizard a number of school powers. In addition, specialist wizards receive an additional spell slot of each spell level he can cast, from 1st on up. Each day, a wizard can prepare a spell from his specialty school in that slot. This spell must be in the wizard's spellbook. A wizard can select a spell modified by a metamagic feat to prepare in his school slot, but it uses up a higher-level spell slot. Wizards with the universalist school do not receive a school slot.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Cantrips"
				),
				"Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under \"Spells per Day.\" These spells are cast like any other spell, but they are not expended when cast and may be used again. A wizard can prepare a cantrip from a prohibited school, but it uses up two of his available slots.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Scribe Scroll"
				),
				"At 1st level, a wizard gains Scribe Scroll as a bonus feat.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Feats"
				),
				"At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, he can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums. These bonus feats are in addition to the feats that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing those feats.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spellbooks"
				),
				"A wizard must study his spellbook each day to prepare his spells. He cannot prepare any spell not recorded in his spellbook, except for read magic, which all wizards can prepare from memory.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A wizard begins play with a spellbook containing all 0-level wizard spells (except those from his prohibited schools, if any; see Arcane Schools) plus three 1st-level spells of his choice. The wizard also selects a number of additional 1st-level spells equal to his Intelligence modifier to add to the spellbook. At each new wizard level, he gains two new spells of any spell level or levels that he can cast (based on his new wizard level) for his spellbook. At any time, a wizard can also add spells found in other wizards' spellbooks to his own."
			);
		case "Sorcerer":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Sorcerers excel at casting a selection of favored spells frequently, making them powerful battle mages. As they become familiar with a specific and ever-widening set of spells, sorcerers often discover new and versatile ways of making use of magics other spellcasters might overlook. Their bloodlines also grant them additional abilities, assuring that no two sorcerers are ever quite alike.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The sorcerer's class skills are Appraise (Int), Bluff (Cha), Craft (Int), Fly (Dex), Intimidate (Cha), Knowledge (arcana) (Int), Profession (Wis), Spellcraft (Int), and Use Magic Device (Cha).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"2 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d6",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Sorcerers are proficient with all simple weapons. They are not proficient with any type of armor or shield. Armor interferes with a sorcerer's gestures, which can cause her spells with somatic components to fail (see Arcane Spells and Armor).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"A sorcerer casts arcane spells drawn primarily from the sorcerer/wizard spell list presented in Spell Lists. She can cast any spell she knows without preparing it ahead of time. To learn or cast a spell, a sorcerer must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a sorcerer's spell is 10 + the spell level + the sorcerer's Charisma modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a sorcerer can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Sorcerer. In addition, she receives bonus spells per day if she has a high Charisma score (see Table: Ability Modifiers and Bonus Spells).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A sorcerer's selection of spells is extremely limited. A sorcerer begins play knowing four 0-level spells and two 1st-level spells of her choice. At each new sorcerer level, she gains one or more new spells, as indicated on Table: Sorcerer Spells Known. (Unlike spells per day, the number of spells a sorcerer knows is not affected by her Charisma score; the numbers on Table: Sorcerer Spells Known are fixed.) These new spells can be common spells chosen from the sorcerer/wizard spell list, or they can be unusual spells that the sorcerer has gained some understanding of through study.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Upon reaching 4th level, and at every even-numbered sorcerer level after that (6th, 8th, and so on), a sorcerer can choose to learn a new spell in place of one she already knows. In effect, the sorcerer loses the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. A sorcerer may swap only a single spell at any given level, and must choose whether or not to swap the spell at the same time that she gains new spells known for the level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Unlike a wizard or a cleric, a sorcerer need not prepare her spells in advance. She can cast any spell she knows at any time, assuming she has not yet used up her spells per day for that spell level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bloodline"
				),
				"Each sorcerer has a source of magic somewhere in her heritage that grants her spells, bonus feats, an additional class skill, and other special abilities. This source can represent a blood relation or an extreme event involving a creature somewhere in the family's past. For example, a sorcerer might have a dragon as a distant relative or her grandfather might have signed a terrible contract with a devil. Regardless of the source, this influence manifests in a number of ways as the sorcerer gains levels. A sorcerer must pick one bloodline upon taking her first level of sorcerer. Once made, this choice cannot be changed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 3rd level, and every two levels thereafter, a sorcerer learns an additional spell, derived from her bloodline. These spells are in addition to the number of spells given on Table: Sorcerer Spells Known. These spells cannot be exchanged for different spells at higher levels.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 7th level, and every six levels thereafter, a sorcerer receives one bonus feat, chosen from a list specific to each bloodline. The sorcerer must meet the prerequisites for these bonus feats.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Cantrips"
				),
				"Sorcerers learn a number of cantrips, or 0-level spells, as noted on Table: Sorcerer Spells Known under \"Spells Known.\" These spells are cast like any other spell, but they do not consume any slots and may be used again.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Eschew Materials"
				),
				"A sorcerer gains Eschew Materials as a bonus feat at 1st level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Sorcerer Bloodlines"
				),
				"Bloodlines represent some of the possible sources of power that a sorcerer can draw upon. Unless otherwise noted, most sorcerers are assumed to have the arcane bloodline.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Rogue":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Rogues excel at moving about unseen and catching foes unaware, and tend to avoid head-to-head combat. Their varied skills and abilities allow them to be highly versatile, with great variations in expertise existing between different rogues. Most, however, excel in overcoming hindrances of all types, from unlocking doors and disarming traps to outwitting magical hazards and conning dull-witted opponents.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The rogue's class skills are Acrobatics (Dex), Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Disable Device (Dex), Disguise (Cha), Escape Artist (Dex), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (local) (Int), Linguistics (Int), Perception (Wis), Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Stealth (Dex), Swim (Str), and Use Magic Device (Cha).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"8 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d8",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Rogues are proficient with all simple weapons, plus the hand crossbow, rapier, sap, shortbow, and short sword. They are proficient with light armor, but not with shields.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Sneak Attack"
				),
				"If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual \u20134 penalty.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Trapfinding"
				),
				"A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Evasion (Ex)"
				),
				"At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Rogue Talents"
				),
				"As a rogue gains experience, she learns a number of talents that aid her and confound her foes. Starting at 2nd level, a rogue gains one rogue talent. She gains an additional rogue talent for every 2 levels of rogue attained after 2nd level. A rogue cannot select an individual talent more than once.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Talents marked with an asterisk add effects to a rogue's sneak attack. Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Bleeding Attack* (Ex): A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue's sneak attack (e.g., 4d6 equals 4 points of bleed). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleeding damage from this ability does not stack with itself. Bleeding damage bypasses any damage reduction the creature might possess.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Combat Trick: A rogue that selects this talent gains a bonus combat feat (see Feats).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Fast Stealth (Ex): This ability allows a rogue to move at full speed using the Stealth skill without penalty.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Finesse Rogue: A rogue that selects this talent gains Weapon Finesse as a bonus feat.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Ledge Walker (Ex): This ability allows a rogue to move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this talent is not flat-footed when using Acrobatics to move along narrow surfaces. Major Magic (Sp): A rogue with this talent gains the ability to cast a 1st-level spell from the sorcerer/wizard spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 11 to select this talent. A rogue must have the minor magic rogue talent before choosing this talent. Minor Magic (Sp): A rogue with this talent gains the ability to cast a 0-level spell from the sorcerer/wizard spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 10 to select this talent. Quick Disable (Ex): It takes a rogue with this ability half the normal amount of time to disable a trap using the Disable Device skill (minimum 1 round).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Resiliency (Ex): Once per day, a rogue with this ability can gain a number of temporary hit points equal to the rogue's level. Activating this ability is an immediate action that can only be performed when she is brought to below 0 hit points. This ability can be used to prevent her from dying. These temporary hit points last for 1 minute. If the rogue's hit points drop below 0 due to the loss of these temporary hit points, she falls unconscious and is dying as normal. Rogue Crawl (Ex): While prone, a rogue with this ability can move at half speed. This movement provokes attacks of opportunity as normal. A rogue with this talent can take a 5-foot step while crawling.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Slow Reactions* (Ex): Opponents damaged by the rogue's sneak attack can't make attacks of opportunity for 1 round.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Stand Up (Ex): A rogue with this ability can stand up from a prone position as a free action. This still provokes attacks of opportunity for standing up while threatened by a foe.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Surprise Attack (Ex): During the surprise round, opponents are always considered flat-footed to a rogue with this ability, even if they have already acted.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Trap Spotter (Ex): Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Weapon Training: A rogue that selects this talent gains Weapon Focus as a bonus feat.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Trap Sense (Ex)"
				),
				"At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Trap sense bonuses gained from multiple classes stack.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Uncanny Dodge (Ex)"
				),
				"Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action (see Combat) against her.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a rogue already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Improved Uncanny Dodge (Ex)"
				),
				"A rogue of 8th level or higher can no longer be flanked.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Advanced Talents"
				),
				"At 10th level, and every two levels thereafter, a rogue can choose one of the following advanced talents in place of a rogue talent.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Crippling Strike* (Ex): A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Defensive Roll (Ex): With this advanced talent, the rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll\u2014if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Dispelling Attack* (Su): Opponents that are dealt sneak attack damage by a rogue with this ability are affected by a targeted dispel magic, targeting the lowest-level spell effect active on the target. The caster level for this ability is equal to the rogue's level. A rogue must have the major magic rogue talent before choosing dispelling attack.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Improved Evasion (Ex): This works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks, she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Opportunist (Ex): Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Skill Mastery: The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional skills for skill mastery to apply to each time.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Slippery Mind (Ex): This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Feat: A rogue may gain any feat that she qualifies for in place of a rogue talent.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Master Strike (Ex)"
				),
				"Upon reaching 20th level, a rogue becomes incredibly deadly when dealing sneak attack damage. Each time the rogue deals sneak attack damage, she can choose one of the following three effects: the target can be put to sleep for 1d4 hours, paralyzed for 2d6 rounds, or slain. Regardless of the effect chosen, the target receives a Fortitude save to negate the additional effect. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier. Once a creature has been the target of a master strike, regardless of whether or not the save is made, that creature is immune to that rogue's master strike for 24 hours. Creatures that are immune to sneak attack damage are also immune to this ability.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Ranger":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game\u2014even fugitives among their own people.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Rangers are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The ranger's class skills are Climb (Str), Craft (Int), Handle Animal (Cha), Heal (Wis), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (geography) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Ride (Dex), Spellcraft (Int), Stealth (Dex), Survival (Wis), and Swim (Str).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"6 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d10",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"A ranger is proficient with all simple and martial weapons and with light armor, medium armor, and shields (except tower shields).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Favored Enemy (Ex)"
				),
				"At 1st level, a ranger selects a creature type from the ranger favored enemies table. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of his selected type. Likewise, he gets a +2 bonus on weapon attack and damage rolls against them. A ranger may make Knowledge skill checks untrained when attempting to identify these creatures. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by +2. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table below. (Note that there are other types of humanoid to choose from\u2014those called out specifically on the table below are merely the most common.) If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Track (Ex)"
				),
				"A ranger adds half his level (minimum 1) to Survival skill checks made to follow tracks.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Wild Empathy (Ex)"
				),
				"A ranger can improve the initial attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person (see Using Skills). The ranger rolls 1d20 and adds his ranger level and his Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To use wild empathy, the ranger and the animal must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The ranger can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but he takes a \u20134 penalty on the check.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Combat Style Feat (Ex)"
				),
				"At 2nd level, a ranger must select one of two combat styles to pursue: archery or two-weapon combat. The ranger's expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If the ranger selects archery, he can choose from the following list whenever he gains a combat style feat: Far Shot, Point Blank Shot, Precise Shot, and Rapid Shot. At 6th level, he adds Improved Precise Shot and Manyshot to the list. At 10th level, he adds Pinpoint Targeting and Shot on the Run to the list. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If the ranger selects two-weapon combat, he can choose from the following list whenever he gains a combat style feat: Double Slice, Improved Shield Bash, Quick Draw, and Two-Weapon Fighting. At 6th level, he adds Improved Two-Weapon Fighting and Two-Weapon Defense to the list. At 10th level, he adds Greater Two-Weapon Fighting and Two-Weapon Rend to the list. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The benefits of the ranger's chosen style feats apply only when he wears light, medium, or no armor. He loses all benefits of his combat style feats when wearing heavy armor. Once a ranger selects a combat style, it cannot be changed. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Endurance"
				),
				"A ranger gains Endurance as a bonus feat at 3rd level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Favored Terrain (Ex)"
				),
				"At 3rd level, a ranger may select a type of terrain from the Favored Terrains table. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses). ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hunter's Bond (Ex)"
				),
				"At 4th level, a ranger forms a bond with his hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed. The first is a bond to his companions. This bond allows him to spend a move action to grant half his favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the ranger's Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by his allies; they use whichever bonus is higher. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The second option is to form a close bond with an animal companion. A ranger who selects an animal companion can choose from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper or constrictor), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the ranger may choose a shark instead. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind. A ranger's animal companion shares his favored enemy and favored terrain bonuses. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"This ability functions like the druid animal companion ability (which is part of the Nature Bond class feature), except that the ranger's effective druid level is equal to his ranger level \u2013 3.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"Beginning at 4th level, a ranger gains the ability to cast a small number of divine spells, which are drawn from the ranger spell list presented in Spell Lists. A ranger must choose and prepare his spells in advance. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To prepare or cast a spell, a ranger must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a ranger's spell is 10 + the spell level + the ranger's Wisdom modifier. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a ranger can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Ranger. In addition, he receives bonus spells per day if he has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells). When Table: Ranger indicates that the ranger gets 0 spells per day of a given spell level, he gains only the bonus spells he would be entitled to based on his Wisdom score for that spell level. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A ranger must spend 1 hour per day in quiet meditation to regain his daily allotment of spells. A ranger may prepare and cast any spell on the ranger spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Through 3rd level, a ranger has no caster level. At 4th level and higher, his caster level is equal to his ranger level \u2013 3.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Woodland Stride (Ex)"
				),
				"Starting at 7th level, a ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, however, still affect him.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Swift Tracker (Ex)"
				),
				"Beginning at 8th level, a ranger can move at his normal speed while using Survival to follow tracks without taking the normal \u20135 penalty. He takes only a \u201310 penalty (instead of the normal \u201320) when moving at up to twice normal speed while tracking.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Evasion (Ex)"
				),
				"When he reaches 9th level, a ranger can avoid even magical and unusual attacks with great agility. If he makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the ranger is wearing light armor, medium armor, or no armor. A helpless ranger does not gain the benefit of evasion.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Quarry (Ex)"
				),
				"At 11th level, a ranger can, as a standard action, denote one target within his line of sight as his quarry. Whenever he is following the tracks of his quarry, a ranger can take 10 on his Survival skill checks while moving at normal speed, without penalty. In addition, he receives a +2 insight bonus on attack rolls made against his quarry, and all critical threats are automatically confirmed. A ranger can have no more than one quarry at a time and the creature's type must correspond to one of his favored enemy types. He can dismiss this effect at any time as a free action, but he cannot select a new quarry for 24 hours. If the ranger sees proof that his quarry is dead, he can select a new quarry after waiting 1 hour.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Camouflage (Ex)"
				),
				"A ranger of 12th level or higher can use the Stealth skill to hide in any of his favored terrains, even if the terrain doesn't grant cover or concealment.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Improved Evasion (Ex)"
				),
				"At 16th level, a ranger's evasion improves. This ability works like evasion, except that while the ranger still takes no damage on a successful Reflex saving throw against attacks, he henceforth takes only half damage on a failed save. A helpless ranger does not gain the benefit of improved evasion.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hide in Plain Sight (Ex)"
				),
				"While in any of his favored terrains, a ranger of 17th level or higher can use the Stealth skill even while being observed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Improved Quarry (Ex)"
				),
				"At 19th level, the ranger's ability to hunt his quarry improves. He can now select a quarry as a free action, and can now take 20 while using Survival to track his quarry, while moving at normal speed without penalty. His insight bonus to attack his quarry increases to +4. If his quarry is killed or dismissed, he can select a new one after 10 minutes have passed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Master Hunter (Ex)"
				),
				"A ranger of 20th level becomes a master hunter. He can always move at full speed while using Survival to follow tracks without penalty. He can, as a standard action, make a single attack against a favored enemy at his full attack bonus. If the attack hits, the target takes damage normally and must make a Fortitude save or die. The DC of this save is equal to 10 + 1/2 the ranger's level + the ranger's Wisdom modifier. A ranger can choose instead to deal an amount of nonlethal damage equal to the creature's current hit points. A successful save negates this damage. A ranger can use this ability once per day against each favored enemy type he possesses, but not against the same creature more than once in a 24-hour period.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Paladin":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Through a select, worthy few shines the power of the divine. Called paladins, these noble souls dedicate their swords and lives to the battle against evil. Knights, crusaders, and law-bringers, paladins seek not just to spread divine justice but to embody the teachings of the virtuous deities they serve. In pursuit of their lofty goals, they adhere to ironclad laws of morality and discipline. As reward for their righteousness, these holy champions are blessed with boons to aid them in their quests: powers to banish evil, heal the innocent, and inspire the faithful. Although their convictions might lead them into conflict with the very souls they would save, paladins weather endless challenges of faith and dark temptations, risking their lives to do right and fighting to bring about a brighter future.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Paladins serve as beacons for their allies within the chaos of battle. While deadly opponents of evil, they can also empower goodly souls to aid in their crusades. Their magic and martial skills also make them well suited to defending others and blessing the fallen with the strength to continue fighting.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The paladin's class skills are Craft (Int), Diplomacy (Cha), Handle Animal (Cha), Heal (Wis), Knowledge (nobility) (Int), Knowledge (religion) (Int), Profession (Wis), Ride (Dex), Sense Motive (Wis), and Spellcraft (Int).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"2 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d10",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Lawful good",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Paladins are proficient with all simple and martial weapons, with all types of armor (heavy, medium, and light), and with shields (except tower shields).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Good (Ex)"
				),
				"The power of a paladin's aura of good (see the detect good spell) is equal to her paladin level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Detect Evil (Sp)"
				),
				"At will, a paladin can use detect evil, as the spell. A paladin can, as a move action, concentrate on a single item or individual within 60 feet and determine if it is evil, learning the strength of its aura as if having studied it for 3 rounds. While focusing on one individual or object, the paladin does not detect evil in any other object or individual within range.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Smite Evil (Su)"
				),
				"Once per day, a paladin can call out to the powers of good to aid her in her struggle against evil. As a swift action, the paladin chooses one target within sight to smite. If this target is evil, the paladin adds her Charisma bonus (if any) to her attack rolls and adds her paladin level to all damage rolls made against the target of her smite. If the target of smite evil is an outsider with the evil subtype, an evil-aligned dragon, or an undead creature, the bonus to damage on the first successful attack increases to 2 points of damage per level the paladin possesses. Regardless of the target, smite evil attacks automatically bypass any DR the creature might possess.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"In addition, while smite evil is in effect, the paladin gains a deflection bonus equal to her Charisma modifier (if any) to her AC against attacks made by the target of the smite. If the paladin targets a creature that is not evil, the smite is wasted with no effect.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The smite evil effect remains until the target of the smite is dead or the next time the paladin rests and regains her uses of this ability. At 4th level, and at every three levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: Paladin, to a maximum of seven times per day at 19th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Divine Grace (Su)"
				),
				"At 2nd level, a paladin gains a bonus equal to her Charisma bonus (if any) on all saving throws.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Lay On Hands (Su)"
				),
				"Beginning at 2nd level, a paladin can heal wounds (her own or those of others) by touch. Each day she can use this ability a number of times equal to 1/2 her paladin level plus her Charisma modifier. With one use of this ability, a paladin can heal 1d6 hit points of damage for every two paladin levels she possesses. Using this ability is a standard action, unless the paladin targets herself, in which case it is a swift action. Despite the name of this ability, a paladin only needs one free hand to use this ability.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Alternatively, a paladin can use this healing power to deal damage to undead creatures, dealing 1d6 points of damage for every two levels the paladin possesses. Using lay on hands in this way requires a successful melee touch attack and doesn't provoke an attack of opportunity. Undead do not receive a saving throw against this damage.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Courage (Su)"
				),
				"At 3rd level, a paladin is immune to fear (magical or otherwise). Each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects. This ability functions only while the paladin is conscious, not if she is unconscious or dead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Divine Health (Ex)"
				),
				"At 3rd level, a paladin is immune to all diseases, including supernatural and magical diseases, including mummy rot.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Mercy (Su)"
				),
				"At 3rd level, and every three levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's lay on hands ability. Whenever the paladin uses lay on hands to heal damage to one target, the target also receives the additional effects from all of the mercies possessed by the paladin. A mercy can remove a condition caused by a curse, disease, or poison without curing the affliction. Such conditions return after 1 hour unless the mercy actually removes the affliction that causes the condition.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 3rd level, the paladin can select from the following initial mercies.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Fatigued: The target is no longer fatigued.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Shaken: The target is no longer shaken.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Sickened: The target is no longer sickened.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 6th level, a paladin adds the following mercies to the list of those that can be selected.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Dazed: The target is no longer dazed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Diseased: The paladin's lay on hands ability also acts as remove disease, using the paladin's level as the caster level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Staggered: The target is no longer staggered, unless the target is at exactly 0 hit points.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 9th level, a paladin adds the following mercies to the list of those that can be selected.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Cursed: The paladin's lay on hands ability also acts as remove curse, using the paladin's level as the caster level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Exhausted: The target is no longer exhausted. The paladin must have the fatigue mercy before selecting this mercy.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Frightened: The target is no longer frightened. The paladin must have the shaken mercy before selecting this mercy.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Nauseated: The target is no longer nauseated. The paladin must have the sickened mercy before selecting this mercy.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Poisoned: The paladin's lay on hands ability also acts as neutralize poison, using the paladin's level as the caster level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 12th level, a paladin adds the following mercies to the list of those that can be selected.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Blinded: The target is no longer blinded.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Deafened: The target is no longer deafened.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Paralyzed: The target is no longer paralyzed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"\u2022 Stunned: The target is no longer stunned.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"These abilities are cumulative. For example, a 12th-level paladin's lay on hands ability heals 6d6 points of damage and might also cure fatigued and exhausted conditions as well as removing diseases and neutralizing poisons. Once a condition or spell effect is chosen, it can't be changed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Channel Positive Energy (Su)"
				),
				"When a paladin reaches 4th level, she gains the supernatural ability to channel positive energy like a cleric. Using this ability consumes two uses of her lay on hands ability. A paladin uses her level as her effective cleric level when channeling positive energy. This is a Charisma-based ability.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"Beginning at 4th level, a paladin gains the ability to cast a small number of divine spells which are drawn from the paladin spell list presented in Spell Lists. A paladin must choose and prepare her spells in advance.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To prepare or cast a spell, a paladin must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a paladin's spell is 10 + the spell level + the paladin's Charisma modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a paladin can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Paladin. In addition, she receives bonus spells per day if she has a high Charisma score (see Table: Ability Modifiers and Bonus Spells). When Table: Paladin indicates that the paladin gets 0 spells per day of a given spell level, she gains only the bonus spells she would be entitled to based on her Charisma score for that spell level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A paladin must spend 1 hour each day in quiet prayer and meditation to regain her daily allotment of spells. A paladin may prepare and cast any spell on the paladin spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Through 3rd level, a paladin has no caster level. At 4th level and higher, her caster level is equal to her paladin level \u2013 3.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Divine Bond (Sp)"
				),
				"Upon reaching 5th level, a paladin forms a divine bond with her god. This bond can take one of two forms. Once the form is chosen, it cannot be changed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The first type of bond allows the paladin to enhance her weapon as a standard action by calling upon the aid of a celestial spirit for 1 minute per paladin level. When called, the spirit causes the weapon to shed light as a torch. At 5th level, this spirit grants the weapon a +1 enhancement bonus. For every three levels beyond 5th, the weapon gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses can be added to the weapon, stacking with existing weapon bonuses to a maximum of +5, or they can be used to add any of the following weapon properties: axiomatic, brilliant energy, defending, disruption, flaming, flaming burst, holy, keen, merciful, and speed. Adding these properties consumes an amount of bonus equal to the property's cost (see Table: Melee Weapon Special Abilities). These bonuses are added to any properties the weapon already has, but duplicate abilities do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. The bonus and properties granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again. The celestial spirit imparts no bonuses if the weapon is held by anyone other than the paladin but resumes giving bonuses if returned to the paladin. These bonuses apply to only one end of a double weapon. A paladin can use this ability once per day at 5th level, and one additional time per day for every four levels beyond 5th, to a total of four times per day at 17th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a weapon bonded with a celestial spirit is destroyed, the paladin loses the use of this ability for 30 days, or until she gains a level, whichever comes first. During this 30-day period, the paladin takes a \u20131 penalty on attack and weapon damage rolls.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The second type of bond allows a paladin to gain the service of an unusually intelligent, strong, and loyal steed to serve her in her crusade against evil. This mount is usually a heavy horse (for a Medium paladin) or a pony (for a Small paladin), although more exotic mounts, such as a boar, camel, or dog are also suitable. This mount functions as a druid's animal companion, using the paladin's level as her effective druid level. Bonded mounts have an Intelligence of at least 6.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Once per day, as a full-round action, a paladin may magically call her mount to her side. This ability is the equivalent of a spell of a level equal to one-third the paladin's level. The mount immediately appears adjacent to the paladin. A paladin can use this ability once per day at 5th level, and one additional time per day for every 4 levels thereafter, for a total of four times per day at 17th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 11th level, the mount gains the celestial template and becomes a magical beast for the purposes of determining which spells affect it. At 15th level, a paladin's mount gains spell resistance equal to the paladin's level + 11.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Should the paladin's mount die, the paladin may not summon another mount for 30 days or until she gains a paladin level, whichever comes first. During this 30-day period, the paladin takes a \u20131 penalty on attack and weapon damage rolls.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Resolve (Su)"
				),
				"At 8th level, a paladin is immune to charm spells and spell-like abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against charm effects.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"This ability functions only while the paladin is conscious, not if she is unconscious or dead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Justice (Su)"
				),
				"At 11th level, a paladin can expend two uses of her smite evil ability to grant the ability to smite evil to all allies within 10 feet, using her bonuses. Allies must use this smite evil ability by the start of the paladin's next turn and the bonuses last for 1 minute. Using this ability is a free action. Evil creatures gain no benefit from this ability.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Faith (Su)"
				),
				"At 14th level, a paladin's weapons are treated as good-aligned for the purposes of overcoming damage reduction. Any attack made against an enemy within 10 feet of her is treated as good-aligned for the purposes of overcoming damage reduction.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"This ability functions only while the paladin is conscious, not if she is unconscious or dead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura of Righteousness (Su)"
				),
				"At 17th level, a paladin gains DR 5/evil and immunity to compulsion spells and spell-like abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against compulsion effects.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"This ability functions only while the paladin is conscious, not if she is unconscious or dead.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Holy Champion (Su)"
				),
				"At 20th level, a paladin becomes a conduit for the power of her god. Her DR increases to 10/evil. Whenever she uses smite evil and successfully strikes an evil outsider, the outsider is also subject to a banishment, using her paladin level as the caster level (her weapon and holy symbol automatically count as objects that the subject hates). After the banishment effect and the damage from the attack is resolved, the smite immediately ends. In addition, whenever she channels positive energy or uses lay on hands to heal a creature, she heals the maximum possible amount.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Code of Conduct"
				),
				"A paladin must be of lawful good alignment and loses all class features except proficiencies if she ever willingly commits an evil act. Additionally, a paladin's code requires that she respect legitimate authority, act with honor (not lying, not cheating, not using poison, and so forth), help those in need (provided they do not use the help for evil or chaotic ends), and punish those who harm or threaten innocents.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Associates"
				),
				"At 3rd level, a paladin is immune to all diseases, including supernatural and magical diseases, including mummy rot.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Ex-Paladins"
				),
				"A paladin who ceases to be lawful good, who willfully commits an evil act, or who violates the code of conduct loses all paladin spells and class features (including the service of the paladin's mount, but not weapon, armor, and shield proficiencies). She may not progress any further in levels as a paladin. She regains her abilities and advancement potential if she atones for her violations (see the atonement spell description in Spell Lists), as appropriate. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Fighter":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Fighters excel at combat\u2014defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The fighter's class skills are Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (engineering) (Int), Profession (Wis), Ride (Dex), Survival (Wis), and Swim (Str).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"2 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d10",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"A fighter is proficient with all simple and martial weapons and with all armor (heavy, light, and medium) and shields (including tower shields).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Feats"
				),
				"At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement (meaning that the fighter gains a feat at every level). These bonus feats must be selected from those listed as combat feats, sometimes also called \"fighter bonus feats.\"",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Upon reaching 4th level, and every four levels thereafter (8th, 12th, and so on), a fighter can choose to learn a new bonus feat in place of a bonus feat he has already learned. In effect, the fighter loses the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. A fighter can only change one feat at any given level and must choose whether or not to swap the feat at the time he gains a new bonus feat for the level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bravery (Ex)"
				),
				"Starting at 2nd level, a fighter gains a +1 bonus on Will saves against fear. This bonus increases by +1 for every four levels beyond 2nd.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Armor Training (Ex)"
				),
				"Starting at 3rd level, a fighter learns to be more maneuverable while wearing armor. Whenever he is wearing armor, he reduces the armor check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by his armor by 1. Every four levels thereafter (7th, 11th, and 15th), these bonuses increase by +1 each time, to a maximum \u20134 reduction of the armor check penalty and a +4 increase of the maximum Dexterity bonus allowed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"In addition, a fighter can also move at his normal speed while wearing medium armor. At 7th level, a fighter can move at his normal speed while wearing heavy armor.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon Training (Ex)"
				),
				"Starting at 5th level, a fighter can select one group of weapons, as noted below. Whenever he attacks with a weapon from this group, he gains a +1 bonus on attack and damage rolls.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Every four levels thereafter (9th, 13th, and 17th), a fighter becomes further trained in another group of weapons. He gains a +1 bonus on attack and damage rolls when using a weapon from this group. In addition, the bonuses granted by previous weapon groups increase by +1 each. For example, when a fighter reaches 9th level, he receives a +1 bonus on attack and damage rolls with one weapon group and a +2 bonus on attack and damage rolls with the weapon group selected at 5th level. Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A fighter also adds this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to the fighter's Combat Maneuver Defense when defending against disarm and sunder attempts made against weapons from this group.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Weapon groups are defined as follows (GMs may add other weapons to these groups, or add entirely new groups):",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Axes: battleaxe, dwarven waraxe, greataxe, handaxe, heavy pick, light pick, orc double axe, and throwing axe.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Blades, Heavy: bastard sword, elven curve blade, falchion, greatsword, longsword, scimitar, scythe, and two-bladed sword.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Blades, Light: dagger, kama, kukri, rapier, sickle, starknife, and short sword.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Bows: composite longbow, composite shortbow, longbow, and shortbow.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Close: gauntlet, heavy shield, light shield, punching dagger, sap, spiked armor, spiked gauntlet, spiked shield, and unarmed strike.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Crossbows: hand crossbow, heavy crossbow, light crossbow, heavy repeating crossbow, and light repeating crossbow.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Double: dire flail, dwarven urgrosh, gnome hooked hammer, orc double axe, quarterstaff, and two-bladed sword.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Flails: dire flail, flail, heavy flail, morningstar, nunchaku, spiked chain, and whip.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Hammers: club, greatclub, heavy mace, light hammer, light mace, and warhammer.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Monk: kama, nunchaku, quarterstaff, sai, shuriken, siangham, and unarmed strike.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Natural: unarmed strike and all natural weapons, such as bite, claw, gore, tail, and wing.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Pole Arms: glaive, guisarme, halberd, and ranseur.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Spears: javelin, lance, longspear, shortspear, spear, and trident.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Thrown: blowgun, bolas, club, dagger, dart, halfling sling staff, javelin, light hammer, net, shortspear, shuriken, sling, spear, starknife, throwing axe, and trident.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Armor Mastery (Ex)"
				),
				"At 19th level, a fighter gains DR 5/\u2014 whenever he is wearing armor or using a shield.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon Mastery (Ex)"
				),
				"At 20th level, a fighter chooses one weapon, such as the longsword, greataxe, or longbow. Any attacks made with that weapon automatically confirm all critical threats and have their damage multiplier increased by 1 (\xD72 becomes \xD73, for example). In addition, he cannot be disarmed while wielding a weapon of this type."
			);
		case "Druid":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Within the purity of the elements and the order of the wilds lingers a power beyond the marvels of civilization. Furtive yet undeniable, these primal magics are guarded over by servants of philosophical balance known as druids. Allies to beasts and manipulators of nature, these often misunderstood protectors of the wild strive to shield their lands from all who would threaten them and prove the might of the wilds to those who lock themselves behind city walls. Rewarded for their devotion with incredible powers, druids gain unparalleled shape-shifting abilities, the companionship of mighty beasts, and the power to call upon nature's wrath. The mightiest temper powers akin to storms, earthquakes, and volcanoes with primeval wisdom long abandoned and forgotten by civilization.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"While some druids might keep to the fringe of battle, allowing companions and summoned creatures to fight while they confound foes with the powers of nature, others transform into deadly beasts and savagely wade into combat. Druids worship personifications of elemental forces, natural powers, or nature itself. Typically this means devotion to a nature deity, though druids are just as likely to revere vague spirits, animalistic demigods, or even specific awe-inspiring natural wonders.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The druid's class skills are Climb (Str), Craft (Int), Fly (Dex), Handle Animal (Cha), Heal (Wis), Knowledge (geography) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Ride (Dex), Spellcraft (Int), Survival (Wis), and Swim (Str).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"4 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d6",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any neutral",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Druids are proficient with the following weapons: club, dagger, dart, quarterstaff, scimitar, scythe, sickle, shortspear, sling, and spear. They are also proficient with all natural attacks (claw, bite, and so forth) of any form they assume with wild shape (see below).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Druids are proficient with light and medium armor but are prohibited from wearing metal armor; thus, they may wear only padded, leather, or hide armor. A druid may also wear wooden armor that has been altered by the ironwood spell so that it functions as though it were steel. Druids are proficient with shields (except tower shields) but must use only those crafted from wood.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid who wears prohibited armor or uses a prohibited shield is unable to cast druid spells or use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"A druid casts divine spells which are drawn from the druid spell list presented in Spell Lists. Her alignment may restrict her from casting certain spells opposed to her moral or ethical beliefs; see Chaotic, Evil, Good, and Lawful Spells. A druid must choose and prepare her spells in advance.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To prepare or cast a spell, the druid must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a druid's spell is 10 + the spell level + the druid's Wisdom modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a druid can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Druid. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid must spend 1 hour each day in a trance-like meditation on the mysteries of nature to regain her daily allotment of spells. A druid may prepare and cast any spell on the druid spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spontaneous Casting"
				),
				"A druid can channel stored spell energy into summoning spells that she hasn't prepared ahead of time. She can \u201Close\u201D a prepared spell in order to cast any summon nature's ally spell of the same level or lower.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Chaotic, Evil, Good, and Lawful Spells"
				),
				"A druid can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Orisons"
				),
				"Druids can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Druid under \u201CSpells per Day.\u201D These spells are cast like any other spell, but they are not expended when cast and may be used again.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Languages"
				),
				"A druid's bonus language options include Sylvan, the language of woodland creatures. This choice is in addition to the bonus languages available to the character because of her race.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid also knows Druidic, a secret language known only to druids, which she learns upon becoming a 1st-level druid. Druidic is a free language for a druid; that is, she knows it in addition to her regular allotment of languages and it doesn't take up a language slot. Druids are forbidden to teach this language to nondruids.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Druidic has its own alphabet.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Nature Bond (Ex)"
				),
				"At 1st level, a druid forms a bond with nature. This bond can take one of two forms. The first is a close tie to the natural world, granting the druid one of the following cleric domains: Air, Animal, Earth, Fire, Plant, Water, or Weather. When determining the powers and bonus spells granted by this domain, the druid's effective cleric level is equal to her druid level. A druid that selects this option also receives additional domain spell slots, just like a cleric. She must prepare the spell from her domain in this slot and this spell cannot be used to cast a spell spontaneously.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The second option is to form a close bond with an animal companion. A druid may begin play with any of the animals listed in Animal Choices. This animal is a loyal companion that accompanies the druid on her adventures.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Unlike normal animals of its kind, an animal companion's Hit Dice, abilities, skills, and feats advance as the druid advances in level. If a character receives an animal companion from more than one source, her effective druid levels stack for the purposes of determining the statistics and abilities of the companion. Most animal companions increase in size when their druid reaches 4th or 7th level, depending on the companion. If a druid releases her companion from service, she may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer in the environment where the new companion typically lives. This ceremony can also replace an animal companion that has perished.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Nature Sense (Ex)"
				),
				"A druid gains a +2 bonus on Knowledge (nature) and Survival checks.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Wild Empathy (Ex)"
				),
				"A druid can improve the attitude of an animal. This ability functions just like a Diplomacy check made to improve the attitude of a person (see Using Skills). The druid rolls 1d20 and adds her druid level and her Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To use wild empathy, the druid and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but she takes a \u20134 penalty on the check.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Woodland Stride (Ex)"
				),
				"Starting at 2nd level, a druid may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect her.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Trackless Step (Ex)"
				),
				"Starting at 3rd level, a druid leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Resist Nature's Lure (Ex)"
				),
				"Starting at 4th level, a druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of fey. This bonus also applies to spells and effects that utilize or target plants, such as blight, entangle, spike growth, and warp wood.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Wild Shape (Su)"
				),
				"At 4th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the beast shape I spell, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. The form chosen must be that of an animal with which the druid is familiar.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A druid can use this ability an additional time per day at 6th level and every two levels thereafter, for a total of eight times at 18th level. At 20th level, a druid can use wild shape at will. As a druid gains levels, this ability allows the druid to take on the form of larger and smaller animals, elementals, and plants. Each form expends one daily use of this ability, regardless of the form taken.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 6th level, a druid can also use wild shape to change into a Large or Tiny animal or a Small elemental. When taking the form of an animal, a druid's wild shape now functions as beast shape II. When taking the form of an elemental, the druid's wild shape functions as elemental body I.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 8th level, a druid can also use wild shape to change into a Huge or Diminutive animal, a Medium elemental, or a Small or Medium plant creature. When taking the form of animals, a druid's wild shape now functions as beast shape III. When taking the form of an elemental, the druid's wild shape now functions as elemental body II. When taking the form of a plant creature, the druid's wild shape functions as plant shape I.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 10th level, a druid can also use wild shape to change into a Large elemental or a Large plant creature. When taking the form of an elemental, the druid's wild shape now functions as elemental body III. When taking the form of a plant, the druid's wild shape now functions as plant shape II.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 12th level, a druid can also use wild shape to change into a Huge elemental or a Huge plant creature. When taking the form of an elemental, the druid's wild shape now functions as elemental body IV. When taking the form of a plant, the druid's wild shape now functions as plant shape III.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Venom Immunity (Ex)"
				),
				"At 9th level, a druid gains immunity to all poisons.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"A Thousand Faces (Su)"
				),
				"t 13th level, a druid gains the ability to change her appearance at will, as if using the alter self spell, but only while in her normal form.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Timeless Body (Ex)"
				),
				"After attaining 15th level, a druid no longer takes ability score penalties for aging and cannot be magically aged. Any penalties she may have already incurred, however, remain in place. Bonuses still accrue, and the druid still dies of old age when her time is up.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Ex-Druids"
				),
				"A druid who ceases to revere nature, changes to a prohibited alignment, or teaches the Druidic language to a nondruid loses all spells and druid abilities (including her animal companion, but not including weapon, armor, and shield proficiencies). She cannot thereafter gain levels as a druid until she atones ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Animal Companions"
				),
				"An animal companion's abilities are determined by the druid's level and its animal racial traits. They remain creatures of the animal type for purposes of determining which spells can affect them.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Cleric":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null),
					"As their powers are influenced by their faith, all clerics must focus their worship upon a divine source. While the vast majority of clerics revere a specific deity, a small number dedicate themselves to a divine concept worthy of devotion\u2014such as battle, death, justice, or knowledge\u2014free of a deific abstraction. (Work with your GM if you prefer this path to selecting a specific deity.)",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"TThe cleric's class skills are Appraise (Int), Craft (Int), Diplomacy (Cha), Heal (Wis), Knowledge (arcana) (Int), Knowledge (history) (Int), Knowledge (nobility) (Int), Knowledge (planes) (Int), Knowledge (religion) (Int), Linguistics (Int), Profession (Wis), Sense Motive (Wis), and Spellcraft (Int).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"2 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d8",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"A cleric's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"Clerics are proficient with all simple weapons, light armor, medium armor, and shields (except tower shields). Clerics are also proficient with the favored weapon of their deity.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"A cleric casts divine spells which are drawn from the cleric spell list presented in Spell Lists. Her alignment, however, may restrict her from casting certain spells opposed to her moral or ethical beliefs; see chaotic, evil, good, and lawful spells. A cleric must choose and prepare her spells in advance.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"To prepare or cast a spell, a cleric must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a cleric's spell is 10 + the spell level + the cleric's Wisdom modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a cleric can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Cleric. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Clerics meditate or pray for their spells. Each cleric must choose a time when she must spend 1 hour each day in quiet contemplation or supplication to regain her daily allotment of spells. A cleric may prepare and cast any spell on the cleric spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Aura (Ex)"
				),
				"A cleric of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment (",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Channel Energy (Su)"
				),
				"Regardless of alignment, any cleric can release a wave of energy by channeling the power of her faith through her holy (or unholy) symbol. This energy can be used to cause or heal damage, depending on the type of energy channeled and the creatures targeted. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A good cleric (or one who worships a good deity) channels positive energy and can choose to deal damage to undead creatures or to heal living creatures. An evil cleric (or one who worships an evil deity) channels negative energy and can choose to deal damage to living creatures or to heal undead creatures. A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose whether she channels positive or negative energy. Once this choice is made, it cannot be reversed. This decision also determines whether the cleric casts spontaneous cure or inflict spells (see spontaneous casting). ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Channeling energy causes a burst that affects all creatures of one type (either undead or living) in a 30-foot radius centered on the cleric. The amount of damage dealt or healed is equal to 1d6 points of damage plus 1d6 points of damage for every two cleric levels beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on). Creatures that take damage from channeled energy receive a Will save to halve the damage. The DC of this save is equal to 10 + 1/2 the cleric's level + the cleric's Charisma modifier. Creatures healed by channeled energy cannot exceed their maximum hit point total\u2014all excess healing is lost. A cleric may channel energy a number of times per day equal to 3 + her Charisma modifier. This is a standard action that does not provoke an attack of opportunity. A cleric can choose whether or not to include herself in this effect. A cleric must be able to present her holy symbol to use this ability.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Domains"
				),
				"A cleric's deity influences her alignment, what magic she can perform, her values, and how others see her. A cleric chooses two domains from among those belonging to her deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if her alignment matches that domain. If a cleric is not devoted to a particular deity, she still selects two domains to represent her spiritual inclinations and abilities (subject to GM approval). The restriction on alignment domains still applies. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Each domain grants a number of domain powers, dependent upon the level of the cleric, as well as a number of bonus spells. A cleric gains one domain spell slot for each level of cleric spell she can cast, from 1st on up. Each day, a cleric can prepare one of the spells from her two domains in that slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in her domain spell slot. Domain spells cannot be used to cast spells spontaneously. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"In addition, a cleric gains the listed powers from both of her domains, if she is of a high enough level. Unless otherwise noted, using a domain power is a standard action. Cleric domains are listed at the end of this class entry.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Orisons"
				),
				"Clerics can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Cleric under \u201CSpells per Day.\u201D These spells are cast like any other spell, but they are not expended when cast and may be used again.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spontaneous Casting"
				),
				"A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that she did not prepare ahead of time. The cleric can \u201Close\u201D any prepared spell that is not an orison or domain spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with \u201Ccure\u201D in its name). ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"An evil cleric (or a neutral cleric who worships an evil deity) can't convert prepared spells to cure spells but can convert them to inflict spells (an inflict spell is one with \u201Cinflict\u201D in its name). ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A cleric who is neither good nor evil and whose deity is neither good nor evil can convert spells to either cure spells or inflict spells (player's choice). Once the player makes this choice, it cannot be reversed. This choice also determines whether the cleric channels positive or negative energy ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Chaotic, Evil, Good, and Lawful Spells"
				),
				"A cleric can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaotic, evil, good, and lawful descriptors in their spell descriptions. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bonus Languages"
				),
				"A cleric's bonus language options include Celestial, Abyssal, and Infernal (the languages of good, chaotic evil, and lawful evil outsiders, respectively). These choices are in addition to the bonus languages available to the character because of her race.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Ex-Clerics"
				),
				"A cleric who grossly violates the code of conduct required by her god loses all spells and class features, except for armor and shield proficiencies and proficiency with simple weapons. She cannot thereafter gain levels as a cleric of that god until she atones for her deeds  ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		case "Bard":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The bard's class skills are Acrobatics (Dex), Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Disguise (Cha), Escape Artist (Dex), Intimidate (Cha), Knowledge (all) (Int), Linguistics (Int), Perception (Wis), Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Spellcraft (Int), Stealth (Dex), and Use Magic Device (Cha).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"6 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d8",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"A bard is proficient with all simple weapons, plus the longsword, rapier, sap, short sword, shortbow, and whip. Bards are also proficient with light armor and shields (except tower shields). A bard can cast bard spells while wearing light armor and use a shield without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a bard wearing medium or heavy armor incurs a chance of arcane spell failure if the spell in question has a somatic component. A multiclass bard still incurs the normal arcane spell failure chance for arcane spells received from other classes.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Spells"
				),
				"A bard casts arcane spells drawn from the bard spell list presented in Spell Lists. He can cast any spell he knows without preparing it ahead of time. Every bard spell has a verbal component (song, recitation, or music). To learn or cast a spell, a bard must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a bard's spell is 10 + the spell level + the bard's Charisma modifier.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Like other spellcasters, a bard can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Bard. In addition, he receives bonus spells per day if he has a high Charisma score (see Table: Ability Modifiers and Bonus Spells).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The bard's selection of spells is extremely limited. A bard begins play knowing four 0-level spells and two 1st-level spells of the bard's choice. At each new bard level, he gains one or more new spells, as indicated on Table: Bard Spells Known. (Unlike spells per day, the number of spells a bard knows is not affected by his Charisma score. The numbers on Table: Bard Spells Known are fixed.)",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Upon reaching 5th level, and at every third bard level after that (8th, 11th, and so on), a bard can choose to learn a new spell in place of one he already knows. In effect, the bard \"loses\" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level bard spell the bard can cast. A bard may swap only a single spell at any given level and must choose whether or not to swap the spell at the same time that he gains new spells known for the level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A bard need not prepare his spells in advance. He can cast any spell he knows at any time, assuming he has not yet used up his allotment of spells per day for the spell's level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bardic Knowledge (Ex)"
				),
				"A bard adds half his class level (minimum 1) on all Knowledge skill checks and may make all Knowledge skill checks untrained.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Bardic Performance"
				),
				"A bard is trained to use the Perform skill to create magical effects on those around him, including himself if desired. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day. Each round, the bard can produce any one of the types of bardic performance that he has mastered, as indicated by his level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Starting a bardic performance is a standard action, but it can be maintained each round as a free action. Changing a bardic performance from one effect to another requires the bard to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if the bard is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round. A bard cannot have more than one bardic performance in effect at one time.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"At 7th level, a bard can start a bardic performance as a move action instead of a standard action. At 13th level, a bard can start a bardic performance as a swift action.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"Each bardic performance has audible components, visual components, or both.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description). A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Cantrips"
				),
				"Bards learn a number of cantrips, or 0-level spells, as noted on Table: Bard Spells Known under \"Spells Known.\" These spells are cast like any other spell, but they do not consume any slots and may be used again.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Versatile Performance (Ex)"
				),
				"At 2nd level, a bard can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills. When substituting in this way, the bard uses his total Perform skill bonus, including class skill bonus, in place of its associated skill's bonus, whether or not he has ranks in that skill or if it is a class skill. At 6th level, and every 4 levels thereafter, the bard can select an additional type of Perform to substitute.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"The types of Perform and their associated skills are: Act (Bluff, Disguise), Comedy (Bluff, Intimidate), Dance (Acrobatics, Fly), Keyboard Instruments (Diplomacy, Intimidate), Oratory (Diplomacy, Sense Motive), Percussion (Handle Animal, Intimidate), Sing (Bluff, Sense Motive), String (Bluff, Diplomacy), and Wind (Diplomacy, Handle Animal).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Well-Versed (Ex)"
				),
				"At 2nd level, the bard becomes resistant to the bardic performance of others, and to sonic effects in general. The bard gains a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Lore Master (Ex)"
				),
				"At 5th level, the bard becomes a master of lore and can take 10 on any Knowledge skill check that he has ranks in. A bard can choose not to take 10 and can instead roll normally. In addition, once per day, the bard can take 20 on any Knowledge skill check as a standard action. He can use this ability one additional time per day for every six levels he possesses beyond 5th, to a maximum of three times per day at 17th level.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Jack-of-All-Trades (Ex)"
				),
				"At 10th level, the bard can use any skill, even if the skill normally requires him to be trained. At 16th level, the bard considers all skills to be class skills. At 19th level, the bard can take 10 on any skill check, even if it is not normally allowed."
			);
		case "Barbarian":
			return _react2.default.createElement(
				"div",
				{ style: classModalBodyStyle },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(ClassImageComp, { curClass: props.selectedClass })
				),
				_react2.default.createElement(
					"p",
					null,
					"For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors\u2014they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Role"
				),
				_react2.default.createElement(
					"p",
					null,
					"Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.",
					_react2.default.createElement("br", null),
					_react2.default.createElement("br", null)
				),
				_react2.default.createElement(
					"h4",
					null,
					"Class Skills"
				),
				"The barbarian's class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (nature) (Int), Perception (Wis), Ride (Dex), Survival (Wis), and Swim (Str).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Skill Ranks per Level"
				),
				"4 + Int modifier",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Hit Die"
				),
				"d12",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Alignment restrictions"
				),
				"Any nonlawful.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Weapon and Armor Proficiency"
				),
				"A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields).",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Fast Movement (Ex)"
				),
				"A barbarian's land speed is faster than the norm for her race by +10 feet. This benefit applies only when she is wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying the barbarian's speed because of any load carried or armor worn. This bonus stacks with any other bonuses to the barbarian's land speed.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Rage (Ex)"
				),
				"A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. Starting at 1st level, a barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. Temporary increases to Constitution, such as those gained from rage and spells like bear's endurance, do not increase the total number of rounds that a barbarian can rage per day. A barbarian can enter rage as a free action. The total number of rounds of rage per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"While in rage, a barbarian gains a +4 morale bonus to her Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, she takes a \u20132 penalty to Armor Class. The increase to Constitution grants the barbarian 2 hit points per Hit Dice, but these disappear when the rage ends and are not lost first like temporary hit points. While in rage, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"A barbarian can end her rage as a free action and is fatigued after rage for a number of rounds equal to 2 times the number of rounds spent in the rage. A barbarian cannot enter a new rage while fatigued or exhausted but can otherwise enter rage multiple times during a single encounter or combat. If a barbarian falls unconscious, her rage immediately ends, placing her in peril of death.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Rage Powers (Ex)"
				),
				"As a barbarian gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level. A barbarian gains the benefits of rage powers only while raging, and some of these powers require the barbarian to take an action first. Unless otherwise noted, a barbarian cannot select an individual power more than once.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Uncanny Dodge (Ex)"
				),
				"At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A barbarian with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her..",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"If a barbarian already has uncanny dodge from a different class, she automatically gains improved uncanny dodge instead. ",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Trap Sense (Ex)"
				),
				"At 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Improved Uncanny Dodge (Ex)"
				),
				"At 5th level and higher, a barbarian can no longer be flanked. This defense denies a rogue the ability to sneak attack the barbarian by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels. If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Damage Reduction (Ex)"
				),
				"At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Greater Rage (Ex)"
				),
				"At 11th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +6 and the morale bonus on her Will saves increases to +3.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Indomitable Will (Ex)"
				),
				"While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Tireless Rage (Ex)"
				),
				"Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"h4",
					null,
					"Mighty Rage (Ex)"
				),
				"At 20th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +8 and the morale bonus on her Will saves increases to +4.",
				_react2.default.createElement(
					"h4",
					null,
					"Ex-Barbarians"
				),
				"A barbarian who becomes lawful loses the ability to rage and cannot gain more levels as a barbarian. She retains all other benefits of the class.",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null)
			);
		default:
			return _react2.default.createElement(
				"div",
				null,
				"This should show yet"
			);
	}
};

var ClassImageComp = function ClassImageComp(props) {
	var currentClass = props.curClass.toString();
	switch (currentClass) {
		case "Monk":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Monk - Sajan.png */ "./public/assets/Monk - Sajan.png")
				//					{/*694x1000*/ .40}
				, width: "277.6",
				height: "400",
				alt: "",
				className: cssStyles.classModalImageDiv
			});
		case "Wizard":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Wizard - Ezren.png */ "./public/assets/Wizard - Ezren.png")
				//{/*567x1000*/}
				, width: "226.8",
				height: "400",
				alt: "",
				className: cssStyles.classModalImageDiv
			});
		case "Fighter":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Fighter - Valeros.png */ "./public/assets/Fighter - Valeros.png")
				//{/*572x1000*/}
				, width: "228.8",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Druid":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Druid - Maznar.png */ "./public/assets/Druid - Maznar.png")
				//{/*790x1000*/}
				, width: "276.5",
				height: "350",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Ranger":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Ranger - Harsk.png */ "./public/assets/Ranger - Harsk.png")
				//{/*831x1000*/}
				, width: "290.85",
				height: "350",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Cleric":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Cleric - Kyra.png */ "./public/assets/Cleric - Kyra.png")
				//{/*641x1000*/}
				, width: "256.4",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Rogue":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Rogue - Wu-Shen.png */ "./public/assets/Rogue - Wu-Shen.png")
				//{/*639x1000*/}
				, width: "255.6",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Sorcerer":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Sorcerer - Qualzar.png */ "./public/assets/Sorcerer - Qualzar.png")
				//{/*592x1000*/}
				, width: "236.8",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Paladin":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Paladin - Seelah.png */ "./public/assets/Paladin - Seelah.png")
				//{/*702x1000*/}
				, width: "280.8",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Barbarian":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Barbarian - Ostog.png */ "./public/assets/Barbarian - Ostog.png")
				//{/*658x1000*/}
				, width: "263.2",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
		case "Bard":
			return _react2.default.createElement("img", {
				src: __webpack_require__(/*! ../../../../public/assets/Bard - Lem.png */ "./public/assets/Bard - Lem.png")
				//{/*624x1000*/}
				, width: "249.4",
				height: "400",
				alt: "", className: cssStyles.classModalImageDiv
			});
	}
};

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterComponent.jsx":
/*!**********************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterComponent.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _CharacterActionCreators = __webpack_require__(/*! ../../actions/CharacterActionCreators */ "./src/js/actions/CharacterActionCreators.js");

var CharacterActionCreators = _interopRequireWildcard(_CharacterActionCreators);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _index = __webpack_require__(/*! ../../store/index.js */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _CreateCharacterRaceComponent = __webpack_require__(/*! ./CreateCharacterRaceComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterRaceComponent.jsx");

var _CreateCharacterRaceComponent2 = _interopRequireDefault(_CreateCharacterRaceComponent);

var _CreateCharacterNameComponent = __webpack_require__(/*! ./CreateCharacterNameComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterNameComponent.jsx");

var _CreateCharacterNameComponent2 = _interopRequireDefault(_CreateCharacterNameComponent);

var _CreateCharacterGenStatsComponent = __webpack_require__(/*! ./CreateCharacterGenStatsComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterGenStatsComponent.jsx");

var _CreateCharacterGenStatsComponent2 = _interopRequireDefault(_CreateCharacterGenStatsComponent);

var _CreateCharacterClassComponent = __webpack_require__(/*! ./CreateCharacterClassComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterClassComponent.jsx");

var _CreateCharacterClassComponent2 = _interopRequireDefault(_CreateCharacterClassComponent);

var _CreateCharacterGenderComponent = __webpack_require__(/*! ./CreateCharacterGenderComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterGenderComponent.jsx");

var _CreateCharacterGenderComponent2 = _interopRequireDefault(_CreateCharacterGenderComponent);

var _CreateCharacterAlignmentComponent = __webpack_require__(/*! ./CreateCharacterAlignmentComponent.jsx */ "./src/js/components/CreateCharacterComponents/CreateCharacterAlignmentComponent.jsx");

var _CreateCharacterAlignmentComponent2 = _interopRequireDefault(_CreateCharacterAlignmentComponent);

var _CreateCharacterFavouredClassComponent = __webpack_require__(/*! ./CreateCharacterFavouredClassComponent */ "./src/js/components/CreateCharacterComponents/CreateCharacterFavouredClassComponent.jsx");

var _CreateCharacterFavouredClassComponent2 = _interopRequireDefault(_CreateCharacterFavouredClassComponent);

var _CreateCharacterPointBuyStatsComponent = __webpack_require__(/*! ./CreateCharacterPointBuyStatsComponent */ "./src/js/components/CreateCharacterComponents/CreateCharacterPointBuyStatsComponent.jsx");

var _CreateCharacterPointBuyStatsComponent2 = _interopRequireDefault(_CreateCharacterPointBuyStatsComponent);

var _CreateCharacterCustomStatsInput = __webpack_require__(/*! ./CreateCharacterCustomStatsInput */ "./src/js/components/CreateCharacterComponents/CreateCharacterCustomStatsInput.jsx");

var _CreateCharacterCustomStatsInput2 = _interopRequireDefault(_CreateCharacterCustomStatsInput);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterComponent = function (_React$Component) {
  _inherits(CreateCharacterComponent, _React$Component);

  function CreateCharacterComponent(props, context) {
    _classCallCheck(this, CreateCharacterComponent);

    var _this = _possibleConstructorReturn(this, (CreateCharacterComponent.__proto__ || Object.getPrototypeOf(CreateCharacterComponent)).call(this));

    _this.createNewCharacter = _this.createNewCharacter.bind(_this);
    _this.state = {
      characterStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      },
      baseCharacterStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      },
      gender: "",
      alignment: "",
      name: "",
      class: "",
      characterRace: "",
      favouredClass: "",
      racialBonus: {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      alignRenderKey: Math.random(),
      numberOfInvalidFields: 0,
      invalidFields: [""],
      show: false,
      numberOfCharacters: _index2.default.getState().characterReducer.numberOfCharacters,
      choseStatsMethod: "Roll",
      previousStatsMethod: "Roll",
      showStatsMethod: true
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.setRace = _this.setRace.bind(_this);
    _this.setName = _this.setName.bind(_this);
    _this.setStateStats = _this.setStateStats.bind(_this);
    _this.setClass = _this.setClass.bind(_this);
    _this.setGender = _this.setGender.bind(_this);
    _this.setAlignment = _this.setAlignment.bind(_this);
    _this.setFavouredClass = _this.setFavouredClass.bind(_this);
    _this.restrictAlignments = _this.restrictAlignments.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.setStateMethod = _this.setStateMethod.bind(_this);
    // this.GenStatsMethod = this.GenStatsMethod.bind(this);
    var dispatch = props.dispatch;

    _this.boundActionCreators = (0, _redux.bindActionCreators)(CharacterActionCreators, dispatch);
    return _this;
  }

  _createClass(CreateCharacterComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_index2.default.getState().userReducer.currentUser.isGuest) {
        var characterCount = _index2.default.getState().characterReducer.numberOfCharacters;
        if (characterCount > 10) {
          alert("Guest accounts limited to 10 characters. Please register to create more.");
          this.props.history.push("/characters");
        }
      }
    }
  }, {
    key: "createNewCharacter",
    value: function createNewCharacter(newCharacter) {
      var thisInst = this;
      var callbackRedirect = function callbackRedirect() {
        thisInst.props.history.push("/characters");
      };
      var dispatch = this.props.dispatch;

      var action = CharacterActionCreators.createCharacter(newCharacter, callbackRedirect);
      dispatch(action);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({
        numberOfInvalidFields: 0,
        invalidFields: []
      });
      var validationFields = ["name", "class", "characterRace", "alignment", "favouredClass", "gender"];
      var invalidFields = [];
      var numInvalidFields = 0;
      for (var i = 0; i < validationFields.length; i += 1) {
        var field = validationFields[i];
        if (this.state[field].toString() === "") {
          numInvalidFields += 1;
          invalidFields.push(field);
        }
      }
      if (numInvalidFields > 0) {
        this.setState({
          numberOfInvalidFields: numInvalidFields,
          invalidFields: invalidFields,
          show: true
        });
        return;
      }
      if (this.state.numberOfCharacters > 10) {
        alert("Guest accounts limited to 10 characters. Please register to create more.");
        this.props.history.push("/characters");
      }
      var userName = _index2.default.getState().userReducer.currentUserName;
      this.createNewCharacter({
        name: this.state.name,
        class: this.state.class,
        race: this.state.characterRace,
        level: 1,
        XP: 0,
        STR: this.state.characterStats.STR,
        DEX: this.state.characterStats.DEX,
        CON: this.state.characterStats.CON,
        INT: this.state.characterStats.INT,
        WIS: this.state.characterStats.WIS,
        CHA: this.state.characterStats.CHA,
        // attributePointsToSpend: 0,
        // items: {},
        // abilities: {},
        // traits: {},
        // characterNotes: [],
        type: "Player",
        gender: this.state.gender,
        alignment: this.state.alignment,
        favouredClass: this.state.favouredClass,
        racialBonus: this.state.racialBonus,
        user: userName
      });
      this.setState({ numberOfCharacters: this.state.numberOfCharacters + 1 });
    }
  }, {
    key: "setRace",
    value: function setRace(selectedRace, racialBonus) {
      if (racialBonus.statsBonus) {
        var rBon = racialBonus.statsBonus;
        var key = void 0;
        var newStats = Object.assign({}, this.state.baseCharacterStats);
        for (key in rBon) {
          newStats[key] = newStats[key] + rBon[key];
        }
        this.setState({ characterStats: newStats });
      } else {
        this.setState({ characterStats: this.state.baseCharacterStats });
      }
      this.setState({ characterRace: selectedRace, racialBonus: racialBonus });
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      this.setState({ name: newName });
    }
  }, {
    key: "setStateStats",
    value: function setStateStats(newStatsObject) {
      this.setState({
        characterStats: newStatsObject,
        baseCharacterStats: newStatsObject
      });
    }
  }, {
    key: "setClass",
    value: function setClass(newClass) {
      this.restrictAlignments(newClass);
      this.setState({
        class: newClass,
        alignment: "",
        alignRenderKey: Math.random()
      });
    }
  }, {
    key: "setFavouredClass",
    value: function setFavouredClass(newFavClass) {
      this.setState({ favouredClass: newFavClass });
    }
  }, {
    key: "setGender",
    value: function setGender(newGender) {
      this.setState({ gender: newGender });
    }
  }, {
    key: "setAlignment",
    value: function setAlignment(newAlignment) {
      this.setState({ alignment: newAlignment });
    }
  }, {
    key: "setStateMethod",
    value: function setStateMethod(e) {
      var prevMethod = this.state.choseStatsMethod;
      this.setState({ previousStatsMethod: prevMethod, choseStatsMethod: e.target.innerHTML });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var ValidationModal = function ValidationModal() {
        return _react2.default.createElement(
          "div",
          null,
          _this2.state.numberOfInvalidFields,
          " errors on submission.",
          _react2.default.createElement("br", null),
          "Please select character's:",
          _react2.default.createElement(InvalidFields, null)
        );
      };
      var InvalidFields = function InvalidFields() {
        _this2.state.invalidFields.map(function (field) {});
        return _react2.default.createElement(
          "ul",
          null,
          _this2.state.invalidFields.map(function (invalidField) {
            return _react2.default.createElement(
              "li",
              null,
              invalidField
            );
          })
        );
      };

      var GenStatsMethod = function GenStatsMethod() {
        if (_this2.state.choseStatsMethod === "Roll") {
          return _react2.default.createElement(_CreateCharacterGenStatsComponent2.default, {
            setStateStats: _this2.setStateStats,
            characterStats: _this2.state.characterStats,
            racialBonus: _this2.state.racialBonus
          });
        } else if (_this2.state.choseStatsMethod === "Buy") {
          return _react2.default.createElement(_CreateCharacterPointBuyStatsComponent2.default, null);
        } else if (_this2.state.choseStatsMethod === "Custom") {
          return _react2.default.createElement(_CreateCharacterCustomStatsInput2.default, {
            setStateStats: _this2.setStateStats,
            characterStats: _this2.state.characterStats,
            racialBonus: _this2.state.racialBonus });
        }
      };
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        { className: cssStyles.createCharacterPanelParent },
        _react2.default.createElement(
          _reactBootstrap.Panel.Heading,
          { className: cssStyles.createCharacterPanelHeaderStyle },
          _react2.default.createElement(
            _reactBootstrap.Panel.Title,
            {
              className: cssStyles.createCharacterPanelHeaderStyleText
            },
            "Create Character"
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Form,
          { horizontal: true },
          _react2.default.createElement(_CreateCharacterNameComponent2.default, { updateName: this.setName }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              {
                componentClass: _reactBootstrap.ControlLabel,
                sm: 3,
                className: cssStyles.createColLabelStyle
              },
              _react2.default.createElement(
                "div",
                { style: { fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" } },
                "Choose Stats method:"
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 7, style: { marginLeft: '45px' } },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.setStateMethod, className: cssStyles.statsMethodButtons },
                  "Roll"
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.setStateMethod, className: cssStyles.statsMethodButtons },
                  "Custom"
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(GenStatsMethod, null)
          ),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(_CreateCharacterRaceComponent2.default, { setRace: this.setRace.bind(this) }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(_CreateCharacterClassComponent2.default, { updateClass: this.setClass }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(_CreateCharacterFavouredClassComponent2.default, {
            updateFavClass: this.setFavouredClass
          }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(_CreateCharacterGenderComponent2.default, { updateGender: this.setGender }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(_CreateCharacterAlignmentComponent2.default, {
            updateAlignment: this.setAlignment,
            allowedAlignments: this.state.allowedAlignments,
            renderKey: this.state.alignRenderKey
          }),
          _react2.default.createElement("hr", { className: cssStyles.hr }),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: cssStyles.createColStyle },
            _react2.default.createElement(_reactBootstrap.Col, { sm: 8 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: "primary", onClick: this.handleSubmit },
                  "Create"
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/home" },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: "link" },
                    "Discard"
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal,
              {
                show: this.state.show,
                onHide: this.handleClose,
                className: cssStyles.createCharacterClassModal
              },
              _react2.default.createElement(
                _reactBootstrap.Modal.Header,
                { closeButton: true },
                _react2.default.createElement(
                  _reactBootstrap.Modal.Title,
                  null,
                  "Invalid Submission"
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Modal.Body,
                null,
                _react2.default.createElement(ValidationModal, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Modal.Footer,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClose },
                  "Close"
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactBootstrap.Col, { sm: 7 }),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: "link" },
                  "Proceed to Skills (Under Construction)"
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: "restrictAlignments",
    value: function restrictAlignments(newClass) {
      switch (newClass) {
        case "Monk":
          this.setState({ allowedAlignments: ["LG", "LN", "LE"] });
          break;
        case "Wizard":
          this.setState({
            allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
          });
          break;
        case "Fighter":
          this.setState({
            allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
          });
          break;
        case "Druid":
          this.setState({ allowedAlignments: ["NG", "LN", "N", "CN", "NE"] });
          break;
        case "Ranger":
          this.setState({
            allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
          });
          break;
        case "Cleric":
          this.setState({
            allowedAlignments: []
          });
          break;
        case "Rogue":
          this.setState({
            allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
          });
          break;
        case "Sorcerer":
          this.setState({
            allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]
          });
          break;
        case "Paladin":
          this.setState({ allowedAlignments: ["LG"] });
          break;
        case "Barbarian":
          this.setState({
            allowedAlignments: ["NG", "CG", "N", "CN", "NE", "CE"]
          });
          break;
      }
    }
  }]);

  return CreateCharacterComponent;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()(CreateCharacterComponent));

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterCustomStatsInput.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterCustomStatsInput.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    width: "45px",
    marginLeft: "45px"
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontFamily: '"Crimson Text", serif'
  }
};

var CreateCharacterCustomStatsInput = function (_React$Component) {
  _inherits(CreateCharacterCustomStatsInput, _React$Component);

  function CreateCharacterCustomStatsInput(props) {
    _classCallCheck(this, CreateCharacterCustomStatsInput);

    var _this = _possibleConstructorReturn(this, (CreateCharacterCustomStatsInput.__proto__ || Object.getPrototypeOf(CreateCharacterCustomStatsInput)).call(this, props));

    _this.state = {
      characterStats: {
        STR: "",
        DEX: "",
        CON: "",
        INT: "",
        WIS: "",
        CHA: ""
      },
      racialBonus: ""
    };
    _this.increaseStat = _this.increaseStat.bind(_this);
    _this.decreaseStat = _this.decreaseStat.bind(_this);
    return _this;
  }

  _createClass(CreateCharacterCustomStatsInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        characterStats: props.characterStats,
        racialBonus: props.racialBonus
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        characterStats: this.props.characterStats,
        racialBonus: this.props.racialBonus
      });
    }
  }, {
    key: "increaseStat",
    value: function increaseStat(e) {
      var newCharStats = this.state.characterStats;
      if (this.state.characterStats[e.currentTarget.name] < 30) {
        switch (e.currentTarget.name) {
          case "STR":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.STR = newCharStats.STR + 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "DEX":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.DEX = newCharStats.DEX + 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "CON":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.CON = newCharStats.CON + 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "INT":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.INT = newCharStats.INT + 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "WIS":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.WIS = newCharStats.WIS + 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "CHA":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.CHA = newCharStats.CHA + 1;
            this.setState({ characterStats: newCharStats });
            break;
          default:
            break;
        }
        this.props.setStateStats(newCharStats);
      } else {}
    }
  }, {
    key: "decreaseStat",
    value: function decreaseStat(e) {
      var newCharStats = this.state.characterStats;
      if (this.state.characterStats[e.currentTarget.name] > 0) {

        switch (e.currentTarget.name) {
          case "STR":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.STR = newCharStats.STR - 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "DEX":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.DEX = newCharStats.DEX - 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "CON":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.CON = newCharStats.CON - 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "INT":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.INT = newCharStats.INT - 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "WIS":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.WIS = newCharStats.WIS - 1;
            this.setState({ characterStats: newCharStats });
            break;
          case "CHA":
            newCharStats = Object.assign({}, this.state.characterStats);
            newCharStats.CHA = newCharStats.CHA - 1;
            this.setState({ characterStats: newCharStats });
            break;
          default:
            break;
        }
        this.props.setStateStats(newCharStats);
      } else {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var PlusButtonFormGroup = function PlusButtonFormGroup() {
        return _react2.default.createElement(
          _reactstrap.FormGroup,
          { className: cssStyles.customStatsIcons },
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "STR", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus", id: "STR" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "DEX", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus", id: "DEX" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "CON", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "INT", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "WIS", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.increaseStat, name: "CHA", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-plus" })
            )
          )
        );
      };
      var MinusButtonFormGroup = function MinusButtonFormGroup() {
        return _react2.default.createElement(
          _reactstrap.FormGroup,
          { className: cssStyles.customStatsIcons },
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "STR", style: { backgroundColor: 'transparent' } },
              _react2.default.createElement("i", { className: "fas fa-minus", id: "STR" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "DEX", style: { backgroundColor: 'transparent' } },
              _react2.default.createElement("i", { className: "fas fa-minus", id: "DEX" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "CON", style: { backgroundColor: 'transparent' } },
              _react2.default.createElement("i", { className: "fas fa-minus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "INT", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-minus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "WIS", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-minus" })
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsSize: "small", onClick: _this2.decreaseStat, name: "CHA", style: { backgroundColor: 'transparent' } },
              " ",
              _react2.default.createElement("i", { className: "fas fa-minus" })
            )
          )
        );
      };
      var ShowRacialBonus = function ShowRacialBonus() {
        if (_this2.props.racialBonus.statsBonus) {
          var rBon = _this2.props.racialBonus.statsBonus;
          var key = void 0;
          var infoString = "Racial bonus available: ";

          for (key in rBon) {
            if (rBon[key] > 0) {
              infoString += key + ": +" + rBon[key] + ", ";
            } else {
              infoString += key + ": " + rBon[key];
            }
          }
          return _react2.default.createElement(
            "div",
            { style: { wordSpacing: "3px" } },
            infoString
          );
        } else {
          return _react2.default.createElement("div", null);
        }
      };
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(StatsHeaderFormGroup, null),
        _react2.default.createElement(PlusButtonFormGroup, null),
        _react2.default.createElement(
          _reactstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.STR
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.DEX
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.CON
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.INT
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.WIS
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.FormControl.Static,
              { className: cssStyles.genStatsNumberStyle },
              this.state.characterStats.CHA
            )
          )
        ),
        _react2.default.createElement(MinusButtonFormGroup, null),
        _react2.default.createElement(
          _reactstrap.FormGroup,
          null,
          _react2.default.createElement(_reactstrap.Col, { sm: 4 }),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: 6 },
            _react2.default.createElement(ShowRacialBonus, null)
          )
        )
      );
    }
  }]);

  return CreateCharacterCustomStatsInput;
}(_react2.default.Component);

var StatsHeaderFormGroup = function StatsHeaderFormGroup() {
  return _react2.default.createElement(
    _reactstrap.FormGroup,
    null,
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "STR"
    ),
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "DEX"
    ),
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "CON"
    ),
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "INT"
    ),
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "WIS"
    ),
    _react2.default.createElement(
      _reactstrap.Col,
      {
        componentClass: _reactBootstrap.ControlLabel,
        sm: 2,
        className: cssStyles.createColStyle
      },
      "CHA"
    )
  );
};
exports.default = (0, _styles.withStyles)(styles)(CreateCharacterCustomStatsInput);

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterFavouredClassComponent.jsx":
/*!***********************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterFavouredClassComponent.jsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterFavouredClassComponent = function (_React$Component) {
  _inherits(CreateCharacterFavouredClassComponent, _React$Component);

  function CreateCharacterFavouredClassComponent(props) {
    _classCallCheck(this, CreateCharacterFavouredClassComponent);

    var _this = _possibleConstructorReturn(this, (CreateCharacterFavouredClassComponent.__proto__ || Object.getPrototypeOf(CreateCharacterFavouredClassComponent)).call(this));

    _this.saveFavouredClass = _this.saveFavouredClass.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.state = {
      show: false,
      selectedFavouredClass: ""
    };
    return _this;
  }

  _createClass(CreateCharacterFavouredClassComponent, [{
    key: "saveFavouredClass",
    value: function saveFavouredClass(e) {
      var targetText = e.target.textContent.toString();
      this.props.updateFavClass(targetText);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({ show: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({ show: true });
    }
  }, {
    key: "render",
    value: function render() {
      var favouredClassDivStyle = {
        fontSize: "19px",
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: "left"
      };
      var favouredClassInfoImgStyle = {
        backgroundColor: "transparent"

      };
      var _props = this.props,
          children = _props.children,
          active = _props.active,
          colorize = _props.colorize;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            {
              componentClass: _reactBootstrap.ControlLabel,
              sm: 1
            },
            _react2.default.createElement(
              "div",
              { style: favouredClassDivStyle },
              " ",
              _react2.default.createElement(
                "strong",
                null,
                "Favoured Class:"
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleShow, style: favouredClassInfoImgStyle },
              _react2.default.createElement("i", { style: favouredClassInfoImgStyle, className: "far fa-question-circle" })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 7 },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.ToggleButtonGroup,
                {
                  type: "radio",
                  name: "raceValue",
                  onClick: this.saveFavouredClass,
                  className: cssStyles.favouredClassButtonGroup
                },
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Barbarian",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Barbarian"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Monk",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Monk"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Wizard",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Wizard"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Ranger",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Ranger"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Druid",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Druid"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Paladin",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Paladin"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Sorcerer",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Sorcerer"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Rogue",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Rogue"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Fighter",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Fighter"
                ),
                " ",
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Cleric",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Cleric"
                ),
                " ",
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Bard",
                    className: cssStyles.favouredClassButtonGroup
                  },
                  "Bard"
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 1 },
            _react2.default.createElement(
              _reactBootstrap.Modal,
              { show: this.state.show, onHide: this.handleClose },
              _react2.default.createElement(
                _reactBootstrap.Modal.Header,
                { closeButton: true },
                _react2.default.createElement(
                  _reactBootstrap.Modal.Title,
                  null,
                  "Favoured Class Selection"
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Modal.Body,
                null,
                _react2.default.createElement(
                  "div",
                  { style: favouredClassDivStyle },
                  "Each character begins play with a single favored class of his choosing. Whenever a character gains a level in his favored class, he receives either + 1 hit point or + 1 skill rank. The choice of favored class cannot be changed once the character is created, and the choice of gaining a hit point or a skill rank each time a character gains a level (including his first level) cannot be changed once made for a particular level."
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Modal.Footer,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClose },
                  "Close"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateCharacterFavouredClassComponent;
}(_react2.default.Component);

exports.default = CreateCharacterFavouredClassComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterGenStatsComponent.jsx":
/*!******************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterGenStatsComponent.jsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterGenStatsComponent = function (_React$Component) {
	_inherits(CreateCharacterGenStatsComponent, _React$Component);

	function CreateCharacterGenStatsComponent(props) {
		_classCallCheck(this, CreateCharacterGenStatsComponent);

		var _this = _possibleConstructorReturn(this, (CreateCharacterGenStatsComponent.__proto__ || Object.getPrototypeOf(CreateCharacterGenStatsComponent)).call(this, props));

		_this.generateStats = _this.generateStats.bind(_this);
		_this.state = {
			characterStats: {
				STR: 15,
				DEX: 14,
				CON: 13,
				INT: 12,
				WIS: 10,
				CHA: 8
			},
			racialBonus: {}
		};
		return _this;
	}

	_createClass(CreateCharacterGenStatsComponent, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(props) {
			this.setState({ characterStats: props.characterStats, racialBonus: props.racialBonus });
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			if (this.props.characterStats) {
				this.setState({ characterStats: this.props.characterStats, racialBonus: this.props.racialBonus });
			}
		}
	}, {
		key: "generateStats",
		value: function generateStats() {
			var newStats = [];
			// Use 4d6 lowest drop method
			var i = void 0;
			var j = void 0;
			var currentStat = 0;
			var statRolls = [];
			for (i = 0; i < 6; i += 1) {
				statRolls = [];
				currentStat = 0;
				for (j = 0; j < 4; j += 1) {
					var roll = Math.random() * 6;
					while (roll < 1) {

						roll = Math.random() * 6;
					}
					statRolls.push(Math.floor(roll) + 1);
				}
				statRolls.sort();
				currentStat = statRolls[1] + statRolls[2] + statRolls[3];
				newStats.push(currentStat);
			}
			var newHeroStats = {
				STR: newStats[0],
				DEX: newStats[1],
				CON: newStats[2],
				INT: newStats[3],
				WIS: newStats[4],
				CHA: newStats[5]
			};
			this.props.setStateStats(newHeroStats);
			this.setState({ characterStats: newHeroStats });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var ShowRacialBonus = function ShowRacialBonus() {
				if (_this2.props.racialBonus.statsBonus) {
					var rBon = _this2.props.racialBonus.statsBonus;
					var key = void 0;
					var infoString = "Racial bonus applied to stats: ";

					for (key in rBon) {
						if (rBon[key] > 0) {
							infoString += key + ": +" + rBon[key] + ", ";
						} else {
							infoString += key + ": " + rBon[key];
						}
					}return _react2.default.createElement(
						"div",
						{ style: { wordSpacing: '3px' } },
						infoString
					);
				} else {
					return _react2.default.createElement("div", null);
				}
			};
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(GenerateStatsFormGroup, { genStats: this.generateStats, racialBonus: this.state.racialBonus }),
				_react2.default.createElement(StatsHeaderFormGroup, null),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.STR
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.DEX
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.CON
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.INT
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.WIS
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 2 },
						_react2.default.createElement(
							_reactBootstrap.FormControl.Static,
							{ className: cssStyles.genStatsNumberStyle },
							this.state.characterStats.CHA
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 6 },
						_react2.default.createElement(ShowRacialBonus, null)
					)
				)
			);
		}
	}]);

	return CreateCharacterGenStatsComponent;
}(_react2.default.Component);

exports.default = CreateCharacterGenStatsComponent;

var GenerateStatsFormGroup = function (_React$Component2) {
	_inherits(GenerateStatsFormGroup, _React$Component2);

	function GenerateStatsFormGroup(props) {
		_classCallCheck(this, GenerateStatsFormGroup);

		return _possibleConstructorReturn(this, (GenerateStatsFormGroup.__proto__ || Object.getPrototypeOf(GenerateStatsFormGroup)).call(this));
	}

	_createClass(GenerateStatsFormGroup, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 4, style: { marginLeft: '20px' }, className: cssStyles.createColLabelStyle },
					_react2.default.createElement(
						_reactBootstrap.ButtonToolbar,
						null,
						_react2.default.createElement(
							_reactBootstrap.OverlayTrigger,
							{ placement: "right", overlay: _react2.default.createElement(
									_reactBootstrap.Tooltip,
									{ id: "tooltip" },
									"Roll 4d6 keep best 3 dice (re-roll all 1's)"
								) },
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ className: cssStyles.rollForStatsButton, bsStyle: "primary", onClick: this.props.genStats },
								"Roll For Stats"
							)
						)
					)
				)
			);
		}
	}]);

	return GenerateStatsFormGroup;
}(_react2.default.Component);

var StatsHeaderFormGroup = function StatsHeaderFormGroup() {
	return _react2.default.createElement(
		_reactBootstrap.FormGroup,
		null,
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"STR"
		),
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"DEX"
		),
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"CON"
		),
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"INT"
		),
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"WIS"
		),
		_react2.default.createElement(
			_reactBootstrap.Col,
			{
				componentClass: _reactBootstrap.ControlLabel,
				sm: 2,
				className: cssStyles.createColStyle
			},
			"CHA"
		)
	);
};

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterGenderComponent.jsx":
/*!****************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterGenderComponent.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterGenderComponent = function (_React$Component) {
	_inherits(CreateCharacterGenderComponent, _React$Component);

	function CreateCharacterGenderComponent(props) {
		_classCallCheck(this, CreateCharacterGenderComponent);

		var _this = _possibleConstructorReturn(this, (CreateCharacterGenderComponent.__proto__ || Object.getPrototypeOf(CreateCharacterGenderComponent)).call(this));

		_this.state = {
			gender: ""
		};
		return _this;
	}

	_createClass(CreateCharacterGenderComponent, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var changeGender = function changeGender(e) {
				var newGender = e.target.textContent.toString();
				_this2.props.updateGender(newGender);
				_this2.setState({ gender: newGender });
			};

			// const ShowGenderImage =(props) => {
			// 	const gender = this.state.gender.toString();
			// 	if(gender === "Male"){
			// 		return (
			// 			<img
			// 				src={require("../../../assets/mymalesymbol.png")}
			// 				width="50"
			// 				height="50"
			// 				alt=""
			//
			// 			/>
			//
			// 		);
			// 	} else if (gender === "Female"){
			// 		return (
			// 			<img
			// 				src={require("../../../assets/myfemalesymbol.png")}
			// 				width="40"
			// 				height="50"
			// 				alt=""
			// 			/>
			// 		);
			// 	} else {
			// 		return (
			// 			<img
			// 				src={require("../../../assets/myotherymbol.png")}
			// 				width="33"
			// 				height="50"
			// 				alt=""
			// 			/>
			// 		);
			// 	}
			// };
			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{
						componentClass: _reactBootstrap.ControlLabel,
						sm: 2,
						className: cssStyles.createColLabelStyle
					},
					_react2.default.createElement(
						"div",
						{ style: { fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" } },
						"Gender:"
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 5 },
					_react2.default.createElement(
						_reactBootstrap.ToggleButtonGroup,
						{
							type: "radio",
							name: "gender",
							className: cssStyles.genderButtonGroup
						},
						_react2.default.createElement(
							_reactBootstrap.ToggleButton,
							{
								value: "Male",
								className: cssStyles.genderButtonGroup,
								onClick: changeGender
							},
							"Male"
						),
						_react2.default.createElement(
							_reactBootstrap.ToggleButton,
							{
								value: "Female",
								className: cssStyles.genderButtonGroup,
								onClick: changeGender
							},
							"Female"
						),
						_react2.default.createElement(
							_reactBootstrap.ToggleButton,
							{
								value: "Other",
								className: cssStyles.genderButtonGroup,
								onClick: changeGender
							},
							"Other"
						)
					)
				),
				_react2.default.createElement(_reactBootstrap.Col, { sm: 1 })
			);
		}
	}]);

	return CreateCharacterGenderComponent;
}(_react2.default.Component);

exports.default = CreateCharacterGenderComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterNameComponent.jsx":
/*!**************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterNameComponent.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	root: {
		marginTop: '8px',
		width: 'calc(100% - 150px)'
	},
	input: {
		color: "white",
		fontSize: 18
	}

};

var CreateCharacterNameComponent = function (_React$Component) {
	_inherits(CreateCharacterNameComponent, _React$Component);

	function CreateCharacterNameComponent() {
		_classCallCheck(this, CreateCharacterNameComponent);

		return _possibleConstructorReturn(this, (CreateCharacterNameComponent.__proto__ || Object.getPrototypeOf(CreateCharacterNameComponent)).apply(this, arguments));
	}

	_createClass(CreateCharacterNameComponent, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var classes = this.props.classes;

			var changeName = function changeName() {
				_this2.props.updateName(_this2.characterName.value.trim());
			};
			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{
						componentClass: _reactBootstrap.ControlLabel,
						sm: 2,
						className: cssStyles.createColLabelStyle
					},
					_react2.default.createElement(
						"div",
						{ style: { fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" } },
						"Name:"
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 8 },
					_react2.default.createElement(_core.TextField, {
						id: "nameInput",
						placeholder: "Enter Character Name",

						margin: "normal",
						inputRef: function inputRef(ref) {
							_this2.characterName = ref;
						},

						onChange: changeName,
						className: classes.root,
						InputProps: {
							className: classes.input

						}
					})
				)
			);
		}
	}]);

	return CreateCharacterNameComponent;
}(_react2.default.Component);

CreateCharacterNameComponent.propTypes = {
	classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(CreateCharacterNameComponent);

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterPointBuyStatsComponent.jsx":
/*!***********************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterPointBuyStatsComponent.jsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterPointBuyStatsComponent = function (_React$Component) {
	_inherits(CreateCharacterPointBuyStatsComponent, _React$Component);

	function CreateCharacterPointBuyStatsComponent(props) {
		_classCallCheck(this, CreateCharacterPointBuyStatsComponent);

		return _possibleConstructorReturn(this, (CreateCharacterPointBuyStatsComponent.__proto__ || Object.getPrototypeOf(CreateCharacterPointBuyStatsComponent)).call(this));
	}
	//PlaceHolder for the points buy component: start all stats at 10 and have either 10,15,20, 25 points to spend


	_createClass(CreateCharacterPointBuyStatsComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ style: { textAlign: 'center' } },
				"Under construction"
			);
		}
	}]);

	return CreateCharacterPointBuyStatsComponent;
}(_react2.default.Component);

exports.default = CreateCharacterPointBuyStatsComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/CreateCharacterRaceComponent.jsx":
/*!**************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/CreateCharacterRaceComponent.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterRaceComponent = function (_React$Component) {
  _inherits(CreateCharacterRaceComponent, _React$Component);

  function CreateCharacterRaceComponent(props, context) {
    _classCallCheck(this, CreateCharacterRaceComponent);

    var _this = _possibleConstructorReturn(this, (CreateCharacterRaceComponent.__proto__ || Object.getPrototypeOf(CreateCharacterRaceComponent)).call(this));

    _this.changeRaceInfo = _this.changeRaceInfo.bind(_this);
    _this.state = {
      race: "",
      racialBonus: {},
      raceInfo: "",
      showRaceInfo: false,
      prevButtonPressed: ""
    };
    return _this;
  }

  _createClass(CreateCharacterRaceComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var raceDivStyle = {
        fontSize: "17px !important",
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: "left"
      };
      var RaceTextToggle = function RaceTextToggle() {

        if (_this2.state.showRaceInfo) {
          return _react2.default.createElement(
            "div",
            { style: raceDivStyle },
            " ",
            _this2.state.raceInfo
          );
        } else {
          return _react2.default.createElement("div", null);
        }
      };
      var changeRace = function changeRace(e) {
        var targetText = e.target.textContent.toString();
        if (!_this2.state.showRaceInfo) {
          _this2.setState({ showRaceInfo: true });
        }
        if (targetText === _this2.state.prevButtonPressed) {
          if (_this2.state.showRaceInfo) {
            _this2.setState({ showRaceInfo: !_this2.state.showRaceInfo });
          } else {}
        } else {
          _this2.setState({ showRaceInfo: true });
        }
        var racialBonus = _this2.changeRaceInfo(targetText);
        _this2.setState({ prevButtonPressed: targetText });
        _this2.props.setRace(targetText, racialBonus.racialBonus);
        _this2.setState({ race: targetText, racialBonus: racialBonus.racialBonus });
      };
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            {
              componentClass: _reactBootstrap.ControlLabel,
              sm: 2,
              className: cssStyles.createColLabelStyle
            },
            _react2.default.createElement(
              "div",
              { style: { fontFamily: "'Josefin Sans', sans-serif", fontSize: '19px' } },
              "Race:"
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 7 },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.ToggleButtonGroup,
                {
                  type: "radio",
                  name: "raceValue",
                  onClick: changeRace,
                  className: cssStyles.alignmentButtonGroupParent
                },
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Human",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Human"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Dwarf",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Dwarf"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Elf",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Elf"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Halfling",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Halfling"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Gnome",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Gnome"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Half-Orc",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Half-Orc"
                ),
                _react2.default.createElement(
                  _reactBootstrap.ToggleButton,
                  {
                    value: "Half-Elf",
                    className: cssStyles.alignmentButtonGroup
                  },
                  "Half-Elf"
                )
              )
            )
          )
        ),
        _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_reactBootstrap.Col, { sm: 1 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 8 },
            _react2.default.createElement(
              _reactBootstrap.Collapse,
              { "in": this.state.showRaceInfo, style: raceDivStyle },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  _reactBootstrap.Well,
                  { style: { backgroundColor: 'transparent' } },
                  this.state.raceInfo
                )
              )
            )
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 2 })
        )
      );
    }
  }, {
    key: "changeRaceInfo",
    value: function changeRaceInfo(currentRace) {
      switch (currentRace) {
        case "Human":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              " ",
              _react2.default.createElement(
                "strong",
                null,
                "+2 to One Ability Score "
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Medium:"
              ),
              " Humans are medium sized creatures, receiving no bonuses or penalties for their size.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Normal Speed:"
              ),
              " Humans possess a 30 foot move speed .",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Bonus Feat:"
              ),
              " Select ",
              _react2.default.createElement(
                "i",
                null,
                "One"
              ),
              " extra feat and level 1.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Skilled:"
              ),
              " Gain ",
              _react2.default.createElement(
                "i",
                null,
                "One"
              ),
              " additional skill rank at level 1, and ",
              _react2.default.createElement(
                "i",
                null,
                "One"
              ),
              " additional rank when leveling up.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages:"
              ),
              " Humans speak common. Humans with high intelligence can choose any languages excluding hidden languages."
            )
          });
          return { racialBonus: { abilityBonus: 2 } };
        case "Dwarf":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 Constitution, +2 Wisdom, -2 Charisma:"
              ),
              "Dwarves are tough and wise, but can be blunt.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Medium:"
              ),
              " Dwarves are medium sized creatures, receiving no bonuses or penalties for their size.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Slow and Steady:"
              ),
              " Dwarves possess a 20 foot move speed but their speed is never modified by armor or encumbrance.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Dark Vision:"
              ),
              " Can see in the dark up to 60 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Defensive Training:"
              ),
              " +4 to dodge bonus AC against ",
              _react2.default.createElement(
                "i",
                null,
                "giant"
              ),
              " monsters.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Greed:"
              ),
              " +2 bonus to ",
              _react2.default.createElement(
                "i",
                null,
                "Appraise"
              ),
              " skill checks made to determine the price of nonmagical goods containing precious metals or gemstones.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Hatred:"
              ),
              " +1 bonus attack rolls against orc and goblin subtypes.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Hardy:"
              ),
              " +2 racial bonus saving throws against poison, spells, and spell-like abilities.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Stability:"
              ),
              " +4 racial bonus to ",
              _react2.default.createElement(
                "i",
                null,
                "Combat Maneuver Defense"
              ),
              " when resisting bull rush or trip attempts while standing on ground.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Stonecunning:"
              ),
              " Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Weapon Familiarity:"
              ),
              " Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages:"
              ),
              " Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon.",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { statsBonus: {
                CON: 2, WIS: 2, CHA: -2
              } } };
        case "Elf":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 Dexterity, +2 Intelligence, \u20132 Constitution:"
              ),
              " Elves are nimble, both in body and mind, but their form is frail.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Medium:"
              ),
              " Elves are medium sized creatures, receiving no bonuses or penalties for their size.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Normal Speed:"
              ),
              " Elves have a base speed of 30 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Low-Light Vision:"
              ),
              " Elves can see twice as far as humans in conditions of dim light.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Elven Immunities:"
              ),
              " Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Elven Magic:"
              ),
              " Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Keen Senses:"
              ),
              " Elves receive a +2 racial bonus on Perception skill checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Weapon Familiarity:"
              ),
              " Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages:"
              ),
              " Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { statsBonus: {
                DEX: 2, INT: 2, CON: -2
              } } };
        case "Gnome":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 Constitution, +2 Charisma, \u20132 Strength:"
              ),
              " Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Small:"
              ),
              " Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a \u20131 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Slow Speed:"
              ),
              " Gnomes have a base speed of 20 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Low-Light Vision:"
              ),
              " Gnomes can see twice as far as humans in conditions of dim light.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Defensive Training:"
              ),
              " Gnomes get a +4 dodge bonus to AC against monsters of the giant type.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Gnome Magic: "
              ),
              " Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day\u2014dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Hatred:"
              ),
              " Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Keen Senses:"
              ),
              " Gnomes receive a +2 racial bonus on Perception skill checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Obsessive:"
              ),
              " Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Weapon Familiarity:"
              ),
              " Gnomes treat any weapon with the word \"gnome\" in its name as a martial weapon.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages: "
              ),
              " Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { statsBonus: {
                CON: 2, CHA: 2, STR: -2
              } } };
        case "Half-Elf":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 to One Ability Score: "
              ),
              " Half-elf characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Medium: "
              ),
              " Half-elves are Medium creatures and have no bonuses or penalties due to their size.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Normal Speed: "
              ),
              " Half-elves have a base speed of 30 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Low-Light Vision:"
              ),
              " Half-elves can see twice as far as humans in conditions of dim light. ",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Adaptability:"
              ),
              "Half-elves receive Skill Focus as a bonus feat at 1st level.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Elf Blood:"
              ),
              " Half-elves count as both elves and humans for any effect related to race.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Elven Immunities:"
              ),
              " Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Keen Senses:"
              ),
              " Half-elves receive a +2 racial bonus on Perception skill checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Multitalented: "
              ),
              " Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages: "
              ),
              " Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { abilityBonus: 2 } };
        case "Half-Orc":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 to One Ability Score: "
              ),
              " Half-orc characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Medium: "
              ),
              " Half-orcs are Medium creatures and have no bonuses or penalties due to their size.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Normal Speed: "
              ),
              " Half-orcs have a base speed of 30 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Darkvision:"
              ),
              " Half-orcs can see in the dark up to 60 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Intimidating: "
              ),
              "Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Orc Blood: "
              ),
              " Half-orcs count as both humans and orcs for any effect related to race.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Orc Ferocity:"
              ),
              " Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Weapon Familiarity: "
              ),
              " Half-orcs are proficient with greataxes and falchions and treat any weapon with the word \"orc\" in its name as a martial weapon.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages: "
              ),
              " Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { abilityBonus: 2 } };
        case "Halfling":
          this.setState({
            raceInfo: _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "+2 Dexterity, +2 Charisma, \u20132 Strength: "
              ),
              " Halflings are nimble and strong-willed, but their small stature makes them weaker than other races.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Small: "
              ),
              " Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a \u20131 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Slow Speed:"
              ),
              " Halflings have a base speed of 20 feet.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Fearless:"
              ),
              " Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Halfling Luck:"
              ),
              " Halflings receive a +1 racial bonus on all saving throws.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Keen Senses:"
              ),
              " Halflings receive a +2 racial bonus on Perception skill checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Sure-Footed:"
              ),
              " Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Weapon Familiarity: "
              ),
              " Halflings are proficient with slings and treat any weapon with the word \"halfling\" in its name as a martial weapon.",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "strong",
                null,
                "Languages: "
              ),
              " Halflings begin play speaking Common and Halfling. Halflings with high Intelligence scores can choose from the following: Dwarven, Elven, Gnome, and Goblin.",
              _react2.default.createElement("br", null)
            )
          });
          return { racialBonus: { statsBonus: {
                DEX: 2, CHA: 2, STR: -2
              } } };
        default:
          this.setState({ raceInfo: '' });
      }
    }
  }]);

  return CreateCharacterRaceComponent;
}(_react2.default.Component);

exports.default = CreateCharacterRaceComponent;

/***/ }),

/***/ "./src/js/components/CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx":
/*!*******************************************************************************************************!*\
  !*** ./src/js/components/CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _Panel = __webpack_require__(/*! react-bootstrap/es/Panel */ "./node_modules/react-bootstrap/es/Panel.js");

var _Panel2 = _interopRequireDefault(_Panel);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCharacterSkillsComponent = function (_React$Component) {
	_inherits(CreateCharacterSkillsComponent, _React$Component);

	function CreateCharacterSkillsComponent(props) {
		_classCallCheck(this, CreateCharacterSkillsComponent);

		var _this = _possibleConstructorReturn(this, (CreateCharacterSkillsComponent.__proto__ || Object.getPrototypeOf(CreateCharacterSkillsComponent)).call(this));

		_this.state = {};
		return _this;
	}

	_createClass(CreateCharacterSkillsComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				_Panel2.default,
				{ className: cssStyles.createHeroPanelParent },
				_react2.default.createElement(
					_Panel2.default.Heading,
					{ className: cssStyles.createHeroPanelHeaderStyle },
					_react2.default.createElement(
						_Panel2.default.Title,
						{ toggle: true, className: cssStyles.createHeroPanelHeaderStyleText },
						"Create Character"
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Form,
					{ horizontal: true },
					_react2.default.createElement(
						"div",
						null,
						"This is a placeholder for the seconds creation section"
					),
					_react2.default.createElement("hr", { className: cssStyles.hr }),
					_react2.default.createElement(
						_reactBootstrap.FormGroup,
						null,
						_react2.default.createElement(_reactBootstrap.Col, { sm: 3 }),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ sm: 3 },
							_react2.default.createElement(
								_reactBootstrap.ButtonToolbar,
								null,
								_react2.default.createElement(
									_reactBootstrap.Button,
									{ bsStyle: "primary" },
									"Create"
								),
								_react2.default.createElement(
									_reactRouterBootstrap.LinkContainer,
									{ to: "/home" },
									_react2.default.createElement(
										_reactBootstrap.Button,
										{ bsStyle: "link" },
										"Discard Character"
									)
								)
							)
						),
						_react2.default.createElement(_reactBootstrap.Col, { sm: 3 })
					)
				)
			);
		}
	}]);

	return CreateCharacterSkillsComponent;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(CreateCharacterSkillsComponent);

/***/ }),

/***/ "./src/js/components/CreateNPC/CreateNPCComponent.jsx":
/*!************************************************************!*\
  !*** ./src/js/components/CreateNPC/CreateNPCComponent.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateNPCComponent = function (_React$Component) {
    _inherits(CreateNPCComponent, _React$Component);

    function CreateNPCComponent() {
        _classCallCheck(this, CreateNPCComponent);

        return _possibleConstructorReturn(this, (CreateNPCComponent.__proto__ || Object.getPrototypeOf(CreateNPCComponent)).apply(this, arguments));
    }

    _createClass(CreateNPCComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'This is a placeholder for the Create NPC section'
            );
        }
    }]);

    return CreateNPCComponent;
}(_react2.default.Component);

exports.default = CreateNPCComponent;

/***/ }),

/***/ "./src/js/components/HomeComponent.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/HomeComponent.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _OccultYoon = __webpack_require__(/*! ../../../public/assets/OccultYoon.png */ "./public/assets/OccultYoon.png");

var _OccultYoon2 = _interopRequireDefault(_OccultYoon);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeComponent(props) {
  return _react2.default.createElement(
    "div",
    { className: cssStyles.homeBodyText },
    "Welcome to the Arena",
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "div",
      { className: cssStyles.homeTextParagraph },
      "This is a work in progress and currently only supports desktop browsers, best with Chrome.",
      _react2.default.createElement("br", null),
      "I am constantly updating and implementing new features. Currently there is just a ",
      _react2.default.createElement("br", null),
      "basic framework of what I want to eventually accomplish, feel free to look around. Thanks for visiting!",
      _react2.default.createElement("br", null),
      "Create Player and Non-Player Pathfinder characters. Track characters, NPC's, inventory and campaign info.",
      _react2.default.createElement("br", null),
      "To get started create a character by clicking ",
      _react2.default.createElement(
        "i",
        null,
        "Create New Character"
      ),
      " at the top.",
      _react2.default.createElement("br", null),
      "Click on the ",
      _react2.default.createElement(
        "i",
        null,
        "Characters"
      ),
      " tab at the top to see a list of all your characters.",
      _react2.default.createElement("br", null),
      "There a few default ones you can delete or edit.",
      _react2.default.createElement("br", null),
      "Click on a characters name to see more detailed attributes and edit them.",
      _react2.default.createElement("br", null),
      "Let me know if you have any ideas how the site could be improved at hrossi.work@gmail.com.",
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "div",
      { className: cssStyles.homeImageDiv },
      _react2.default.createElement("img", {
        src: _OccultYoon2.default,
        width: "318.75",
        height: "367.2",
        alt: ""
      })
    )
  );
}
exports.default = (0, _reactRouterDom.withRouter)(HomeComponent);

/***/ }),

/***/ "./src/js/components/NavBarComponent.jsx":
/*!***********************************************!*\
  !*** ./src/js/components/NavBarComponent.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _Styles = __webpack_require__(/*! ../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _store = __webpack_require__(/*! ../store */ "./src/js/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _UserActionCreators = __webpack_require__(/*! ../actions/UserActionCreators */ "./src/js/actions/UserActionCreators.js");

var UserActionCreators = _interopRequireWildcard(_UserActionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBarComponent = function (_React$Component) {
  _inherits(NavBarComponent, _React$Component);

  function NavBarComponent(props) {
    _classCallCheck(this, NavBarComponent);

    var _this = _possibleConstructorReturn(this, (NavBarComponent.__proto__ || Object.getPrototypeOf(NavBarComponent)).call(this));

    _this.onToggleCreate = _this.onToggleCreate.bind(_this);
    _this.onToggleWorld = _this.onToggleWorld.bind(_this);
    _this.onToggleArena = _this.onToggleArena.bind(_this);
    _this.onToggleOptions = _this.onToggleOptions.bind(_this);
    _this.handleOpenWorld = _this.handleOpenWorld.bind(_this);
    _this.handleOpenCreate = _this.handleOpenCreate.bind(_this);
    _this.handleCloseWorld = _this.handleCloseWorld.bind(_this);
    _this.handleOpenOptions = _this.handleOpenOptions.bind(_this);
    _this.handleCloseOptions = _this.handleCloseOptions.bind(_this);
    _this.handleCloseCreate = _this.handleCloseCreate.bind(_this);
    _this.handleCloseArena = _this.handleCloseArena.bind(_this);
    _this.handleOpenArena = _this.handleOpenArena.bind(_this);
    _this.logout = _this.logout.bind(_this);
    _this.state = {
      dropdownOpen: false,
      isOpenWorld: false,
      isOpenCreate: false,
      isOpenOptions: false,
      isOpenArena: false
    };
    var dispatch = props.dispatch;

    _this.boundActionCreators = (0, _redux.bindActionCreators)(UserActionCreators, dispatch);
    return _this;
  }

  _createClass(NavBarComponent, [{
    key: 'handleOpenWorld',
    value: function handleOpenWorld() {
      this.setState({ isOpenWorld: true });
    }
  }, {
    key: 'handleCloseWorld',
    value: function handleCloseWorld() {
      this.setState({ isOpenWorld: false });
    }
  }, {
    key: 'handleOpenCreate',
    value: function handleOpenCreate() {
      this.setState({ isOpenCreate: true });
    }
  }, {
    key: 'handleCloseCreate',
    value: function handleCloseCreate() {
      this.setState({ isOpenCreate: false });
    }
  }, {
    key: 'handleOpenOptions',
    value: function handleOpenOptions() {
      this.setState({ isOpenOptions: true });
    }
  }, {
    key: 'handleCloseOptions',
    value: function handleCloseOptions() {
      this.setState({ isOpenOptions: false });
    }
  }, {
    key: 'handleOpenArena',
    value: function handleOpenArena() {
      this.setState({ isOpenArena: true });
    }
  }, {
    key: 'handleCloseArena',
    value: function handleCloseArena() {
      this.setState({ isOpenArena: false });
    }
  }, {
    key: 'onToggleCreate',
    value: function onToggleCreate() {
      this.setState({
        isOpenCreate: !this.state.isOpenCreate
      });
    }
  }, {
    key: 'onToggleArena',
    value: function onToggleArena() {
      this.setState({
        isOpenArena: !this.state.isOpenArena
      });
    }
  }, {
    key: 'onToggleWorld',
    value: function onToggleWorld() {
      this.setState({
        isOpenWorld: !this.state.isOpenWorld
      });
    }
  }, {
    key: 'onToggleOptions',
    value: function onToggleOptions() {
      this.setState({
        isOpenOptions: !this.state.isOpenOptions
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      var thisInst = this;
      var dispatch = this.props.dispatch;

      var action = void 0;
      var callbackRedirect = function callbackRedirect() {
        thisInst.props.history.push('/login');
      };
      var resolveLogout = function resolveLogout() {
        return new Promise(function (resolve) {
          action = UserActionCreators.logoutRegisteredUser();
          resolve(dispatch(action));
        });
      };
      async function asyncLogout() {
        var result = await resolveLogout();
        return result;
      }
      if (_store2.default.getState().userReducer.currentUser.isGuest) {
        action = UserActionCreators.logoutGuestUser(_store2.default.getState().userReducer.currentUserName, callbackRedirect);
        dispatch(action);
      } else {
        asyncLogout();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          {
            toggleable: 'false',
            fluid: true,
            className: cssStyles.navbarStyle,
            fixedTop: true
          },
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { bsStyle: 'tabs', justified: true, className: cssStyles.navBarFont },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/home' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Home'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/characters' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Characters'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              {
                eventKey: 3,
                onMouseEnter: this.handleOpenCreate,
                onMouseLeave: this.handleCloseCreate,
                open: this.state.isOpenCreate,
                onToggle: this.onToggleCreate,
                title: 'Create New Character',
                id: 'basic-nav-dropdown',
                className: cssStyles.navDropDown
              },
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/createCharacter' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.1, className: cssStyles.navBarMenuItem },
                  'New Player Character'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/createNPC' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.2, className: cssStyles.navBarMenuItem },
                  'New Non-Player Character'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              {
                eventKey: 3,
                onMouseEnter: this.handleOpenArena,
                onMouseLeave: this.handleCloseArena,
                open: this.state.isOpenArena,
                onToggle: this.onToggleArena,
                title: 'Arena',
                id: 'basic-nav-dropdown',
                className: cssStyles.navDropDown
              },
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/campaign' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.1, className: cssStyles.navBarMenuItem },
                  'Campaign'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/encounter' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.2, className: cssStyles.navBarMenuItem },
                  'Encounter'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              {
                eventKey: 3,
                onMouseEnter: this.handleOpenWorld,
                onMouseLeave: this.handleCloseWorld,
                open: this.state.isOpenWorld,
                onToggle: this.onToggleWorld,
                title: 'World Info',
                id: 'basic-nav-dropdown',
                className: cssStyles.navDropDown
              },
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/beasts' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.1, className: cssStyles.navBarMenuItem },
                  'Beasts'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/skills' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.2, className: cssStyles.navBarMenuItem },
                  'Skills'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/items' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.3, className: cssStyles.navBarMenuItem },
                  'Items'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              {
                eventKey: 3,
                onMouseEnter: this.handleOpenOptions,
                onMouseLeave: this.handleCloseOptions,
                open: this.state.isOpenOptions,
                onToggle: this.onToggleOptions,
                title: _react2.default.createElement('i', { className: 'fas fa-bars' }),
                id: 'basic-nav-dropdown',
                noCaret: true,
                className: cssStyles.navDropDown
              },
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { eventKey: 3.1, className: cssStyles.navBarMenuItem },
                _store2.default.getState().userReducer.loggedIn ? _react2.default.createElement(
                  'p',
                  null,
                  'Logged in as ',
                  _store2.default.getState().userReducer.currentUserName
                ) : _react2.default.createElement(
                  'p',
                  null,
                  'Please Log in'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/about' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.2, className: cssStyles.navBarMenuItem },
                  'About Site'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/OGL' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.3, className: cssStyles.navBarMenuItem },
                  'About OGL'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/logout' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 3.3, className: cssStyles.navBarMenuItem },
                  _store2.default.getState().userReducer.loggedIn ? _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: this.logout },
                    'log out'
                  ) : _react2.default.createElement(
                    'p',
                    null,
                    'Not logged in'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NavBarComponent;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()(NavBarComponent));

/***/ }),

/***/ "./src/js/components/SiteHeaderComponent.jsx":
/*!***************************************************!*\
  !*** ./src/js/components/SiteHeaderComponent.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

var _NavBarComponent = __webpack_require__(/*! ./NavBarComponent */ "./src/js/components/NavBarComponent.jsx");

var _NavBarComponent2 = _interopRequireDefault(_NavBarComponent);

var _PathfinderRpg = __webpack_require__(/*! ../../../public/assets/PathfinderRpg.png */ "./public/assets/PathfinderRpg.png");

var _PathfinderRpg2 = _interopRequireDefault(_PathfinderRpg);

var _HeaderText1nobezel = __webpack_require__(/*! ../../../public/assets/HeaderText1nobezel.png */ "./public/assets/HeaderText1nobezel.png");

var _HeaderText1nobezel2 = _interopRequireDefault(_HeaderText1nobezel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SiteHeaderComponent = function (_React$Component) {
  _inherits(SiteHeaderComponent, _React$Component);

  function SiteHeaderComponent(props) {
    _classCallCheck(this, SiteHeaderComponent);

    return _possibleConstructorReturn(this, (SiteHeaderComponent.__proto__ || Object.getPrototypeOf(SiteHeaderComponent)).call(this));
  }

  _createClass(SiteHeaderComponent, [{
    key: 'render',
    value: function render() {
      var style = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_NavBarComponent2.default, null),
        _react2.default.createElement(
          'div',
          { className: cssStyles.splash_img },
          _react2.default.createElement(
            'div',
            { className: 'card-header', style: style },
            _react2.default.createElement('img', {
              src: _PathfinderRpg2.default,
              width: '371',
              height: '95',
              alt: ''
            }),
            _react2.default.createElement('img', {
              className: cssStyles.titleImage,
              src: _HeaderText1nobezel2.default,
              width: '381.36' //base 1589
              , height: '35.76' //base 149
              , alt: ''

            })
          )
        )
      );
    }
  }]);

  return SiteHeaderComponent;
}(_react2.default.Component);

exports.default = SiteHeaderComponent;

/***/ }),

/***/ "./src/js/components/SiteInfo/AboutSiteComponent.jsx":
/*!***********************************************************!*\
  !*** ./src/js/components/SiteInfo/AboutSiteComponent.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var cssStyles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutSiteComponent = function (_React$Component) {
	_inherits(AboutSiteComponent, _React$Component);

	function AboutSiteComponent() {
		_classCallCheck(this, AboutSiteComponent);

		return _possibleConstructorReturn(this, (AboutSiteComponent.__proto__ || Object.getPrototypeOf(AboutSiteComponent)).apply(this, arguments));
	}

	_createClass(AboutSiteComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: cssStyles.aboutSiteText },
					'This Web Application was built with React, Redux, Express, Node, Mongodb, and Bootstrap.'
				),
				_react2.default.createElement(
					'div',
					{ className: cssStyles.aboutSiteText },
					'If you have any questions or need to contact me you can reach me at hrossi.work@gmail.com.',
					_react2.default.createElement('br', null),
					'Thanks for visiting!'
				)
			);
		}
	}]);

	return AboutSiteComponent;
}(_react2.default.Component);

exports.default = AboutSiteComponent;

/***/ }),

/***/ "./src/js/components/SiteInfo/OGL.jsx":
/*!********************************************!*\
  !*** ./src/js/components/SiteInfo/OGL.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OGL = function (_React$Component) {
	_inherits(OGL, _React$Component);

	function OGL() {
		_classCallCheck(this, OGL);

		return _possibleConstructorReturn(this, (OGL.__proto__ || Object.getPrototypeOf(OGL)).apply(this, arguments));
	}

	_createClass(OGL, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { width: '70%' } },
				_react2.default.createElement(
					'div',
					{ style: { marginLeft: '30%' } },
					'OPEN GAME LICENSE Version 1.0a',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'1. Definitions: (a)"Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b)"Derivative Material" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute" means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)"Open Game Content" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity" means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used" or "Using" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You" or "Your" means the licensee in terms of this agreement.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'5. Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'6. Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder\'s name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'10. Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'12. Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'14. Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					'15. COPYRIGHT NOTICE Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc.',
					_react2.default.createElement('br', null)
				)
			);
		}
	}]);

	return OGL;
}(_react2.default.Component);

exports.default = OGL;

/***/ }),

/***/ "./src/js/components/SiteInfo/PathfinderCommunityUse.jsx":
/*!***************************************************************!*\
  !*** ./src/js/components/SiteInfo/PathfinderCommunityUse.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../../../styles/Styles.css */ "./src/styles/Styles.css");

var Styles = _interopRequireWildcard(_Styles);

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PathfinderCommunityUse = function (_React$Component) {
  _inherits(PathfinderCommunityUse, _React$Component);

  function PathfinderCommunityUse() {
    _classCallCheck(this, PathfinderCommunityUse);

    return _possibleConstructorReturn(this, (PathfinderCommunityUse.__proto__ || Object.getPrototypeOf(PathfinderCommunityUse)).apply(this, arguments));
  }

  _createClass(PathfinderCommunityUse, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: Styles.Legaldiv },
        _react2.default.createElement(
          "span",
          { className: Styles.LegalSpan },
          "This website uses trademarks and/or copyrights owned by Paizo Inc.,",
          _react2.default.createElement("br", null),
          "which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content.",
          _react2.default.createElement("br", null),
          "This website is not published, endorsed, or specifically approved by Paizo Inc.",
          _react2.default.createElement("br", null),
          "For more information about Paizo's Community Use Policy, please visit paizo.com/communityuse.",
          _react2.default.createElement("br", null),
          "For more information about Paizo Inc. and Paizo products, please visit paizo.com.",
          _react2.default.createElement("br", null)
        ),
        _react2.default.createElement(
          "div",
          { className: Styles.LegalImgDiv },
          " ",
          _react2.default.createElement("img", {
            src: __webpack_require__(/*! ../../../../public/assets/Paizo.png */ "./public/assets/Paizo.png"),
            width: "143",
            height: "186",
            alt: ""
          })
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _reactRouterBootstrap.LinkContainer,
            { to: "/OGL" },
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              null,
              "Click here for info on Open Gaming License."
            )
          )
        )
      );
    }
  }]);

  return PathfinderCommunityUse;
}(_react2.default.Component);

exports.default = PathfinderCommunityUse;

/***/ }),

/***/ "./src/js/components/WorldInfo/BeastComponent.jsx":
/*!********************************************************!*\
  !*** ./src/js/components/WorldInfo/BeastComponent.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeastComponent = function (_React$Component) {
	_inherits(BeastComponent, _React$Component);

	function BeastComponent() {
		_classCallCheck(this, BeastComponent);

		return _possibleConstructorReturn(this, (BeastComponent.__proto__ || Object.getPrototypeOf(BeastComponent)).apply(this, arguments));
	}

	_createClass(BeastComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Under construction.'
			);
		}
	}]);

	return BeastComponent;
}(_react2.default.Component);

exports.default = BeastComponent;

/***/ }),

/***/ "./src/js/components/WorldInfo/ItemsComponent.jsx":
/*!********************************************************!*\
  !*** ./src/js/components/WorldInfo/ItemsComponent.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemsComponent = function (_React$Component) {
	_inherits(ItemsComponent, _React$Component);

	function ItemsComponent() {
		_classCallCheck(this, ItemsComponent);

		return _possibleConstructorReturn(this, (ItemsComponent.__proto__ || Object.getPrototypeOf(ItemsComponent)).apply(this, arguments));
	}

	_createClass(ItemsComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Under construction.'
			);
		}
	}]);

	return ItemsComponent;
}(_react2.default.Component);

exports.default = ItemsComponent;

/***/ }),

/***/ "./src/js/components/WorldInfo/SkillsComponent.jsx":
/*!*********************************************************!*\
  !*** ./src/js/components/WorldInfo/SkillsComponent.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillsComponent = function (_React$Component) {
	_inherits(SkillsComponent, _React$Component);

	function SkillsComponent() {
		_classCallCheck(this, SkillsComponent);

		return _possibleConstructorReturn(this, (SkillsComponent.__proto__ || Object.getPrototypeOf(SkillsComponent)).apply(this, arguments));
	}

	_createClass(SkillsComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Under construction.'
			);
		}
	}]);

	return SkillsComponent;
}(_react2.default.Component);

exports.default = SkillsComponent;

/***/ }),

/***/ "./src/js/constants/ActionTypes.js":
/*!*****************************************!*\
  !*** ./src/js/constants/ActionTypes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CREATE_CHARACTER = exports.CREATE_CHARACTER = "CREATE_CHARACTER";
var CREATING_CHARACTER = exports.CREATING_CHARACTER = "CREATING_CHARACTER";
var CREATING_CHARACTER_SUCCESS = exports.CREATING_CHARACTER_SUCCESS = "CREATING_CHARACTER_SUCCESS";
var CREATING_CHARACTER_FAIL = exports.CREATING_CHARACTER_FAIL = "CREATING_CHARACTER_FAIL";
var FETCHING_CHARACTERS = exports.FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
var FETCHING_CHARACTERS_SUCCESS = exports.FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
var FETCHING_CHARACTERS_FAIL = exports.FETCHING_CHARACTERS_FAIL = "FETCHING_CHARACTERS_FAIL";
var DELETING_CHARACTERS_START = exports.DELETING_CHARACTERS_START = "DELETING_CHARACTERS_START";
var DELETING_CHARACTERS_SUCCESS = exports.DELETING_CHARACTERS_SUCCESS = "DELETING_CHARACTERS_SUCCESS";
var DELETING_CHARACTERS_FAIL = exports.DELETING_CHARACTERS_FAIL = "DELETING_CHARACTERS_FAIL";
var UPDATING_CHARACTER = exports.UPDATING_CHARACTER = "UPDATING_CHARACTER";
var UPDATING_CHARACTER_SUCCESS = exports.UPDATING_CHARACTER_SUCCESS = "UPDATING_CHARACTER_SUCCESS";
var UPDATING_CHARACTER_FAIL = exports.UPDATING_CHARACTER_FAIL = "UPDATING_CHARACTER_FAIL";
var FETCHING_CHARACTER = exports.FETCHING_CHARACTER = "FETCHING_CHARACTER";
var FETCHING_CHARACTER_SUCCESS = exports.FETCHING_CHARACTER_SUCCESS = "FETCHING_CHARACTER_SUCCESS";
var FETCHING_CHARACTER_FAIL = exports.FETCHING_CHARACTER_FAIL = "FETCHING_CHARACTER_FAIL";
var CLEAR_CHARACTER_EDIT = exports.CLEAR_CHARACTER_EDIT = "CLEAR_CHARACTER_EDIT";

var CREATE_GUEST_USER_START = exports.CREATE_GUEST_USER_START = "CREATE_GUEST_USER_START";
var CREATE_USER_START = exports.CREATE_USER_START = "CREATE_USER_START";
var CREATE_USER_SUCCESS = exports.CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
var CREATE_USER_FAIL = exports.CREATE_USER_FAIL = "CREATE_USER_FAIL";
var CREATE_GUEST_USER_SUCCESS = exports.CREATE_GUEST_USER_SUCCESS = "CREATE_GUEST_USER_SUCCESS";
var CREATE_GUEST_USER_FAIL = exports.CREATE_GUEST_USER_FAIL = "CREATE_GUEST_USER_FAIL";
var USER_LOGOUT_START = exports.USER_LOGOUT_START = "USER_LOGOUT_START";
var USER_LOGOUT_SUCCESS = exports.USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
var USER_LOGOUT_FAIL = exports.USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";
var USER_LOGIN_START = exports.USER_LOGIN_START = "USER_LOGIN_START";
var USER_LOGIN_SUCCESS = exports.USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
var USER_LOGIN_FAIL = exports.USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
var FETCH_USER_START = exports.FETCH_USER_START = "FETCH_USER_START";
var FETCH_USER_SUCCESS = exports.FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
var FETCH_USER_FAIL = exports.FETCH_USER_FAIL = "FETCH_USER_FAIL";

/***/ }),

/***/ "./src/js/reducers/CharacterReducers.js":
/*!**********************************************!*\
  !*** ./src/js/reducers/CharacterReducers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ "./src/js/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	editCharacter: {},
	/**
 name: this.state.name,
  class: this.state.class,
  race: this.state.characterRace,
  level: 1,
  XP: 0,
  STR: this.state.characterStats.STR,
  DEX: this.state.characterStats.DEX,
  CON: this.state.characterStats.CON,
  INT: this.state.characterStats.INT,
  WIS: this.state.characterStats.WIS,
  CHA: this.state.characterStats.CHA,
  attributePointsToSpend: 0,
  items: {},
  abilities: {},
  traits: {},
  characterNotes: [],
  type: "Player",
  gender: this.state.gender,
  alignment: this.state.alignment,
  favouredClass: this.state.favouredClass,
  racialBonus: this.state.racialBonus,
  user: store.getState().userReducer.currentUserName
  */
	characters: [],
	isFetching: false,
	didInvalidate: false,
	numberOfCharacters: 0
};

var characterReducer = function characterReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case types.FETCHING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.FETCHING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: action.editCharacter

			});
		case types.FETCHING_CHARACTER_FAIL:
			return _extends({}, state);

		case types.UPDATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.UPDATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: action.updatedCharacter
			});
		case types.UPDATING_CHARACTER_FAIL:
			return _extends({}, state);
		case types.FETCHING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: action.characters,
				numberOfCharacters: action.characters.length
			});
		case types.FETCHING_CHARACTERS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.FETCHING_CHARACTERS_FAIL:
			return _extends({}, state);
		case types.CREATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.concat(action.character),
				numberOfCharacters: state.numberOfCharacters + 1
			});
		case types.CREATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.CREATING_CHARACTER_FAIL:
			return _extends({}, state);
		case types.DELETING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.filter(function (e) {
					return e._id !== action.characterID;
				})
			});
		case types.DELETING_CHARACTERS_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.DELETING_CHARACTERS_FAIL:
			return _extends({}, state);
		case types.CLEAR_CHARACTER_EDIT:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: {}
			});
		default:
			return _extends({}, state);
	}
};

exports.default = characterReducer;

/***/ }),

/***/ "./src/js/reducers/UserReducers.js":
/*!*****************************************!*\
  !*** ./src/js/reducers/UserReducers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ "./src/js/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

var _index = __webpack_require__(/*! ../store/index */ "./src/js/store/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	currentUser: {}, //Need to have unique user names {name: 'John',email: 'blah@blah.ca', password: 'alsdgqorjgpo'}
	loggedIn: null,
	authToken: '',
	currentUserName: ''

};
var userReducer = function userReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case types.CREATE_GUEST_USER_START:
			return Object.assign({}, state, {
				currentUser: {},
				currentUserName: '',
				isFetching: true,
				didInvalidate: false
			});
		case types.CREATE_GUEST_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.newGuest,
				currentUserName: action.newGuest.name,
				loggedIn: true,
				authToken: action.auth0Token

			});
		case types.CREATE_GUEST_USER_FAIL:
			return _extends({}, state);

		case types.CREATE_USER_START:
			return Object.assign({}, state, {
				currentUser: {},
				currentUserName: '',
				isFetching: true,
				didInvalidate: false
			});
		case types.CREATE_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.newUser,
				loggedIn: false
			});
		case types.CREATE_USER_FAIL:
			return _extends({}, state);
		case types.FETCH_USER_START:
			return Object.assign({}, state, {
				currentUser: {},
				currentUserName: '',
				isFetching: true,
				didInvalidate: false
			});
		case types.FETCH_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.registeredUser,
				loggedIn: false,
				currentUserName: action.registeredUser.name
			});
		case types.FETCH_USER_FAIL:
			return {
				isFetching: false,
				didInvalidate: false,
				currentUser: {},
				loggedIn: false,
				authToken: ''
			};

		case types.USER_LOGOUT_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.USER_LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				authToken: '',
				currentUserName: '',
				loggedIn: false
			});

		case types.USER_LOGOUT_FAIL:
			return _extends({}, state);
		case types.USER_LOGIN_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.USER_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				loggedIn: true,
				authToken: action.auth0Token

			});

		case types.USER_LOGIN_FAIL:
			return _extends({}, state);
		default:
			return _extends({}, state);
	}
};

exports.default = userReducer;

/***/ }),

/***/ "./src/js/reducers/index.js":
/*!**********************************!*\
  !*** ./src/js/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CharacterReducers = __webpack_require__(/*! ./CharacterReducers */ "./src/js/reducers/CharacterReducers.js");

var _CharacterReducers2 = _interopRequireDefault(_CharacterReducers);

var _UserReducers = __webpack_require__(/*! ./UserReducers */ "./src/js/reducers/UserReducers.js");

var _UserReducers2 = _interopRequireDefault(_UserReducers);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	characterReducer: _CharacterReducers2.default,
	userReducer: _UserReducers2.default
});

exports.default = rootReducer;

/***/ }),

/***/ "./src/js/store/index.js":
/*!*******************************!*\
  !*** ./src/js/store/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.persistor = undefined;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _index = __webpack_require__(/*! ../reducers/index */ "./src/js/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxPersist = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");

var _storage = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _hardSet = __webpack_require__(/*! redux-persist/lib/stateReconciler/hardSet */ "./node_modules/redux-persist/lib/stateReconciler/hardSet.js");

var _hardSet2 = _interopRequireDefault(_hardSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistConfig = {
	debug: true,
	key: 'root',
	storage: _storage2.default,
	stateReconciler: _hardSet2.default
};

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _index2.default);
var loggerMiddleWare = (0, _reduxLogger.createLogger)();
var store = void 0;
console.log("development");
if (true) {
	store = (0, _redux.createStore)(persistedReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleWare));
} else {}

// const store = compose(applyMiddleware(thunkMiddleWare, loggerMiddleWare))(createStore)(persistedReducer)

// export const store = createStore(persistedReducer);
var persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);

exports.default = store;

/***/ }),

/***/ "./src/styles/Styles.css":
/*!*******************************!*\
  !*** ./src/styles/Styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--7!./Styles.css */ "./node_modules/css-loader/index.js?!./src/styles/Styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/js/components/App.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nan/workspace/ChampionsArena/src/js/components/App.jsx */"./src/js/components/App.jsx");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map