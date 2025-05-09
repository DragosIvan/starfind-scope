(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["canvas", "electron/common", "sharp"], factory);
	else if(typeof exports === 'object')
		exports["StarScopeCall"] = factory((function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()));
	else
		root["StarScopeCall"] = factory(root["canvas"], root["electron/common"], root["sharp"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__, __WEBPACK_EXTERNAL_MODULE_sharp__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
// //TODO revamp this madness a bit?
// (function () {
// 	var globalvar = (typeof self != "undefined" ? self : (typeof (global as any) != "undefined" ? (global as any) : null)) as any;
// 	//use the node-canvas version when on node
// 	if (typeof globalvar.ImageData == "undefined") {
// 		let nodecnv = requireNodeCanvas();
// 		globalvar.ImageData = nodecnv.ImageData;
// 	}
// 	var fill = typeof globalvar.ImageData == "undefined";
// 	//should never be reach anymore
// 	var constr = function (this: any) {
// 		var i = 0;
// 		var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
// 		var width = arguments[i++];
// 		var height = arguments[i++];
// 		if (fill) {
// 			if (!data) { data = new Uint8ClampedArray(width * height * 4); }
// 			this.width = width;
// 			this.height = height;
// 			this.data = data;
// 		}
// 		else if (oldconstr) {
// 			return (data ? new oldconstr(data, width, height) : new oldconstr(width, height));
// 		} else {
// 			var canvas = document.createElement('canvas');
// 			canvas.width = width;
// 			canvas.height = height;
// 			var ctx = canvas.getContext("2d")!;
// 			var imageData = ctx.createImageData(width, height);
// 			if (data) { imageData.data.set(data); }
// 			return imageData;
// 		}
// 	}
// 	var oldconstr = globalvar.ImageData;
// 	if (typeof document != "undefined") {
// 		try {
// 			new oldconstr(1, 1);
// 		} catch (e) {
// 			//direct constructor call not allowed in ie
// 			oldconstr = null;
// 		}
// 	}
// 	if (!fill) { constr.prototype = globalvar.ImageData.prototype; }
// 	globalvar.ImageData = constr;
// 	ImageData = constr as any;
// })();
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};
if (typeof HTMLImageElement != "undefined") {
    HTMLImageElement.prototype.toBuffer = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return ctx.getImageData(0, 0, w, h);
    };
    HTMLImageElement.prototype.toCanvas = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return cnv;
    };
}


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_15248__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_15248__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_15248__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_15248__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_15248__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    if (typeof Image != "undefined") {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        return await new Promise((done, fail) => {
            img.onload = function () { done(img.toBuffer()); };
            img.onerror = fail;
            img.src = url;
        });
    }
    else {
        var hdr = "data:image/png;base64,";
        if (url.startsWith(hdr)) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    clearPngColorspace(data);
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await imageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_31629__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_31629__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            var cnv = (img instanceof HTMLCanvasElement ? img : img.toCanvas());
            this.ctx = cnv.getContext("2d");
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_35283__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_35283__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_35283__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_35283__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_35283__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_35283__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_35283__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_35283__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_38931__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_38931__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_38931__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_45123__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_45123__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_45123__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    let cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
    triggerPaste(new index_1.ImgRefCtx(cnv));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        img.onerror = () => error("invalidfile", "The file you uploaded could not be opened as an image.");
        var bloburl = URL.createObjectURL(blob);
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () { pasted(img); URL.revokeObjectURL(bloburl); };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_56486__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_56486__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_56486__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_56486__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_56486__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window if the rs window can be detected by alt1, otherwise return the full screen
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_79245__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_79245__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_79245__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_79245__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/dialog/index.js":
/*!*************************************************!*\
  !*** ../node_modules/alt1/dist/dialog/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dialog/imgs/boxtl.data.png":
/*!****************************************!*\
  !*** ./src/dialog/imgs/boxtl.data.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_871__) => {

module.exports=(__nested_webpack_require_871__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAx0lEQVQ4T5VRywrCMBBMaytYyMFHDw16CNWDBg8WoWAFpTf//4ecsGENMQ0UhmVmO5PdNEKZru0GVCLEL/cnS/MYwU3/Jo+AFiKbgevrE7bSmArksgk6DumVsrIKOmJ/G8JWGrMvjUBkbgLBhFzufBkB7uBPQKDcKJYR4C39ALhUuqj15J7/KwHIVIfztjWoZXOkmYuVtB4OQAM4GAFUh+UabmelZ0GANXdh+mW83eyoUz/ykeQm0G4g/j+wnC9NNQAl+VNR6y/yyxm6AFlANgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/boxtl_leg.data.png":
/*!********************************************!*\
  !*** ./src/dialog/imgs/boxtl_leg.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1594__) => {

module.exports=(__nested_webpack_require_1594__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAE0SURBVDhPjZFNTsMwEIVtJ45D05YmLVKBJRISsOIILNiw5QosOXpIKcpPHduFl0wINAHEJ+tpPB6/Gcv8+emRHZIX1TQ6QuBLbs37QNnVxQlj/P+L31yuH+7vZrNptt2QhxSy0vXe6SAMlYrQqshzyiPmt9fny2WslMqyrQr4+vQsTV8m0eTtdRNN582IjGmtob4nrNsLiqBJcjxfxKhGXBblIk6cNVL68AKwQDUCUVuHCsJZR8egrCpkdq0SSEIbb89vhoOZ53vNSYv0JeVpHni16fYCYYztsz10hzDWQEXQulI7Aq266BD0hHYdqC+BVl30CXlDUUZv+Bp9DIrIG4pBxE7XdPAb/bTkK0IVjN/6I1QmVquE9mMGo2KLJdI06xIjBOff72CLn/rr0YOfwVZr/QEeBH9rQlJ0YgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/boxtr.data.png":
/*!****************************************!*\
  !*** ./src/dialog/imgs/boxtr.data.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_2513__) => {

module.exports=(__nested_webpack_require_2513__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVQ4T6WTwQrCMBBEk9oKigEVFSweLOLF6sFehOYgePP/P2jNrE1ZcJFUD68J2cwkO23NofF0vD0IY1k3VLfveXVu+jWMALVYxzowxtjw+A2YGVtM1WIKl/szjEohlb8NuAWtkMru6sMYJplbkR0vKF9XH5s0kBs0fYgxyJRAM7clV1YMGxB9R4pxAG6J04tlOdwAIm63uzVnoIkk2unRAF+kKpJEg9HEcdAwQA59iJpIEg2kEEa4QbIBNkMYM0Arg0NEC1KM14i/WBVJuPcutHy+YQMw259CiJ5egv+YzBEq3jQAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/dialog/imgs/boxtr_leg.data.png":
/*!********************************************!*\
  !*** ./src/dialog/imgs/boxtr_leg.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_3264__) => {

module.exports=(__nested_webpack_require_3264__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAFgSURBVDhPnZO9TsMwFIWPHZuUpo2g6hswsbMzsbEgMfAKiIUnYOWNWBh4F1CFhFKKojatmx/jY+E2RRWK+KSrm9ycHF//iceHO7tal5hM3tGLDyAkIIVAY+0maxUBjYApDYSwOOgdulqMxXwOAbjKPzk9GUPc315bLTWWZo2mNs69hzhOvIAjKC3A72Q4HOAj+9zUnp5fIG6uzm2WTdFP+si/ZkgGqRcTY4zPKpKo6sbnfjJAsZj79+l0BsmfSbEocHQ8Ql2V0Fq5LmIfNKaYz8x5nvsckEHIKJZLX1z95AC/kTRNN1rpullXNdyab9FKI3JBQvu1EwVCjVBLdgwCwSRQumm1aRsJ6/b5Ly4vzvYKInc23l4n+zv4DTtoj0pUpHzuZMD5hoUMBMNOBmx3Hyt3+DoZhJ3g+Wib8e507oBRltXOto7Ho24GvJVcNHbACGTuXnQy4MhcNGbGdhrAN5b0ly21yuFfAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/dialog/imgs/chatimg.data.png":
/*!******************************************!*\
  !*** ./src/dialog/imgs/chatimg.data.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_4247__) => {

module.exports=(__nested_webpack_require_4247__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAOCAIAAABoykFxAAAAwUlEQVQYV2OYPGlSV1dXcnJyRmqSqbUdQ3VNNRB5uTkJCwuLKqgxtLS0ACVVFGQ4eQUFpRUZgBxHWytOHl4oX0tLS1lZGaiYkZOXW1CUQVXXGChkbGwsJSUFFGI4YM+fqycmpahqoG8AVMVwxJipUptPUFIOqEtEkJdBT4JPSVYSqBgoCTSSQUVLG8QCms/DCzI/OjrK0syEgYERaDiI7+3lHRwcDNQC5bu6ukKEgLp4RKUZsjPSgEJAfrC/t7GhHgChFSifluVS6gAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/chatimg_leg.data.png":
/*!**********************************************!*\
  !*** ./src/dialog/imgs/chatimg_leg.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_4970__) => {

module.exports=(__nested_webpack_require_4970__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAIAAACdNMrBAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAEOSURBVChTVY+7SgNBFIZnZ3aTWdCYddVcRBIVREEC2gcsFnwMO9/JxsrGzkbQB1AkleArWJjLXhRhJnNbf9ltcviL/3z/nDMzXjI+Hx0PDoadh6dJI6DGOUKIT6kPenZ6eHv/fDTo7vbbRSF5GCCjoDd3j/v9rThel0sLKoWG2DzN97rxdrwhlFHaCqGNdRAF7e1EUhlrHIQl1sAbGjb/N1aFXgqptYEoD3nx/Yu+QvURXI6+tqtFPcpru1os3my5oBX6tgaEaOtcWbKmTywJGF+rMlA8Cgm9vkry+ed0luXLxo9Q+I12JcSGvc7F+ORt8oE5a32pvEositqeI5fJ6OX1/Ws2TbNFUWR5nv4B2LeYEU2WizoAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/dialog/imgs/chatimgactive.data.png":
/*!************************************************!*\
  !*** ./src/dialog/imgs/chatimgactive.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_5869__) => {

module.exports=(__nested_webpack_require_5869__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAOCAIAAABoykFxAAAApklEQVQYV2Po6upqaWmJjo4CIk1dQ4ZiMLCzNGVgYGQRkGCorqmOjggTEeQF8hm4BRmCg4ONDfVAHAhfWVlZWFgYygciKUVVSVkFoCgnD1jLHkOGZHlWbkFRoBCIf0CdIV+GgZGTF6pLnoNBkJcLqhiIBCXloCwgAprv7eWtraGG4FtZWXq5OQG1QPnGxsaurq5AIRCfhYshKTYKqASoy83RRkVBBgAFhh2w1olrrAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/chatimgactive_leg.data.png":
/*!****************************************************!*\
  !*** ./src/dialog/imgs/chatimgactive_leg.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_6580__) => {

module.exports=(__nested_webpack_require_6580__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAIAAACdNMrBAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAEESURBVChTPY4xTgMxEEXtmfFmE1hpRSQECqIIVRBCEanpuABnyImo09FzASokjgAVVUQBURpCSMiKHdt8ZwVf1mj8/veM7dXlxbBfnvTad4/vmSMNwRgjRAJ6fno4uX3IssA5k5KV5BHozeQedK9s5bm0dwmVmfh1OisLAa3rEJV8DCFE7wOBFjsO1AbGBAg0jerkDNTQSL6hyRDrfIjN5f8RRPpjmCw6NEhgjakdKknWJGCnhFj8yKDSfK7IQla2/p+46LBRaTkiNlETwvoYDY2vBx/V6m2x2u5IpxH3j4+Gg4Pnl1mluvSi335TBRwuu/vO+NFZ72m6+FxvlnW99v5L9ReDbXkhpJVqYwAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/chatimghover.data.png":
/*!***********************************************!*\
  !*** ./src/dialog/imgs/chatimghover.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_7463__) => {

module.exports=(__nested_webpack_require_7463__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAOCAIAAABoykFxAAAAz0lEQVQYV2M4dfLEjp07W1pamhrrnL38GFavXr10yeKk2ChhYWEpFW2GLVu2dLQ1a2uocfIKiipoMABVRoaFcPLwcguKiiqoMVhZWRob6kmKCgGFBMSkGUztnU2t7VxdXZWVlYFCDP9DhSfbyaloaQMVSklJMfz3YF1sJSylqKqlpQW0gsFOQVhLTRnC4RGVZjAyBymDma/BUF1T7e3lzcDACJQUlFZkSE5OLsjNAmoByoP4YZGR2RlpQCGgLpD+Sb2d0dFR2dnZQC8Y6WkBAPN1NR2AAHfmAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/dialog/imgs/chatimghover_leg.data.png":
/*!***************************************************!*\
  !*** ./src/dialog/imgs/chatimghover_leg.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_8222__) => {

module.exports=(__nested_webpack_require_8222__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAIAAACdNMrBAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAEjSURBVChTVc89SwNBEIDh2727fChqFosQLExMY4gIsbOIBLT0B9joX9RKTCOksLESSa1Y5TSa+8rdze7s7jl4lfAUw7sMy7CL8cnx4f5Bt3338FzzubbWcRyPc4/q6Kg/nT7eXA72erurz2xHNCBXnOrt/ex01G2JjSwq6nUeh5Ci67ISR30x7DVXqQVAkmegC+BUOx3xFhilNEmTQgIS3qh79JtWOksKkudQ4TXPWyxCpXWSAQGpK3wZrmmDJqn+4VSryRgkIFXF3doUvldyVtJlf8c5gFbbkh5qa822mz5FUBYRpTJaG359dRYE3/OPKEpgncu0MBJtCMztdtqT8eDl9V0xP0cXFe05BktXiBazzvlkOHuaB8vVVxj/xOkySn4BoaPZbEW+44oAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/dialog/imgs/continueimg.data.png":
/*!**********************************************!*\
  !*** ./src/dialog/imgs/continueimg.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9141__) => {

module.exports=(__nested_webpack_require_9141__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAEoAAAANCAIAAACB72/yAAABTklEQVRIS72PMUsDQRCFB2Jjk85KsPEPmMYmgig2gWAlKWwCIiIihIC1WIpiJZY2SpqgpLCQNDZRAjZWHqmvsVEQ1Ebl8J0D4zIXD5HdgY/lzey7fffoeVD9fFxikpfaP/jLhxLhojy+kPdRjZKokhIvBieqIC+6WcVpkfjdiz5u55P7BR6CgqDu2dbeaQdnGpoxeAcpaT0buBsD/XQ1pwwhoPde2YDX/oxbTxpir5x+sasXt8vZhm/9knL6hR5OJm0YHI2D9c1GdeWH7sG0svmF4uMJA7jbbnPW7YaR98rsC7xMHGBAttvd/pjyeIeQYcD1TtGtB42N8oSAettFBnkgR+SPEIxaytVlc5Qb4oQG7q37FSOjMiibQjwMcZIBnY0RcNiYYqFuA0GtOl0s0/laYSj4D6XdjSBLCLENdQru7W9OeUpGhsd8YGvV6Qu6U2ehlR3eegAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/imgs/continueimg_leg.data.png":
/*!**************************************************!*\
  !*** ./src/dialog/imgs/continueimg_leg.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_10068__) => {

module.exports=(__nested_webpack_require_10068__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAEoAAAANCAIAAACB72/yAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAASPSURBVEhLrVZLaFxVGD7nPubeO5NMZpIQTYfaNn2RREsrbQXbuOnKR4WCiKtCV2JABF24qTvdCK5ciIWudeFCqkuLC6WKQqVmEVsMjUkTyySTec993+t37n/n5CZNShQ/Dof/db7z/efce2f4J+++PDbqsgz0sN2y9a7NYResmIKPgTVgptY26IOpwViz0cnFdur04XFrqJDw64OargZ+ODKQJPaAWr1td5zs1lq+pKpmztBzYaPWYcxvV9cN/v7sa4cr1ulzz6Oitv7As0OqBnzH6ThRr1VPfcbyxfKAqeimWRotwe1126hHGWW3Fft2jwzdyn/42U2ygatvXaAU4iAsl/KwiQTMoqK/deymbNwoY95oBiZvJwGhhAzSk7PUbr1brdZkCkoWVmzR3jOT+1p+Keita/nRRnVpYEDs1+n0YGAWHAkCvVwyXGyw3lbhbstKtBylaEbNFg4wxRc3bn19fSaf97hy5O8H9y6/9+vrLz2naoIE4Lki6skmZJmJTQZB67DCE0XxZFEKcZKdlKdAcHhIm5tfFe1V9o1hJapjrxUG4vZ8P8BsWgZmx3Z1XYMaMihFoDgMpMjFTJVBIMo0TYPxzfd3Pv/giFUq5y02NHKMOnxxZpoKABgAtiMeLKGgNAjZOGbYMGSQXMsySRKaWlmtpu3B6rS7iEpIIkC6j4JIUycDCnp++qjf/PmPj9/cPzRmjIyXZYcXzhxmqo5sTk9vcjdInj0ChNPTRxcWltXzZ6YUzpuNtud5UQZJXwEMWkBBx/U5Z4qiUFDWIEKGBLKbmkJ/ojJ87cbiC5OFKPYVtTf65LFzx/Offjk3MT7EFDWMYjlUNSUHwEDB1N8zsAQaOp2uaM80crWaeIkl3W7DdV0ehX4Y+0GIIYK+F8YctpS1RVPoszhygwjuU+Pl69/+9cYrxcDrdZvL+4+ffPrg4LWvfhcdxhGaTFYLZXJQ5L+hULAcx+XvXLnIrOFWdVlIAZKnZRvQVWrtAsMQbymBig1NdIvGkpjAj7/d/2h2Csbd+bWV9bXbS2a96Zw/dYgqBR7dGpIQ3F3YYzA2NtyoN9WTkwcCp92znfTM+tB4LA4VZ5/5lmSBWwtjRoNF6SqAsqCy/UgW/HRn8erlibxqz99tNZuL9Vb050N29sRBVeG0r6bgoe+/gaGPTUEFBi/ZnYRJSZuVu0M8nVGknjhaCYMgK4UG1KMIvJiznciRxbYURIvlUcC4gvmXuaW3Xy2xwL2/EqG3jY5+a8E4PVXhDI1FIcQmTW4eaHLnJCBLLiUlxyiQLsmcCzEggs+4aO/U5IG2GwoplMCAJiru824BVVJNfxUuD5McUdKVyCMes9W19nihttFouW4Dvf1wL4fekEWK40sV480UTSIC6fKgd4SUhBMRLt180qS48MSliO/hNDi/cmmGVv5fwNnL14nuweT2d7cfwiga4n/Z2elDIpfAiS3MKCBj8z38lyiqvpP5DyjBZy8+qxs5WGEURH76JVB0sY2q7PxbtyOwnAwiIQbp7hFy1Y4QVKrNQnEQBNRnRWrGFsGBG/wD9kSQTvgpZ/YAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/dialog/imgs/continueimgdown.data.png":
/*!**************************************************!*\
  !*** ./src/dialog/imgs/continueimgdown.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_12171__) => {

module.exports=(__nested_webpack_require_12171__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAEoAAAANCAIAAACB72/yAAABMklEQVRIS92VoU4DQRCG5wKGNyEo3gB1BtWEYGqaNAGBoQ3BoAiqKVXwDJUEgcAgCQIUBoPgVfg2/2WzGUpqdk40+XqZ3Z3u3Le32bXbQbMc2UaCmj2cbr1dWTSvl4mXC3s82+appsupDmqp3ueNRaN6s+nBaHzCU82Pa59WF9TSihJ9zex7EQgl7s/3cRPEcqNuUGkmRy2tohsIotSTIW/gcurS6f3c9QFf6a8hL+HSKoJatznzPsm7pWyu7FlL+RfmZzdS73BwtNseZ56nOyq9dv6VCerMQwSKZZS+Xj9Hi9wmw73SjSadcQdMOlr4qUYczP+fm3D5VWDapNfPvQelHjE7xyVUJ9173O66ZKNhLWUoNzcaAWqd3vsknFxSgRutjmrZvG34iE9D2zCQmrfNLxl9slarbU3QAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./src/dialog/imgs/continueimgdown_leg.data.png":
/*!******************************************************!*\
  !*** ./src/dialog/imgs/continueimgdown_leg.data.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_13074__) => {

module.exports=(__nested_webpack_require_13074__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAEoAAAANCAIAAACB72/yAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAQQSURBVEhL1VW9bxxFFN/52NvbO59sEic5GZMIEHFkAiICKaRDAlGAlJKGioqShpqejn+ABiEoqFIhkIJEk44miSCRyIcSJXawfT6f7253dueD39xbz62/Ekei4ae5pzdv3rz3fm9m59jHb780N5tFu1GWttKOgDjmlXY4DgsY9nKRQkppaAqkup3JUTXZh0IViFlP3UgalTZZhexvpezyu6ePH4u73QXMc+15ltZBxpxBscNxVnhXQtpo8JkWlljccGVlJ394QpKzZSl3WaZYmjiSV69PO/j+mymMUGCHZ+eFhOwEBIek1GQJGJUCYUlHJaRQPVCwZdTrBzsq2eiVnt7phZOYb6u8HRuEoOWAEBGlkKLyPGk2SQ+AkchU8x2oTP/xoPj2m8+gt9qdR3/f/PLr395alILzJJXkQ6CYSBcShR7VU0PCk5ZI7yRNFF9f8l1Lmg8e/yOWFmfjNM1LheWssEbrPWM0NI4Jbdh4O4+YhTTaqrzAwJR8yAg3X8KEUlHosjTWOGPt6sBeXErKfOzc+MTi2UvL7e9+vjPfjIyxlY9GHEvRkI4iI2ae+yWEhU4ZyRMKLZG+PRyHJWxEqb4qFuWZ8vSSpgQ31EQeewbKrSuT+iuQPRjrU+f8jYU0pTs1w3+8+vDCa3NWS602uy8vg+H3v9ydSyxzzBgXce8Jqhi4+BTKR5zAx7QWDkcBBcFIW8lokHt60CaHsKv0A4E0lP6ZgJsu8AFV02Mtd+Xa6jtLLYbuqhEx/OHXe2COVbhhcOEj1+MTK1ggyYIrHfSnA46jceHpzXQ6w8GuNyrEreuFMigCzQ79BgGaCjl9waad3uFWWv8ezrejK9fWPnpvCXdyfWXtzLnzyy+qn35fIYYAMUSiEKGyOxdYOc3wRWJa54wLQg2iwSMhJJMxz7LS/zHMd2cHm0NUD9dGIlgZafQpjrwirDRcTep7CrCLFGzZ70z0bq1FX31+yfLW9b/+XF/Zunl/Y6DSN07teskEF/TaoIBIVO1BAZAuppkHshBghE4y1EyeeLe2+8rTQ3HErQ7KhD349ivT84OIAeD2xScXoNy7/2R9q9/rjWE5dwJ/A1N6CRfTth6UN5QEWad0GEBKnDk+I7kIBx0Ai8HvaBf9MDSUKSy73Ys+/fDVXJnV1R644Q27sWLOzk3uEm4a27nYjKNuYyOc2oE9nZbEOPbS4Yb+gC3zD6cfkYiaPFZai1dOdmod/C+Bo5PGlYxt5FFHqs3+AO83/Q2CGwF/JYEe1Q3lmfeFh45gl/W3GJRwkuCFgTVM8YXjr51dfr0rW3v/o+sXnUB3GvJ5QZ/ijSdeaq2llPXvDRey0nYQsoQaKHXQgf3l4awqrYZBlrMPzi+00IH/P/Yf0iAr/gXJh0N13Pe/YwAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/dialog/index.ts":
/*!*****************************!*\
  !*** ./src/dialog/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_14933__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const a1lib = __importStar(__nested_webpack_require_14933__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_14933__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_14933__(/*! alt1/base */ "alt1/base");
