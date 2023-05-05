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

/***/ "./src/ContentScript/PopupCard/StatusBar.tsx":
/*!***************************************************!*\
  !*** ./src/ContentScript/PopupCard/StatusBar.tsx ***!
  \***************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBar = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function StatusBar(props) {
    (0, react_1.useEffect)(() => {
    }, []);
    return (react_1.default.createElement("div", null, props.ocrPercent));
}
exports.StatusBar = StatusBar;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupCard = void 0;
const webextension_polyfill_1 = __importDefault(__webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js"));
const tesseract_js_1 = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
const antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
const StatusBar_1 = __webpack_require__(/*! ./StatusBar */ "./src/ContentScript/PopupCard/StatusBar.tsx");
const { Search } = antd_1.Input;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Nav_1 = __webpack_require__(/*! ../../Components/Nav */ "./src/Components/Nav.tsx");
function PopupCard(props) {
    // 窗口拖拽逻辑
    const [dragging, setDragging] = (0, react_1.useState)(false);
    const windowElement = (0, react_1.useRef)(null);
    // 保存 OCR 识别的结果，用于后续的搜索
    const ocrResult = (0, react_1.useRef)([]);
    // 保存搜索结果
    const [searchResult, setSearchResult] = (0, react_1.useState)([]);
    // 保存搜索结果中，当前定位到哪个位置
    const [index, setIndex] = (0, react_1.useState)(0);
    const [searchStatus, setSearchStatus] = (0, react_1.useState)('stanby');
    const [ocrPercent, setOcrPercent] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
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
            // const newX = maxX - 20
            // const newY = props.selection.anchorNode.parentElement.offsetTop + props.selection.anchorNode.parentElement.clientHeight + 20
            // const clampedX = Math.max(minX, Math.min(newX, maxX));
            // const clampedY = Math.max(minY, Math.min(newY, maxY));
            // console.log(props.selection.getRangeAt(0));
            windowElement.current.style.right = '10px';
            windowElement.current.style.top = '10px';
        }
        console.log('chulitupian==========');
        // 记录当前的位置
        const y = window.scrollY; // 或者使用 window.pageYOffset
        // 滚动到页面底部以让图片加载出来
        window.scrollTo(0, document.body.scrollHeight / 3);
        // 回到滚动前的位置
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight / 2);
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight / 1.5);
            }, 1000);
            setTimeout(() => {
                window.scrollTo(0, y);
            }, 2000);
        }, 2000);
        // 获取页面上需要 OCR 的图片
        let imageList = getProductImage();
        if (imageList.length >= 0) {
            // 获取 OCR 结果的历史记录
            getOCRHistory(imageList).then((data) => {
                if (data) {
                    // 当前页面中的图片的 OCR 结果在本地记录中找到了，则直接用历史记录的数据
                    ocrResult.current = data;
                    setOcrPercent(1);
                }
                else {
                    // OCR 图片
                    imageOcr(imageList);
                }
            });
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
    // 搜索完毕后触发
    (0, react_1.useEffect)(() => {
        setSearchStatus('end');
        // 搜索完毕后，定位到第一个搜索结果
        if (searchResult.length > 0) {
            goToImage(searchResult[0]);
        }
    }, [searchResult]);
    const getProductImage = () => {
        var _a, _b;
        // 获取页面上需要 OCR 的图片
        let imageNode = (_a = document.getElementById('J-detail-content')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        let imageList = new Array();
        if (imageNode !== undefined) {
            for (let i = 0; i < (imageNode === null || imageNode === void 0 ? void 0 : imageNode.length); i++) {
                let url = imageNode[i]['currentSrc'].replace('.avif', '');
                if (imageNode[i]['currentSrc'].indexOf('.gif') < 0) {
                }
                else {
                    let linkHeard = '';
                    let lazyload = imageNode[i].getAttribute('data-lazyload');
                    if (lazyload) {
                        if (lazyload.indexOf('http') < 0) {
                            linkHeard = 'https:';
                        }
                    }
                    url = linkHeard + ((_b = imageNode[i].getAttribute('data-lazyload')) === null || _b === void 0 ? void 0 : _b.replace('.avif', ''));
                }
                imageList.push(url);
            }
            if (imageList.length === 0) {
                const content = document.getElementById('J-detail-content');
                const imageDOMList = content === null || content === void 0 ? void 0 : content.getElementsByClassName('ssd-module');
                if (imageDOMList !== undefined) {
                    for (let j = 0; j < imageDOMList.length; j++) {
                        const element = imageDOMList[j];
                        const styles = window.getComputedStyle(element);
                        let backgroundImage = styles.getPropertyValue('background-image');
                        backgroundImage = backgroundImage.replace('url("', '').replace('.avif', '').replace('")', '');
                        imageList.push(backgroundImage);
                    }
                }
            }
        }
        return imageList;
    };
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
    const handleInputOnKeyDown = (event) => {
        console.log('handleInputOnKeyDown');
        // event.preventDefault()
        event.stopPropagation();
    };
    // 通过图片的 URL 获取对应的图片 DOM 链接
    const findNode = (imageUrl) => {
        var _a, _b;
        const imageNode = (_a = document.getElementById('J-detail-content')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('img');
        if (imageNode !== undefined && imageNode.length > 0) {
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
        }
        else {
            // 图片是放置在 div 的 background-image 属性中
            const content = document.getElementById('J-detail-content');
            const imageDOMList = content === null || content === void 0 ? void 0 : content.getElementsByClassName('ssd-module');
            if (imageDOMList !== undefined) {
                for (let j = 0; j < imageDOMList.length; j++) {
                    const element = imageDOMList[j];
                    const styles = window.getComputedStyle(element);
                    let backgroundImage = styles.getPropertyValue('background-image');
                    backgroundImage = backgroundImage.replace('url("', '').replace('.avif', '').replace('")', '');
                    if (backgroundImage.indexOf(imageUrl) >= 0) {
                        return element;
                    }
                }
            }
        }
        return null;
    };
    // 获取指定 DOM 元素在整个页面中的 Y 坐标
    const getElementTop = (elem) => {
        let top = 0;
        while (elem) {
            top += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return top;
    };
    // 获取指定 DOM 元素在整个页面中的 X 坐标
    const getElementLeft = (elem) => {
        let left = 0;
        while (elem) {
            left += elem.offsetLeft;
            elem = elem.offsetParent;
        }
        return left;
    };
    // 根据搜索结果，在页面上渲染 Hightlight，帮助用户找到搜索结果
    const showHightlight = (searchResult) => {
        // 先移除旧的 Hightlight 信息
        removeHightlight().then(() => {
            console.log(searchResult);
            // let hightlightBox = document.createElement('div')
            // hightlightBox.classList.add('hightlightBox')
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
                box.classList.add('hightlightBox');
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
                document.body.appendChild(box);
                console.log(box);
            });
        });
        // document.body.appendChild(hightlightBox);
    };
    // 移除旧的 Hightlight
    const removeHightlight = () => {
        return new Promise((resolve, reject) => {
            var _a;
            let hightlightBox = document.getElementsByClassName('hightlightBox');
            while (hightlightBox.length > 0) {
                (_a = hightlightBox[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(hightlightBox[0]);
            }
            resolve('done');
        });
    };
    // 搜索
    const onSearch = (value) => {
        // 清空旧的搜索结果
        setSearchResult([]);
        let newSearchResult = [];
        console.log(value);
        console.log(ocrResult.current);
        // Search
        for (let i = 0; i < ocrResult.current.length - 1; i++) {
            const image = ocrResult.current[i].image;
            // 遍历识别结果的每个段落
            ocrResult.current[i].lines.forEach((item) => {
                if (item.text.replace(/\s/g, '').indexOf(value) >= 0) {
                    // 返回 text（通常是一整行的文字，图片 URL，这行文字的 bbox）
                    newSearchResult.unshift({ 'text': item.text, 'image': image, 'bbox': item.bbox });
                }
            });
        }
        setIndex(0);
        setSearchResult(newSearchResult);
        setTimeout(() => {
            // 在页面中显示搜索结果
            showHightlight(newSearchResult);
        }, 10);
    };
    const handleNextBtnClick = (offset) => {
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
    // 定位到指定图片
    const goToImage = (target) => {
        const node = findNode(target.image);
        window.scrollTo({ left: 0, top: getElementTop(node) + target.bbox.y0 - 140, behavior: 'smooth' });
        // node?.scrollIntoView({ behavior: 'smooth' });
        // window.scrollBy(0, target.bbox.y0 + 100);
    };
    // 对图片进行 OCR
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
        let newHistory = [];
        for (const promise of promises) {
            const result = yield promise.result;
            // result.data.text = result.data.text.replace(/\s/g, '')
            console.log(promise.image);
            console.log(Math.floor((new Date().getTime() - date1.getTime()) / 1000));
            console.log(result);
            const data = {
                'lines': result,
                'image': promise.image,
            };
            // newIamge.push(data)
            newHistory.push({ 'lines': result.data.lines.map(item => { return { 'bbox': item.bbox, 'text': item.text }; }), 'image': promise.image });
            setOcrPercent(newHistory.length / imageUrlList.length);
            ocrResult.current = newHistory;
        }
        console.log(ocrResult.current);
        // 保存到历史记录中
        // 如果已有此记录则不用重复保存
        getOCRHistory(imageUrlList).then((data) => {
            if (!data) {
                webextension_polyfill_1.default.storage.local.get({ "ocrResult": [] }).then((data) => {
                    console.log(data);
                    let newOcrResult = [newHistory, ...data.ocrResult];
                    console.log(newOcrResult);
                    newOcrResult.splice(20);
                    webextension_polyfill_1.default.storage.local.set({ ocrResult: newOcrResult }).then(() => {
                        console.log('save');
                    });
                });
            }
        });
        yield scheduler.terminate(); // It also terminates all workers.
        let date2 = new Date();
        console.log(Math.floor((date2.getTime() - date1.getTime()) / 1000));
    });
    // 获取 OCR 历史记录
    const getOCRHistory = (imageUrlList) => {
        return new Promise((resolve, reject) => {
            webextension_polyfill_1.default.storage.local.get({ "ocrResult": [] }).then((data) => {
                console.log(data.ocrResult);
                const ocrResult = data.ocrResult;
                // 遍历每一条历史记录
                for (let i = 0; i < ocrResult.length; i++) {
                    const historyImage = ocrResult[i].map((item) => item.image);
                    if (JSON.stringify(imageUrlList) === JSON.stringify(historyImage)) {
                        resolve(ocrResult[i]);
                        break;
                    }
                }
                resolve(null);
            });
        });
    };
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
            react_1.default.createElement(Search, { placeholder: "input search text", onSearch: onSearch, onKeyUp: handleInputOnKeyDown, style: { width: 200 } }),
            searchStatus === 'stanby' ? '' : searchResult.length === 0 ? '0/0' : index + 1 + '/' + searchResult.length,
            react_1.default.createElement("button", { onClick: handleNextBtnClick.bind(event, -1) }, "pre"),
            react_1.default.createElement("button", { onClick: handleNextBtnClick.bind(event, 1) }, "next")),
        react_1.default.createElement(StatusBar_1.StatusBar, { ocrPercent: ocrPercent })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvQ29tcG9uZW50cy9OYXYudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbnRlbnRTY3JpcHQvUG9wdXBDYXJkL1N0YXR1c0Jhci50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvQ29udGVudFNjcmlwdC9Qb3B1cENhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbnRlbnRTY3JpcHQvaW5kZXgudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2Fzc2V0cy9pY29uMTI4LnBuZyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTmF2ID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgaWNvbjEyOF9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2ljb24xMjgucG5nXCIpKTtcbmZ1bmN0aW9uIE5hdihwcm9wcykge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiU2NvdXRlck5hdlwiLCBzdHlsZToge1xuICAgICAgICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIHRvcDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTlcbiAgICAgICAgfSwgb25Nb3VzZURvd246IHByb3BzLm9uTW91c2VEb3duIH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpY29uMTI4X3BuZ18xLmRlZmF1bHQgfSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJpZ2h0QnRuQm94XCIsIHN0eWxlOiB7IGZsZXg6IDEsIHRleHRBbGlnbjogJ3JpZ2h0JyB9IH0pKSk7XG59XG5leHBvcnRzLk5hdiA9IE5hdjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0YXR1c0JhciA9IHZvaWQgMDtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmZ1bmN0aW9uIFN0YXR1c0Jhcihwcm9wcykge1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHByb3BzLm9jclBlcmNlbnQpKTtcbn1cbmV4cG9ydHMuU3RhdHVzQmFyID0gU3RhdHVzQmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3B1cENhcmQgPSB2b2lkIDA7XG5jb25zdCB3ZWJleHRlbnNpb25fcG9seWZpbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpKTtcbmNvbnN0IHRlc3NlcmFjdF9qc18xID0gcmVxdWlyZShcInRlc3NlcmFjdC5qc1wiKTtcbmNvbnN0IGFudGRfMSA9IHJlcXVpcmUoXCJhbnRkXCIpO1xuY29uc3QgU3RhdHVzQmFyXzEgPSByZXF1aXJlKFwiLi9TdGF0dXNCYXJcIik7XG5jb25zdCB7IFNlYXJjaCB9ID0gYW50ZF8xLklucHV0O1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgTmF2XzEgPSByZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9OYXZcIik7XG5mdW5jdGlvbiBQb3B1cENhcmQocHJvcHMpIHtcbiAgICAvLyDnqpflj6Pmi5bmi73pgLvovpFcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3Qgd2luZG93RWxlbWVudCA9ICgwLCByZWFjdF8xLnVzZVJlZikobnVsbCk7XG4gICAgLy8g5L+d5a2YIE9DUiDor4bliKvnmoTnu5PmnpzvvIznlKjkuo7lkI7nu63nmoTmkJzntKJcbiAgICBjb25zdCBvY3JSZXN1bHQgPSAoMCwgcmVhY3RfMS51c2VSZWYpKFtdKTtcbiAgICAvLyDkv53lrZjmkJzntKLnu5PmnpxcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0LCBzZXRTZWFyY2hSZXN1bHRdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICAvLyDkv53lrZjmkJzntKLnu5PmnpzkuK3vvIzlvZPliY3lrprkvY3liLDlk6rkuKrkvY3nva5cbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgwKTtcbiAgICBjb25zdCBbc2VhcmNoU3RhdHVzLCBzZXRTZWFyY2hTdGF0dXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCdzdGFuYnknKTtcbiAgICBjb25zdCBbb2NyUGVyY2VudCwgc2V0T2NyUGVyY2VudF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMCk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIC8vIOiuvue9rueql+WPo+eahOm7mOiupOS9jee9rlxuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgLy8gY29uc3QgbmV3WCA9IG1heFggLSAyMFxuICAgICAgICAgICAgLy8gY29uc3QgbmV3WSA9IHByb3BzLnNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wICsgcHJvcHMuc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAyMFxuICAgICAgICAgICAgLy8gY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICAvLyBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGlvbi5nZXRSYW5nZUF0KDApKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5yaWdodCA9ICcxMHB4JztcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSAnMTBweCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NodWxpdHVwaWFuPT09PT09PT09PScpO1xuICAgICAgICAvLyDorrDlvZXlvZPliY3nmoTkvY3nva5cbiAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDmiJbogIXkvb/nlKggd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgIC8vIOa7muWKqOWIsOmhtemdouW6lemDqOS7peiuqeWbvueJh+WKoOi9veWHuuadpVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAzKTtcbiAgICAgICAgLy8g5Zue5Yiw5rua5Yqo5YmN55qE5L2N572uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAxLjUpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgeSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIC8vIOiOt+WPlumhtemdouS4iumcgOimgSBPQ1Ig55qE5Zu+54mHXG4gICAgICAgIGxldCBpbWFnZUxpc3QgPSBnZXRQcm9kdWN0SW1hZ2UoKTtcbiAgICAgICAgaWYgKGltYWdlTGlzdC5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgLy8g6I635Y+WIE9DUiDnu5PmnpznmoTljoblj7LorrDlvZVcbiAgICAgICAgICAgIGdldE9DUkhpc3RvcnkoaW1hZ2VMaXN0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN6aG16Z2i5Lit55qE5Zu+54mH55qEIE9DUiDnu5PmnpzlnKjmnKzlnLDorrDlvZXkuK3mib7liLDkuobvvIzliJnnm7TmjqXnlKjljoblj7LorrDlvZXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgb2NyUmVzdWx0LmN1cnJlbnQgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBzZXRPY3JQZXJjZW50KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT0NSIOWbvueJh1xuICAgICAgICAgICAgICAgICAgICBpbWFnZU9jcihpbWFnZUxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzXSk7XG4gICAgLy8g56qX5Y+j5ouW5ou95pe26Kem5Y+RXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QgcmV0dXJuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgIH0sIFtkcmFnZ2luZ10pO1xuICAgIC8vIOaQnOe0ouWujOavleWQjuinpuWPkVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hTdGF0dXMoJ2VuZCcpO1xuICAgICAgICAvLyDmkJzntKLlrozmr5XlkI7vvIzlrprkvY3liLDnrKzkuIDkuKrmkJzntKLnu5PmnpxcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBnb1RvSW1hZ2Uoc2VhcmNoUmVzdWx0WzBdKTtcbiAgICAgICAgfVxuICAgIH0sIFtzZWFyY2hSZXN1bHRdKTtcbiAgICBjb25zdCBnZXRQcm9kdWN0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIOiOt+WPlumhtemdouS4iumcgOimgSBPQ1Ig55qE5Zu+54mHXG4gICAgICAgIGxldCBpbWFnZU5vZGUgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBsZXQgaW1hZ2VMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGlmIChpbWFnZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoaW1hZ2VOb2RlID09PSBudWxsIHx8IGltYWdlTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW1hZ2VOb2RlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBpbWFnZU5vZGVbaV1bJ2N1cnJlbnRTcmMnXS5yZXBsYWNlKCcuYXZpZicsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VOb2RlW2ldWydjdXJyZW50U3JjJ10uaW5kZXhPZignLmdpZicpIDwgMCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmtIZWFyZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGF6eWxvYWQgPSBpbWFnZU5vZGVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWxhenlsb2FkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXp5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhenlsb2FkLmluZGV4T2YoJ2h0dHAnKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rSGVhcmQgPSAnaHR0cHM6JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBsaW5rSGVhcmQgKyAoKF9iID0gaW1hZ2VOb2RlW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5bG9hZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgnLmF2aWYnLCAnJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWFnZUxpc3QucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGltYWdlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0otZGV0YWlsLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURPTUxpc3QgPSBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3NkLW1vZHVsZScpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZURPTUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltYWdlRE9NTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGltYWdlRE9NTGlzdFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhY2tncm91bmRJbWFnZSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2UucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJy5hdmlmJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGlzdC5wdXNoKGJhY2tncm91bmRJbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlTGlzdDtcbiAgICB9O1xuICAgIC8vIOS6jOWAvOWMluWHveaVsFxuICAgIGZ1bmN0aW9uIGJpbmFyaXplSW1hZ2UoaW1hZ2VEYXRhLCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgY29uc3QgZ3JheSA9IChpbWFnZURhdGEuZGF0YVtpXSArIGltYWdlRGF0YS5kYXRhW2kgKyAxXSArIGltYWdlRGF0YS5kYXRhW2kgKyAyXSkgLyAzO1xuICAgICAgICAgICAgY29uc3QgYmluYXJ5ID0gZ3JheSA8IHRocmVzaG9sZCA/IDAgOiAyNTU7XG4gICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpXSA9IGJpbmFyeTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSA9IGJpbmFyeTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAyXSA9IGJpbmFyeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VEYXRhO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVJbnB1dE9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlSW5wdXRPbktleURvd24nKTtcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIC8vIOmAmui/h+WbvueJh+eahCBVUkwg6I635Y+W5a+55bqU55qE5Zu+54mHIERPTSDpk77mjqVcbiAgICBjb25zdCBmaW5kTm9kZSA9IChpbWFnZVVybCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBpbWFnZU5vZGUgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBpZiAoaW1hZ2VOb2RlICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNVcmwgPSBpbWFnZU5vZGVbaV0uY3VycmVudFNyYztcbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKCcuZ2lmJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVXJsID0gJ2h0dHBzOicgKyAoKF9iID0gaW1hZ2VOb2RlW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5bG9hZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgnLmF2aWYnLCAnJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKGltYWdlVXJsKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlTm9kZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZU5vZGVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5Zu+54mH5piv5pS+572u5ZyoIGRpdiDnmoQgYmFja2dyb3VuZC1pbWFnZSDlsZ7mgKfkuK1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VET01MaXN0ID0gY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NzZC1tb2R1bGUnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZURPTUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VET01MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbWFnZURPTUxpc3Rbal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCcuYXZpZicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UuaW5kZXhPZihpbWFnZVVybCkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICAvLyDojrflj5bmjIflrpogRE9NIOWFg+e0oOWcqOaVtOS4qumhtemdouS4reeahCBZIOWdkOagh1xuICAgIGNvbnN0IGdldEVsZW1lbnRUb3AgPSAoZWxlbSkgPT4ge1xuICAgICAgICBsZXQgdG9wID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIHRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wO1xuICAgIH07XG4gICAgLy8g6I635Y+W5oyH5a6aIERPTSDlhYPntKDlnKjmlbTkuKrpobXpnaLkuK3nmoQgWCDlnZDmoIdcbiAgICBjb25zdCBnZXRFbGVtZW50TGVmdCA9IChlbGVtKSA9PiB7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIGxlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH07XG4gICAgLy8g5qC55o2u5pCc57Si57uT5p6c77yM5Zyo6aG16Z2i5LiK5riy5p+TIEhpZ2h0bGlnaHTvvIzluK7liqnnlKjmiLfmib7liLDmkJzntKLnu5PmnpxcbiAgICBjb25zdCBzaG93SGlnaHRsaWdodCA9IChzZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgLy8g5YWI56e76Zmk5pen55qEIEhpZ2h0bGlnaHQg5L+h5oGvXG4gICAgICAgIHJlbW92ZUhpZ2h0bGlnaHQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdCk7XG4gICAgICAgICAgICAvLyBsZXQgaGlnaHRsaWdodEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAvLyBoaWdodGxpZ2h0Qm94LmNsYXNzTGlzdC5hZGQoJ2hpZ2h0bGlnaHRCb3gnKVxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5Zu+54mH6IqC54K5XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSBpdGVtLmJib3gueDEgLSBpdGVtLmJib3gueDAgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5oZWlnaHQgPSBpdGVtLmJib3gueTEgLSBpdGVtLmJib3gueTAgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGlnaHRsaWdodEJveCcpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS50b3AgPSBNYXRoLmFicyhnZXRFbGVtZW50VG9wKG5vZGUpICsgaXRlbS5iYm94LnkwKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5sZWZ0ID0gTWF0aC5hYnMoZ2V0RWxlbWVudExlZnQobm9kZSkgKyBpdGVtLmJib3gueDApICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm94KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coTWF0aC5hYnMoZ2V0RWxlbWVudFRvcChub2RlKSArIGl0ZW0uYmJveC55MCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0RWxlbWVudFRvcChub2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uYmJveCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZ2h0bGlnaHRCb3gpO1xuICAgIH07XG4gICAgLy8g56e76Zmk5pen55qEIEhpZ2h0bGlnaHRcbiAgICBjb25zdCByZW1vdmVIaWdodGxpZ2h0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGhpZ2h0bGlnaHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdodGxpZ2h0Qm94Jyk7XG4gICAgICAgICAgICB3aGlsZSAoaGlnaHRsaWdodEJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gaGlnaHRsaWdodEJveFswXS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoaGlnaHRsaWdodEJveFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCdkb25lJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g5pCc57SiXG4gICAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8g5riF56m65pen55qE5pCc57Si57uT5p6cXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdChbXSk7XG4gICAgICAgIGxldCBuZXdTZWFyY2hSZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhvY3JSZXN1bHQuY3VycmVudCk7XG4gICAgICAgIC8vIFNlYXJjaFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9jclJlc3VsdC5jdXJyZW50Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBvY3JSZXN1bHQuY3VycmVudFtpXS5pbWFnZTtcbiAgICAgICAgICAgIC8vIOmBjeWOhuivhuWIq+e7k+aenOeahOavj+S4quauteiQvVxuICAgICAgICAgICAgb2NyUmVzdWx0LmN1cnJlbnRbaV0ubGluZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRleHQucmVwbGFjZSgvXFxzL2csICcnKS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi/lOWbniB0ZXh077yI6YCa5bi45piv5LiA5pW06KGM55qE5paH5a2X77yM5Zu+54mHIFVSTO+8jOi/meihjOaWh+Wtl+eahCBiYm9477yJXG4gICAgICAgICAgICAgICAgICAgIG5ld1NlYXJjaFJlc3VsdC51bnNoaWZ0KHsgJ3RleHQnOiBpdGVtLnRleHQsICdpbWFnZSc6IGltYWdlLCAnYmJveCc6IGl0ZW0uYmJveCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJbmRleCgwKTtcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0KG5ld1NlYXJjaFJlc3VsdCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8g5Zyo6aG16Z2i5Lit5pi+56S65pCc57Si57uT5p6cXG4gICAgICAgICAgICBzaG93SGlnaHRsaWdodChuZXdTZWFyY2hSZXN1bHQpO1xuICAgICAgICB9LCAxMCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVOZXh0QnRuQ2xpY2sgPSAob2Zmc2V0KSA9PiB7XG4gICAgICAgIGxldCBwb3N0aW9uID0gaW5kZXggKyBvZmZzZXQ7XG4gICAgICAgIGlmIChwb3N0aW9uID49IHNlYXJjaFJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc3Rpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3N0aW9uIDwgMCkge1xuICAgICAgICAgICAgcG9zdGlvbiA9IHNlYXJjaFJlc3VsdC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGdvVG9JbWFnZShzZWFyY2hSZXN1bHRbcG9zdGlvbl0pO1xuICAgICAgICBzZXRJbmRleChwb3N0aW9uKTtcbiAgICB9O1xuICAgIC8vIOWumuS9jeWIsOaMh+WumuWbvueJh1xuICAgIGNvbnN0IGdvVG9JbWFnZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKHRhcmdldC5pbWFnZSk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IGxlZnQ6IDAsIHRvcDogZ2V0RWxlbWVudFRvcChub2RlKSArIHRhcmdldC5iYm94LnkwIC0gMTQwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIC8vIG5vZGU/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAvLyB3aW5kb3cuc2Nyb2xsQnkoMCwgdGFyZ2V0LmJib3gueTAgKyAxMDApO1xuICAgIH07XG4gICAgLy8g5a+55Zu+54mH6L+b6KGMIE9DUlxuICAgIGNvbnN0IGltYWdlT2NyID0gKGltYWdlVXJsTGlzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBUZXNzZXJhY3QucmVjb2duaXplKFxuICAgICAgICAvLyAgIGltYWdlVXJsLFxuICAgICAgICAvLyAgICdjaGlfc2ltJyxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICBsb2dnZXI6IG0gPT4ge1xuICAgICAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhtKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICkudGhlbigoeyBkYXRhOiB7IHRleHQgfSB9KSA9PiB7XG4gICAgICAgIC8vICAgcmVzb2x2ZSh0ZXh0KVxuICAgICAgICAvLyB9KVxuICAgICAgICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSAoMCwgdGVzc2VyYWN0X2pzXzEuY3JlYXRlU2NoZWR1bGVyKSgpO1xuICAgICAgICBjb25zdCB3b3JrZXIgPSB5aWVsZCAoMCwgdGVzc2VyYWN0X2pzXzEuY3JlYXRlV29ya2VyKSgpO1xuICAgICAgICBjb25zdCB3b3JrZXIyID0geWllbGQgKDAsIHRlc3NlcmFjdF9qc18xLmNyZWF0ZVdvcmtlcikoKTtcbiAgICAgICAgY29uc3Qgd29ya2VyMyA9IHlpZWxkICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVXb3JrZXIpKCk7XG4gICAgICAgIC8vIGNvbnN0IHdvcmtlcjQgPSBhd2FpdCBjcmVhdGVXb3JrZXIoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNSA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI2ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIC8vIGNvbnN0IHdvcmtlcjcgPSBhd2FpdCBjcmVhdGVXb3JrZXIoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyOCA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICB5aWVsZCB3b3JrZXIubG9hZExhbmd1YWdlKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlci5pbml0aWFsaXplKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjIubG9hZExhbmd1YWdlKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjIuaW5pdGlhbGl6ZSgnY2hpX3NpbScpO1xuICAgICAgICB5aWVsZCB3b3JrZXIzLmxvYWRMYW5ndWFnZSgnY2hpX3NpbScpO1xuICAgICAgICB5aWVsZCB3b3JrZXIzLmluaXRpYWxpemUoJ2NoaV9zaW0nKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNC5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0rZW5nJyk7XG4gICAgICAgIC8vIGF3YWl0IHdvcmtlcjQuaW5pdGlhbGl6ZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNS5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0rZW5nJyk7XG4gICAgICAgIC8vIGF3YWl0IHdvcmtlcjUuaW5pdGlhbGl6ZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNi5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0rZW5nJyk7XG4gICAgICAgIC8vIGF3YWl0IHdvcmtlcjYuaW5pdGlhbGl6ZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNy5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0rZW5nJyk7XG4gICAgICAgIC8vIGF3YWl0IHdvcmtlcjcuaW5pdGlhbGl6ZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyOC5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0rZW5nJyk7XG4gICAgICAgIC8vIGF3YWl0IHdvcmtlcjguaW5pdGlhbGl6ZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgc2NoZWR1bGVyLmFkZFdvcmtlcih3b3JrZXIpO1xuICAgICAgICBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjIpO1xuICAgICAgICBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjMpO1xuICAgICAgICAvLyBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjQpO1xuICAgICAgICAvLyBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjUpO1xuICAgICAgICAvLyBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjYpO1xuICAgICAgICAvLyBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjcpO1xuICAgICAgICAvLyBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcjgpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGltYWdlVXJsTGlzdC5tYXAoKGltYWdlVXJsKSA9PiAoe1xuICAgICAgICAgICAgJ3Jlc3VsdCc6IHNjaGVkdWxlci5hZGRKb2IoJ3JlY29nbml6ZScsIGltYWdlVXJsLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBibG9ja3M6IHRydWUsXG4gICAgICAgICAgICAgICAgaG9jcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHN2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib3g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVubHY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9zZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGRmOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZUdyZXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlQmluYXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgJ2ltYWdlJzogaW1hZ2VVcmxcbiAgICAgICAgfSkpO1xuICAgICAgICBsZXQgbmV3SWFtZ2UgPSBbXTtcbiAgICAgICAgbGV0IG5ld0hpc3RvcnkgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBwcm9taXNlLnJlc3VsdDtcbiAgICAgICAgICAgIC8vIHJlc3VsdC5kYXRhLnRleHQgPSByZXN1bHQuZGF0YS50ZXh0LnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb21pc2UuaW1hZ2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCkpIC8gMTAwMCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ2xpbmVzJzogcmVzdWx0LFxuICAgICAgICAgICAgICAgICdpbWFnZSc6IHByb21pc2UuaW1hZ2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gbmV3SWFtZ2UucHVzaChkYXRhKVxuICAgICAgICAgICAgbmV3SGlzdG9yeS5wdXNoKHsgJ2xpbmVzJzogcmVzdWx0LmRhdGEubGluZXMubWFwKGl0ZW0gPT4geyByZXR1cm4geyAnYmJveCc6IGl0ZW0uYmJveCwgJ3RleHQnOiBpdGVtLnRleHQgfTsgfSksICdpbWFnZSc6IHByb21pc2UuaW1hZ2UgfSk7XG4gICAgICAgICAgICBzZXRPY3JQZXJjZW50KG5ld0hpc3RvcnkubGVuZ3RoIC8gaW1hZ2VVcmxMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICBvY3JSZXN1bHQuY3VycmVudCA9IG5ld0hpc3Rvcnk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cob2NyUmVzdWx0LmN1cnJlbnQpO1xuICAgICAgICAvLyDkv53lrZjliLDljoblj7LorrDlvZXkuK1cbiAgICAgICAgLy8g5aaC5p6c5bey5pyJ5q2k6K6w5b2V5YiZ5LiN55So6YeN5aSN5L+d5a2YXG4gICAgICAgIGdldE9DUkhpc3RvcnkoaW1hZ2VVcmxMaXN0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICB3ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnN0b3JhZ2UubG9jYWwuZ2V0KHsgXCJvY3JSZXN1bHRcIjogW10gfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld09jclJlc3VsdCA9IFtuZXdIaXN0b3J5LCAuLi5kYXRhLm9jclJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld09jclJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld09jclJlc3VsdC5zcGxpY2UoMjApO1xuICAgICAgICAgICAgICAgICAgICB3ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnN0b3JhZ2UubG9jYWwuc2V0KHsgb2NyUmVzdWx0OiBuZXdPY3JSZXN1bHQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIHNjaGVkdWxlci50ZXJtaW5hdGUoKTsgLy8gSXQgYWxzbyB0ZXJtaW5hdGVzIGFsbCB3b3JrZXJzLlxuICAgICAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCkpIC8gMTAwMCkpO1xuICAgIH0pO1xuICAgIC8vIOiOt+WPliBPQ1Ig5Y6G5Y+y6K6w5b2VXG4gICAgY29uc3QgZ2V0T0NSSGlzdG9yeSA9IChpbWFnZVVybExpc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xLmRlZmF1bHQuc3RvcmFnZS5sb2NhbC5nZXQoeyBcIm9jclJlc3VsdFwiOiBbXSB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vY3JSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9jclJlc3VsdCA9IGRhdGEub2NyUmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIOmBjeWOhuavj+S4gOadoeWOhuWPsuiusOW9lVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2NyUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpc3RvcnlJbWFnZSA9IG9jclJlc3VsdFtpXS5tYXAoKGl0ZW0pID0+IGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaW1hZ2VVcmxMaXN0KSA9PT0gSlNPTi5zdHJpbmdpZnkoaGlzdG9yeUltYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvY3JSZXN1bHRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe8qeaUvuWbvueJh1xuICAgIGNvbnN0IHNjYWxlSW1hZ2UgPSAoaW1hZ2VVcmwsIHNjYWxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNjYWxlKTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnOyAvLyDmt7vliqAgY3Jvc3NPcmlnaW4g5bGe5oCnXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgY3R4ID09PSBudWxsIHx8IGN0eCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7IC8vIHF1YWxpdHkg5Y+v5Lul6K6+572u5Zu+54mH5Y6L57yp6LSo6YePXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDljrvlmarngrlcbiAgICBjb25zdCBkZW5vaXNlSW1hZ2UgPSAoaW1hZ2VVcmwsIHJhZGl1cykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7IC8vIOa3u+WKoCBjcm9zc09yaWdpbiDlsZ7mgKdcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwaXhlbHMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gcmFkaXVzICogMjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBkYXRhW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBkYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gZGF0YVtpICsgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmF5ID0gKHIgKyBnICsgYikgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHIgLSBncmF5KSA+IHRocmVzaG9sZCB8fCBNYXRoLmFicyhnIC0gZ3JheSkgPiB0aHJlc2hvbGQgfHwgTWF0aC5hYnMoYiAtIGdyYXkpID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSArIDFdID0gZGF0YVtpICsgMl0gPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShwaXhlbHMsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZW5vaXNlZEltYWdlVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIDEpOyAvLyBxdWFsaXR5IOWPr+S7peiuvue9ruWbvueJh+WOi+e8qei0qOmHj1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlbm9pc2VkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VEb3duJyk7XG4gICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFkgPSBTdHJpbmcob2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0T2Zmc2V0KHsgeDogZXZlbnQuY2xpZW50WCAtIHBvc2l0aW9uLngsIHk6IGV2ZW50LmNsaWVudFkgLSBwb3NpdGlvbi55IH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VNb3ZlJyk7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGRyYWdnaW5nKTtcbiAgICAgICAgaWYgKGRyYWdnaW5nICYmIHdpbmRvd0VsZW1lbnQuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB0aHJvdHRsZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgICAgICAvLyDpvKDmoIfnm7jlr7nnqpflj6Plt6bkuIrop5LnmoTlgY/np7tcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBwYXJzZUZsb2F0KHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFggfHwgJycpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHBhcnNlRmxvYXQod2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WSB8fCAnJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gZXZlbnQuY2xpZW50WCAtIG9mZnNldFg7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gZXZlbnQuY2xpZW50WSAtIG9mZnNldFk7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBpZiBpdCdzIHdpdGhpbiB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgLy8gbmV3WCA+PSBtaW5YICYmIG5ld1ggPD0gbWF4WCAmJiBuZXdZID49IG1pblkgJiYgbmV3WSA8PSBtYXhZXG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHNldFBvc2l0aW9uKHsgeDogY2xhbXBlZFgsIHk6IGNsYW1wZWRZIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7Y2xhbXBlZFh9cHhgO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSBgJHtjbGFtcGVkWX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlhYPntKDliLDovr7ovrnnlYxcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dFbGVtZW50LmN1cnJlbnQuZGF0YXNldC5vZmZzZXRZID0gU3RyaW5nKG9mZnNldFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnUG9wdXBDYXJkOmhhbmRsZU1vdXNlVXAnKTtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcIkxlYXJuaW5nRW5nbGlzaDIwMjNcIiwgcmVmOiB3aW5kb3dFbGVtZW50IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5hdl8xLk5hdiwgeyBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NvbnRlbnRCb3gnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2gsIHsgcGxhY2Vob2xkZXI6IFwiaW5wdXQgc2VhcmNoIHRleHRcIiwgb25TZWFyY2g6IG9uU2VhcmNoLCBvbktleVVwOiBoYW5kbGVJbnB1dE9uS2V5RG93biwgc3R5bGU6IHsgd2lkdGg6IDIwMCB9IH0pLFxuICAgICAgICAgICAgc2VhcmNoU3RhdHVzID09PSAnc3RhbmJ5JyA/ICcnIDogc2VhcmNoUmVzdWx0Lmxlbmd0aCA9PT0gMCA/ICcwLzAnIDogaW5kZXggKyAxICsgJy8nICsgc2VhcmNoUmVzdWx0Lmxlbmd0aCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlTmV4dEJ0bkNsaWNrLmJpbmQoZXZlbnQsIC0xKSB9LCBcInByZVwiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlTmV4dEJ0bkNsaWNrLmJpbmQoZXZlbnQsIDEpIH0sIFwibmV4dFwiKSksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN0YXR1c0Jhcl8xLlN0YXR1c0JhciwgeyBvY3JQZXJjZW50OiBvY3JQZXJjZW50IH0pKSk7XG59XG5leHBvcnRzLlBvcHVwQ2FyZCA9IFBvcHVwQ2FyZDtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB3ZWJleHRlbnNpb25fcG9seWZpbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpKTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0X2RvbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuY29uc3QgUG9wdXBDYXJkXzEgPSByZXF1aXJlKFwiLi9Qb3B1cENhcmRcIik7XG5jb25zdCBjc3NpbmpzXzEgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY3NzaW5qc1wiKTtcbmNvbnN0IEFQUF9OQU1FID0gJ19famlhbmctc2hvcHBpbmcnO1xuLy8g5Yid5aeL5YyW5Li75a655Zmo77yM5Li75a655Zmo55So5p2l5oyC5Zyo5YWo5bGA5qC35byP77yM5YyF5ous56ys5LiJ5pa557uE5Lu255qE5qC35byPXG5sZXQgTXlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChBUFBfTkFNRSk7XG4vLyBjb250YWluZXIg5om/6L29IFVJIOe7hOS7tlxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8g5L2/55SoIHNoYWRvdyDmnaXpmpTnprvmoLflvI9cbmxldCBzaGFkb3dSb290ID0gdW5kZWZpbmVkO1xuaWYgKE15Qm94ICE9PSBudWxsICYmIE15Qm94ICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyDlpoLmnpzlt7LlrZjlnKjlrrnlmahcbiAgICAvLyBjb25zb2xlLmxvZygn5bey5a2Y5ZyoIEJveCDlrrnlmagnKTtcbiAgICAvLyDnp7vpmaTml6flrrnlmajvvIzpgb/lhY3lh7rnjrAgMiDkuKrkuLvlrrnlmajkvJrlr7zoh7QgVUkg5riy5p+T6ZSZ6K+vXG4gICAgKF9hID0gTXlCb3gucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKE15Qm94KTtcbn1cbi8vIOWIm+W7uuS4u+WuueWZqFxuTXlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbk15Qm94LmlkID0gQVBQX05BTUU7XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmFwcGVuZENoaWxkKE15Qm94KTtcbk15Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8v6buY6K6k6ZqQ6JePXG5zaGFkb3dSb290ID0gTXlCb3ggPT09IG51bGwgfHwgTXlCb3ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IE15Qm94LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbmNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbnNoYWRvd1Jvb3QgPT09IG51bGwgfHwgc2hhZG93Um9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuLy8g5ZyoIFNoYWRvdyBET00g5Lit5re75Yqg5qC35byP77yaXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgI0xlYXJuaW5nRW5nbGlzaDIwMjMge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxMy40cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTFweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmhpZ2h0bGlnaHRCb3h7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gIFxuICAgIH1cblxuICAgICNMZWFybmluZ0VuZ2xpc2gyMDIzICNTY291dGVyTmF2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTlweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUsIDUsIDUsIC4wNik7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgICNMZWFybmluZ0VuZ2xpc2gyMDIzICNTY291dGVyTmF2IGltZyB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgfVxuXG4gIGA7XG5zaGFkb3dSb290ID09PSBudWxsIHx8IHNoYWRvd1Jvb3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuLy8g5o6l5pS2IGJhY2tncm91bmQg5raI5oGv77yI55uu5YmN5piv6YCa6L+H5rWP6KeI5Zmo55qE5Y+z6ZSu6I+c5Y2V6Kem5Y+R77yJXG53ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IHNjcmlwdCBvbk1lc3NhZ2U6Jyk7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdvcGVuUG9wdXBDYXJkJykge1xuICAgICAgICAvLyDlpITnkIbnqpflj6NcbiAgICAgICAgaWYgKE15Qm94ICE9PSBudWxsICYmIE15Qm94ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOW3suWtmOWcqOWuueWZqFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W3suWtmOWcqCBCb3gg5a655ZmoJyk7XG4gICAgICAgICAgICBNeUJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIC8vIOenu+mZpOaXp+WGheWuue+8jOmBv+WFjSAyIOasoea4suafk+a3t+adguWcqOS4gOi1t1xuICAgICAgICAgICAgKF9hID0gY29udGFpbmVyLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S4jeWtmOWcqCBCb3gg5a655ZmoJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICAgICAgc2hhZG93Um9vdCA9PT0gbnVsbCB8fCBzaGFkb3dSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIC8vIOaYvuekuueql+WPo++8jHdpbmRvdy5nZXRTZWxlY3Rpb24oKSDmmK/lvZPliY3pvKDmoIfpgInkuK3nmoTljLrln5/kv6Hmga9cbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmdldFNlbGVjdGlvbigpKTtcbiAgICAgICAgc2hvd1BvcHVwQ2FyZCh3aW5kb3cuZ2V0U2VsZWN0aW9uKCksIGNvbnRhaW5lciwgc2hhZG93Um9vdCk7XG4gICAgICAgIC8vIOebkeWQrOmhtemdoueCueWHu+S6i+S7tlxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKE15Qm94ICE9PSB1bmRlZmluZWQgJiYgTXlCb3ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTkuI3mmK/mj5Lku7bnqpflj6Plj4rlhbblrZDlhYPntKDvvIzliJnlhbPpl63nqpflj6NcbiAgICAgICAgICAgICAgICBpZiAoTXlCb3ggIT09IGV2ZW50LnRhcmdldCAmJiAhTXlCb3guY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDpmpDol4/nqpflj6NcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbmVyLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuLy8g5pi+56S65bqU55So56qX5Y+jXG5mdW5jdGlvbiBzaG93UG9wdXBDYXJkKG1zZywgTXlCb3gsIHNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZWFjdF9kb21fMS5kZWZhdWx0LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuU3RyaWN0TW9kZSwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGNzc2luanNfMS5TdHlsZVByb3ZpZGVyLCB7IGNvbnRhaW5lcjogc2hhZG93Um9vdCB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwQ2FyZF8xLlBvcHVwQ2FyZCwgeyBzZWxlY3Rpb246IG1zZyB9KSkpLCBNeUJveCk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFqS1NVUkJWSGdCN1oxUGJCUlZITWQvVmZuVEtMUnNRQUpOeWdEZVRFTUozS3hKbTRnWC8rRUZrM3FnUFNsZWJHL2x4SEtDZUdtOVFEeTFYRHg0YVZFNGNiQUVycVpGNWFoTVNaU1lrTkpHU0RWVjZueDNkN1p2eHBuTzd1ejc4OXQ1NzVNOGRtWVdCUHUrOC92M2ZtK0d5T0Z3T0J3T2g0MTBiUEhkWURETzFqNzlZS3dFWTZuMjZRdlh3azlIRzVJbWdBdkJLRk56K09TRTBuWWtDV0FrR05Pa0RwK2NVTmlRSklEdnFXcjJUZU9URTRweWtnU3dJWjZjRytpbTRaTzdhSFh0ZVdVOGZMSWVqSDhxbitLMTFiK2VreUY4Y2tMSlRhWUFsaTRlb2E3T0Z5aUx1aENjVU5xS1RBR3NmUEVheWNRSmhSY3ZrV1pnVGZvNmQyVCtQb05DOFdvakM1OEtJQlR0QW1nVUp4UTlzQlZBb3ppaHRFYmJDNkJSQ2lLVXhkcTRGb3g1a29EMklMQW9NQWhtL1dCY0RNWU10WUFUZ0dJMENNV25Gb1RnQk1DRUxLR0U1MXN3RTR4eGFqSk9jQUpvSXlDRXU3K3MwYzM3VCtuckgvNU0raTErTUlacW53M2hCTkNtUEZ4ZXA4dTNscE9FNEZNVEluQUNhSE1naEhlLytpM3VIbnhxVUFUWlJYNEhhM3BMMitqSDh4NmRlNk5idk93Rll6WVkzVmwvM2dtZ0lGejZZQzlOdkZVU0wvVUhZNEV5YWd0T0FBVmk0dTBTRFovWUpWN3lxTnJmNGFYOUdTZUFnbkhwL1gzVXV5ZFM0UFdvS29KRWQrQUVVREJROHI1eVpuLzhzaGVNeWFUZjd3UlFRQWFPZHRMQWtjNzQ1WkhhaU9BRVVGQW1UcFdTTHNNS1JGeUJFMEJCZ1JXSXhRSUFrejhtWG5BQ0tERHZ2UDVLMHVYUHhSTW5nQUtURUFjQVdJSEI4TVFKb01EMDlXeFArK3BzZU1DcUl3Z3JYWGQvWFNOSDllNkZIMitGcnAwdnBuMTFPaGlqT0dBbGdLdDNWNEtsem1ma1FFRm5iK3NDU04vUEFUZmdCY05uNVFLdzN1Mm8wbmN3dTMreFJUejh3c29DL1BUNzMvWGovdjUrNnU3T1hNd3FGUFB6OC9YanJwM0s3MDBQdjdBUlFLVVZTdWlMbTU2ZXJvakFGaFlYRituNDhlUDE4OTQ5MjBnSGJGeUFlUGNEbXlZZnJLNnUxby9odXh2Wmp5a0ROZ0lRL2I5dGt3OGVQSGhRUDlaMTl3TStGdURScGdXd3pmZURwYVdsK3JHdXV4K3dkQUUyV2dEZjkrdkhWbG9BMFFWNG5rZTJFUldBdnRpY3BRVTRkdXdZMmNiS3l1WitEdXNzUUR3RnRERUdRQm9ZMGx1eXpBTFluZ0tLZHovUVVBU3F3OFlDaE5nWUFONjdkeTl5cnFFTVhJZUhCVkNjQWw2L2ZwMDZPanFrRGZ6M1pDSmFBSjBwSUdEbkFsUllBTEhHTG9ORGh3NlJUTVFNUU9mZEQ5aTVBQlVwb0JoZ3lVQzJTRVVCNlBUL2dNVmlrT29VVUJRQWV1YWJYV2UvK2ZOVE92L2Q0OHF4Q2d0bHFnZ0VqQXRBZFFxSXlSZDliTi9CN1UwWFdsU25xSkVhUUVudmxCaDNBYXBUd0hpTlBZK1BWUjJqbUxRQXhnV2dPZ1VVQThDOEFkYkQ1YzI5OXlwaWxFZ00wR2xaREtBNkJSVDlmOStCbkFKNHNsNC9McGZMTkRVMVJhckkrMi9NaTNrQktEYXZvZ0R5TkZuR24rQUZmeDJ2M01uRXVqcUF5aFF3SGdEbVdXVVR6YjlxZE5jQUFDc0xJRHNGbEJFQVFqUlh6cnhLT3VqcWZKRjBZMVFBcWxOQUdRRWduc0V6WE5JYm1ldkVxQUJVcDRDaS80Y3B4OU8wT0ROOFluZmw3U3c2TVc0QlFsUUhnTlVuYmE0VFovQjZIdDBZRFFKVnBvRHhBTEFkMEowQkFEWXVRTFlGUUVhQnpTV2NRWkNLdWtLSTdob0FZT01DWktlQXNDZ2pJeVBFR2JHdlFPZG1FQkd6THNEeVJ0QklsZEpBRFFBWUU0QnJCRFc3Q0JSaVRBQzJONElDVTNzQlJJeGFnQkFiSng5WTdRSnMzd3NZWDFTeXpnTFl2aGZRWkN1NENBc1hZT05lUUZOYndlS3dzQUMycDRDNit3QkZqUHpOOFNZTFZNUnUzNzVObklGSVpjWXFNanFWWkdCR0FMRW1DKzRWTzdDd3NDQTFWakhaQ1N4aXhBVndYNVZMUXVWU3Rha0FFQmh5QVpzV0FEdGhUTlRBc3hBcmxiSW5QNTRDNnQ0TkpHSkVBR0lBMk5lemcyNTgwa1BjT1AvdDQ4cVRTNEhzTElWTENnaU1TRTlNQWZGOFlQeXd1YUd5VGlFK0Vjems1QU1XTVFEdU5HNFBpVllwQUZOUEJFdkNrQUQrMzJyOThiVkhXUzlIMWtaOHBWTDJkbkF1S1NEUUxvQzBEQUEvOU0rKytZTTRvSHFsTXJJS1dETGJtYS85YjQvWEFDWW5KMmw4Zkx4eUhNWUQ1OTQwdXpna3VpUFZtMEZOeHdENkJTQllBUHh3eDhiR0txMVJZUTgvNG9Fdyt1YUE3QXdBazg5bEhRQVljQUdiRmlBc3JjN096ckpkRUZJWkFBSlR5OEFoUm1PQWNOSWhCSzRkdkVXdEFJWVlqUUhFdTM1d2NKQTJOamFvNkhCb0F4TXhhZ0ZzYkFTSkxBUHZNYi9uMEdnTTBOWFZSYllSZlY2UmVSZWdWUUR4R3NEaHc0ZkpOcmcwZ29Ub0ZVQ3NCaUM3d3NhZCtQTUtUVmNCZ1ZZQjJONEtMcjRYQ0hCWUJ0ZjZMN0M5Rlp6VEttQ0lzUmpBeGs1Z2NUTW9oeFFRR0lzQmJCTUE4dis1dWJuNmVjcXIzYlZqTEFhd1NRQ1kvS0dob2ZvNThuL2RqNEpKdzFnTVlFc0dnTWdma3k5V0FDZE9sWWdMMmdSZ1d3MEEreHhHUjBjcnI0T05UejZYdXg5b2kwVGlOUUR4MFNoRkFwVSszUFhpcElkZzhqbmQvVUNiQU9LdmhwK1ptU0ZiUU52M2xZLzJCNEhmeThRTmJRSVEvYjh0WU9MeDZEZDBPSEhjK3dDMENRQ0ZqK0dUdTZub0lML0h3UDh2bDJMUFZtZ1RBTXdmUnhOb096enRra01iVGdDV2t5U0E5bnErcXFNbGtnUVFXYlBrc2x2SG9ZWWtBVVM2RmxiWC9pVkhjVWtTd0x4NHdtM1Rwa011bVJiZzV2MW41Q2d1YVJhZ0hnaGlvMlM4ak9zb0RtbHA0SmZoQVNhZjAxNDloMXpTQkRCRmdoV0FBSndWS0NacEFzRGtSNnpBNVZ2TDVHZ3ZydDdKdHR3ZFczeUh0dDJGWUhqaGhSdWY5dERBa2ViZnZ1bVFRMWlUcWJ3QWEzazlkaTM5dXhSR2d6R3psUUFBbXZjWHdoTXNhZDRaNjJYVDBkcXVTSjdJdkRRa0FEQVdqTW53QkEyTnNBUk9CR3dtTWk4ZkJtT3VFUUdBY2pBdWhDZXdCSmZlMjhlcXQ2MFYybndpODRLbVRMOVJBWUF5Q1NJQWFQQkFqeHNYYTJEcFJPYmhJbFhuazVvUkFJaTRneERaUW5BVHFaVDY1SU5tQlFBU1JRRFFBalZ3dEpQNkRteXZ2SFFad0YwZ2pYUVRxUVhrZmF1MVR3eS9kdDJ2bmM5UWJMay9qd0JBbVdMdXdDR1ZySWxjU2ZtdWFmSUtBSlRKaVNBTGJST1psMVlFQUFhRGdjZDdlVlJzMkU5a1hsb1ZBUENvYWczT0VuOEtPNUY1a1NHQUVJLzBDY0ZOcENSa0NpQ2tPeGlucWVvZStvT3gxU3ZCM0VRYVJvVUFrdkJvTTA3d1k1OE9oOFBoTU1KL0VPU0NGZ0FXOCtJQUFBQUFTVVZPUks1Q1lJST1cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udGVudF9zY3JpcHRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0NvbnRlbnRTY3JpcHQvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=