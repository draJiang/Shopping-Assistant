/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Nav.tsx":
/*!********************************!*\
  !*** ./src/Components/Nav.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nav = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const icon128_png_1 = __importDefault(__webpack_require__(/*! ../assets/icon128.png */ "./src/assets/icon128.png"));
function Nav(props) {
    const [count, setCount] = (0, react_1.useState)(0);
    const [currentURL, setCurrentURL] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
    }, []);
    return (react_1.default.createElement("div", { id: "ScouterNav", style: {
            cursor: 'move',
            position: 'absolute',
            width: '100%', top: 0,
            background: 'white',
            zIndex: 9999
        }, onMouseDown: props.onMouseDown },
        react_1.default.createElement("img", { src: icon128_png_1.default }),
        react_1.default.createElement("div", { className: "rightBtnBox", style: { flex: 1, textAlign: 'right' } })));
}
exports.Nav = Nav;


/***/ }),

/***/ "./src/ContentScript/PopupCard/index.tsx":
/*!***********************************************!*\
  !*** ./src/ContentScript/PopupCard/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupCard = void 0;
const tesseract_js_1 = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
const antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
const { Search } = antd_1.Input;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Nav_1 = __webpack_require__(/*! ../../Components/Nav */ "./src/Components/Nav.tsx");
function PopupCard(props) {
    // 窗口拖拽逻辑
    const [dragging, setDragging] = (0, react_1.useState)(false);
    const windowElement = (0, react_1.useRef)(null);
    const ocrResult = (0, react_1.useRef)([]);
    const [searchResult, setSearchResult] = (0, react_1.useState)([]);
    const [index, setIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        // 设置窗口的默认位置
        if (windowElement.current) {
            // Check the boundaries
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const elementWidth = windowElement.current.clientWidth;
            const elementHeight = windowElement.current.clientHeight;
            const minX = 0;
            const minY = 0;
            const maxX = windowWidth - elementWidth;
            const maxY = windowHeight - elementHeight;
            const newX = maxX - 20;
            const newY = props.selection.anchorNode.parentElement.offsetTop + props.selection.anchorNode.parentElement.clientHeight + 20;
            const clampedX = Math.max(minX, Math.min(newX, maxX));
            const clampedY = Math.max(minY, Math.min(newY, maxY));
            // console.log(props.selection.getRangeAt(0));
            windowElement.current.style.right = '10px';
            windowElement.current.style.top = '10px';
        }
        console.log('chulitupian==========');
        let imageNode = (_a = document.getElementById('J-detail-content')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        let imageList = new Array();
        if (imageNode !== undefined) {
            console.log(imageNode);
            for (let i = (imageNode === null || imageNode === void 0 ? void 0 : imageNode.length) - 1; i > -1; i--) {
                let url = imageNode[i]['currentSrc'].replace('.avif', '');
                if (imageNode[i]['currentSrc'].indexOf('.gif') < 0) {
                    // 去噪点
                    // denoiseImage(url, 10).then((denoisedImageUrl) => {
                    //   imageList.push(denoisedImageUrl)
                    // })
                    // imageList.push(url)
                    // 预处理图片
                    // scaleImage(url, 1).then((scaledImageUrl) => {
                    //   imageList.push(scaledImageUrl)
                    //   // // 去噪点
                    //   // denoiseImage(scaledImageUrl, 10).then((denoisedImageUrl) => {
                    //   //   imageList.push(denoisedImageUrl)
                    //   // })
                    // })
                }
                else {
                    url = 'https:' + ((_b = imageNode[i].getAttribute('data-lazyload')) === null || _b === void 0 ? void 0 : _b.replace('.avif', ''));
                    // imageList.push(url)
                }
                // // 加载图片
                // const image = new Image();
                // image.crossOrigin = "anonymous";
                // image.src = url;
                // const canvas = document.createElement('canvas');
                // image.onload = () => {
                //   // 将图片加载到canvas中
                //   const ctx = canvas.getContext('2d');
                //   if (ctx !== null && canvas.width !== 0) {
                //     canvas.width = image.width;
                //     canvas.height = image.height;
                //     ctx.drawImage(image, 0, 0);
                //     // 获取图片数据
                //     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                //     // 对图片进行二值化处理
                //     binarizeImage(imageData, 128);
                //     // 将处理后的图片数据写回canvas
                //     ctx.putImageData(imageData, 0, 0);
                //   }
                // }
                imageList.push(url);
                // imageList.forEach(imageUrl => {
                //   imageOcr(imageUrl).then((text) => {
                //     console.log(text);
                //   })
                // })
                // testtt()
            }
            // OCR 图片
            imageOcr(imageList);
        }
    }, [props]);
    // 窗口拖拽时触发
    (0, react_1.useEffect)(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            // console.log('useEffect return');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);
    (0, react_1.useEffect)(() => {
        if (searchResult.length > 0) {
            goToImage(searchResult[0]);
        }
    }, [searchResult]);
    // 二值化函数
    function binarizeImage(imageData, threshold) {
        for (let i = 0; i < imageData.data.length; i += 4) {
            const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
            const binary = gray < threshold ? 0 : 255;
            imageData.data[i] = binary;
            imageData.data[i + 1] = binary;
            imageData.data[i + 2] = binary;
        }
        return imageData;
    }
    const findNode = (imageUrl) => {
        var _a, _b;
        const imageNode = (_a = document.getElementById('J-detail-content')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        if (imageNode !== undefined) {
            for (let i = 0; i < imageNode.length; i++) {
                let thisUrl = imageNode[i].currentSrc;
                if (thisUrl.indexOf('.gif') >= 0) {
                    thisUrl = 'https:' + ((_b = imageNode[i].getAttribute('data-lazyload')) === null || _b === void 0 ? void 0 : _b.replace('.avif', ''));
                }
                if (thisUrl.indexOf(imageUrl) >= 0) {
                    console.log(imageNode[i]);
                    return imageNode[i];
                }
            }
            return null;
        }
    };
    function getElementTop(elem) {
        let top = 0;
        while (elem) {
            top += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return top;
    }
    function getElementLeft(elem) {
        let left = 0;
        while (elem) {
            left += elem.offsetLeft;
            elem = elem.offsetParent;
        }
        return left;
    }
    const showHightlight = (searchResult) => {
        console.log(searchResult);
        searchResult.forEach(item => {
            // 图片节点
            const node = findNode(item.image);
            let box = document.createElement('div');
            box.style.width = item.bbox.x1 - item.bbox.x0 + 'px';
            box.style.height = item.bbox.y1 - item.bbox.y0 + 'px';
            box.style.position = 'absolute';
            box.style.zIndex = '1';
            box.style.backgroundColor = 'red';
            box.style.opacity = '0.5';
            if (node) {
                box.style.top = Math.abs(getElementTop(node) + item.bbox.y0) + 'px';
                box.style.left = Math.abs(getElementLeft(node) + item.bbox.x0) + 'px';
                console.log('==========');
                console.log(box);
                console.log(Math.abs(getElementTop(node) + item.bbox.y0) + 'px');
                console.log('------');
                console.log(node);
                console.log(getElementTop(node));
                console.log(item.bbox);
                console.log('==========');
            }
            box.classList.add('hightlightBox');
            document.body.appendChild(box);
            console.log(box);
        });
    };
    const removeHightlight = () => {
        var _a;
        let hightlightBox = document.getElementsByClassName('hightlightBox');
        for (let i = 0; i < hightlightBox.length; i++) {
            (_a = hightlightBox[i].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(hightlightBox[i]);
        }
    };
    const onSearch = (value) => {
        setSearchResult([]);
        // let newSearchResult = []
        // 移除旧的高亮
        removeHightlight();
        let newSearchResult = [];
        console.log(value);
        console.log(ocrResult.current);
        // Search
        for (let i = 0; i < ocrResult.current[0].length - 1; i++) {
            const text = ocrResult.current[0][i].data.data.text;
            const image = ocrResult.current[0][i].image;
            // 遍历识别结果的每个段落
            ocrResult.current[0][i].data.data.lines.forEach((item) => {
                if (item.text.replace(/\s/g, '').indexOf(value) >= 0) {
                    newSearchResult.unshift({ 'data': ocrResult.current[0][i].data, 'image': image, 'bbox': item.bbox });
                }
            });
            // if (text.indexOf(value) >= 0) {
            //   console.log('======');
            //   console.log(text);
            //   console.log(image);
            //   newSearchResult.unshift({ 'data': ocrResult.current[0][i].data, 'image': image })
            //   console.log('======');
            // }
        }
        setIndex(0);
        setSearchResult(newSearchResult);
        showHightlight(newSearchResult);
        console.log(newSearchResult);
        // // 定位到 DOM 元素
        // setTimeout(() => {
        //   goToImage(searchResult[0])
        // }, 10);
    };
    const handleNextBtnClick = (offset) => {
        console.log('handleNextBtnClick');
        console.log(searchResult);
        console.log(offset);
        let postion = index + offset;
        if (postion >= searchResult.length) {
            postion = 0;
        }
        if (postion < 0) {
            postion = searchResult.length - 1;
        }
        goToImage(searchResult[postion]);
        setIndex(postion);
    };
    const goToImage = (target) => {
        const node = findNode(target.image);
        console.log(node === null || node === void 0 ? void 0 : node.getBoundingClientRect());
        console.log(target.bbox);
        window.scrollTo(0, getElementTop(node) + target.bbox.y0 - 40);
        // if (node) {
        //   node.scrollIntoView({
        //     behavior: 'smooth', // 平滑滚动
        //     // inline: 'nearest' // 滚动到离元素最近的边缘
        //   });
        // }
    };
    const imageOcr = (imageUrlList) => __awaiter(this, void 0, void 0, function* () {
        // Tesseract.recognize(
        //   imageUrl,
        //   'chi_sim',
        //   {
        //     logger: m => {
        //       // console.log(m);
        //     }
        //   }
        // ).then(({ data: { text } }) => {
        //   resolve(text)
        // })
        let date1 = new Date();
        const scheduler = (0, tesseract_js_1.createScheduler)();
        const worker = yield (0, tesseract_js_1.createWorker)();
        const worker2 = yield (0, tesseract_js_1.createWorker)();
        const worker3 = yield (0, tesseract_js_1.createWorker)();
        // const worker4 = await createWorker();
        // const worker5 = await createWorker();
        // const worker6 = await createWorker();
        // const worker7 = await createWorker();
        // const worker8 = await createWorker();
        yield worker.loadLanguage('chi_sim');
        yield worker.initialize('chi_sim');
        yield worker2.loadLanguage('chi_sim');
        yield worker2.initialize('chi_sim');
        yield worker3.loadLanguage('chi_sim');
        yield worker3.initialize('chi_sim');
        // await worker4.loadLanguage('chi_sim+eng');
        // await worker4.initialize('chi_sim+eng');
        // await worker5.loadLanguage('chi_sim+eng');
        // await worker5.initialize('chi_sim+eng');
        // await worker6.loadLanguage('chi_sim+eng');
        // await worker6.initialize('chi_sim+eng');
        // await worker7.loadLanguage('chi_sim+eng');
        // await worker7.initialize('chi_sim+eng');
        // await worker8.loadLanguage('chi_sim+eng');
        // await worker8.initialize('chi_sim+eng');
        scheduler.addWorker(worker);
        scheduler.addWorker(worker2);
        scheduler.addWorker(worker3);
        // scheduler.addWorker(worker4);
        // scheduler.addWorker(worker5);
        // scheduler.addWorker(worker6);
        // scheduler.addWorker(worker7);
        // scheduler.addWorker(worker8);
        const promises = imageUrlList.map((imageUrl) => ({
            'result': scheduler.addJob('recognize', imageUrl, undefined, {
                text: false,
                blocks: true,
                hocr: false,
                tsv: false,
                box: false,
                unlv: false,
                osd: false,
                pdf: false,
                imageColor: false,
                imageGrey: false,
                imageBinary: false,
            }),
            'image': imageUrl
        }));
        let newIamge = [];
        for (const promise of promises) {
            const result = yield promise.result;
            // result.data.text = result.data.text.replace(/\s/g, '')
            console.log(promise.image);
            console.log(Math.floor((new Date().getTime() - date1.getTime()) / 1000));
            console.log(result);
            const data = {
                'data': result,
                'image': promise.image
            };
            newIamge.push(data);
            ocrResult.current[ocrResult.current.length == 0 ? 0 : ocrResult.current.length - 1] = newIamge;
        }
        console.log(ocrResult.current);
        // const results = await Promise.all(imageUrlList.map((imageUrl) => (
        //   scheduler.addJob('recognize', imageUrl, undefined, {
        //     text: true,
        //     blocks: true,
        //     hocr: false,
        //     tsv: false,
        //     box: false,
        //     unlv: false,
        //     osd: false,
        //     pdf: false,
        //     imageColor: false,
        //     imageGrey: false,
        //     imageBinary: false,
        //   })
        //   // scheduler2.addJob('recognize',imageUrl)
        // )))
        // console.log(results)
        // console.log(results.map(r => r.data.text));
        // console.log(results);
        yield scheduler.terminate(); // It also terminates all workers.
        let date2 = new Date();
        console.log(Math.floor((date2.getTime() - date1.getTime()) / 1000));
        // for (let i = 0; i < imageUrlList.length; i++) {
        //   const { data: { text } } = await worker.recognize(imageUrlList[i]);
        //   console.log(text)
        // }
        // imageUrlList.forEach(async (imageUrl) => {
        //   const { data: { text } } = await worker.recognize(imageUrl);
        //   console.log(text)
        //   // const data = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
        //   // console.log(data.data.text);
        // });
        // await worker.terminate();
    });
    // 缩放图片
    const scaleImage = (imageUrl, scale) => {
        console.log(scale);
        const img = new Image();
        img.crossOrigin = 'anonymous'; // 添加 crossOrigin 属性
        img.src = imageUrl;
        return new Promise((resolve) => {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const scaledImageUrl = canvas.toDataURL('image/jpeg'); // quality 可以设置图片压缩质量
                // console.log(scaledImageUrl);
                resolve(scaledImageUrl);
            };
        });
    };
    // 去噪点
    const denoiseImage = (imageUrl, radius) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous'; // 添加 crossOrigin 属性
            img.src = imageUrl;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                if (ctx !== null) {
                    ctx.drawImage(img, 0, 0);
                    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = pixels.data;
                    const threshold = radius * 2;
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const alpha = data[i + 3];
                        const gray = (r + g + b) / 3;
                        if (Math.abs(r - gray) > threshold || Math.abs(g - gray) > threshold || Math.abs(b - gray) > threshold) {
                            data[i] = data[i + 1] = data[i + 2] = 255;
                        }
                    }
                    ctx.putImageData(pixels, 0, 0);
                    const denoisedImageUrl = canvas.toDataURL('image/jpeg', 1); // quality 可以设置图片压缩质量
                    resolve(denoisedImageUrl);
                }
            };
        });
    };
    const handleMouseDown = (event) => {
        // console.log('PopupCard:handleMouseDown');
        setDragging(true);
        if (windowElement.current) {
            const rect = windowElement.current.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            windowElement.current.dataset.offsetX = String(offsetX);
            windowElement.current.dataset.offsetY = String(offsetY);
        }
        // setOffset({ x: event.clientX - position.x, y: event.clientY - position.y });
    };
    const handleMouseMove = (event) => {
        // // console.log('PopupCard:handleMouseMove');
        // // console.log(dragging);
        if (dragging && windowElement.current) {
            // Use requestAnimationFrame to throttle the mousemove event handling
            // 鼠标相对窗口左上角的偏移
            const offsetX = parseFloat(windowElement.current.dataset.offsetX || '');
            const offsetY = parseFloat(windowElement.current.dataset.offsetY || '');
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;
            // Check the boundaries
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const elementWidth = windowElement.current.clientWidth;
            const elementHeight = windowElement.current.clientHeight;
            const minX = 0;
            const minY = 0;
            const maxX = windowWidth - elementWidth;
            const maxY = windowHeight - elementHeight;
            const clampedX = Math.max(minX, Math.min(newX, maxX));
            const clampedY = Math.max(minY, Math.min(newY, maxY));
            // Only update the position if it's within the boundaries
            // newX >= minX && newX <= maxX && newY >= minY && newY <= maxY
            if (true) {
                // setPosition({ x: clampedX, y: clampedY });
                windowElement.current.style.left = `${clampedX}px`;
                windowElement.current.style.top = `${clampedY}px`;
            }
            else {}
        }
    };
    const handleMouseUp = () => {
        // // console.log('PopupCard:handleMouseUp');
        setDragging(false);
    };
    return (react_1.default.createElement("div", { id: "LearningEnglish2023", ref: windowElement },
        react_1.default.createElement(Nav_1.Nav, { onMouseDown: handleMouseDown }),
        react_1.default.createElement("div", { className: 'contentBox', style: {
                marginTop: '45px'
            } },
            react_1.default.createElement(Search, { placeholder: "input search text", onSearch: onSearch, style: { width: 200 } }),
            searchResult.length === 0 ? '' : index + 1 + '/' + searchResult.length,
            react_1.default.createElement("button", { onClick: handleNextBtnClick.bind(event, -1) }, "pre"),
            react_1.default.createElement("button", { onClick: handleNextBtnClick.bind(event, 1) }, "next"))));
}
exports.PopupCard = PopupCard;
;