var imgs_rs3 = (0, base_1.webpackImages)({
    chatimg: __nested_webpack_require_14933__(/*! ./imgs/chatimg.data.png */ "./src/dialog/imgs/chatimg.data.png"),
    chatimghover: __nested_webpack_require_14933__(/*! ./imgs/chatimghover.data.png */ "./src/dialog/imgs/chatimghover.data.png"),
    chatimgactive: __nested_webpack_require_14933__(/*! ./imgs/chatimgactive.data.png */ "./src/dialog/imgs/chatimgactive.data.png"),
    continueimg: __nested_webpack_require_14933__(/*! ./imgs/continueimg.data.png */ "./src/dialog/imgs/continueimg.data.png"),
    continueimgdown: __nested_webpack_require_14933__(/*! ./imgs/continueimgdown.data.png */ "./src/dialog/imgs/continueimgdown.data.png"),
    boxtl: __nested_webpack_require_14933__(/*! ./imgs/boxtl.data.png */ "./src/dialog/imgs/boxtl.data.png"),
    boxtr: __nested_webpack_require_14933__(/*! ./imgs/boxtr.data.png */ "./src/dialog/imgs/boxtr.data.png")
});
var imgs_leg = (0, base_1.webpackImages)({
    chatimg: __nested_webpack_require_14933__(/*! ./imgs/chatimg_leg.data.png */ "./src/dialog/imgs/chatimg_leg.data.png"),
    chatimghover: __nested_webpack_require_14933__(/*! ./imgs/chatimghover_leg.data.png */ "./src/dialog/imgs/chatimghover_leg.data.png"),
    chatimgactive: __nested_webpack_require_14933__(/*! ./imgs/chatimgactive_leg.data.png */ "./src/dialog/imgs/chatimgactive_leg.data.png"),
    continueimg: __nested_webpack_require_14933__(/*! ./imgs/continueimg_leg.data.png */ "./src/dialog/imgs/continueimg_leg.data.png"),
    continueimgdown: __nested_webpack_require_14933__(/*! ./imgs/continueimgdown_leg.data.png */ "./src/dialog/imgs/continueimgdown_leg.data.png"),
    boxtl: __nested_webpack_require_14933__(/*! ./imgs/boxtl_leg.data.png */ "./src/dialog/imgs/boxtl_leg.data.png"),
    boxtr: __nested_webpack_require_14933__(/*! ./imgs/boxtr_leg.data.png */ "./src/dialog/imgs/boxtr_leg.data.png")
});
var fontmono = __nested_webpack_require_14933__(/*! ../fonts/aa_8px_mono.fontmeta.json */ "./src/fonts/aa_8px_mono.fontmeta.json");
var fontheavy = __nested_webpack_require_14933__(/*! ../fonts/aa_8px_mono_allcaps.fontmeta.json */ "./src/fonts/aa_8px_mono_allcaps.fontmeta.json");
class DialogReader {
    constructor() {
        this.pos = null;
    }
    find(imgref) {
        if (!imgref) {
            imgref = a1lib.captureHoldFullRs();
        }
        if (!imgref) {
            return null;
        }
        var boxes = [];
        for (let imgs of [imgs_rs3, imgs_leg]) {
            var pos = imgref.findSubimage(imgs.boxtl);
            for (var a in pos) {
                var p = pos[a];
                if (imgref.findSubimage(imgs.boxtr, p.x + 492, p.y, 16, 16).length != 0) {
                    boxes.push(Object.assign(Object.assign({}, p), { legacy: imgs == imgs_leg }));
                }
            }
        }
        if (boxes.length == 0) {
            return false;
        }
        var box = boxes[0];
        if (boxes.length > 1) {
            console.log("More than one dialog box found");
        }
        this.pos = { x: box.x + 1, y: box.y + 1, width: 506, height: 130, legacy: box.legacy };
        return this.pos;
    }
    ensureimg(imgref) {
        if (!this.pos) {
            return null;
        }
        if (imgref && a1lib.Rect.fromArgs(imgref).contains(this.pos)) {
            return imgref;
        }
        return a1lib.captureHold(this.pos.x, this.pos.y, this.pos.width, this.pos.height);
    }
    read(imgref) {
        imgref = this.ensureimg(imgref);
        if (!imgref) {
            return false;
        }
        let title = this.readTitle(imgref);
        var r = {
            text: null,
            opts: null,
            title
        };
        if (this.checkDialog(imgref)) {
            r.text = this.readDialog(imgref, true);
            return r;
        }
        else {
            var opts = this.findOptions(imgref);
            if (opts.length != 0) {
                r.opts = this.readOptions(imgref, opts);
                return r;
            }
            else {
                return null;
            }
        }
    }
    readTitle(imgref) {
        if (!this.pos) {
            throw new Error("position not found yet");
        }
        var buf = imgref.toData(this.pos.x, this.pos.y, this.pos.width, 32);
        //somehow y coord can change, 19 for "choose and option:" 18 for npc names
        var pos = OCR.findChar(buf, fontheavy, [255, 203, 5], Math.round(this.pos.width / 2) - 10, 16, 20, 4);
        if (!pos) {
            return "";
        }
        var read = OCR.readSmallCapsBackwards(buf, fontheavy, [[255, 203, 5]], Math.round(this.pos.width / 2) - 10, pos.y, 150, 1);
        return read.text.toLowerCase(); //normalize case since we don't actually know the original
    }
    checkDialog(imgref) {
        if (!this.pos) {
            throw new Error("position not found yet");
        }
        var locs = [];
        let imgs = (this.pos.legacy ? imgs_leg : imgs_rs3);
        locs = locs.concat(imgref.findSubimage(imgs.continueimg, this.pos.x - imgref.x, this.pos.y - imgref.y, this.pos.width, this.pos.height));
        locs = locs.concat(imgref.findSubimage(imgs.continueimgdown, this.pos.x - imgref.x, this.pos.y - imgref.y, this.pos.width, this.pos.height));
        return locs.length != 0;
    }
    readDialog(imgref, checked) {
        if (!this.pos) {
            throw new Error("position not found yet");
        }
        imgref = this.ensureimg(imgref);
        if (!imgref) {
            return null;
        }
        if (!checked) {
            checked = this.checkDialog(imgref);
        }
        if (!checked) {
            return null;
        }
        var lines = [];
        var buf = imgref.toData(this.pos.x, this.pos.y + 33, this.pos.width, 80);
        for (var y = 0; y < buf.height; y++) {
            var hastext = false;
            for (var x = 200; x < 300; x++) {
                var i = x * 4 + y * 4 * buf.width;
                if (buf.data[i] + buf.data[i + 1] + buf.data[i + 2] < 50) {
                    hastext = true;
                    break;
                }
            }
            if (hastext) {
                var chr = null;
                chr = chr || OCR.findChar(buf, fontmono, [0, 0, 0], 192, y + 5, 12, 3);
                chr = chr || OCR.findChar(buf, fontmono, [0, 0, 0], 246, y + 5, 12, 3);
                chr = chr || OCR.findChar(buf, fontmono, [0, 0, 0], 310, y + 5, 12, 3);
                if (chr) {
                    var read = OCR.readLine(buf, fontmono, [0, 0, 0], chr.x, chr.y, true, true);
                    if (read.text.length >= 3) {
                        lines.push(read.text);
                    }
                    y = chr.y + 5;
                }
            }
        }
        return lines;
    }
    findOptions(imgref) {
        var locs = [];
        if (!this.pos) {
            throw new Error("position not found yet");
        }
        let imgs = (this.pos.legacy ? imgs_leg : imgs_rs3);
        var a = imgref.findSubimage(imgs.chatimg);
        for (var b in a) {
            locs.push({ x: a[b].x, y: a[b].y, hover: false, active: false });
        }
        var a = imgref.findSubimage(imgs.chatimghover);
        for (var b in a) {
            locs.push({ x: a[b].x, y: a[b].y, hover: true, active: false });
        }
        var a = imgref.findSubimage(imgs.chatimgactive);
        for (var b in a) {
            locs.push({ x: a[b].x, y: a[b].y, hover: false, active: true });
        }
        return locs;
    }
    readOptions(imgref, locs) {
        imgref = this.ensureimg(imgref);
        if (!imgref) {
            return null;
        }
        if (!this.pos) {
            throw new Error("interface not found");
        }
        var buf = imgref.toData();
        if (!locs) {
            locs = this.findOptions(imgref);
        }
        var bgcol = [150, 135, 105];
        var fontcol = this.pos.legacy ? [255, 255, 255] : [174, 208, 224];
        var r = [];
        for (var a = 0; a < locs.length; a++) {
            var dx = locs[a].x + 30;
            var dy = locs[a].y + 6;
            var checkline = imgref.toData(dx, dy, Math.min(500, imgref.width - a), 1);
            var row = null;
            for (var x = 0; x < checkline.width; x++) {
                var i = x * 4;
                if (row) {
                    if (coldiff(checkline.data[i], checkline.data[i + 1], checkline.data[i + 2], bgcol[0], bgcol[1], bgcol[2]) < 75) {
                        row.width = x + 20;
                        break;
                    }
                }
                else if (coldiff(checkline.data[i], checkline.data[i + 1], checkline.data[i + 2], fontcol[0], fontcol[1], fontcol[2]) < 100) {
                    var text = "";
                    var chr = OCR.findChar(buf, fontmono, fontcol, dx + x + 2 - imgref.x, dy + 3 - imgref.y, 30, 1);
                    if (chr) {
                        var read = OCR.readLine(buf, fontmono, fontcol, chr.x, chr.y, true, true);
                        var text = read.text;
                    }
                    row = { text: text, x: dx + x, y: dy, width: 200, buttonx: dx - 31, hover: !!locs[a].hover, active: locs[a].active };
                }
            }
            if (row) {
                r.push(row);
            }
        }
        r.sort((a, b) => a.y - b.y);
        return r;
    }
}
exports["default"] = DialogReader;
//TODO get rid of this or make it standard
function coldiff(r1, g1, b1, r2, g2, b2) {
    return Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
}


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/aa_8px_mono.fontmeta.json":
/*!*********************************************!*\
  !*** ./src/fonts/aa_8px_mono.fontmeta.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":75,"chr":"a","pixels":[0,7,187,1,3,221,1,6,170,1,8,255,2,3,255,2,5,187,2,8,255,3,3,255,3,5,255,3,8,221,4,4,238,4,5,255,4,6,204,4,7,255,4,8,238],"secondary":false},{"width":7,"bonus":105,"chr":"b","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,3,204,1,4,170,1,7,170,1,8,187,2,3,255,2,8,255,3,3,255,3,8,255,4,3,170,4,4,170,4,7,170,5,5,187,5,6,187],"secondary":false},{"width":7,"bonus":50,"chr":"c","pixels":[0,5,170,0,6,187,1,4,187,1,7,187,2,3,255,2,8,255,3,3,255,3,8,255,4,3,221,4,8,221],"secondary":false},{"width":7,"bonus":105,"chr":"d","pixels":[0,5,187,0,6,187,1,4,170,1,7,170,1,8,170,2,3,255,2,8,255,3,3,255,3,8,255,4,3,204,4,4,170,4,7,170,4,8,187,5,1,204,5,2,221,5,3,221,5,4,221,5,5,221,5,6,221,5,7,221,5,8,204],"secondary":false},{"width":7,"bonus":75,"chr":"e","pixels":[0,5,187,0,6,170,1,4,187,1,5,255,1,7,204,2,3,255,2,5,255,2,8,255,3,3,255,3,5,255,3,8,255,4,3,187,4,5,255,4,8,221,5,5,204],"secondary":false},{"width":4,"bonus":50,"chr":"f","pixels":[0,3,204,1,2,221,1,3,255,1,4,221,1,5,221,1,6,221,1,7,221,1,8,204,2,1,255,2,3,255],"secondary":false},{"width":7,"bonus":115,"chr":"g","pixels":[0,5,187,0,6,187,1,3,170,1,4,153,1,7,170,1,11,153,2,3,255,2,8,255,2,11,238,3,3,255,3,8,255,3,11,221,4,3,221,4,7,153,4,8,221,4,10,204,5,3,204,5,4,221,5,5,221,5,6,221,5,7,221,5,8,221,5,9,170],"secondary":false},{"width":7,"bonus":90,"chr":"h","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,3,170,1,4,204,2,3,255,3,3,255,4,3,170,4,4,221,4,5,221,4,6,221,4,7,221,4,8,204],"secondary":false},{"width":3,"bonus":35,"chr":"i","pixels":[0,1,238,0,3,204,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204],"secondary":false},{"width":4,"bonus":50,"chr":"j","pixels":[0,11,153,1,11,170,2,1,204,2,3,204,2,4,221,2,5,221,2,6,221,2,7,221,2,8,221,2,9,221],"secondary":false},{"width":6,"bonus":70,"chr":"k","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,5,255,2,4,153,2,5,255,2,6,221,3,3,204,3,7,221],"secondary":false},{"width":3,"bonus":40,"chr":"l","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,1,8,255],"secondary":false},{"width":10,"bonus":115,"chr":"m","pixels":[0,3,204,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,4,221,2,3,238,3,3,255,4,3,153,4,4,255,4,5,221,4,6,221,4,7,221,4,8,204,5,4,187,6,3,255,7,3,238,8,4,170,8,5,221,8,6,221,8,7,221,8,8,204],"secondary":false},{"width":7,"bonus":75,"chr":"n","pixels":[0,3,204,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,4,221,2,3,238,3,3,255,4,3,238,5,4,170,5,5,221,5,6,221,5,7,221,5,8,204],"secondary":false},{"width":8,"bonus":70,"chr":"o","pixels":[0,5,187,0,6,170,1,4,204,1,7,221,2,3,238,2,8,238,3,3,255,3,8,255,4,3,238,4,8,255,5,4,204,5,7,221,6,5,170,6,6,170],"secondary":false},{"width":6,"bonus":90,"chr":"p","pixels":[0,3,238,0,4,255,0,5,187,0,6,204,0,7,255,0,8,221,0,9,221,0,10,221,1,3,255,1,8,238,2,3,255,2,8,255,3,3,238,3,8,238,4,4,238,4,5,255,4,6,255,4,7,238],"secondary":false},{"width":7,"bonus":90,"chr":"q","pixels":[0,5,187,0,6,187,1,3,170,1,4,153,1,7,153,1,8,170,2,3,255,2,8,255,3,3,238,3,8,238,4,3,255,4,4,255,4,5,187,4,6,187,4,7,255,4,8,238,4,9,221,4,10,221],"secondary":false},{"width":4,"bonus":45,"chr":"r","pixels":[0,3,204,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,3,187,1,4,204,2,3,255],"secondary":false},{"width":6,"bonus":50,"chr":"s","pixels":[0,4,187,1,3,255,1,5,238,1,8,255,2,3,255,2,8,255,3,3,255,3,6,238,3,8,255,4,7,187],"secondary":false},{"width":5,"bonus":45,"chr":"t","pixels":[1,2,221,1,3,255,1,4,221,1,5,221,1,6,221,1,7,170,2,3,255,2,8,238,3,8,153],"secondary":false},{"width":6,"bonus":70,"chr":"u","pixels":[0,3,204,0,4,221,0,5,221,0,6,221,0,7,170,1,8,238,2,8,255,3,8,204,4,3,204,4,4,221,4,5,221,4,6,204,4,7,255,4,8,221],"secondary":false},{"width":6,"bonus":50,"chr":"v","pixels":[0,3,238,1,5,238,1,6,204,2,7,255,2,8,255,3,5,153,3,6,255,3,7,153,4,3,238,4,4,204],"secondary":false},{"width":10,"bonus":95,"chr":"w","pixels":[1,3,153,1,4,238,1,5,187,2,6,153,2,7,238,2,8,187,3,6,204,3,7,238,3,8,153,4,3,170,4,4,255,5,4,221,5,5,221,6,7,255,6,8,221,7,6,238,7,7,204,8,3,238,8,4,204],"secondary":false},{"width":6,"bonus":55,"chr":"x","pixels":[0,8,170,1,3,170,1,4,204,1,7,221,2,5,255,2,6,238,3,4,255,3,6,187,3,7,187,4,3,221,4,8,255],"secondary":false},{"width":6,"bonus":65,"chr":"y","pixels":[0,3,255,0,4,153,0,11,221,1,5,204,1,6,221,1,11,187,2,7,187,2,8,255,2,9,238,3,6,238,3,7,187,4,3,204,4,4,221],"secondary":false},{"width":6,"bonus":70,"chr":"z","pixels":[0,3,153,0,8,204,1,3,255,1,7,221,1,8,255,2,3,255,2,6,255,2,8,255,3,3,255,3,4,170,3,5,170,3,8,255,4,3,255,4,8,255],"secondary":false},{"width":8,"bonus":85,"chr":"A","pixels":[0,8,153,1,6,221,1,7,238,2,3,170,2,4,255,2,5,187,2,6,255,3,1,255,3,2,255,3,6,255,4,2,255,4,3,238,4,6,255,5,5,255,5,6,255,6,7,187,6,8,255],"secondary":false},{"width":7,"bonus":125,"chr":"B","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,4,255,1,8,255,2,1,255,2,4,255,2,8,255,3,1,255,3,4,255,3,8,255,4,1,221,4,4,255,4,5,170,4,8,204,5,2,170,5,3,170,5,6,187,5,7,153],"secondary":false},{"width":9,"bonus":80,"chr":"C","pixels":[0,4,187,0,5,187,1,2,221,1,3,153,1,6,153,1,7,204,2,1,170,2,8,170,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,255,6,1,170,6,8,170],"secondary":false},{"width":8,"bonus":100,"chr":"D","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,8,255,2,1,255,2,8,255,3,1,255,3,8,255,4,1,204,4,8,204,5,2,221,5,7,221,6,4,187,6,5,187],"secondary":false},{"width":6,"bonus":95,"chr":"E","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,5,255,1,8,255,2,1,255,2,5,255,2,8,255,3,1,255,3,5,255,3,8,255,4,1,153,4,8,221],"secondary":false},{"width":6,"bonus":70,"chr":"F","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255],"secondary":false},{"width":9,"bonus":105,"chr":"G","pixels":[0,4,170,0,5,187,1,2,204,1,3,153,1,7,221,2,1,170,2,8,187,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,238,6,1,170,6,5,255,6,7,153,6,8,170,7,5,153,7,6,221,7,7,221,7,8,204],"secondary":false},{"width":8,"bonus":105,"chr":"H","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,5,255,2,5,255,3,5,255,4,5,255,5,5,255,6,1,204,6,2,221,6,3,221,6,4,221,6,5,221,6,6,221,6,7,221,6,8,204],"secondary":false},{"width":4,"bonus":60,"chr":"I","pixels":[0,1,192,0,8,191,1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,2,1,192,2,8,191],"secondary":false},{"width":6,"bonus":70,"chr":"J","pixels":[0,6,153,0,7,153,1,8,204,2,1,221,2,8,255,3,1,255,3,8,204,4,1,204,4,2,221,4,3,221,4,4,221,4,5,221,4,6,221,4,7,153],"secondary":false},{"width":7,"bonus":85,"chr":"K","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,4,255,2,4,255,3,3,221,3,5,170,3,6,204,4,1,204,4,2,153,4,7,238,4,8,153],"secondary":false},{"width":6,"bonus":60,"chr":"L","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,8,255,2,8,255,3,8,255,4,8,255],"secondary":false},{"width":9,"bonus":130,"chr":"M","pixels":[0,1,245,0,2,255,0,3,255,0,4,255,0,5,255,0,6,255,0,7,255,0,8,255,1,2,170,1,3,225,2,4,207,2,5,190,3,6,232,4,6,232,5,4,207,5,5,190,6,2,170,6,3,224,7,1,245,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255],"secondary":false},{"width":8,"bonus":110,"chr":"N","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,2,255,2,3,221,3,4,187,3,5,187,4,6,221,5,7,255,6,1,204,6,2,221,6,3,221,6,4,221,6,5,221,6,6,221,6,7,221,6,8,204],"secondary":false},{"width":10,"bonus":110,"chr":"O","pixels":[0,4,187,0,5,170,1,2,204,1,3,153,1,6,170,1,7,204,2,1,153,2,8,153,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,255,6,1,153,6,8,153,7,2,204,7,3,153,7,6,170,7,7,204,8,4,187,8,5,170],"secondary":false},{"width":7,"bonus":85,"chr":"P","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255,4,1,187,4,5,187,5,3,221],"secondary":false},{"width":9,"bonus":100,"chr":"Q","pixels":[0,4,187,0,5,187,1,2,221,1,6,153,1,7,221,2,1,187,2,8,170,3,1,255,3,8,255,4,1,255,4,8,255,5,1,238,5,8,238,6,2,204,6,7,255,7,3,255,7,4,204,7,5,221,7,6,255,7,8,204],"secondary":false},{"width":7,"bonus":100,"chr":"R","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255,3,6,187,4,2,238,4,3,204,4,4,255,4,7,238,4,8,170],"secondary":false},{"width":6,"bonus":70,"chr":"S","pixels":[0,2,153,0,3,170,1,1,204,1,4,221,1,8,238,2,1,255,2,4,170,2,8,255,3,1,255,3,5,255,3,8,255,4,1,170,4,6,221,4,7,238],"secondary":false},{"width":8,"bonus":65,"chr":"T","pixels":[0,1,255,1,1,255,2,1,255,3,1,255,3,2,221,3,3,221,3,4,221,3,5,221,3,6,221,3,7,221,3,8,204,4,1,255,5,1,255],"secondary":false},{"width":8,"bonus":85,"chr":"U","pixels":[0,1,204,0,2,221,0,3,221,0,4,221,0,5,221,0,6,187,1,7,170,2,8,255,3,8,255,4,8,221,5,1,204,5,2,221,5,3,221,5,4,221,5,5,221,5,6,255,5,7,238],"secondary":false},{"width":7,"bonus":70,"chr":"V","pixels":[0,1,255,0,2,187,1,3,153,1,4,255,1,5,153,2,6,187,2,7,238,3,7,255,3,8,204,4,4,204,4,5,238,5,1,170,5,2,255,5,3,153],"secondary":false},{"width":10,"bonus":125,"chr":"W","pixels":[0,1,255,0,2,221,1,4,187,1,5,255,1,6,204,2,7,255,2,8,255,3,3,153,3,4,238,3,5,221,4,1,255,4,2,255,4,3,153,5,3,170,5,4,238,5,5,204,6,7,255,6,8,255,7,4,153,7,5,238,7,6,238,7,7,153,8,1,238,8,2,238,8,3,153],"secondary":false},{"width":7,"bonus":75,"chr":"X","pixels":[0,8,170,1,1,187,1,2,204,1,7,238,2,3,221,2,4,153,2,5,255,2,6,153,3,4,255,3,5,238,4,2,238,4,6,204,4,7,170,5,1,204,5,8,255],"secondary":false},{"width":7,"bonus":55,"chr":"Y","pixels":[0,1,170,1,2,238,2,3,153,2,4,255,3,4,221,3,5,204,3,6,221,3,7,221,3,8,204,4,3,255,5,1,238],"secondary":false},{"width":7,"bonus":75,"chr":"Z","pixels":[0,8,187,1,1,255,1,7,221,1,8,255,2,1,255,2,5,204,2,8,255,3,1,255,3,4,204,3,8,255,4,1,255,4,2,221,4,8,255,5,1,187,5,8,153],"secondary":false},{"width":7,"bonus":90,"chr":"0","pixels":[0,2,153,0,3,221,0,4,255,0,5,255,0,6,238,0,7,170,1,1,187,1,8,204,2,1,187,2,8,187,3,1,221,3,8,204,4,2,170,4,3,255,4,4,187,4,5,187,4,6,238,4,7,170],"secondary":false},{"width":7,"bonus":50,"chr":"1","pixels":[1,8,187,2,1,204,2,2,204,2,3,187,2,4,187,2,5,187,2,6,187,2,7,187,2,8,238,3,8,204],"secondary":false},{"width":7,"bonus":55,"chr":"2","pixels":[1,8,255,2,1,187,2,6,153,2,8,187,3,1,204,3,5,153,3,8,187,4,1,187,4,2,153,4,4,204,4,8,187],"secondary":false},{"width":7,"bonus":50,"chr":"3","pixels":[0,8,204,1,1,187,1,8,187,2,1,187,2,4,187,2,8,204,3,2,221,3,3,204,3,5,204,3,7,170],"secondary":false},{"width":7,"bonus":80,"chr":"4","pixels":[0,6,238,1,4,187,1,6,187,2,3,170,2,6,187,3,1,187,3,2,153,3,6,204,4,1,187,4,2,187,4,3,187,4,4,187,4,5,187,4,6,238,4,7,187,4,8,187],"secondary":false},{"width":7,"bonus":70,"chr":"5","pixels":[1,1,238,1,2,187,1,3,187,1,4,187,1,8,204,2,1,187,2,4,187,2,8,187,3,1,187,3,4,204,3,8,204,4,5,238,4,6,187,4,7,221],"secondary":false},{"width":7,"bonus":80,"chr":"6","pixels":[0,3,170,0,4,255,0,5,255,0,6,238,0,7,153,1,2,187,1,8,187,2,1,204,2,4,187,2,8,187,3,1,187,3,4,204,3,8,187,4,5,221,4,6,255,4,7,187],"secondary":false},{"width":7,"bonus":55,"chr":"7","pixels":[0,1,187,1,1,187,1,8,204,2,1,187,2,6,238,2,7,153,3,1,187,3,3,153,3,4,221,4,1,255,4,2,187],"secondary":false},{"width":7,"bonus":95,"chr":"8","pixels":[1,2,238,1,3,221,1,6,204,1,7,221,2,1,204,2,4,204,2,5,170,2,8,221,3,1,187,3,4,170,3,8,187,4,1,221,4,4,170,4,5,204,4,8,187,5,2,170,5,3,153,5,6,238,5,7,238],"secondary":false},{"width":7,"bonus":85,"chr":"9","pixels":[1,2,221,1,3,187,1,4,238,1,8,153,2,1,204,2,5,221,2,8,187,3,1,187,3,5,187,3,8,204,4,1,187,4,7,170,5,2,153,5,3,238,5,4,255,5,5,255,5,6,187],"secondary":false},{"width":8,"bonus":75,"chr":"%","pixels":[0,3,255,0,8,255,1,2,255,1,4,255,1,7,255,2,3,255,2,6,255,3,5,255,4,4,255,4,7,255,5,3,255,5,6,255,5,8,255,6,2,255,6,7,255],"secondary":false},{"width":4,"bonus":40,"chr":"/","pixels":[0,7,153,0,8,238,0,9,221,1,4,187,1,5,238,1,6,170,2,1,221,2,2,221],"secondary":false},{"width":7,"bonus":60,"chr":"+","pixels":[0,5,221,1,5,255,2,5,255,3,2,153,3,3,221,3,4,221,3,5,255,3,6,221,3,7,221,3,8,204,4,5,255,5,5,255],"secondary":false},{"width":5,"bonus":40,"chr":"?","pixels":[0,1,170,1,1,255,1,6,221,1,8,255,2,1,255,2,5,170,3,2,255,3,3,221],"secondary":false},{"width":2,"bonus":35,"chr":"!","pixels":[0,1,170,0,2,187,0,3,187,0,4,187,0,5,187,0,6,170,0,8,255],"secondary":false},{"width":8,"bonus":130,"chr":"@","pixels":[0,4,255,0,5,255,0,6,221,0,7,255,0,8,187,1,3,221,1,9,238,2,2,221,2,5,255,2,6,238,2,7,255,2,10,153,3,2,255,3,4,255,3,8,204,3,10,187,4,2,238,4,4,255,4,8,255,5,3,238,5,4,255,5,5,221,5,6,221,5,7,221,5,8,238,6,8,221],"secondary":false},{"width":8,"bonus":120,"chr":"#","pixels":[0,6,255,1,3,255,1,6,255,1,7,170,1,8,238,2,1,170,2,2,238,2,3,255,2,4,221,2,5,170,2,6,255,3,3,255,3,6,255,4,3,255,4,4,153,4,5,204,4,6,255,4,7,238,4,8,187,5,1,255,5,2,187,5,3,255,5,6,255,6,3,255],"secondary":false},{"width":6,"bonus":70,"chr":"$","pixels":[0,2,153,0,3,170,1,1,204,1,4,221,1,8,238,2,0,204,2,1,238,2,8,238,2,9,204,3,1,238,3,5,238,3,8,255,4,6,170,4,7,170],"secondary":false},{"width":6,"bonus":40,"chr":"^","pixels":[0,4,153,0,5,238,1,2,204,1,3,221,2,1,221,2,2,221,3,3,187,3,4,221],"secondary":false},{"width":6,"bonus":20,"chr":"~","pixels":[1,5,255,2,5,221,3,6,221,4,5,204],"secondary":false},{"width":7,"bonus":95,"chr":"&","pixels":[0,6,187,1,2,238,1,3,255,1,4,187,1,5,187,1,8,187,2,1,255,2,4,255,2,8,255,3,1,255,3,4,255,3,8,255,4,4,255,4,8,187,5,3,204,5,4,255,5,5,221,5,6,187,6,4,153],"secondary":false},{"width":6,"bonus":45,"chr":"*","pixels":[0,2,170,1,2,170,1,3,204,1,4,255,2,1,204,2,2,238,2,3,255,3,2,170,3,4,153],"secondary":false},{"width":4,"bonus":55,"chr":"(","pixels":[0,3,173,0,4,239,0,5,253,0,6,230,0,7,171,1,1,194,1,2,204,1,8,204,1,9,191,2,0,210,2,10,216],"secondary":false},{"width":4,"bonus":55,"chr":")","pixels":[1,0,211,1,10,216,2,1,194,2,2,203,2,8,203,2,9,191,3,3,174,3,4,240,3,5,253,3,6,229,3,7,171],"secondary":false},{"width":7,"bonus":30,"chr":"_","pixels":[0,9,153,1,9,255,2,9,255,3,9,255,4,9,255,5,9,255],"secondary":false},{"width":4,"bonus":15,"chr":"-","pixels":[0,5,255,1,5,255,2,5,255],"secondary":true},{"width":8,"bonus":50,"chr":"=","pixels":[0,4,255,0,6,255,1,4,255,1,6,255,2,4,255,2,6,255,3,4,255,3,6,255,4,4,255,4,6,255],"secondary":false},{"width":3,"bonus":55,"chr":"[","pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,204,1,0,238,1,8,238],"secondary":false},{"width":3,"bonus":55,"chr":"]","pixels":[0,0,238,0,8,238,1,0,204,1,1,221,1,2,221,1,3,221,1,4,221,1,5,221,1,6,221,1,7,221,1,8,204],"secondary":false},{"width":5,"bonus":50,"chr":"{","pixels":[0,5,153,1,2,170,1,3,221,1,4,221,1,5,204,1,6,255,1,7,221,1,8,170,2,1,238,2,9,238],"secondary":false},{"width":5,"bonus":50,"chr":"}","pixels":[1,1,238,1,9,238,2,2,170,2,3,221,2,4,221,2,5,204,2,6,255,2,7,221,2,8,170,3,5,153],"secondary":false},{"width":3,"bonus":10,"chr":":","pixels":[1,3,255,1,7,255],"secondary":true},{"width":3,"bonus":20,"chr":";","pixels":[0,9,201,1,3,255,1,7,241,1,8,255],"secondary":true},{"width":3,"bonus":20,"chr":"\\"","pixels":[0,1,255,0,2,255,2,1,255,2,2,255],"secondary":true},{"width":2,"bonus":10,"chr":"\'","pixels":[0,1,255,0,2,177],"secondary":true},{"width":7,"bonus":40,"chr":"<","pixels":[0,5,204,1,5,255,2,4,238,2,6,238,3,4,170,3,6,170,4,3,221,4,7,221],"secondary":false},{"width":7,"bonus":45,"chr":">","pixels":[0,3,204,0,7,204,1,7,187,2,4,238,2,6,255,3,4,170,3,5,153,3,6,204,4,5,255],"secondary":false},{"width":5,"bonus":35,"chr":"\\\\","pixels":[1,1,153,1,2,255,1,3,204,2,5,255,2,6,204,3,8,255,3,9,204],"secondary":false},{"width":2,"bonus":5,"chr":".","pixels":[0,8,255],"secondary":true},{"width":3,"bonus":15,"chr":",","pixels":[0,9,205,1,7,205,1,8,255],"secondary":true},{"width":3,"bonus":50,"chr":"|","pixels":[0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,221,0,8,221,0,9,221,0,10,204],"secondary":false}],"width":10,"spacewidth":3,"shadow":false,"height":12,"basey":8}');

/***/ }),