/***/ }),

/***/ "./src/ContentScript/index.tsx":
/*!*************************************!*\
  !*** ./src/ContentScript/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const webextension_polyfill_1 = __importDefault(__webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const PopupCard_1 = __webpack_require__(/*! ./PopupCard */ "./src/ContentScript/PopupCard/index.tsx");
const cssinjs_1 = __webpack_require__(/*! @ant-design/cssinjs */ "./node_modules/@ant-design/cssinjs/es/index.js");
const APP_NAME = '__jiang-shopping';
// 初始化主容器，主容器用来挂在全局样式，包括第三方组件的样式
let MyBox = document.getElementById(APP_NAME);
// container 承载 UI 组件
let container = document.createElement('div');
// 使用 shadow 来隔离样式
let shadowRoot = undefined;
if (MyBox !== null && MyBox !== undefined) {
    // 如果已存在容器
    // console.log('已存在 Box 容器');
    // 移除旧容器，避免出现 2 个主容器会导致 UI 渲染错误
    (_a = MyBox.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(MyBox);
}
// 创建主容器
MyBox = document.createElement('div');
MyBox.id = APP_NAME;
document.getElementsByTagName('html')[0].appendChild(MyBox);
MyBox.style.display = 'none'; //默认隐藏
shadowRoot = MyBox === null || MyBox === void 0 ? void 0 : MyBox.attachShadow({ mode: 'open' });
container.className = 'container';
shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(container);
// 在 Shadow DOM 中添加样式：
const style = document.createElement('style');
style.textContent = `
  #LearningEnglish2023 {
    font-family: sans-serif;
    width: 400px;
    height: 100px;
    color: #333;
    position: fixed;
    display: flex;
    flex-direction: column;
    font-size: 13.4px;
    background-color: #fff;
    z-index: 9999;
    overflow: hidden;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.1), -1px 10px 10px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    }

    .hightlightBox{

      background-color: red;
      opacity: 0.5;
      position: absolute;
      z-index: 9999;
  
    }

    #LearningEnglish2023 #ScouterNav {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 10px 19px;
      border-bottom: 1px solid rgba(5, 5, 5, .06);
      user-select: none;
      }
    
      #LearningEnglish2023 #ScouterNav img {
      width: auto;
      height: 24px;
      margin-right: 6px;
      }

  `;
shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(style);
// 接收 background 消息（目前是通过浏览器的右键菜单触发）
webextension_polyfill_1.default.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    var _a;
    console.log('content script onMessage:');
    console.log(msg);
    if (msg.type === 'openPopupCard') {
        // 处理窗口
        if (MyBox !== null && MyBox !== undefined) {
            // 如果已存在容器
            // console.log('已存在 Box 容器');
            MyBox.style.display = 'block';
            // 移除旧内容，避免 2 次渲染混杂在一起
            (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
        }
        else {
            // console.log('不存在 Box 容器');
        }
        container = document.createElement('div');
        container.className = 'container';
        shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(container);
        // 显示窗口，window.getSelection() 是当前鼠标选中的区域信息
        console.log(window.getSelection());
        showPopupCard(window.getSelection(), container, shadowRoot);
        // 监听页面点击事件
        document.onmousedown = function (event) {
            if (MyBox !== undefined && MyBox !== null) {
                // 如果点击的不是插件窗口及其子元素，则关闭窗口
                if (MyBox !== event.target && !MyBox.contains(event.target)) {
                    // 隐藏窗口
                    // container.parentNode?.removeChild(container);
                }
            }
        };
    }
});
// 显示应用窗口
function showPopupCard(msg, MyBox, shadowRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
            react_1.default.createElement(cssinjs_1.StyleProvider, { container: shadowRoot },
                react_1.default.createElement(PopupCard_1.PopupCard, { selection: msg }))), MyBox);
    });
}