/***/ "./src/fonts/aa_8px_mono_allcaps.fontmeta.json":
/*!*****************************************************!*\
  !*** ./src/fonts/aa_8px_mono_allcaps.fontmeta.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":3,"bonus":35,"chr":"!","pixels":[0,2,170,1,1,221,1,2,255,1,3,221,1,4,187,1,5,170,1,9,204],"secondary":false},{"width":6,"bonus":20,"chr":"\\"","pixels":[1,2,221,1,3,255,3,2,221,3,3,255],"secondary":true},{"width":8,"bonus":125,"chr":"#","pixels":[0,7,187,1,4,255,1,7,255,1,10,170,2,3,170,2,4,255,2,5,255,2,6,221,2,7,255,2,8,170,3,4,255,3,7,255,4,4,255,4,5,153,4,7,255,4,8,238,4,9,255,4,10,204,5,2,238,5,3,204,5,4,255,5,5,153,5,7,255,6,4,255,6,7,153],"secondary":false},{"width":7,"bonus":115,"chr":"$","pixels":[0,8,187,1,2,255,1,3,255,1,4,221,1,9,238,2,1,187,2,4,255,2,5,204,2,8,170,2,9,255,2,10,221,3,0,187,3,1,238,3,2,187,3,3,170,3,4,153,3,5,255,3,6,221,3,9,221,4,1,221,4,6,255,4,7,255,4,8,255],"secondary":false},{"width":12,"bonus":135,"chr":"%","pixels":[1,2,255,1,3,255,1,4,221,2,5,153,3,1,153,3,9,187,4,1,170,4,2,255,4,3,255,4,4,221,4,7,238,4,8,204,5,4,153,5,5,238,5,6,153,6,1,153,6,2,187,6,3,204,6,6,221,6,7,255,6,8,255,7,1,153,7,9,187,8,9,187,9,6,221,9,7,255,9,8,255],"secondary":false},{"width":11,"bonus":190,"chr":"&","pixels":[0,6,187,0,7,255,0,8,170,1,2,204,1,3,255,1,4,153,1,5,238,1,6,170,1,7,187,1,8,255,1,9,153,2,1,170,2,2,153,2,3,153,2,4,255,2,5,187,2,9,238,3,1,221,3,5,238,3,6,170,3,9,255,4,1,238,4,6,238,4,7,153,4,9,204,5,1,187,5,2,187,5,7,255,5,8,204,6,7,170,6,8,255,7,5,238,7,6,255,7,7,170,7,8,170,7,9,221,8,9,238,9,9,153],"secondary":false},{"width":4,"bonus":10,"chr":"\'","pixels":[1,2,204,1,3,255],"secondary":true},{"width":4,"bonus":50,"chr":"(","pixels":[0,3,170,0,4,238,0,5,255,0,6,221,0,7,153,1,1,153,1,2,221,1,3,153,1,7,170,1,8,238],"secondary":false},{"width":4,"bonus":40,"chr":")","pixels":[1,1,170,1,2,221,1,7,170,1,8,238,2,3,187,2,4,238,2,5,255,2,6,204],"secondary":false},{"width":5,"bonus":25,"chr":"*","pixels":[1,1,170,1,2,221,1,3,153,2,2,255,2,3,204],"secondary":false},{"width":8,"bonus":45,"chr":"+","pixels":[1,6,255,2,6,255,3,4,255,3,5,255,3,6,255,3,7,255,3,8,255,4,6,255,5,6,255],"secondary":false},{"width":3,"bonus":10,"chr":",","pixels":[1,8,187,1,9,221],"secondary":true},{"width":5,"bonus":20,"chr":"-","pixels":[0,7,204,1,7,255,2,7,238,3,7,187],"secondary":true},{"width":3,"bonus":5,"chr":".","pixels":[0,9,204],"secondary":true},{"width":7,"bonus":40,"chr":"/","pixels":[0,9,221,1,7,187,1,8,187,2,6,221,3,4,221,4,2,170,4,3,187,5,1,187],"secondary":false},{"width":8,"bonus":105,"chr":"0","pixels":[0,6,153,1,3,221,1,4,255,1,5,255,1,6,255,1,7,255,1,8,238,2,2,187,2,8,153,2,9,204,3,2,187,3,9,204,4,2,221,4,9,187,5,3,238,5,4,255,5,5,255,5,6,255,5,7,255,5,8,221,6,5,153],"secondary":false},{"width":6,"bonus":85,"chr":"1","pixels":[1,3,170,1,9,153,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,3,2,153,3,3,153,3,4,153,3,5,153,3,6,153,3,7,153,3,8,153,3,9,221],"secondary":false},{"width":8,"bonus":100,"chr":"2","pixels":[1,2,187,1,3,153,1,9,255,2,2,187,2,8,221,2,9,255,3,2,221,3,7,221,3,9,255,4,2,187,4,3,238,4,4,187,4,5,238,4,6,238,4,9,255,5,3,221,5,4,255,5,5,170,5,8,153,5,9,238],"secondary":false},{"width":7,"bonus":100,"chr":"3","pixels":[0,2,170,0,8,170,0,9,204,1,2,221,1,9,238,2,2,238,2,5,221,2,9,221,3,2,221,3,3,187,3,4,204,3,5,255,3,6,153,3,9,187,4,3,238,4,4,153,4,6,255,4,7,255,4,8,255,5,7,153],"secondary":false},{"width":8,"bonus":85,"chr":"4","pixels":[0,7,153,1,6,187,1,7,255,2,5,187,2,7,255,3,4,187,3,7,255,4,3,255,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,5,7,255,5,9,204,6,7,221],"secondary":false},{"width":7,"bonus":95,"chr":"5","pixels":[0,8,153,0,9,221,1,2,255,1,3,187,1,4,238,1,9,221,2,2,255,2,4,187,2,5,170,2,9,204,3,2,255,3,5,255,3,9,170,4,2,255,4,5,204,4,6,255,4,7,255,4,8,238,5,7,153],"secondary":false},{"width":8,"bonus":105,"chr":"6","pixels":[0,7,153,1,4,153,1,5,255,1,6,255,1,7,255,1,8,255,2,4,204,2,9,221,3,3,170,3,5,153,3,9,204,4,2,153,4,5,187,4,9,204,5,6,238,5,7,170,5,8,187,5,9,153,6,6,187,6,7,255,6,8,170],"secondary":false},{"width":7,"bonus":75,"chr":"7","pixels":[0,2,204,0,3,187,1,2,255,1,9,187,2,2,255,2,7,238,2,8,255,2,9,170,3,2,255,3,5,221,3,6,204,4,2,255,4,3,204,4,4,170,5,2,204],"secondary":false},{"width":8,"bonus":120,"chr":"8","pixels":[1,3,221,1,4,204,1,6,187,1,7,255,1,8,255,2,2,187,2,4,204,2,5,221,2,6,153,2,9,221,3,2,153,3,5,255,3,9,187,4,2,187,4,5,238,4,6,204,4,9,204,5,2,170,5,3,255,5,4,238,5,6,238,5,7,255,5,8,255,6,7,153],"secondary":false},{"width":8,"bonus":95,"chr":"9","pixels":[0,4,153,1,3,255,1,4,255,1,5,255,2,2,187,2,6,153,3,2,204,3,6,153,3,9,153,4,2,221,4,7,153,4,8,204,5,3,255,5,4,255,5,5,255,5,6,255,5,7,187,6,4,153,6,5,153],"secondary":false},{"width":3,"bonus":10,"chr":":","pixels":[0,3,204,0,7,204],"secondary":true},{"width":3,"bonus":20,"chr":";","pixels":[0,2,204,0,6,153,0,7,187,0,8,153],"secondary":true},{"width":7,"bonus":55,"chr":"<","pixels":[0,6,187,0,7,153,1,6,221,1,7,238,2,5,153,3,5,238,3,8,238,4,5,153,4,8,187,5,4,187,5,9,153],"secondary":false},{"width":7,"bonus":60,"chr":"=","pixels":[0,5,255,0,8,255,1,5,255,1,8,255,2,5,255,2,8,255,3,5,255,3,8,255,4,5,255,4,8,255,5,5,221,5,8,221],"secondary":false},{"width":7,"bonus":50,"chr":">","pixels":[0,4,204,0,9,170,1,5,170,1,8,187,2,5,238,2,8,221,3,7,153,4,6,238,4,7,238,5,6,153],"secondary":false},{"width":6,"bonus":65,"chr":"?","pixels":[0,2,153,0,3,187,1,2,221,1,7,221,2,2,238,2,6,238,2,10,204,3,2,204,3,3,221,3,4,204,3,5,255,4,3,238,4,4,221],"secondary":false},{"width":11,"bonus":180,"chr":"@","pixels":[0,4,187,0,5,255,0,6,255,0,7,238,1,3,170,1,8,204,2,5,187,2,6,238,2,7,187,2,9,204,3,4,204,3,5,153,3,6,153,3,7,204,3,9,204,4,3,153,4,6,153,4,9,187,5,0,153,5,3,221,5,4,170,5,5,238,5,6,255,5,7,187,5,9,170,6,3,221,6,4,153,6,7,238,7,1,153,7,7,170,8,1,170,8,2,153,8,6,170,9,3,187,9,4,221,9,5,170],"secondary":false},{"width":9,"bonus":110,"chr":"A","pixels":[1,9,238,2,6,153,2,7,255,2,8,170,2,9,170,3,4,187,3,5,238,3,7,221,4,2,187,4,3,255,4,4,238,4,7,221,5,4,221,5,5,255,5,6,238,5,7,238,6,6,187,6,7,255,6,8,255,6,9,187,7,8,170,7,9,255],"secondary":false},{"width":7,"bonus":150,"chr":"B","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,255,3,2,221,3,5,221,3,9,204,4,2,187,4,3,255,4,4,255,4,5,170,4,6,255,4,7,170,4,8,187,4,9,187,5,6,153,5,7,255,5,8,204],"secondary":false},{"width":8,"bonus":120,"chr":"C","pixels":[0,4,170,0,5,238,0,6,238,0,7,170,1,3,238,1,4,255,1,5,221,1,6,238,1,7,255,1,8,238,2,2,153,2,3,153,2,8,221,2,9,153,3,2,221,3,9,221,4,2,221,4,9,221,5,2,221,5,9,221,6,2,187,6,3,187,6,8,153,6,9,170],"secondary":false},{"width":10,"bonus":165,"chr":"D","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,170,2,9,255,3,2,221,3,9,221,4,2,238,4,9,221,5,2,221,5,9,204,6,2,153,6,3,238,6,8,187,7,3,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,170,8,5,187,8,6,170],"secondary":false},{"width":7,"bonus":110,"chr":"E","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,170,2,9,239,3,2,214,3,5,221,3,9,212,4,2,212,4,5,226,4,9,238],"secondary":false},{"width":7,"bonus":100,"chr":"F","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,221,3,2,221,3,5,221,4,2,238,4,5,238],"secondary":false},{"width":9,"bonus":135,"chr":"G","pixels":[0,4,170,0,5,238,0,6,255,0,7,187,1,3,238,1,4,238,1,5,187,1,6,204,1,7,255,1,8,238,2,2,153,2,8,221,2,9,153,3,2,221,3,9,221,4,2,221,4,9,238,5,2,238,5,9,221,6,2,204,6,6,255,6,7,255,6,8,255,6,9,204,7,6,204,7,7,153,7,8,153],"secondary":false},{"width":10,"bonus":175,"chr":"H","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,221,3,5,221,4,5,221,5,5,221,6,2,204,6,3,153,6,4,153,6,5,238,6,6,153,6,7,153,6,8,153,6,9,221,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255],"secondary":false},{"width":5,"bonus":80,"chr":"I","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,153,2,9,221],"secondary":false},{"width":6,"bonus":90,"chr":"J","pixels":[2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,187,3,2,204,3,3,153,3,4,153,3,5,153,3,6,153,3,7,153,3,8,153,3,9,153],"secondary":false},{"width":10,"bonus":140,"chr":"K","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,238,2,6,187,2,7,153,2,8,153,2,9,204,3,5,238,3,6,238,4,6,170,4,7,255,5,2,238,5,3,153,5,7,170,5,8,255,6,2,204,6,8,170,6,9,238,7,9,204],"secondary":false},{"width":7,"bonus":95,"chr":"L","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,170,2,9,255,3,9,221,4,9,221,5,9,204],"secondary":false},{"width":12,"bonus":150,"chr":"M","pixels":[1,6,170,1,7,221,1,8,255,1,9,255,2,2,170,2,3,255,2,4,255,2,5,221,3,4,204,3,5,255,3,6,238,4,6,204,4,7,255,4,8,221,5,7,187,5,8,255,6,6,221,7,4,238,7,5,204,8,2,187,8,3,255,8,4,255,8,5,255,8,6,255,8,7,238,8,8,204,8,9,187,9,7,170,9,8,204,9,9,255],"secondary":false},{"width":10,"bonus":130,"chr":"N","pixels":[1,2,204,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,3,221,2,4,238,3,4,221,3,5,238,4,5,238,4,6,238,5,6,238,5,7,238,6,7,238,6,8,238,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,204],"secondary":false},{"width":10,"bonus":155,"chr":"O","pixels":[0,4,170,0,5,238,0,6,238,0,7,170,1,3,238,1,4,238,1,5,187,1,6,204,1,7,255,1,8,238,2,2,170,2,8,204,2,9,170,3,2,221,3,9,238,4,2,221,4,9,221,5,2,238,5,9,204,6,2,153,6,3,238,6,8,170,7,3,238,7,4,255,7,5,255,7,6,255,7,7,255,7,8,187,8,4,153,8,5,221,8,6,204],"secondary":false},{"width":8,"bonus":130,"chr":"P","pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,1,238,2,2,153,2,3,153,2,4,153,2,5,170,2,6,153,2,7,153,2,8,153,2,9,221,3,1,204,4,1,238,4,5,187,5,1,153,5,2,255,5,3,255,5,4,255,6,3,153],"secondary":false},{"width":10,"bonus":180,"chr":"Q","pixels":[0,4,153,0,5,238,0,6,238,0,7,170,1,3,221,1,4,255,1,5,221,1,6,238,1,7,255,1,8,238,2,2,153,2,8,221,2,9,170,3,2,221,3,9,238,4,2,221,4,9,221,5,2,238,5,9,204,6,2,153,6,3,221,6,8,153,6,9,238,7,3,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,170,7,9,187,7,10,153,8,4,153,8,5,204,8,6,204,8,10,255,9,10,204],"secondary":false},{"width":7,"bonus":140,"chr":"R","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,153,2,6,238,2,7,153,2,8,153,2,9,221,3,2,238,3,6,238,4,2,204,4,3,204,4,4,153,4,5,204,4,6,204,4,7,255,5,3,221,5,4,221,5,8,255,6,9,238],"secondary":false},{"width":6,"bonus":115,"chr":"S","pixels":[0,3,221,0,4,238,0,8,187,0,9,187,1,2,187,1,4,204,1,5,255,1,9,238,2,2,187,2,5,255,2,6,187,2,9,221,3,2,204,3,5,153,3,6,255,3,7,170,3,8,153,3,9,170,4,2,204,4,3,153,4,6,170,4,7,255,4,8,187],"secondary":false},{"width":9,"bonus":105,"chr":"T","pixels":[1,2,238,2,2,221,3,2,238,3,3,153,3,4,153,3,5,153,3,6,153,3,7,153,3,8,153,3,9,221,4,2,255,4,3,255,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,5,2,221,6,2,221,7,2,255],"secondary":false},{"width":10,"bonus":120,"chr":"U","pixels":[1,2,204,1,3,153,1,4,153,1,5,153,1,6,153,2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,3,9,221,4,9,238,5,9,221,6,9,170,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,204,8,2,153],"secondary":false},{"width":10,"bonus":90,"chr":"V","pixels":[1,2,255,1,3,153,2,2,238,2,3,255,2,4,255,2,5,187,3,5,238,3,6,255,3,7,221,4,7,221,4,8,255,4,9,187,5,6,187,5,7,204,6,4,221,6,5,187,7,2,255,7,3,170],"secondary":false},{"width":13,"bonus":165,"chr":"W","pixels":[1,2,255,1,3,221,2,2,204,2,3,221,2,4,255,2,5,255,2,6,221,3,6,187,3,7,255,3,8,255,3,9,187,4,6,153,4,7,221,5,4,221,5,5,187,6,2,187,6,3,255,6,4,255,6,5,153,7,4,170,7,5,255,7,6,255,7,7,187,8,7,255,8,8,255,8,9,187,9,5,153,9,6,221,9,7,170,10,2,221,10,3,238,10,4,187,11,2,187],"secondary":false},{"width":9,"bonus":115,"chr":"X","pixels":[1,2,221,1,9,238,2,2,255,2,3,255,2,7,153,2,8,221,2,9,153,3,3,153,3,4,255,3,5,221,3,6,204,4,5,255,4,6,255,4,7,170,5,3,187,5,4,170,5,7,255,5,8,255,5,9,153,6,2,255,6,8,204,6,9,255,7,9,170],"secondary":false},{"width":8,"bonus":95,"chr":"Y","pixels":[0,2,187,1,2,255,1,3,221,2,3,221,2,4,255,2,5,153,3,5,238,3,6,255,3,7,255,3,8,255,3,9,255,4,5,204,4,6,170,4,7,153,4,8,153,4,9,204,5,3,187,5,4,187,6,2,238],"secondary":false},{"width":8,"bonus":105,"chr":"Z","pixels":[0,9,204,1,2,238,1,7,153,1,8,255,1,9,255,2,2,221,2,6,221,2,7,255,2,9,221,3,2,221,3,4,153,3,5,255,3,6,221,3,9,221,4,2,238,4,3,221,4,4,255,4,9,221,5,2,255,5,3,204,5,9,255],"secondary":false},{"width":4,"bonus":65,"chr":"[","pixels":[0,0,255,0,1,255,0,2,255,0,3,255,0,4,255,0,5,255,0,6,255,0,7,255,0,8,255,0,9,255,0,10,187,1,0,187,1,10,170],"secondary":false},{"width":8,"bonus":40,"chr":"\\\\","pixels":[1,1,170,1,2,187,2,3,221,3,5,221,4,6,187,4,7,187,5,8,221,6,9,153],"secondary":false},{"width":5,"bonus":65,"chr":"]","pixels":[1,0,153,1,10,153,2,0,255,2,1,255,2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,187],"secondary":false},{"width":7,"bonus":40,"chr":"^","pixels":[0,5,204,1,3,238,1,4,170,2,1,238,3,1,221,3,2,204,4,3,187,4,4,238],"secondary":false},{"width":7,"bonus":30,"chr":"_","pixels":[0,10,221,1,10,221,2,10,221,3,10,221,4,10,221,5,10,221],"secondary":false},{"width":9,"bonus":110,"chr":"a","pixels":[1,9,238,2,6,153,2,7,255,2,8,170,2,9,170,3,4,187,3,5,238,3,7,221,4,2,187,4,3,255,4,4,238,4,7,221,5,4,221,5,5,255,5,6,238,5,7,238,6,6,187,6,7,255,6,8,255,6,9,187,7,8,170,7,9,255],"secondary":false},{"width":7,"bonus":150,"chr":"b","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,255,3,2,221,3,5,221,3,9,204,4,2,187,4,3,255,4,4,255,4,5,170,4,6,255,4,7,170,4,8,187,4,9,187,5,6,153,5,7,255,5,8,204],"secondary":false},{"width":8,"bonus":120,"chr":"c","pixels":[0,4,170,0,5,238,0,6,238,0,7,170,1,3,238,1,4,255,1,5,221,1,6,238,1,7,255,1,8,238,2,2,153,2,3,153,2,8,221,2,9,153,3,2,221,3,9,221,4,2,221,4,9,221,5,2,221,5,9,221,6,2,187,6,3,187,6,8,153,6,9,170],"secondary":false},{"width":10,"bonus":165,"chr":"d","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,170,2,9,255,3,2,221,3,9,221,4,2,238,4,9,221,5,2,221,5,9,204,6,2,153,6,3,238,6,8,187,7,3,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,170,8,5,187,8,6,170],"secondary":false},{"width":7,"bonus":110,"chr":"e","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,170,2,9,255,3,2,221,3,5,221,3,9,221,4,2,238,4,5,238,4,9,238],"secondary":false},{"width":7,"bonus":100,"chr":"f","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,221,3,2,221,3,5,221,4,2,238,4,5,238],"secondary":false},{"width":10,"bonus":135,"chr":"g","pixels":[0,4,170,0,5,238,0,6,255,0,7,187,1,3,238,1,4,238,1,5,187,1,6,204,1,7,255,1,8,238,2,2,153,2,8,221,2,9,153,3,2,221,3,9,221,4,2,221,4,9,238,5,2,238,5,9,221,6,2,204,6,6,255,6,7,255,6,8,255,6,9,204,7,6,204,7,7,153,7,8,153],"secondary":false},{"width":10,"bonus":175,"chr":"h","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,238,2,6,153,2,7,153,2,8,153,2,9,221,3,5,221,4,5,221,5,5,221,6,2,204,6,3,153,6,4,153,6,5,238,6,6,153,6,7,153,6,8,153,6,9,221,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255],"secondary":false},{"width":5,"bonus":80,"chr":"i","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,153,2,9,221],"secondary":false},{"width":5,"bonus":90,"chr":"j","pixels":[2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,187,3,2,204,3,3,153,3,4,153,3,5,153,3,6,153,3,7,153,3,8,153,3,9,153],"secondary":false},{"width":9,"bonus":140,"chr":"k","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,238,2,6,187,2,7,153,2,8,153,2,9,204,3,5,238,3,6,238,4,6,170,4,7,255,5,2,238,5,3,153,5,7,170,5,8,255,6,2,204,6,8,170,6,9,238,7,9,204],"secondary":false},{"width":7,"bonus":95,"chr":"l","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,204,2,3,153,2,4,153,2,5,153,2,6,153,2,7,153,2,8,170,2,9,255,3,9,221,4,9,221,5,9,204],"secondary":false},{"width":12,"bonus":150,"chr":"m","pixels":[1,6,170,1,7,221,1,8,255,1,9,255,2,2,170,2,3,255,2,4,255,2,5,221,3,4,204,3,5,255,3,6,238,4,6,204,4,7,255,4,8,221,5,7,187,5,8,255,6,6,221,7,4,238,7,5,204,8,2,187,8,3,255,8,4,255,8,5,255,8,6,255,8,7,238,8,8,204,8,9,187,9,7,170,9,8,204,9,9,255],"secondary":false},{"width":10,"bonus":130,"chr":"n","pixels":[1,2,204,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,3,221,2,4,238,3,4,221,3,5,238,4,5,238,4,6,238,5,6,238,5,7,238,6,7,238,6,8,238,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,204],"secondary":false},{"width":10,"bonus":155,"chr":"o","pixels":[0,4,170,0,5,238,0,6,238,0,7,170,1,3,238,1,4,238,1,5,187,1,6,204,1,7,255,1,8,238,2,2,170,2,8,204,2,9,170,3,2,221,3,9,238,4,2,221,4,9,221,5,2,238,5,9,204,6,2,153,6,3,238,6,8,170,7,3,238,7,4,255,7,5,255,7,6,255,7,7,255,7,8,187,8,4,153,8,5,221,8,6,204],"secondary":false},{"width":7,"bonus":115,"chr":"p","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,153,2,6,170,2,7,153,2,8,153,2,9,221,3,2,221,4,2,221,4,3,204,4,4,153,4,5,221,5,3,221,5,4,221],"secondary":false},{"width":10,"bonus":180,"chr":"q","pixels":[0,4,153,0,5,238,0,6,238,0,7,170,1,3,221,1,4,255,1,5,221,1,6,238,1,7,255,1,8,238,2,2,153,2,8,221,2,9,170,3,2,221,3,9,238,4,2,221,4,9,221,5,2,238,5,9,204,6,2,153,6,3,221,6,8,153,6,9,238,7,3,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,170,7,9,187,7,10,153,8,4,153,8,5,204,8,6,204,8,10,255,9,10,204],"secondary":false},{"width":9,"bonus":145,"chr":"r","pixels":[1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,2,238,2,3,153,2,4,153,2,5,153,2,6,238,2,7,153,2,8,153,2,9,221,3,2,238,3,6,238,4,2,204,4,3,204,4,4,153,4,5,204,4,6,204,4,7,255,5,3,221,5,4,221,5,8,255,6,9,238,7,9,153],"secondary":false},{"width":6,"bonus":115,"chr":"s","pixels":[0,3,221,0,4,238,0,8,187,0,9,187,1,2,187,1,4,204,1,5,255,1,9,238,2,2,187,2,5,255,2,6,187,2,9,221,3,2,204,3,5,153,3,6,255,3,7,170,3,8,153,3,9,170,4,2,204,4,3,153,4,6,170,4,7,255,4,8,187],"secondary":false},{"width":9,"bonus":105,"chr":"t","pixels":[1,2,238,2,2,221,3,2,238,3,3,153,3,4,153,3,5,153,3,6,153,3,7,153,3,8,153,3,9,221,4,2,255,4,3,255,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,5,2,221,6,2,221,7,2,255],"secondary":false},{"width":10,"bonus":120,"chr":"u","pixels":[1,2,204,1,3,153,1,4,153,1,5,153,1,6,153,2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,3,9,221,4,9,238,5,9,221,6,9,170,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,204,8,2,153],"secondary":false},{"width":10,"bonus":90,"chr":"v","pixels":[1,2,255,1,3,153,2,2,238,2,3,255,2,4,255,2,5,187,3,5,238,3,6,255,3,7,221,4,7,221,4,8,255,4,9,187,5,6,187,5,7,204,6,4,221,6,5,187,7,2,255,7,3,170],"secondary":false},{"width":13,"bonus":165,"chr":"w","pixels":[1,2,255,1,3,221,2,2,204,2,3,221,2,4,255,2,5,255,2,6,221,3,6,187,3,7,255,3,8,255,3,9,187,4,6,153,4,7,221,5,4,221,5,5,187,6,2,187,6,3,255,6,4,255,6,5,153,7,4,170,7,5,255,7,6,255,7,7,187,8,7,255,8,8,255,8,9,187,9,5,153,9,6,221,9,7,170,10,2,221,10,3,238,10,4,187,11,2,187],"secondary":false},{"width":9,"bonus":115,"chr":"x","pixels":[1,2,221,1,9,238,2,2,255,2,3,255,2,7,153,2,8,221,2,9,153,3,3,153,3,4,255,3,5,221,3,6,204,4,5,255,4,6,255,4,7,170,5,3,187,5,4,170,5,7,255,5,8,255,5,9,153,6,2,255,6,8,204,6,9,255,7,9,170],"secondary":false},{"width":8,"bonus":95,"chr":"y","pixels":[0,2,187,1,2,255,1,3,221,2,3,221,2,4,255,2,5,153,3,5,238,3,6,255,3,7,255,3,8,255,3,9,255,4,5,204,4,6,170,4,7,153,4,8,153,4,9,204,5,3,187,5,4,187,6,2,238],"secondary":false},{"width":8,"bonus":105,"chr":"z","pixels":[0,9,204,1,2,238,1,7,153,1,8,255,1,9,255,2,2,221,2,6,221,2,7,255,2,9,221,3,2,221,3,4,153,3,5,255,3,6,221,3,9,221,4,2,238,4,3,221,4,4,255,4,9,221,5,2,255,5,3,204,5,9,255],"secondary":false},{"width":4,"bonus":45,"chr":"{","pixels":[1,1,255,1,2,255,1,3,255,1,5,187,1,6,255,1,7,255,1,8,255,1,9,221,2,0,153],"secondary":false},{"width":2,"bonus":60,"chr":"|","pixels":[0,0,255,0,1,255,0,2,255,0,3,255,0,4,255,0,5,255,0,6,255,0,7,255,0,8,255,0,9,255,0,10,255,0,11,255],"secondary":true},{"width":4,"bonus":45,"chr":"}","pixels":[0,0,153,1,1,255,1,2,255,1,3,255,1,5,187,1,6,255,1,7,255,1,8,255,1,9,221],"secondary":false},{"width":7,"bonus":30,"chr":"~","pixels":[0,5,221,1,4,255,2,4,187,3,5,187,4,5,255,5,4,204],"secondary":false}],"width":13,"spacewidth":3,"shadow":false,"height":12,"basey":9}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_63941__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_63941__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_63941__("./src/dialog/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/ocr/index.js":
/*!**********************************************!*\
  !*** ../node_modules/alt1/dist/ocr/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ocr/index.ts":
/*!**************************!*\
  !*** ./src/ocr/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_728__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatefont = exports.readChar = exports.readSmallCapsBackwards = exports.readLine = exports.getChatColor = exports.GetChatColorMono = exports.findReadLine = exports.findChar = exports.decompose3col = exports.decomposeblack = exports.decompose2col = exports.canblend = exports.unblendTrans = exports.unblendKnownBg = exports.unblendBlackBackground = exports.debugFont = exports.debugout = exports.debug = void 0;
const base_1 = __nested_webpack_require_728__(/*! alt1/base */ "alt1/base");
exports.debug = {
    printcharscores: false,
    trackread: false
};
exports.debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new base_1.ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
exports.debugFont = debugFont;
function unblendBlackBackground(img, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
        rimg.data[i + 0] = col[0] * 255;
        rimg.data[i + 1] = rimg.data[i + 0];
        rimg.data[i + 2] = rimg.data[i + 0];
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendBlackBackground = unblendBlackBackground;
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new base_1.ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendKnownBg = unblendKnownBg;
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendTrans = unblendTrans;
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param rm resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the portion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(0, -r, -g, -b, r - 255, g - 255, b - 255);
}
exports.canblend = canblend;
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
exports.decompose2col = decompose2col;
/**
 * decomposes a pixel in a given color component and black and returns what proportion of the second color it contains
 * this is not as formal as decompose 2/3 and only give a "good enough" number
 */
function decomposeblack(rp, gp, bp, r1, g1, b1) {
    var dr = Math.abs(rp - r1);
    var dg = Math.abs(gp - g1);
    var db = Math.abs(bp - b1);
    var maxdif = Math.max(dr, dg, db);
    return [1 - maxdif / 255];
}
exports.decomposeblack = decomposeblack;
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
exports.decompose3col = decompose3col;
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
exports.findChar = findChar;
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        //TODO use getChatColor() instead for non-mono?
        var sorted = GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { debugArea: { x, y, w, h }, text: "", fragments: [] };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
exports.findReadLine = findReadLine;
function GetChatColorMono(buf, rect, colors) {
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return colormap;
    }
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap.sort((a, b) => b.score - a.score);
}
exports.GetChatColorMono = GetChatColorMono;
function unblend(r, g, b, R, G, B) {
    var m = Math.sqrt(r * r + g * g + b * b);
    var n = Math.sqrt(R * R + G * G + B * B);
    var x = (r * R + g * G + b * B) / n;
    var y = Math.sqrt(Math.max(0, m * m - x * x));
    var r1 = Math.max(0, (63.75 - y) * 4);
    var r2 = x / n * 255;
    if (r2 > 255) //brighter than refcol
     {
        r1 = Math.max(0, r1 - r2 + 255);
        r2 = 255;
    }
    return [r1, r2];
}
function getChatColor(buf, rect, colors) {
    var bestscore = -1.0;
    var best = null;
    var b2 = 0.0;
    var data = buf.data;
    for (let col of colors) {
        var score = 0.0;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                if (x < 0 || x + 1 >= buf.width) {
                    continue;
                }
                if (y < 0 || y + 1 >= buf.width) {
                    continue;
                }
                let i1 = buf.pixelOffset(x, y);
                let i2 = buf.pixelOffset(x + 1, y + 1);
                var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                //TODO this is from c# can simplify a bit
                var s = (pixel1[0] / 255 * pixel1[1] / 255) * (pixel2[0] / 255 * (255.0 - pixel2[1]) / 255);
                score += s;
            }
        }
        if (score > bestscore) {
            b2 = bestscore;
            bestscore = score;
            best = col;
        }
        else if (score > b2) {
            b2 = score;
        }
    }
    //Console.WriteLine("color: " + bestcol + " - " + (bestscore - b2));
    //bestscore /= rect.width * rect.height;
    return best;
}
exports.getChatColor = getChatColor;
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (sx, sy, backward) {
        var w = Math.floor(font.width * 1.5);
        if (backward) {
            sx -= w;
        }
        sy -= font.basey;
        return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
    };
    var fragments = [];
    var x1 = x;
    var x2 = x;
    var maxspaces = (typeof font.maxspaces == "number" ? font.maxspaces : 1);
    let fragtext = "";
    let fraghadprimary = false;
    var lastcol = null;
    let addfrag = (forward) => {
        if (!fragtext) {
            return;
        }
        let frag = {
            text: fragtext,
            color: lastcol,
            index: 0,
            xstart: x + (forward ? fragstartdx : fragenddx),
            xend: x + (forward ? fragenddx : fragstartdx)
        };
        if (forward) {
            fragments.push(frag);
        }
        else {
            fragments.unshift(frag);
        }
        fragtext = "";
        fragstartdx = dx;
        fraghadprimary = false;
    };
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var fragstartdx = dx;
        var fragenddx = dx;
        var triedspaces = 0;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (col == null || chr == null) {
                if (triedspaces < maxspaces) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedspaces++;
                    continue;
                }
                if (multicol && !triedrecol && fraghadprimary) {
                    dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                    triedspaces = 0;
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                    addfrag(dirforward);
                }
                var spaces = "";
                for (var a = 0; a < triedspaces; a++) {
                    spaces += " ";
                }
                if (dirforward) {
                    fragtext += spaces + chr.chr;
                }
                else {
                    fragtext = chr.chr + spaces + fragtext;
                }
                if (!chr.basechar.secondary) {
                    fraghadprimary = true;
                }
                triedspaces = 0;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
                fragenddx = dx;
                lastcol = col;
            }
        }
        if (lastcol && fraghadprimary) {
            addfrag(dirforward);
        }
    }
    fragments.forEach((f, i) => f.index = i);
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: fragments.map(f => f.text).join(""),
        fragments
    };
}
exports.readLine = readLine;
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
}
exports.readSmallCapsBackwards = readSmallCapsBackwards;
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (exports.debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!exports.debugout[name]) {
            exports.debugout[name] = [];
        }
        debugobj = exports.debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (exports.debug.trackread) {
            debugimg = new base_1.ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scores[chr].score += Math.max(0, penalty);
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scores[chr].sizescore = scores[chr].score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
        }
    }
    scores.sort((a, b) => a.sizescore - b.sizescore);
    if (exports.debug.printcharscores) {
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    var winchr = scores[0];
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
exports.readChar = readChar;
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more likely to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generatefont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
    }
    return font;
}
exports.generatefont = generatefont;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_26177__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26177__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_26177__("./src/ocr/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles.css":
/*!***********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/background.png */ "./assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/nisbutton.png */ "./assets/nisbutton.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:font/opentype;base64,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 */ "data:font/opentype;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*This stylesheet provides a set of classes to make an application fit in with the nis theme (new interface system)
//
//
//This library is free to use by anyone who obtains the code etc etc as-is no guaranties etc etc (i'll figure out the copyright stuff some time)
//
//Please contact me if you plan to develop something for alt1, I'll be happy to help out
//in-game: Skillbert
//reddit: skillbert_ii
//or on the runeapps forums (http://runeapps.org/forums/)
//
*/
:root {
    --nis-col-url: #ddd;
    --nis-col-urlhover: #fff;
    --nis-col-std: #e5e6eb;
    --nis-col-low: #aaa;
    --nis-col-faded: #777;
    --nis-col-back: #171e24;
    --nis-col-backsub: rgba(0, 0, 0, 0.5);
}

.margin-bottom-5 {
    margin-bottom: 5px;
}

.text-center {
    text-align: center;
}

.bold {
    font-weight: bold;
}

html,
body {
    position: relative;
    height: 100%;
}

.version {
    position: absolute;
    bottom: 4px;
    right: 2px;
    font-size: 12px;
    color: #ddd;
}

.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.spinner {
    width: 30px;
    height: 30px;
    border: 4px solid var(--nis-col-back);
    border-top: 4px solid var(--nis-col-std);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 10px auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.nismainborder {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.app-link {
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.success {
    color: #00ff00;
}

.error {
    color: #ff0000;
}

.nisborder {
    border-width: 4px;
    border-style: solid;
    /* -moz-border-image: url('/assets/borderSprite.png') 4 repeat;
    border-image: url('/assets/borderSprite.png') 4 repeat; */
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    overflow: hidden;
}

.nisexitbutton {
    /* background: url('/assets/exitSprite.png'); */
    position: absolute;
    top: -4px;
    right: -4px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    z-index: 1000;
}

.nisexitbutton:hover {
    background-position: 0px -12px;
}

.nisseperator {
    width: 100%;
    height: 0px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #41555f;
    position: absolute;
    left: 0px;
}

.nissmallimagebutton {
    width: 21px;
    height: 21px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    /* background-image: url('/assets/buttonsmall.png'); */
    background-size: auto 42px;
}

.nissmallimagebutton:hover {
    background-position: 0px -21px;
}

.nissmallimagebutton.offset1 {
    background-position: -21px 0px;
}

.nissmallimagebutton.offset1:hover {
    background-position: -21px -21px;
}

.nissmallimagebutton.offset2 {
    background-position: -42px 0px;
}

.nissmallimagebutton.offset2:hover {
    background-position: -42px -21px;
}

.nistinyimagebutton {
    width: 21px;
    height: 19px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.nistinyimagebutton:hover {
    background-position: 0px -19px;
}

.nistinyimagebutton.offset1 {
    background-position: -21px 0px;
}

.nistinyimagebutton.offset1:hover {
    background-position: -21px -19px;
}

.nistinyimagebutton.offset2 {
    background-position: -42px 0px;
}

.nistinyimagebutton.offset2:hover {
    background-position: -42px -19px;
}

.nisimgbutton {
    width: 20px;
    height: 20px;
    border: 3px solid #212b2d;
    box-sizing: border-box;
    /* border-image: url('/assets/imgbutton.png') 3 fill; */
    cursor: pointer;
}

.nisimgbutton:hover {
    filter: brightness(1.2);
}

.nistext {
    color: var(--nis-col-std);
}

.nistable {
    color: var(--nis-col-std);
    border: 1px solid #666;
}

.nistable tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
}

.nistable tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.15);
}

.nistable th {
    color: #ddd;
}

.contenttab,
.contenttableft {
    float: right;
    width: 90px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #bbb;
    cursor: pointer;
    /* background: url('/assets/tabback.png') 0 0 / 100% 100%; */
    position: relative;
    margin-left: -14px;
    z-index: 11;
    margin-top: -1px;
}

.contenttab.lefttab {
    float: left;
    margin-left: 0px;
    margin-right: -14px;
}

.contenttab:not(.activetab) {
    z-index: 10;
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
    margin-top: 1px;
    height: 18px;
}

.nisinput,
.nisdropdown {
    height: 20px;
    cursor: text;
    color: #b1afae;
    outline: none;
    position: relative;
    padding: 0px 4px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #191714, #292222, #100c0c);
    border: 1px solid #514949;
    font-family: sans-serif;
    font-size: 13px;
}

.nisdropdown {
    height: 19px;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    padding: 0px 0px 0px 4px;
}

.nisdropdown > option {
    background: #1d190d;
}

.nisbutton {
    height: 32px;
    position: relative;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 0px -100%/24px 400% repeat
        content-box;
    cursor: pointer;
    text-align: center;
    color: #000;
    font-family: 'trajan-pro-3';
    text-shadow: 1px 1px 2px #ecc622;
    font-size: 18px;
    margin: 5px;
    padding: 0px 12px;
    line-height: 32px;
    user-select: none;
    -webkit-user-select: none;
}

.nisbutton::before {
    width: 12px;
    height: 100%;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 0px 0px / 24px 400%;
}

.nisbutton::after {
    width: 12px;
    height: 100%;
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) -12px 0px / 24px 400%;
}

.nisbutton:hover {
    background-position: 0px -300%;
}

.nisbutton:hover::before {
    background-position: 0px -200%;
}

.nisbutton:hover::after {
    background-position: -12px -200%;
}

.nisbutton:active,
.nisbutton.fakeactive {
    -webkit-filter: brightness(1.2);
    filter: brightness(1.2);
}

.nissmallbutton {
    line-height: 26px;
    height: 26px;
    font-size: 12px;
}

.pb2_nis .pb2-button,
.nisbutton2 {
    padding: 0.15em;
    user-select: none;
    border: 1px solid #485b65;
    border-radius: 3px;
    background: linear-gradient(to bottom, #2a799c, #123443 25%);
    font-weight: bold;
    color: #ddd;
    cursor: pointer;
    box-shadow: 0px 0px 5px #152932 inset;
    text-align: center;
    box-sizing: border-box;
}

.pb2_nis .pb2-button:hover,
.nisbutton2:hover {
    background: linear-gradient(to bottom, #2a799c, #1b4e65 25%);
    color: white;
}

body.nis {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-color: var(--nis-col-back);
    overflow: hidden;
    margin: 0px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--nis-col-std);
}

.nisclosebutton {
    width: 12px;
    height: 12px;
    /* background: url('/assets/exitSprite.png'); */
    cursor: pointer;
}

.nisclosebutton:hover {
    background-position: 0px -12px;
}

/*Chromium custom scrollbars, will only work on chromium browsers (such as alt1) */
body.nis::-webkit-scrollbar,
body.nis *:not(.normalscroll)::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

body.nis::-webkit-scrollbar-button:start:vertical,
body.nis *:not(.normalscroll)::-webkit-scrollbar-button:start:vertical {
    /* background-image: url('default/scroll.png'); */
    background-position: 0px 0px;
    height: 15px;
}

body.nis::-webkit-scrollbar-button:end:vertical,
body.nis *:not(.normalscroll)::-webkit-scrollbar-button:end:vertical {
    /* background-image: url('default/scroll.png'); */
    background-position: -45px 0px;
    height: 15px;
}

body.nis::-webkit-scrollbar-track:vertical,
body.nis *:not(.normalscroll)::-webkit-scrollbar-track:vertical {
    /* background-image: url('default/scroll.png'); */
    background-position: -15px 0px;
}

body.nis::-webkit-scrollbar-thumb:vertical,
body.nis *:not(.normalscroll)::-webkit-scrollbar-thumb:vertical {
    /* background-image: url('default/scroll.png'); */
    background-position: -30px 0px;
    border-radius: 5px;
}

body.nis::-webkit-scrollbar-button:start:horizontal,
body.nis *:not(.normalscroll)::-webkit-scrollbar-button:start:horizontal {
    /* background-image: url('default/scrollhor.png'); */
    background-position: 0px 0px;
    width: 15px;
}

body.nis::-webkit-scrollbar-button:end:horizontal,
body.nis *:not(.normalscroll)::-webkit-scrollbar-button:end:horizontal {
    /* background-image: url('default/scrollhor.png'); */
    background-position: 0px -45px;
    width: 15px;
}

body.nis::-webkit-scrollbar-track:horizontal,
body.nis *:not(.normalscroll)::-webkit-scrollbar-track:horizontal {
    /* background-image: url('default/scrollhor.png'); */
    background-position: 0px -15px;
}

body.nis::-webkit-scrollbar-thumb:horizontal,
body.nis *:not(.normalscroll)::-webkit-scrollbar-thumb:horizontal {
    /* background-image: url('default/scrollhor.png'); */
    background-position: 0px -30px;
    border-radius: 5px;
}

body.nis::-webkit-scrollbar-corner,
body.nis *:not(.normalscroll)::-webkit-scrollbar-corner {
    background: #060d11;
}

body.scrollreset * {
    overflow: hidden !important;
}

/*font stolen from jagex*/
@font-face {
    font-family: 'trajan-pro-3';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../node_modules/tesseract.js/package.json":
/*!*************************************************!*\
  !*** ../node_modules/tesseract.js/package.json ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "package.json";

/***/ }),

/***/ "../node_modules/tesseract.js/src/Tesseract.js":
/*!*****************************************************!*\
  !*** ../node_modules/tesseract.js/src/Tesseract.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const createWorker = __webpack_require__(/*! ./createWorker */ "../node_modules/tesseract.js/src/createWorker.js");