/***/ }),

/***/ "./src/assets/icon128.png":
/*!********************************!*\
  !*** ./src/assets/icon128.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"content_script": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension_typescript_starter"] = self["webpackChunkchrome_extension_typescript_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/ContentScript/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbXBvbmVudHMvTmF2LnRzeCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9Db250ZW50U2NyaXB0L1BvcHVwQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvQ29udGVudFNjcmlwdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYXNzZXRzL2ljb24xMjgucG5nIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5OYXYgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBpY29uMTI4X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbjEyOC5wbmdcIikpO1xuZnVuY3Rpb24gTmF2KHByb3BzKSB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJTY291dGVyTmF2XCIsIHN0eWxlOiB7XG4gICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OVxuICAgICAgICB9LCBvbk1vdXNlRG93bjogcHJvcHMub25Nb3VzZURvd24gfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGljb24xMjhfcG5nXzEuZGVmYXVsdCB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmlnaHRCdG5Cb3hcIiwgc3R5bGU6IHsgZmxleDogMSwgdGV4dEFsaWduOiAncmlnaHQnIH0gfSkpKTtcbn1cbmV4cG9ydHMuTmF2ID0gTmF2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3B1cENhcmQgPSB2b2lkIDA7XG5jb25zdCB0ZXNzZXJhY3RfanNfMSA9IHJlcXVpcmUoXCJ0ZXNzZXJhY3QuanNcIik7XG5jb25zdCBhbnRkXzEgPSByZXF1aXJlKFwiYW50ZFwiKTtcbmNvbnN0IHsgU2VhcmNoIH0gPSBhbnRkXzEuSW5wdXQ7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBOYXZfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL05hdlwiKTtcbmZ1bmN0aW9uIFBvcHVwQ2FyZChwcm9wcykge1xuICAgIC8vIOeql+WPo+aLluaLvemAu+i+kVxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGZhbHNlKTtcbiAgICBjb25zdCB3aW5kb3dFbGVtZW50ID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICBjb25zdCBvY3JSZXN1bHQgPSAoMCwgcmVhY3RfMS51c2VSZWYpKFtdKTtcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0LCBzZXRTZWFyY2hSZXN1bHRdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgwKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8g6K6+572u56qX5Y+j55qE6buY6K6k5L2N572uXG4gICAgICAgIGlmICh3aW5kb3dFbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBib3VuZGFyaWVzXG4gICAgICAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gd2luZG93RWxlbWVudC5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBtaW5YID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4WCA9IHdpbmRvd1dpZHRoIC0gZWxlbWVudFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvd0hlaWdodCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gbWF4WCAtIDIwO1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IHByb3BzLnNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wICsgcHJvcHMuc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAyMDtcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRYID0gTWF0aC5tYXgobWluWCwgTWF0aC5taW4obmV3WCwgbWF4WCkpO1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFkgPSBNYXRoLm1heChtaW5ZLCBNYXRoLm1pbihuZXdZLCBtYXhZKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKSk7XG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmN1cnJlbnQuc3R5bGUucmlnaHQgPSAnMTBweCc7XG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmN1cnJlbnQuc3R5bGUudG9wID0gJzEwcHgnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaHVsaXR1cGlhbj09PT09PT09PT0nKTtcbiAgICAgICAgbGV0IGltYWdlTm9kZSA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKLWRldGFpbC1jb250ZW50JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgIGxldCBpbWFnZUxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKGltYWdlTm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZU5vZGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IChpbWFnZU5vZGUgPT09IG51bGwgfHwgaW1hZ2VOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWFnZU5vZGUubGVuZ3RoKSAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGltYWdlTm9kZVtpXVsnY3VycmVudFNyYyddLnJlcGxhY2UoJy5hdmlmJywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZU5vZGVbaV1bJ2N1cnJlbnRTcmMnXS5pbmRleE9mKCcuZ2lmJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWOu+WZqueCuVxuICAgICAgICAgICAgICAgICAgICAvLyBkZW5vaXNlSW1hZ2UodXJsLCAxMCkudGhlbigoZGVub2lzZWRJbWFnZVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGltYWdlTGlzdC5wdXNoKGRlbm9pc2VkSW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlTGlzdC5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgLy8g6aKE5aSE55CG5Zu+54mHXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjYWxlSW1hZ2UodXJsLCAxKS50aGVuKChzY2FsZWRJbWFnZVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGltYWdlTGlzdC5wdXNoKHNjYWxlZEltYWdlVXJsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIC8vIOWOu+WZqueCuVxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIGRlbm9pc2VJbWFnZShzY2FsZWRJbWFnZVVybCwgMTApLnRoZW4oKGRlbm9pc2VkSW1hZ2VVcmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyAgIGltYWdlTGlzdC5wdXNoKGRlbm9pc2VkSW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICdodHRwczonICsgKChfYiA9IGltYWdlTm9kZVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF6eWxvYWQnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlcGxhY2UoJy5hdmlmJywgJycpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VMaXN0LnB1c2godXJsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAvLyDliqDovb3lm77niYdcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgLy8g5bCG5Zu+54mH5Yqg6L295YiwY2FudmFz5LitXG4gICAgICAgICAgICAgICAgLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAvLyAgIGlmIChjdHggIT09IG51bGwgJiYgY2FudmFzLndpZHRoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgIC8vICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g6I635Y+W5Zu+54mH5pWw5o2uXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g5a+55Zu+54mH6L+b6KGM5LqM5YC85YyW5aSE55CGXG4gICAgICAgICAgICAgICAgLy8gICAgIGJpbmFyaXplSW1hZ2UoaW1hZ2VEYXRhLCAxMjgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyDlsIblpITnkIblkI7nmoTlm77niYfmlbDmja7lhpnlm55jYW52YXNcbiAgICAgICAgICAgICAgICAvLyAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpbWFnZUxpc3QucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlTGlzdC5mb3JFYWNoKGltYWdlVXJsID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgIGltYWdlT2NyKGltYWdlVXJsKS50aGVuKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIC8vIHRlc3R0dCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPQ1Ig5Zu+54mHXG4gICAgICAgICAgICBpbWFnZU9jcihpbWFnZUxpc3QpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzXSk7XG4gICAgLy8g56qX5Y+j5ouW5ou95pe26Kem5Y+RXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QgcmV0dXJuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgIH0sIFtkcmFnZ2luZ10pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdvVG9JbWFnZShzZWFyY2hSZXN1bHRbMF0pO1xuICAgICAgICB9XG4gICAgfSwgW3NlYXJjaFJlc3VsdF0pO1xuICAgIC8vIOS6jOWAvOWMluWHveaVsFxuICAgIGZ1bmN0aW9uIGJpbmFyaXplSW1hZ2UoaW1hZ2VEYXRhLCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgY29uc3QgZ3JheSA9IChpbWFnZURhdGEuZGF0YVtpXSArIGltYWdlRGF0YS5kYXRhW2kgKyAxXSArIGltYWdlRGF0YS5kYXRhW2kgKyAyXSkgLyAzO1xuICAgICAgICAgICAgY29uc3QgYmluYXJ5ID0gZ3JheSA8IHRocmVzaG9sZCA/IDAgOiAyNTU7XG4gICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpXSA9IGJpbmFyeTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSA9IGJpbmFyeTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAyXSA9IGJpbmFyeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VEYXRhO1xuICAgIH1cbiAgICBjb25zdCBmaW5kTm9kZSA9IChpbWFnZVVybCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBpbWFnZU5vZGUgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBpZiAoaW1hZ2VOb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNVcmwgPSBpbWFnZU5vZGVbaV0uY3VycmVudFNyYztcbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKCcuZ2lmJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVXJsID0gJ2h0dHBzOicgKyAoKF9iID0gaW1hZ2VOb2RlW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5bG9hZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgnLmF2aWYnLCAnJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKGltYWdlVXJsKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlTm9kZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZU5vZGVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRUb3AoZWxlbSkge1xuICAgICAgICBsZXQgdG9wID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIHRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50TGVmdChlbGVtKSB7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIGxlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cbiAgICBjb25zdCBzaG93SGlnaHRsaWdodCA9IChzZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgc2VhcmNoUmVzdWx0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAvLyDlm77niYfoioLngrlcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaW5kTm9kZShpdGVtLmltYWdlKTtcbiAgICAgICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9IGl0ZW0uYmJveC54MSAtIGl0ZW0uYmJveC54MCArICdweCc7XG4gICAgICAgICAgICBib3guc3R5bGUuaGVpZ2h0ID0gaXRlbS5iYm94LnkxIC0gaXRlbS5iYm94LnkwICsgJ3B4JztcbiAgICAgICAgICAgIGJveC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBib3guc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgYm94LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLnRvcCA9IE1hdGguYWJzKGdldEVsZW1lbnRUb3Aobm9kZSkgKyBpdGVtLmJib3gueTApICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3guc3R5bGUubGVmdCA9IE1hdGguYWJzKGdldEVsZW1lbnRMZWZ0KG5vZGUpICsgaXRlbS5iYm94LngwKSArICdweCc7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hdGguYWJzKGdldEVsZW1lbnRUb3Aobm9kZSkgKyBpdGVtLmJib3gueTApICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldEVsZW1lbnRUb3Aobm9kZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uYmJveCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoaWdodGxpZ2h0Qm94Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUhpZ2h0bGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IGhpZ2h0bGlnaHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdodGxpZ2h0Qm94Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlnaHRsaWdodEJveC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgKF9hID0gaGlnaHRsaWdodEJveFtpXS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoaGlnaHRsaWdodEJveFtpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFJlc3VsdChbXSk7XG4gICAgICAgIC8vIGxldCBuZXdTZWFyY2hSZXN1bHQgPSBbXVxuICAgICAgICAvLyDnp7vpmaTml6fnmoTpq5jkuq5cbiAgICAgICAgcmVtb3ZlSGlnaHRsaWdodCgpO1xuICAgICAgICBsZXQgbmV3U2VhcmNoUmVzdWx0ID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2cob2NyUmVzdWx0LmN1cnJlbnQpO1xuICAgICAgICAvLyBTZWFyY2hcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvY3JSZXN1bHQuY3VycmVudFswXS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBvY3JSZXN1bHQuY3VycmVudFswXVtpXS5kYXRhLmRhdGEudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gb2NyUmVzdWx0LmN1cnJlbnRbMF1baV0uaW1hZ2U7XG4gICAgICAgICAgICAvLyDpgY3ljobor4bliKvnu5PmnpznmoTmr4/kuKrmrrXokL1cbiAgICAgICAgICAgIG9jclJlc3VsdC5jdXJyZW50WzBdW2ldLmRhdGEuZGF0YS5saW5lcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGV4dC5yZXBsYWNlKC9cXHMvZywgJycpLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoUmVzdWx0LnVuc2hpZnQoeyAnZGF0YSc6IG9jclJlc3VsdC5jdXJyZW50WzBdW2ldLmRhdGEsICdpbWFnZSc6IGltYWdlLCAnYmJveCc6IGl0ZW0uYmJveCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGlmICh0ZXh0LmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coJz09PT09PScpO1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coaW1hZ2UpO1xuICAgICAgICAgICAgLy8gICBuZXdTZWFyY2hSZXN1bHQudW5zaGlmdCh7ICdkYXRhJzogb2NyUmVzdWx0LmN1cnJlbnRbMF1baV0uZGF0YSwgJ2ltYWdlJzogaW1hZ2UgfSlcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coJz09PT09PScpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIHNldEluZGV4KDApO1xuICAgICAgICBzZXRTZWFyY2hSZXN1bHQobmV3U2VhcmNoUmVzdWx0KTtcbiAgICAgICAgc2hvd0hpZ2h0bGlnaHQobmV3U2VhcmNoUmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U2VhcmNoUmVzdWx0KTtcbiAgICAgICAgLy8gLy8g5a6a5L2N5YiwIERPTSDlhYPntKBcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgZ29Ub0ltYWdlKHNlYXJjaFJlc3VsdFswXSlcbiAgICAgICAgLy8gfSwgMTApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTmV4dEJ0bkNsaWNrID0gKG9mZnNldCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlTmV4dEJ0bkNsaWNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9mZnNldCk7XG4gICAgICAgIGxldCBwb3N0aW9uID0gaW5kZXggKyBvZmZzZXQ7XG4gICAgICAgIGlmIChwb3N0aW9uID49IHNlYXJjaFJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc3Rpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3N0aW9uIDwgMCkge1xuICAgICAgICAgICAgcG9zdGlvbiA9IHNlYXJjaFJlc3VsdC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGdvVG9JbWFnZShzZWFyY2hSZXN1bHRbcG9zdGlvbl0pO1xuICAgICAgICBzZXRJbmRleChwb3N0aW9uKTtcbiAgICB9O1xuICAgIGNvbnN0IGdvVG9JbWFnZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKHRhcmdldC5pbWFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5iYm94KTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGdldEVsZW1lbnRUb3Aobm9kZSkgKyB0YXJnZXQuYmJveC55MCAtIDQwKTtcbiAgICAgICAgLy8gaWYgKG5vZGUpIHtcbiAgICAgICAgLy8gICBub2RlLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgLy8gICAgIGJlaGF2aW9yOiAnc21vb3RoJywgLy8g5bmz5ruR5rua5YqoXG4gICAgICAgIC8vICAgICAvLyBpbmxpbmU6ICduZWFyZXN0JyAvLyDmu5rliqjliLDnprvlhYPntKDmnIDov5HnmoTovrnnvJhcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgY29uc3QgaW1hZ2VPY3IgPSAoaW1hZ2VVcmxMaXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFRlc3NlcmFjdC5yZWNvZ25pemUoXG4gICAgICAgIC8vICAgaW1hZ2VVcmwsXG4gICAgICAgIC8vICAgJ2NoaV9zaW0nLFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIGxvZ2dlcjogbSA9PiB7XG4gICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKG0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gKS50aGVuKCh7IGRhdGE6IHsgdGV4dCB9IH0pID0+IHtcbiAgICAgICAgLy8gICByZXNvbHZlKHRleHQpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlciA9ICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVTY2hlZHVsZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlciA9IHlpZWxkICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVXb3JrZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlcjIgPSB5aWVsZCAoMCwgdGVzc2VyYWN0X2pzXzEuY3JlYXRlV29ya2VyKSgpO1xuICAgICAgICBjb25zdCB3b3JrZXIzID0geWllbGQgKDAsIHRlc3NlcmFjdF9qc18xLmNyZWF0ZVdvcmtlcikoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNCA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI1ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIC8vIGNvbnN0IHdvcmtlcjYgPSBhd2FpdCBjcmVhdGVXb3JrZXIoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNyA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI4ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIHlpZWxkIHdvcmtlci5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyLmluaXRpYWxpemUoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5pbml0aWFsaXplKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMubG9hZExhbmd1YWdlKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMuaW5pdGlhbGl6ZSgnY2hpX3NpbScpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI0LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI1LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNS5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI2LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNi5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI3LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNy5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI4LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyOC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNCk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNSk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNik7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyOCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gaW1hZ2VVcmxMaXN0Lm1hcCgoaW1hZ2VVcmwpID0+ICh7XG4gICAgICAgICAgICAncmVzdWx0Jzogc2NoZWR1bGVyLmFkZEpvYigncmVjb2duaXplJywgaW1hZ2VVcmwsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIHRleHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJsb2NrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob2NyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0c3Y6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5sdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3NkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwZGY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlR3JleTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VCaW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnaW1hZ2UnOiBpbWFnZVVybFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBuZXdJYW1nZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHByb21pc2UucmVzdWx0O1xuICAgICAgICAgICAgLy8gcmVzdWx0LmRhdGEudGV4dCA9IHJlc3VsdC5kYXRhLnRleHQucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvbWlzZS5pbWFnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGRhdGUxLmdldFRpbWUoKSkgLyAxMDAwKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnZGF0YSc6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAnaW1hZ2UnOiBwcm9taXNlLmltYWdlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3SWFtZ2UucHVzaChkYXRhKTtcbiAgICAgICAgICAgIG9jclJlc3VsdC5jdXJyZW50W29jclJlc3VsdC5jdXJyZW50Lmxlbmd0aCA9PSAwID8gMCA6IG9jclJlc3VsdC5jdXJyZW50Lmxlbmd0aCAtIDFdID0gbmV3SWFtZ2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cob2NyUmVzdWx0LmN1cnJlbnQpO1xuICAgICAgICAvLyBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VVcmxMaXN0Lm1hcCgoaW1hZ2VVcmwpID0+IChcbiAgICAgICAgLy8gICBzY2hlZHVsZXIuYWRkSm9iKCdyZWNvZ25pemUnLCBpbWFnZVVybCwgdW5kZWZpbmVkLCB7XG4gICAgICAgIC8vICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICAvLyAgICAgYmxvY2tzOiB0cnVlLFxuICAgICAgICAvLyAgICAgaG9jcjogZmFsc2UsXG4gICAgICAgIC8vICAgICB0c3Y6IGZhbHNlLFxuICAgICAgICAvLyAgICAgYm94OiBmYWxzZSxcbiAgICAgICAgLy8gICAgIHVubHY6IGZhbHNlLFxuICAgICAgICAvLyAgICAgb3NkOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIHBkZjogZmFsc2UsXG4gICAgICAgIC8vICAgICBpbWFnZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGltYWdlR3JleTogZmFsc2UsXG4gICAgICAgIC8vICAgICBpbWFnZUJpbmFyeTogZmFsc2UsXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gICAvLyBzY2hlZHVsZXIyLmFkZEpvYigncmVjb2duaXplJyxpbWFnZVVybClcbiAgICAgICAgLy8gKSkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMubWFwKHIgPT4gci5kYXRhLnRleHQpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgIHlpZWxkIHNjaGVkdWxlci50ZXJtaW5hdGUoKTsgLy8gSXQgYWxzbyB0ZXJtaW5hdGVzIGFsbCB3b3JrZXJzLlxuICAgICAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCkpIC8gMTAwMCkpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlVXJsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgIGNvbnN0IHsgZGF0YTogeyB0ZXh0IH0gfSA9IGF3YWl0IHdvcmtlci5yZWNvZ25pemUoaW1hZ2VVcmxMaXN0W2ldKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGltYWdlVXJsTGlzdC5mb3JFYWNoKGFzeW5jIChpbWFnZVVybCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnN0IHsgZGF0YTogeyB0ZXh0IH0gfSA9IGF3YWl0IHdvcmtlci5yZWNvZ25pemUoaW1hZ2VVcmwpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgIC8vICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHdvcmtlci5yZWNvZ25pemUoJ2h0dHBzOi8vdGVzc2VyYWN0LnByb2plY3RuYXB0aGEuY29tL2ltZy9lbmdfYncucG5nJyk7XG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coZGF0YS5kYXRhLnRleHQpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIOe8qeaUvuWbvueJh1xuICAgIGNvbnN0IHNjYWxlSW1hZ2UgPSAoaW1hZ2VVcmwsIHNjYWxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNjYWxlKTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnOyAvLyDmt7vliqAgY3Jvc3NPcmlnaW4g5bGe5oCnXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgY3R4ID09PSBudWxsIHx8IGN0eCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7IC8vIHF1YWxpdHkg5Y+v5Lul6K6+572u5Zu+54mH5Y6L57yp6LSo6YePXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDljrvlmarngrlcbiAgICBjb25zdCBkZW5vaXNlSW1hZ2UgPSAoaW1hZ2VVcmwsIHJhZGl1cykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7IC8vIOa3u+WKoCBjcm9zc09yaWdpbiDlsZ7mgKdcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwaXhlbHMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gcmFkaXVzICogMjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBkYXRhW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBkYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gZGF0YVtpICsgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmF5ID0gKHIgKyBnICsgYikgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHIgLSBncmF5KSA+IHRocmVzaG9sZCB8fCBNYXRoLmFicyhnIC0gZ3JheSkgPiB0aHJlc2hvbGQgfHwgTWF0aC5hYnMoYiAtIGdyYXkpID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSArIDFdID0gZGF0YVtpICsgMl0gPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShwaXhlbHMsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZW5vaXNlZEltYWdlVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIDEpOyAvLyBxdWFsaXR5IOWPr+S7peiuvue9ruWbvueJh+WOi+e8qei0qOmHj1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlbm9pc2VkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VEb3duJyk7XG4gICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFkgPSBTdHJpbmcob2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0T2Zmc2V0KHsgeDogZXZlbnQuY2xpZW50WCAtIHBvc2l0aW9uLngsIHk6IGV2ZW50LmNsaWVudFkgLSBwb3NpdGlvbi55IH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VNb3ZlJyk7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGRyYWdnaW5nKTtcbiAgICAgICAgaWYgKGRyYWdnaW5nICYmIHdpbmRvd0VsZW1lbnQuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB0aHJvdHRsZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgICAgICAvLyDpvKDmoIfnm7jlr7nnqpflj6Plt6bkuIrop5LnmoTlgY/np7tcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBwYXJzZUZsb2F0KHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFggfHwgJycpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHBhcnNlRmxvYXQod2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WSB8fCAnJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gZXZlbnQuY2xpZW50WCAtIG9mZnNldFg7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gZXZlbnQuY2xpZW50WSAtIG9mZnNldFk7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBpZiBpdCdzIHdpdGhpbiB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgLy8gbmV3WCA+PSBtaW5YICYmIG5ld1ggPD0gbWF4WCAmJiBuZXdZID49IG1pblkgJiYgbmV3WSA8PSBtYXhZXG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHNldFBvc2l0aW9uKHsgeDogY2xhbXBlZFgsIHk6IGNsYW1wZWRZIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7Y2xhbXBlZFh9cHhgO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSBgJHtjbGFtcGVkWX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlhYPntKDliLDovr7ovrnnlYxcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dFbGVtZW50LmN1cnJlbnQuZGF0YXNldC5vZmZzZXRZID0gU3RyaW5nKG9mZnNldFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnUG9wdXBDYXJkOmhhbmRsZU1vdXNlVXAnKTtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcIkxlYXJuaW5nRW5nbGlzaDIwMjNcIiwgcmVmOiB3aW5kb3dFbGVtZW50IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5hdl8xLk5hdiwgeyBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NvbnRlbnRCb3gnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2gsIHsgcGxhY2Vob2xkZXI6IFwiaW5wdXQgc2VhcmNoIHRleHRcIiwgb25TZWFyY2g6IG9uU2VhcmNoLCBzdHlsZTogeyB3aWR0aDogMjAwIH0gfSksXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQubGVuZ3RoID09PSAwID8gJycgOiBpbmRleCArIDEgKyAnLycgKyBzZWFyY2hSZXN1bHQubGVuZ3RoLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBoYW5kbGVOZXh0QnRuQ2xpY2suYmluZChldmVudCwgLTEpIH0sIFwicHJlXCIpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBoYW5kbGVOZXh0QnRuQ2xpY2suYmluZChldmVudCwgMSkgfSwgXCJuZXh0XCIpKSkpO1xufVxuZXhwb3J0cy5Qb3B1cENhcmQgPSBQb3B1cENhcmQ7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgd2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiKSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcbmNvbnN0IFBvcHVwQ2FyZF8xID0gcmVxdWlyZShcIi4vUG9wdXBDYXJkXCIpO1xuY29uc3QgY3NzaW5qc18xID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2Nzc2luanNcIik7XG5jb25zdCBBUFBfTkFNRSA9ICdfX2ppYW5nLXNob3BwaW5nJztcbi8vIOWIneWni+WMluS4u+WuueWZqO+8jOS4u+WuueWZqOeUqOadpeaMguWcqOWFqOWxgOagt+W8j++8jOWMheaLrOesrOS4ieaWuee7hOS7tueahOagt+W8j1xubGV0IE15Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQVBQX05BTUUpO1xuLy8gY29udGFpbmVyIOaJv+i9vSBVSSDnu4Tku7ZcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIOS9v+eUqCBzaGFkb3cg5p2l6ZqU56a75qC35byPXG5sZXQgc2hhZG93Um9vdCA9IHVuZGVmaW5lZDtcbmlmIChNeUJveCAhPT0gbnVsbCAmJiBNeUJveCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8g5aaC5p6c5bey5a2Y5Zyo5a655ZmoXG4gICAgLy8gY29uc29sZS5sb2coJ+W3suWtmOWcqCBCb3gg5a655ZmoJyk7XG4gICAgLy8g56e76Zmk5pen5a655Zmo77yM6YG/5YWN5Ye6546wIDIg5Liq5Li75a655Zmo5Lya5a+86Ie0IFVJIOa4suafk+mUmeivr1xuICAgIChfYSA9IE15Qm94LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChNeUJveCk7XG59XG4vLyDliJvlu7rkuLvlrrnlmahcbk15Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5NeUJveC5pZCA9IEFQUF9OQU1FO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5hcHBlbmRDaGlsZChNeUJveCk7XG5NeUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL+m7mOiupOmakOiXj1xuc2hhZG93Um9vdCA9IE15Qm94ID09PSBudWxsIHx8IE15Qm94ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBNeUJveC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG5zaGFkb3dSb290ID09PSBudWxsIHx8IHNoYWRvd1Jvb3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbi8vIOWcqCBTaGFkb3cgRE9NIOS4rea3u+WKoOagt+W8j++8mlxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNMZWFybmluZ0VuZ2xpc2gyMDIzIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMTMuNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSksIC0xcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5oaWdodGxpZ2h0Qm94e1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICBcbiAgICB9XG5cbiAgICAjTGVhcm5pbmdFbmdsaXNoMjAyMyAjU2NvdXRlck5hdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE5cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1LCA1LCA1LCAuMDYpO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG4gICAgXG4gICAgICAjTGVhcm5pbmdFbmdsaXNoMjAyMyAjU2NvdXRlck5hdiBpbWcge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgIH1cblxuICBgO1xuc2hhZG93Um9vdCA9PT0gbnVsbCB8fCBzaGFkb3dSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbi8vIOaOpeaUtiBiYWNrZ3JvdW5kIOa2iOaBr++8iOebruWJjeaYr+mAmui/h+a1j+iniOWZqOeahOWPs+mUruiPnOWNleinpuWPke+8iVxud2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEuZGVmYXVsdC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCBzY3JpcHQgb25NZXNzYWdlOicpO1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgaWYgKG1zZy50eXBlID09PSAnb3BlblBvcHVwQ2FyZCcpIHtcbiAgICAgICAgLy8g5aSE55CG56qX5Y+jXG4gICAgICAgIGlmIChNeUJveCAhPT0gbnVsbCAmJiBNeUJveCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlt7LlrZjlnKjlrrnlmahcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflt7LlrZjlnKggQm94IOWuueWZqCcpO1xuICAgICAgICAgICAgTXlCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAvLyDnp7vpmaTml6flhoXlrrnvvIzpgb/lhY0gMiDmrKHmuLLmn5Pmt7fmnYLlnKjkuIDotbdcbiAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkuI3lrZjlnKggQm94IOWuueWZqCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgICAgIHNoYWRvd1Jvb3QgPT09IG51bGwgfHwgc2hhZG93Um9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAvLyDmmL7npLrnqpflj6PvvIx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkg5piv5b2T5YmN6byg5qCH6YCJ5Lit55qE5Yy65Z+f5L+h5oGvXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5nZXRTZWxlY3Rpb24oKSk7XG4gICAgICAgIHNob3dQb3B1cENhcmQod2luZG93LmdldFNlbGVjdGlvbigpLCBjb250YWluZXIsIHNoYWRvd1Jvb3QpO1xuICAgICAgICAvLyDnm5HlkKzpobXpnaLngrnlh7vkuovku7ZcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChNeUJveCAhPT0gdW5kZWZpbmVkICYmIE15Qm94ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c54K55Ye755qE5LiN5piv5o+S5Lu256qX5Y+j5Y+K5YW25a2Q5YWD57Sg77yM5YiZ5YWz6Zet56qX5Y+jXG4gICAgICAgICAgICAgICAgaWYgKE15Qm94ICE9PSBldmVudC50YXJnZXQgJiYgIU15Qm94LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP56qX5Y+jXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lci5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59KTtcbi8vIOaYvuekuuW6lOeUqOeql+WPo1xuZnVuY3Rpb24gc2hvd1BvcHVwQ2FyZChtc2csIE15Qm94LCBzaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjc3NpbmpzXzEuU3R5bGVQcm92aWRlciwgeyBjb250YWluZXI6IHNoYWRvd1Jvb3QgfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cENhcmRfMS5Qb3B1cENhcmQsIHsgc2VsZWN0aW9uOiBtc2cgfSkpKSwgTXlCb3gpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBaktTVVJCVkhnQjdaMVBiQlJWSE1kL1ZmblRLTFJzUUFKTnlnRGVURU1KM0t4Sm00Z1gvK0VGazNxZ1BTbGViRy9seEhLQ2VHbTlRRHkxWER4NGFWRTRjYkFFcnFaRjVhaE1TWlNZa05KR1NEVlY2bngzZDdadnhwbk83dXo3ODl0NTc1TThkbVlXQlB1KzgvdjNmbStHeU9Gd09Cd09oNDEwYlBIZFlERE8xajc5WUt3RVk2bjI2UXZYd2s5SEc1SW1nQXZCS0ZOeitPU0UwbllrQ1dBa0dOT2tEcCtjVU5pUUpJRHZxV3IyVGVPVEU0cHlrZ1N3SVo2Y0craW00Wk83YUhYdGVXVThmTEllakg4cW4rSzExYitla3lGOGNrTEpUYVlBbGk0ZW9hN09GeWlMdWhDY1VOcUtUQUdzZlBFYXljUUpoUmN2a1daZ1RmbzZkMlQrUG9OQzhXb2pDNThLSUJUdEFtZ1VKeFE5c0JWQW96aWh0RWJiQzZCUkNpS1V4ZHE0Rm94NWtvRDJJTEFvTUFobS9XQmNETVlNdFlBVGdHSTBDTVduRm9UZ0JNQ0VMS0dFNTFzd0U0eHhhakpPY0FKb0l5Q0V1NytzMGMzN1QrbnJILzVNK2kxK01JWnFudzNoQk5DbVBGeGVwOHUzbHBPRTRGTVRJbkFDYUhNZ2hIZS8raTN1SG54cVVBVFpSWDRIYTNwTDIrakg4eDZkZTZOYnZPd0ZZellZM1ZsLzNnbWdJRno2WUM5TnZGVVNML1VIWTRFeWFndE9BQVZpNHUwU0RaL1lKVjd5cU5yZjRhWDlHU2VBZ25IcC9YM1V1eWRTNFBXb0tvSkVkK0FFVURCUThyNXlabi84c2hlTXlhVGY3d1JRUUFhT2R0TEFrYzc0NVpIYWlPQUVVRkFtVHBXU0xzTUtSRnlCRTBCQmdSV0l4UUlBa3o4bVhuQUNLRER2dlA1SzB1WFB4Uk1uZ0FLVEVBY0FXSUhCOE1RSm9NRDA5V3hQKytwc2VNQ3FJd2dyWFhkL1hTTkg5ZTZGSDIrRnJwMHZwbjExT2hpak9HQWxnS3QzVjRLbHptZmtRRUZuYitzQ1NOL1BBVGZnQmNObjVRS3czdTJvMG5jd3UzK3hSVHo4d3NvQy9QVDczL1hqL3Y1KzZ1N09YTXdxRlBQejgvWGpycDNLNzAwUHY3QVJRS1VWU3VpTG01NmVyb2pBRmhZWEYrbjQ4ZVAxODk0OTIwZ0hiRnlBZVBjRG15WWZySzZ1MW8vaHV4dlpqeWtETmdJUS9iOXRrdzhlUEhoUVA5WjE5d00rRnVEUnBnV3d6ZmVEcGFXbCtyR3V1eCt3ZEFFMldnRGY5K3ZIVmxvQTBRVjRua2UyRVJXQXZ0aWNwUVU0ZHV3WTJjYkt5dVorRHVzc1FEd0Z0REVHUUJvWTBsdXl6QUxZbmdLS2R6L1FVQVNxdzhZQ2hOZ1lBTjY3ZHk5eXJxRU1YSWVIQlZDY0FsNi9mcDA2T2pxa0RmejNaQ0phQUowcElHRG5BbFJZQUxIR0xvTkRodzZSVE1RTVFPZmREOWk1QUJVcG9CaGd5VUMyU0VVQjZQVC9nTVZpa09vVVVCUUFldWFiWFdlLytmTlRPdi9kNDhxeENndGxxZ2dFakF0QWRRcUl5UmQ5Yk4vQjdVMFhXbFNucUpFYVFFbnZsQmgzQWFwVHdIaU5QWStQVlIyam1MUUF4Z1dnT2dVVUE4QzhBZGJENWMyOTl5cGlsRWdNMEdsWkRLQTZCUlQ5ZjkrQm5BSjRzbDQvTHBmTE5EVTFSYXJJKzIvTWkza0JLRGF2b2dEeU5GbkduK0FGZngydjNNbkV1anFBeWhRd0hnRG1XV1VUemI5cWROY0FBQ3NMSURzRmxCRUFRalJYenJ4S091anFmSkYwWTFRQXFsTkFHUUVnbnNFelhOSWJtZXZFcUFCVXA0Q2kvNGNweDlPME9ETjhZbmZsN1N3Nk1XNEJRbFFIZ05VbmJhNFRaL0I2SHQwWURRSlZwb0R4QUxBZDBKMEJBRFl1UUxZRlFFYUJ6U1djUVpDS3VrS0k3aG9BWU9NQ1pLZUFzQ2dqSXlQRUdiR3ZRT2RtRUJHekxzRHlSdEJJbGRKQURRQVlFNEJyQkRXN0NCUmlUQUMyTjRJQ1Uzc0JSSXhhZ0JBYkp4OVk3UUpzM3dzWVgxU3l6Z0xZdmhmUVpDdTRDQXNYWU9OZVFGTmJ3ZUt3c0FDMnA0QzYrd0JGalB6TjhTWUxWTVJ1Mzc1Tm5JRklaY1lxTWpxVlpHQkdBTEVtQys0Vk83Q3dzQ0ExVmpIWkNTeGl4QVZ3WDVWTFF1VlN0YWtBRUJoeUFac1dBRHRoVE5UQXN4QXJsYkluUDU0QzZ0NE5KR0pFQUdJQTJOZXpnMjU4MGtQY09QL3Q0OHFUUzRIc0xJVkxDZ2lNU0U5TUFmRjhZUHl3dWFHeVRpRStFY3prNUFNV01RRHVORzRQaVZZcEFGTlBCRXZDa0FEKzMycjk4YlZIV1M5SDFrWjhwVkwyZG5BdUtTRFFMb0MwREFBLzlNKysrWU00b0hxbE1ySUtXRExibWEvOWI0L1hBQ1luSjJsOGZMeHlITVlENTk0MHV6Z2t1aVBWbTBGTnh3RDZCU0JZQVB4d3g4YkdLcTFSWVE4LzRvRXcrdWFBN0F3QWs4OWxIUUFZY0FHYkZpQXNyYzdPenJKZEVGSVpBQUpUeThBaFJtT0FjTkloQks0ZHZFV3RBSVlZalFIRXUzNXdjSkEyTmphbzZIQm9BeE14YWdGc2JBU0pMQVB2TWIvbjBHZ00wTlhWUmJZUmZWNlJlUmVnVlFEeEdzRGh3NGZKTnJnMGdvVG9GVUNzQmlDN3dzYWQrUE1LVFZjQmdWWUIyTjRLTHI0WENIQllCdGY2TDdDOUZaelRLbUNJc1JqQXhrNWdjVE1vaHhRUUdJc0JiQk1BOHYrNXVibjZlY3FyM2JWakxBYXdTUUNZL0tHaG9mbzU4bi9kajRKSncxZ01ZRXNHZ01nZmt5OVdBQ2RPbFlnTDJnUmdXdzBBK3h4R1IwY3JyNE9OVHo2WHV4OW9pMFRpTlFEeDBTaEZBcFUrM1BYaXBJZGc4am5kL1VDYkFPS3ZocCtabVNGYlFOdjNsWS8yQjRIZnk4UU5iUUlRL2I4dFlPTHg2RGQwT0hIYyt3QzBDUUNGaitHVHU2bm9JTC9Id1A4dmwyTFBWbWdUQU13ZlJ4Tm9Penp0a2tNYlRnQ1dreVNBOW5xK3FxTWxrZ1FRV2JQa3NsdkhvWVlrQVVTNkZsYlgvaVZIY1VrU3dMeDR3bTNUcGtNdW1SYmc1djFuNUNndWFSYWdIZ2hpbzJTOGpPc29EbWxwNEpmaEFTYWYwMTQ5aDF6U0JEQkZnaFdBQUp3VktDWnBBc0RrUjZ6QTVWdkw1R2d2cnQ3SnR0d2RXM3lIdHQyRllIamhoUnVmOXREQWtlYmZ2dW1RUTFpVHFid0FhM2s5ZGkzOXV4Ukdnekd6bFFBQW12Y1h3aE1zYWQ0WjYyWFQwZHF1U0o3SXZEUWtBREFXak1ud0JBMk5zQVJPQkd3bU1pOGZCbU91RVFHQWNqQXVoQ2V3QkpmZTI4ZXF0NjBWMm53aTg0S21UTDlSQVlBeUNTSUFhUEJBanhzWGEyRHBST2JoSWxYbms1b1JBSWk0Z3hEWlFuQVRxWlQ2NUlObUJRQVNSUURRQWpWd3RKUDZEbXl2dkhRWndGMGdqWFFUcVFYa2ZhdTFUd3kvZHQydm5jOVFiTGsvandCQW1XTHV3Q0dWcklsY1NmbXVhZklLQUpUSmlTQUxiUk9abDFZRUFBYURnY2Q3ZVZSczJFOWtYbG9WQVBDb2FnM09FbjhLTzVGNWtTR0FFSS8wQ2NGTnBDUmtDaUNrT3hpbnFlb2Urb094MVN2QjNFUWFSb1VBa3ZCb00wN3dZNThPaDhQaE1NSi9FT1NDRmdBVzgrSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNvbnRlbnRfc2NyaXB0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9Db250ZW50U2NyaXB0L2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9