const recognize = async (image, langs, options) => {
  const worker = await createWorker(langs, 1, options);
  return worker.recognize(image)
    .finally(async () => {
      await worker.terminate();
    });
};

const detect = async (image, options) => {
  const worker = await createWorker('osd', 0, options);
  return worker.detect(image)
    .finally(async () => {
      await worker.terminate();
    });
};

module.exports = {
  recognize,
  detect,
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/constants/OEM.js":
/*!*********************************************************!*\
  !*** ../node_modules/tesseract.js/src/constants/OEM.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3,
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/constants/PSM.js":
/*!*********************************************************!*\
  !*** ../node_modules/tesseract.js/src/constants/PSM.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12',
  RAW_LINE: '13',
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/constants/defaultOptions.js":
/*!********************************************************************!*\
  !*** ../node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {},
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/constants/languages.js":
/*!***************************************************************!*\
  !*** ../node_modules/tesseract.js/src/constants/languages.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/*
 * languages with existing tesseract traineddata
 * https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
 */

/**
 * @typedef {object} Languages
 * @property {string} AFR Afrikaans
 * @property {string} AMH Amharic
 * @property {string} ARA Arabic
 * @property {string} ASM Assamese
 * @property {string} AZE Azerbaijani
 * @property {string} AZE_CYRL Azerbaijani - Cyrillic
 * @property {string} BEL Belarusian
 * @property {string} BEN Bengali
 * @property {string} BOD Tibetan
 * @property {string} BOS Bosnian
 * @property {string} BUL Bulgarian
 * @property {string} CAT Catalan; Valencian
 * @property {string} CEB Cebuano
 * @property {string} CES Czech
 * @property {string} CHI_SIM Chinese - Simplified
 * @property {string} CHI_TRA Chinese - Traditional
 * @property {string} CHR Cherokee
 * @property {string} CYM Welsh
 * @property {string} DAN Danish
 * @property {string} DEU German
 * @property {string} DZO Dzongkha
 * @property {string} ELL Greek, Modern (1453-)
 * @property {string} ENG English
 * @property {string} ENM English, Middle (1100-1500)
 * @property {string} EPO Esperanto
 * @property {string} EST Estonian
 * @property {string} EUS Basque
 * @property {string} FAS Persian
 * @property {string} FIN Finnish
 * @property {string} FRA French
 * @property {string} FRK German Fraktur
 * @property {string} FRM French, Middle (ca. 1400-1600)
 * @property {string} GLE Irish
 * @property {string} GLG Galician
 * @property {string} GRC Greek, Ancient (-1453)
 * @property {string} GUJ Gujarati
 * @property {string} HAT Haitian; Haitian Creole
 * @property {string} HEB Hebrew
 * @property {string} HIN Hindi
 * @property {string} HRV Croatian
 * @property {string} HUN Hungarian
 * @property {string} IKU Inuktitut
 * @property {string} IND Indonesian
 * @property {string} ISL Icelandic
 * @property {string} ITA Italian
 * @property {string} ITA_OLD Italian - Old
 * @property {string} JAV Javanese
 * @property {string} JPN Japanese
 * @property {string} KAN Kannada
 * @property {string} KAT Georgian
 * @property {string} KAT_OLD Georgian - Old
 * @property {string} KAZ Kazakh
 * @property {string} KHM Central Khmer
 * @property {string} KIR Kirghiz; Kyrgyz
 * @property {string} KOR Korean
 * @property {string} KUR Kurdish
 * @property {string} LAO Lao
 * @property {string} LAT Latin
 * @property {string} LAV Latvian
 * @property {string} LIT Lithuanian
 * @property {string} MAL Malayalam
 * @property {string} MAR Marathi
 * @property {string} MKD Macedonian
 * @property {string} MLT Maltese
 * @property {string} MSA Malay
 * @property {string} MYA Burmese
 * @property {string} NEP Nepali
 * @property {string} NLD Dutch; Flemish
 * @property {string} NOR Norwegian
 * @property {string} ORI Oriya
 * @property {string} PAN Panjabi; Punjabi
 * @property {string} POL Polish
 * @property {string} POR Portuguese
 * @property {string} PUS Pushto; Pashto
 * @property {string} RON Romanian; Moldavian; Moldovan
 * @property {string} RUS Russian
 * @property {string} SAN Sanskrit
 * @property {string} SIN Sinhala; Sinhalese
 * @property {string} SLK Slovak
 * @property {string} SLV Slovenian
 * @property {string} SPA Spanish; Castilian
 * @property {string} SPA_OLD Spanish; Castilian - Old
 * @property {string} SQI Albanian
 * @property {string} SRP Serbian
 * @property {string} SRP_LATN Serbian - Latin
 * @property {string} SWA Swahili
 * @property {string} SWE Swedish
 * @property {string} SYR Syriac
 * @property {string} TAM Tamil
 * @property {string} TEL Telugu
 * @property {string} TGK Tajik
 * @property {string} TGL Tagalog
 * @property {string} THA Thai
 * @property {string} TIR Tigrinya
 * @property {string} TUR Turkish
 * @property {string} UIG Uighur; Uyghur
 * @property {string} UKR Ukrainian
 * @property {string} URD Urdu
 * @property {string} UZB Uzbek
 * @property {string} UZB_CYRL Uzbek - Cyrillic
 * @property {string} VIE Vietnamese
 * @property {string} YID Yiddish
 */

/**
  * @type {Languages}
  */
module.exports = {
  AFR: 'afr',
  AMH: 'amh',
  ARA: 'ara',
  ASM: 'asm',
  AZE: 'aze',
  AZE_CYRL: 'aze_cyrl',
  BEL: 'bel',
  BEN: 'ben',
  BOD: 'bod',
  BOS: 'bos',
  BUL: 'bul',
  CAT: 'cat',
  CEB: 'ceb',
  CES: 'ces',
  CHI_SIM: 'chi_sim',
  CHI_TRA: 'chi_tra',
  CHR: 'chr',
  CYM: 'cym',
  DAN: 'dan',
  DEU: 'deu',
  DZO: 'dzo',
  ELL: 'ell',
  ENG: 'eng',
  ENM: 'enm',
  EPO: 'epo',
  EST: 'est',
  EUS: 'eus',
  FAS: 'fas',
  FIN: 'fin',
  FRA: 'fra',
  FRK: 'frk',
  FRM: 'frm',
  GLE: 'gle',
  GLG: 'glg',
  GRC: 'grc',
  GUJ: 'guj',
  HAT: 'hat',
  HEB: 'heb',
  HIN: 'hin',
  HRV: 'hrv',
  HUN: 'hun',
  IKU: 'iku',
  IND: 'ind',
  ISL: 'isl',
  ITA: 'ita',
  ITA_OLD: 'ita_old',
  JAV: 'jav',
  JPN: 'jpn',
  KAN: 'kan',
  KAT: 'kat',
  KAT_OLD: 'kat_old',
  KAZ: 'kaz',
  KHM: 'khm',
  KIR: 'kir',
  KOR: 'kor',
  KUR: 'kur',
  LAO: 'lao',
  LAT: 'lat',
  LAV: 'lav',
  LIT: 'lit',
  MAL: 'mal',
  MAR: 'mar',
  MKD: 'mkd',
  MLT: 'mlt',
  MSA: 'msa',
  MYA: 'mya',
  NEP: 'nep',
  NLD: 'nld',
  NOR: 'nor',
  ORI: 'ori',
  PAN: 'pan',
  POL: 'pol',
  POR: 'por',
  PUS: 'pus',
  RON: 'ron',
  RUS: 'rus',
  SAN: 'san',
  SIN: 'sin',
  SLK: 'slk',
  SLV: 'slv',
  SPA: 'spa',
  SPA_OLD: 'spa_old',
  SQI: 'sqi',
  SRP: 'srp',
  SRP_LATN: 'srp_latn',
  SWA: 'swa',
  SWE: 'swe',
  SYR: 'syr',
  TAM: 'tam',
  TEL: 'tel',
  TGK: 'tgk',
  TGL: 'tgl',
  THA: 'tha',
  TIR: 'tir',
  TUR: 'tur',
  UIG: 'uig',
  UKR: 'ukr',
  URD: 'urd',
  UZB: 'uzb',
  UZB_CYRL: 'uzb_cyrl',
  VIE: 'vie',
  YID: 'yid',
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/createJob.js":
/*!*****************************************************!*\
  !*** ../node_modules/tesseract.js/src/createJob.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const getId = __webpack_require__(/*! ./utils/getId */ "../node_modules/tesseract.js/src/utils/getId.js");

let jobCounter = 0;

module.exports = ({
  id: _id,
  action,
  payload = {},
}) => {
  let id = _id;
  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id,
    action,
    payload,
  };
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/createScheduler.js":
/*!***********************************************************!*\
  !*** ../node_modules/tesseract.js/src/createScheduler.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const createJob = __webpack_require__(/*! ./createJob */ "../node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "../node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "../node_modules/tesseract.js/src/utils/getId.js");

let schedulerCounter = 0;

module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];

  schedulerCounter += 1;

  const getQueueLen = () => jobQueue.length;
  const getNumWorkers = () => Object.keys(workers).length;

  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);
      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  const queue = (action, payload) => (
    new Promise((resolve, reject) => {
      const job = createJob({ action, payload });
      jobQueue.push(async (w) => {
        jobQueue.shift();
        runningWorkers[w.id] = job;
        try {
          resolve(await w[action].apply(this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });
      log(`[${id}]: Add ${job.id} to JobQueue`);
      log(`[${id}]: JobQueue length=${jobQueue.length}`);
      dequeue();
    })
  );

  const addWorker = (w) => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };

  const addJob = async (action, ...payload) => {
    if (getNumWorkers() === 0) {
      throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
    }
    return queue(action, payload);
  };

  const terminate = async () => {
    Object.keys(workers).forEach(async (wid) => {
      await workers[wid].terminate();
    });
    jobQueue = [];
  };

  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers,
  };
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/createWorker.js":
/*!********************************************************!*\
  !*** ../node_modules/tesseract.js/src/createWorker.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ "../node_modules/tesseract.js/src/utils/resolvePaths.js");
const createJob = __webpack_require__(/*! ./createJob */ "../node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "../node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "../node_modules/tesseract.js/src/utils/getId.js");
const OEM = __webpack_require__(/*! ./constants/OEM */ "../node_modules/tesseract.js/src/constants/OEM.js");
const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send,
} = __webpack_require__(/*! ./worker/node */ "../node_modules/tesseract.js/src/worker/browser/index.js");

let workerCounter = 0;

module.exports = async (langs = 'eng', oem = OEM.LSTM_ONLY, _options = {}, config = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({
    ...defaultOptions,
    ..._options,
  });
  const promises = {};

  // Current langs, oem, and config file.
  // Used if the user ever re-initializes the worker using `worker.reinitialize`.
  const currentLangs = typeof langs === 'string' ? langs.split('+') : langs;
  let currentOem = oem;
  let currentConfig = config;
  const lstmOnlyCore = [OEM.DEFAULT, OEM.LSTM_ONLY].includes(oem) && !options.legacyCore;

  let workerResReject;
  let workerResResolve;
  const workerRes = new Promise((resolve, reject) => {
    workerResResolve = resolve;
    workerResReject = reject;
  });
  const workerError = (event) => { workerResReject(event.message); };

  let worker = spawnWorker(options);
  worker.onerror = workerError;

  workerCounter += 1;

  const startJob = ({ id: jobId, action, payload }) => (
    new Promise((resolve, reject) => {
      log(`[${id}]: Start ${jobId}, action=${action}`);
      // Using both `action` and `jobId` in case user provides non-unique `jobId`.
      const promiseId = `${action}-${jobId}`;
      promises[promiseId] = { resolve, reject };
      send(worker, {
        workerId: id,
        jobId,
        action,
        payload,
      });
    })
  );

  const load = () => (
    console.warn('`load` is depreciated and should be removed from code (workers now come pre-loaded)')
  );

  const loadInternal = (jobId) => (
    startJob(createJob({
      id: jobId, action: 'load', payload: { options: { lstmOnly: lstmOnlyCore, corePath: options.corePath, logging: options.logging } },
    }))
  );

  const writeText = (path, text, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'writeFile', args: [path, text] },
    }))
  );

  const readText = (path, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'readFile', args: [path, { encoding: 'utf8' }] },
    }))
  );

  const removeFile = (path, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'unlink', args: [path] },
    }))
  );

  const FS = (method, args, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method, args },
    }))
  );

  const loadLanguageInternal = (_langs, jobId) => startJob(createJob({
    id: jobId,
    action: 'loadLanguage',
    payload: {
      langs: _langs,
      options: {
        langPath: options.langPath,
        dataPath: options.dataPath,
        cachePath: options.cachePath,
        cacheMethod: options.cacheMethod,
        gzip: options.gzip,
        lstmOnly: [OEM.DEFAULT, OEM.LSTM_ONLY].includes(currentOem)
          && !options.legacyLang,
      },
    },
  }));

  const initializeInternal = (_langs, _oem, _config, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'initialize',
      payload: { langs: _langs, oem: _oem, config: _config },
    }))
  );

  const reinitialize = (langs = 'eng', oem, config, jobId) => { // eslint-disable-line

    if (lstmOnlyCore && [OEM.TESSERACT_ONLY, OEM.TESSERACT_LSTM_COMBINED].includes(oem)) throw Error('Legacy model requested but code missing.');

    const _oem = oem || currentOem;
    currentOem = _oem;

    const _config = config || currentConfig;
    currentConfig = _config;

    // Only load langs that are not already loaded.
    // This logic fails if the user downloaded the LSTM-only English data for a language
    // and then uses `worker.reinitialize` to switch to the Legacy engine.
    // However, the correct data will still be downloaded after initialization fails
    // and this can be avoided entirely if the user loads the correct data ahead of time.
    const langsArr = typeof langs === 'string' ? langs.split('+') : langs;
    const _langs = langsArr.filter((x) => !currentLangs.includes(x));
    currentLangs.push(..._langs);

    if (_langs.length > 0) {
      return loadLanguageInternal(_langs, jobId)
        .then(() => initializeInternal(langs, _oem, _config, jobId));
    }

    return initializeInternal(langs, _oem, _config, jobId);
  };

  const setParameters = (params = {}, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'setParameters',
      payload: { params },
    }))
  );

  const recognize = async (image, opts = {}, output = {
    text: true,
  }, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'recognize',
      payload: { image: await loadImage(image), options: opts, output },
    }))
  );

  const detect = async (image, jobId) => {
    if (lstmOnlyCore) throw Error('`worker.detect` requires Legacy model, which was not loaded.');

    return startJob(createJob({
      id: jobId,
      action: 'detect',
      payload: { image: await loadImage(image) },
    }));
  };

  const terminate = async () => {
    if (worker !== null) {
      /*
      await startJob(createJob({
        id: jobId,
        action: 'terminate',
      }));
      */
      terminateWorker(worker);
      worker = null;
    }
    return Promise.resolve();
  };

  onMessage(worker, ({
    workerId, jobId, status, action, data,
  }) => {
    const promiseId = `${action}-${jobId}`;
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      promises[promiseId].resolve({ jobId, data });
      delete promises[promiseId];
    } else if (status === 'reject') {
      promises[promiseId].reject(data);
      delete promises[promiseId];
      if (action === 'load') workerResReject(data);
      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger({ ...data, userJobId: jobId });
    }
  });

  const resolveObj = {
    id,
    worker,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    reinitialize,
    setParameters,
    recognize,
    detect,
    terminate,
  };

  loadInternal()
    .then(() => loadLanguageInternal(langs))
    .then(() => initializeInternal(langs, oem, config))
    .then(() => workerResResolve(resolveObj))
    .catch(() => {});

  return workerRes;
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/index.js":
/*!*************************************************!*\
  !*** ../node_modules/tesseract.js/src/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
const createScheduler = __webpack_require__(/*! ./createScheduler */ "../node_modules/tesseract.js/src/createScheduler.js");
const createWorker = __webpack_require__(/*! ./createWorker */ "../node_modules/tesseract.js/src/createWorker.js");
const Tesseract = __webpack_require__(/*! ./Tesseract */ "../node_modules/tesseract.js/src/Tesseract.js");
const languages = __webpack_require__(/*! ./constants/languages */ "../node_modules/tesseract.js/src/constants/languages.js");
const OEM = __webpack_require__(/*! ./constants/OEM */ "../node_modules/tesseract.js/src/constants/OEM.js");
const PSM = __webpack_require__(/*! ./constants/PSM */ "../node_modules/tesseract.js/src/constants/PSM.js");
const { setLogging } = __webpack_require__(/*! ./utils/log */ "../node_modules/tesseract.js/src/utils/log.js");

module.exports = {
  languages,
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract,
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/utils/getEnvironment.js":
/*!****************************************************************!*\
  !*** ../node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (key) => {
  const env = {};

  if (typeof WorkerGlobalScope !== 'undefined') {
    env.type = 'webworker';
  } else if (typeof document === 'object') {
    env.type = 'browser';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }

  if (typeof key === 'undefined') {
    return env;
  }

  return env[key];
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/utils/getId.js":
/*!*******************************************************!*\
  !*** ../node_modules/tesseract.js/src/utils/getId.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = (prefix, cnt) => (
  `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`
);


/***/ }),

/***/ "../node_modules/tesseract.js/src/utils/log.js":
/*!*****************************************************!*\
  !*** ../node_modules/tesseract.js/src/utils/log.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


let logging = false;

exports.logging = logging;

exports.setLogging = (_logging) => {
  logging = _logging;
};

exports.log = (...args) => (logging ? console.log.apply(this, args) : null);


/***/ }),

/***/ "../node_modules/tesseract.js/src/utils/resolvePaths.js":
/*!**************************************************************!*\
  !*** ../node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const isBrowser = __webpack_require__(/*! ./getEnvironment */ "../node_modules/tesseract.js/src/utils/getEnvironment.js")('type') === 'browser';

const resolveURL = isBrowser ? s => (new URL(s, window.location.href)).href : s => s; // eslint-disable-line

module.exports = (options) => {
  const opts = { ...options };
  ['corePath', 'workerPath', 'langPath'].forEach((key) => {
    if (options[key]) {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/defaultOptions.js":
/*!*************************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const version = (__webpack_require__(/*! ../../../package.json */ "../node_modules/tesseract.js/package.json").version);
const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ "../node_modules/tesseract.js/src/constants/defaultOptions.js");

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: `https://cdn.jsdelivr.net/npm/tesseract.js@v${version}/dist/worker.min.js`,
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "../node_modules/tesseract.js/src/worker/browser/defaultOptions.js");
const spawnWorker = __webpack_require__(/*! ./spawnWorker */ "../node_modules/tesseract.js/src/worker/browser/spawnWorker.js");
const terminateWorker = __webpack_require__(/*! ./terminateWorker */ "../node_modules/tesseract.js/src/worker/browser/terminateWorker.js");
const onMessage = __webpack_require__(/*! ./onMessage */ "../node_modules/tesseract.js/src/worker/browser/onMessage.js");
const send = __webpack_require__(/*! ./send */ "../node_modules/tesseract.js/src/worker/browser/send.js");
const loadImage = __webpack_require__(/*! ./loadImage */ "../node_modules/tesseract.js/src/worker/browser/loadImage.js");

module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage,
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/loadImage.js":
/*!********************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */
const readFromBlobOrFile = (blob) => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */
const loadImage = async (image) => {
  let data = image;
  if (typeof image === 'undefined') {
    return 'undefined';
  }

  if (typeof image === 'string') {
    // Base64 Image
    if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
      data = atob(image.split(',')[1])
        .split('')
        .map((c) => c.charCodeAt(0));
    } else {
      const resp = await fetch(image);
      data = await resp.arrayBuffer();
    }
  } else if (typeof HTMLElement !== 'undefined' && image instanceof HTMLElement) {
    if (image.tagName === 'IMG') {
      data = await loadImage(image.src);
    }
    if (image.tagName === 'VIDEO') {
      data = await loadImage(image.poster);
    }
    if (image.tagName === 'CANVAS') {
      await new Promise((resolve) => {
        image.toBlob(async (blob) => {
          data = await readFromBlobOrFile(blob);
          resolve();
        });
      });
    }
  } else if (typeof OffscreenCanvas !== 'undefined' && image instanceof OffscreenCanvas) {
    const blob = await image.convertToBlob();
    data = await readFromBlobOrFile(blob);
  } else if (image instanceof File || image instanceof Blob) {
    data = await readFromBlobOrFile(image);
  }

  return new Uint8Array(data);
};

module.exports = loadImage;


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/onMessage.js":
/*!********************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (worker, handler) => {
  worker.onmessage = ({ data }) => { // eslint-disable-line
    handler(data);
  };
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/send.js":
/*!***************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/send.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = async (worker, packet) => {
  worker.postMessage(packet);
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/spawnWorker.js":
/*!**********************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({ workerPath, workerBlobURL }) => {
  let worker;
  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript',
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};


/***/ }),

/***/ "../node_modules/tesseract.js/src/worker/browser/terminateWorker.js":
/*!**************************************************************************!*\
  !*** ../node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = (worker) => {
  worker.terminate();
};


/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./assets/background.png":
/*!*******************************!*\
  !*** ./assets/background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "background.png";

/***/ }),

/***/ "./assets/nisbutton.png":
/*!******************************!*\
  !*** ./assets/nisbutton.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nisbutton.png";

/***/ }),

/***/ "./icon.png":
/*!******************!*\
  !*** ./icon.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   getLocation: () => (/* binding */ getLocation),
/* harmony export */   getSize: () => (/* binding */ getSize),
/* harmony export */   getTime: () => (/* binding */ getTime),
/* harmony export */   recognizeTextFromImage: () => (/* binding */ recognizeTextFromImage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function copyToClipboard(text) {
    return __awaiter(this, void 0, void 0, function () {
        var clipboardError_1, textArea, successful, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!(navigator.clipboard && window.isSecureContext)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
                case 3:
                    clipboardError_1 = _a.sent();
                    console.warn('Clipboard API failed, falling back to legacy method:', clipboardError_1);
                    return [3 /*break*/, 4];
                case 4:
                    textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '0';
                    textArea.style.top = '0';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        successful = document.execCommand('copy');
                        document.body.removeChild(textArea);
                        return [2 /*return*/, successful];
                    }
                    catch (err) {
                        document.body.removeChild(textArea);
                        console.error('Legacy copy method failed:', err);
                        return [2 /*return*/, false];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error('Failed to copy to clipboard:', err_1);
                    return [2 /*return*/, false];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function recognizeTextFromImage(worker, image) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas_1, ctx, img_1, imageUrl_1, resizedBlob, text, finalText, timeRangeMatch, _, start, end, startNum, endNum, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    canvas_1 = document.createElement('canvas');
                    ctx = canvas_1.getContext('2d');
                    img_1 = new Image();
                    imageUrl_1 = URL.createObjectURL(image);
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            img_1.onload = resolve;
                            img_1.onerror = reject;
                            img_1.src = imageUrl_1;
                        })];
                case 1:
                    _a.sent();
                    // Set canvas size to 125% of original
                    canvas_1.width = img_1.width * 1.25;
                    canvas_1.height = img_1.height * 1.25;
                    // Draw resized image
                    ctx.drawImage(img_1, 0, 0, canvas_1.width, canvas_1.height);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            canvas_1.toBlob(function (blob) { return resolve(blob); }, 'image/png');
                        })];
                case 2:
                    resizedBlob = _a.sent();
                    // Clean up
                    URL.revokeObjectURL(imageUrl_1);
                    // Use resized image for OCR
                    image = resizedBlob;
                    return [4 /*yield*/, worker.recognize(image)];
                case 3:
                    text = (_a.sent()).data.text;
                    finalText = text;
                    // Replace all newlines with spaces
                    finalText = finalText.replace(/\n/g, ' ');
                    finalText = finalText.replace('itwill', 'it will');
                    finalText = finalText.replace('mines', 'minutes');
                    // Normalize the input string
                    finalText = finalText.replace('t0', 'to');
                    // Ensure proper spacing around 'to' and 'minutes'
                    finalText = finalText
                        .replace(/(\d)\s*to\s*(\d)/g, '$1 to $2')
                        .replace(/(\d)\s*minutes/g, '$1 minutes');
                    // Add 'to' between numbers if missing
                    finalText = finalText.replace(/(\d+)\s+(\d+)/g, '$1 to $2');
                    timeRangeMatch = finalText.match(/(\d+)\s+to\s+(\d+)/);
                    if (timeRangeMatch) {
                        _ = timeRangeMatch[0], start = timeRangeMatch[1], end = timeRangeMatch[2];
                        startNum = parseInt(start);
                        endNum = parseInt(end);
                        // If first number is greater than second, remove its last digit
                        if (startNum > endNum) {
                            finalText = finalText.replace(timeRangeMatch[0], "".concat(Math.floor(startNum / 10), " to ").concat(endNum));
                        }
                        else {
                            finalText = finalText.replace(timeRangeMatch[0], "".concat(startNum, " to ").concat(endNum));
                        }
                    }
                    return [2 /*return*/, finalText];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error during OCR:', error_1);
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
var getLocation = function (input) {
    var locationMap = {
        Anachronia: 'Anachronia',
        onia: 'Anachronia',
        Asgarnia: 'Asgarnia',
        Asgania: 'Asgarnia',
        rnia: 'Asgarnia',
        Ashdale: 'Ashdale',
        dale: 'Ashdale',
        Crandor: 'Crandor/Karamja',
        amja: 'Crandor/Karamja',
        Daemonheim: 'Daemonheim',
        sula: 'Daemonheim',
        Feldip: 'Feldip Hills',
        ills: 'Feldip Hills',
        Fremennik: 'Fremennik/Lunar Isle',
        unar: 'Fremennik/Lunar Isle',
        Kandarin: 'Kandarin',
        arin: 'Kandarin',
        Desert: 'Kharidian Desert',
        dian: 'Kharidian Desert',
        Grove: 'Lost Grove',
        ost: 'Lost Grove',
        Menaphos: 'Menaphos',
        phos: 'Menaphos',
        Misthalin: 'Misthalin',
        alin: 'Misthalin',
        Morytania: "Morytania/Mos Le'Harmless",
        armless: "Morytania/Mos Le'Harmless",
        Piscatoris: 'Piscatoris/Gnome/Tirannwn',
        nnwn: 'Piscatoris/Gnome/Tirannwn',
        Tuska: 'Tuska',
        uska: 'Tuska',
        Wilderness: 'Wilderness',
        derness: 'Wilderness',
    };
    for (var _i = 0, _a = Object.entries(locationMap); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (input.includes(key)) {
            return value;
        }
    }
    return 'ERR';
};
var getTime = function (input) {
    // Extract time after "next" with more flexible pattern
    var nextMatch = input.match(/(?:in the )?next\s+(.*?)\s+to/);
    if (!nextMatch) {
        return '0';
    }
    var timeText = nextMatch[1];
    // Parse hours and minutes
    var totalMinutes = 0;
    // Handle hours
    var hoursMatch = timeText.match(/(\d+)\s+(?:hour|hours)/);
    if (hoursMatch) {
        totalMinutes += parseInt(hoursMatch[1]) * 60;
    }
    // Handle minutes
    var minutesMatch = timeText.match(/(\d+)\s+minutes/);
    if (minutesMatch) {
        totalMinutes += parseInt(minutesMatch[1]);
    }
    // If no hours or minutes found, try to parse as just minutes
    if (totalMinutes === 0) {
        var justMinutes = timeText.match(/(\d+)/);
        if (justMinutes) {
            totalMinutes = parseInt(justMinutes[1]);
        }
    }
    return String(totalMinutes);
};
var getSize = function (input) {
    var sizeMap = {
        // Tier 1 telescope sizes
        small: 'Small',
        average: 'Average',
        big: 'Big',
        // Tier 2 telescope sizes (more specific descriptions)
        'very small': 'Small',
        'fairly small': 'Small',
        'fairly big': 'Average',
        'very big': 'Big',
    };
    var sizeTextStart = 'be';
    var startIndex = input.indexOf(sizeTextStart) + 2;
    var searchText = input.substring(startIndex);
    // Check for Tier 3 telescope first (exact size number)
    if (searchText.indexOf('size') === 1) {
        var sizeNumber = searchText.substring(5).replace(/\D/g, '');
        // Handle case where OCR misreads '8' as 'B'
        if (sizeNumber === '') {
            var sizeText = searchText.substring(5).trim();
            if (sizeText.includes('B')) {
                sizeNumber = '8';
            }
        }
        sizeNumber = sizeNumber.trim();
        return sizeNumber;
    }
    // Check for other size descriptions
    for (var _i = 0, _a = Object.entries(sizeMap); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (searchText.includes(key)) {
            return value;
        }
    }
    return 'ERR';
};


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "data:font/opentype;base64,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":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:font/opentype;base64,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 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:font/opentype;base64,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";

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/starfind-scope/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capture: () => (/* binding */ capture)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ "./icon.png");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./styles.css");
/* harmony import */ var alt1_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! alt1/dialog */ "../node_modules/alt1/dist/dialog/index.js");
/* harmony import */ var alt1_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt1_dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./utils.ts");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tesseract.js */ "../node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_5__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var output = document.getElementById('output');
var logs = document.getElementById('logs');
var worker;
output.insertAdjacentHTML('beforeend', "<div class=\"version\">v. 1.1.2</div>");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1, addappurl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.alt1) return [3 /*break*/, 5];
                    alt1.identifyAppUrl('./appconfig.json');
                    logs.innerHTML =
                        '<div class="center-absolute"><div class="spinner"></div></div>';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0,tesseract_js__WEBPACK_IMPORTED_MODULE_5__.createWorker)('eng', 1, {
                            workerPath: './tesseract/worker.min.js',
                            corePath: './tesseract/tesseract-core.wasm.js',
                            langPath: './tesseract/',
                        })];
                case 2:
                    // Create a Tesseract worker with paths relative to the base path
                    worker = _a.sent();
                    console.log('Worker created!');
                    logs.innerHTML = '';
                    output.insertAdjacentHTML('beforeend', "<div class=\"nisbutton\" onclick=\"StarScopeCall.capture();\">Get \"/call\" command</div>");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    logs.innerHTML = "<div class=\"error text-center center-absolute\">Something went wrong, Tesseract did not load, please notify dev! :(</div>";
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    addappurl = "alt1://addapp/".concat(new URL('./appconfig.json', document.location.href).href);
                    output.insertAdjacentHTML('beforeend', "<a href='".concat(addappurl, "' class=\"app-link\">\n                <div class=\"nisbutton\">Alt1 not detected, click here to add this app to Alt1</div>\n            </a>"));
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
init();
function capture() {
    if (!window.alt1) {
        output.insertAdjacentHTML('beforeend', "<div class=\"text-center\">You need to run this page in alt1 to capture the screen</div>");
        return;
    }
    if (!alt1.permissionPixel ||
        !alt1.permissionGameState ||
        !alt1.permissionOverlay) {
        output.insertAdjacentHTML('beforeend', "<div class=\"text-center\">Page is not installed as app or not all permissions are enabled</div>");
        return;
    }
    var img = alt1__WEBPACK_IMPORTED_MODULE_6__.captureHoldFullRs();
    findDialogAndReadData(img);
}
function findDialogAndReadData(img) {
    return __awaiter(this, void 0, void 0, function () {
        var start, pixels, diagReader, dialog, pngImage, text, world, location, size, time, command, copySuccess, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = new Date().getTime();
                    logs.innerHTML = '<div class="spinner"></div>';
                    try {
                        diagReader = new (alt1_dialog__WEBPACK_IMPORTED_MODULE_7___default())();
                        dialog = diagReader.find();
                        pixels = img.toData(dialog.x, dialog.y + 20, dialog.width, dialog.height - 40);
                    }
                    catch (err) {
                        console.error(err);
                        logs.innerHTML = "<div class=\"error text-center\">Please use a telescope in order to have data to read from!</div>";
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, pixels.toFileBytes('image/png')];
                case 1:
                    pngImage = _a.sent();
                    return [4 /*yield*/, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.recognizeTextFromImage)(worker, new Blob([pngImage], { type: 'image/png' }))];
                case 2:
                    text = _a.sent();
                    // let text = `You see a shooting star!
                    //             The star looks like itwill land in The Lost Grove in the next 10 12 minutes.
                    //             The star looks to be size 4,`;
                    console.log(text);
                    world = alt1.currentWorld;
                    location = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getLocation)(text);
                    size = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSize)(text);
                    time = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getTime)(text);
                    command = "/call world: ".concat(world, " region: ").concat(location, " size: ").concat(size, " relative-time: ").concat(time);
                    console.log("Command: ".concat(command));
                    logs.innerHTML = '';
                    return [4 /*yield*/, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.copyToClipboard)(command)];
                case 3:
                    copySuccess = _a.sent();
                    if (copySuccess) {
                        logs.insertAdjacentHTML('beforeend', "<div class=\"text-center margin-bottom-5 success\">Command copied to clipboard!</div>\n            <div class=\"text-center bold\">".concat(command, "</div>"));
                    }
                    else {
                        logs.insertAdjacentHTML('beforeend', "<div class=\"text-center margin-bottom-5 error\">Failed to copy to clipboard. Please notify dev and copy manually:</div>\n            <div class=\"text-center bold\">".concat(command, "</div>"));
                    }
                    end = new Date().getTime();
                    console.log("Time taken: ".concat(end - start, " milliseconds"));
                    console.log("---------------------------------------------------------------------------------------------------------------------");
                    return [2 /*return*/];
            }
        });
    });
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});