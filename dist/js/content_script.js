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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupCard = void 0;
const webextension_polyfill_1 = __importDefault(__webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js"));
const tesseract_js_1 = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
const antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
            for (let i = (imageNode === null || imageNode === void 0 ? void 0 : imageNode.length) - 1; i > -1; i--) {
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
            newIamge.push(data);
            newHistory.push({ 'lines': result.data.lines.map(item => { return { 'bbox': item.bbox, 'text': item.text }; }), 'image': promise.image });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxzQ0FBc0MsaUVBQWlFO1dBQ3ZHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbXBvbmVudHMvTmF2LnRzeCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9Db250ZW50U2NyaXB0L1BvcHVwQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvQ29udGVudFNjcmlwdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYXNzZXRzL2ljb24xMjgucG5nIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5OYXYgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBpY29uMTI4X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbjEyOC5wbmdcIikpO1xuZnVuY3Rpb24gTmF2KHByb3BzKSB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJTY291dGVyTmF2XCIsIHN0eWxlOiB7XG4gICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OVxuICAgICAgICB9LCBvbk1vdXNlRG93bjogcHJvcHMub25Nb3VzZURvd24gfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGljb24xMjhfcG5nXzEuZGVmYXVsdCB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmlnaHRCdG5Cb3hcIiwgc3R5bGU6IHsgZmxleDogMSwgdGV4dEFsaWduOiAncmlnaHQnIH0gfSkpKTtcbn1cbmV4cG9ydHMuTmF2ID0gTmF2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3B1cENhcmQgPSB2b2lkIDA7XG5jb25zdCB3ZWJleHRlbnNpb25fcG9seWZpbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpKTtcbmNvbnN0IHRlc3NlcmFjdF9qc18xID0gcmVxdWlyZShcInRlc3NlcmFjdC5qc1wiKTtcbmNvbnN0IGFudGRfMSA9IHJlcXVpcmUoXCJhbnRkXCIpO1xuY29uc3QgeyBTZWFyY2ggfSA9IGFudGRfMS5JbnB1dDtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IE5hdl8xID0gcmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvTmF2XCIpO1xuZnVuY3Rpb24gUG9wdXBDYXJkKHByb3BzKSB7XG4gICAgLy8g56qX5Y+j5ouW5ou96YC76L6RXG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZmFsc2UpO1xuICAgIGNvbnN0IHdpbmRvd0VsZW1lbnQgPSAoMCwgcmVhY3RfMS51c2VSZWYpKG51bGwpO1xuICAgIC8vIOS/neWtmCBPQ1Ig6K+G5Yir55qE57uT5p6c77yM55So5LqO5ZCO57ut55qE5pCc57SiXG4gICAgY29uc3Qgb2NyUmVzdWx0ID0gKDAsIHJlYWN0XzEudXNlUmVmKShbXSk7XG4gICAgLy8g5L+d5a2Y5pCc57Si57uT5p6cXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdCwgc2V0U2VhcmNoUmVzdWx0XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShbXSk7XG4gICAgLy8g5L+d5a2Y5pCc57Si57uT5p6c5Lit77yM5b2T5YmN5a6a5L2N5Yiw5ZOq5Liq5L2N572uXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoMCk7XG4gICAgY29uc3QgW3NlYXJjaFN0YXR1cywgc2V0U2VhcmNoU3RhdHVzXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgnc3RhbmJ5Jyk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIC8vIOiuvue9rueql+WPo+eahOm7mOiupOS9jee9rlxuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgLy8gY29uc3QgbmV3WCA9IG1heFggLSAyMFxuICAgICAgICAgICAgLy8gY29uc3QgbmV3WSA9IHByb3BzLnNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wICsgcHJvcHMuc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAyMFxuICAgICAgICAgICAgLy8gY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICAvLyBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGlvbi5nZXRSYW5nZUF0KDApKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5yaWdodCA9ICcxMHB4JztcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSAnMTBweCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NodWxpdHVwaWFuPT09PT09PT09PScpO1xuICAgICAgICAvLyDorrDlvZXlvZPliY3nmoTkvY3nva5cbiAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDmiJbogIXkvb/nlKggd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgIC8vIOa7muWKqOWIsOmhtemdouW6lemDqOS7peiuqeWbvueJh+WKoOi9veWHuuadpVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAzKTtcbiAgICAgICAgLy8g5Zue5Yiw5rua5Yqo5YmN55qE5L2N572uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAxLjUpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgeSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIC8vIOiOt+WPlumhtemdouS4iumcgOimgSBPQ1Ig55qE5Zu+54mHXG4gICAgICAgIGxldCBpbWFnZUxpc3QgPSBnZXRQcm9kdWN0SW1hZ2UoKTtcbiAgICAgICAgaWYgKGltYWdlTGlzdC5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgLy8g6I635Y+WIE9DUiDnu5PmnpznmoTljoblj7LorrDlvZVcbiAgICAgICAgICAgIGdldE9DUkhpc3RvcnkoaW1hZ2VMaXN0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN6aG16Z2i5Lit55qE5Zu+54mH55qEIE9DUiDnu5PmnpzlnKjmnKzlnLDorrDlvZXkuK3mib7liLDkuobvvIzliJnnm7TmjqXnlKjljoblj7LorrDlvZXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgb2NyUmVzdWx0LmN1cnJlbnQgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT0NSIOWbvueJh1xuICAgICAgICAgICAgICAgICAgICBpbWFnZU9jcihpbWFnZUxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzXSk7XG4gICAgLy8g56qX5Y+j5ouW5ou95pe26Kem5Y+RXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QgcmV0dXJuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgIH0sIFtkcmFnZ2luZ10pO1xuICAgIC8vIOaQnOe0ouWujOavleWQjuinpuWPkVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hTdGF0dXMoJ2VuZCcpO1xuICAgICAgICAvLyDmkJzntKLlrozmr5XlkI7vvIzlrprkvY3liLDnrKzkuIDkuKrmkJzntKLnu5PmnpxcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBnb1RvSW1hZ2Uoc2VhcmNoUmVzdWx0WzBdKTtcbiAgICAgICAgfVxuICAgIH0sIFtzZWFyY2hSZXN1bHRdKTtcbiAgICBjb25zdCBnZXRQcm9kdWN0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIOiOt+WPlumhtemdouS4iumcgOimgSBPQ1Ig55qE5Zu+54mHXG4gICAgICAgIGxldCBpbWFnZU5vZGUgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBsZXQgaW1hZ2VMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGlmIChpbWFnZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IChpbWFnZU5vZGUgPT09IG51bGwgfHwgaW1hZ2VOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWFnZU5vZGUubGVuZ3RoKSAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGltYWdlTm9kZVtpXVsnY3VycmVudFNyYyddLnJlcGxhY2UoJy5hdmlmJywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZU5vZGVbaV1bJ2N1cnJlbnRTcmMnXS5pbmRleE9mKCcuZ2lmJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlua0hlYXJkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXp5bG9hZCA9IGltYWdlTm9kZVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF6eWxvYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhenlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF6eWxvYWQuaW5kZXhPZignaHR0cCcpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIZWFyZCA9ICdodHRwczonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGxpbmtIZWFyZCArICgoX2IgPSBpbWFnZU5vZGVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWxhenlsb2FkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCcuYXZpZicsICcnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlTGlzdC5wdXNoKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW1hZ2VMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRE9NTGlzdCA9IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzc2QtbW9kdWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRE9NTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VET01MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2VET01MaXN0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZS5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnLmF2aWYnLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaXN0LnB1c2goYmFja2dyb3VuZEltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VMaXN0O1xuICAgIH07XG4gICAgLy8g5LqM5YC85YyW5Ye95pWwXG4gICAgZnVuY3Rpb24gYmluYXJpemVJbWFnZShpbWFnZURhdGEsIHRocmVzaG9sZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICBjb25zdCBncmF5ID0gKGltYWdlRGF0YS5kYXRhW2ldICsgaW1hZ2VEYXRhLmRhdGFbaSArIDFdICsgaW1hZ2VEYXRhLmRhdGFbaSArIDJdKSAvIDM7XG4gICAgICAgICAgICBjb25zdCBiaW5hcnkgPSBncmF5IDwgdGhyZXNob2xkID8gMCA6IDI1NTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2ldID0gYmluYXJ5O1xuICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDFdID0gYmluYXJ5O1xuICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdID0gYmluYXJ5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZURhdGE7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUlucHV0T25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVJbnB1dE9uS2V5RG93bicpO1xuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgLy8g6YCa6L+H5Zu+54mH55qEIFVSTCDojrflj5blr7nlupTnmoTlm77niYcgRE9NIOmTvuaOpVxuICAgIGNvbnN0IGZpbmROb2RlID0gKGltYWdlVXJsKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGltYWdlTm9kZSA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKLWRldGFpbC1jb250ZW50JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgIGlmIChpbWFnZU5vZGUgIT09IHVuZGVmaW5lZCAmJiBpbWFnZU5vZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZU5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhpc1VybCA9IGltYWdlTm9kZVtpXS5jdXJyZW50U3JjO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzVXJsLmluZGV4T2YoJy5naWYnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNVcmwgPSAnaHR0cHM6JyArICgoX2IgPSBpbWFnZU5vZGVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWxhenlsb2FkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCcuYXZpZicsICcnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzVXJsLmluZGV4T2YoaW1hZ2VVcmwpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VOb2RlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlTm9kZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDlm77niYfmmK/mlL7nva7lnKggZGl2IOeahCBiYWNrZ3JvdW5kLWltYWdlIOWxnuaAp+S4rVxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKLWRldGFpbC1jb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURPTUxpc3QgPSBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3NkLW1vZHVsZScpO1xuICAgICAgICAgICAgaWYgKGltYWdlRE9NTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbWFnZURPTUxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGltYWdlRE9NTGlzdFtqXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2UucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJy5hdmlmJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5pbmRleE9mKGltYWdlVXJsKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8vIOiOt+WPluaMh+WumiBET00g5YWD57Sg5Zyo5pW05Liq6aG16Z2i5Lit55qEIFkg5Z2Q5qCHXG4gICAgY29uc3QgZ2V0RWxlbWVudFRvcCA9IChlbGVtKSA9PiB7XG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgdG9wICs9IGVsZW0ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfTtcbiAgICAvLyDojrflj5bmjIflrpogRE9NIOWFg+e0oOWcqOaVtOS4qumhtemdouS4reeahCBYIOWdkOagh1xuICAgIGNvbnN0IGdldEVsZW1lbnRMZWZ0ID0gKGVsZW0pID0+IHtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgbGVmdCArPSBlbGVtLm9mZnNldExlZnQ7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfTtcbiAgICAvLyDmoLnmja7mkJzntKLnu5PmnpzvvIzlnKjpobXpnaLkuIrmuLLmn5MgSGlnaHRsaWdodO+8jOW4ruWKqeeUqOaIt+aJvuWIsOaQnOe0oue7k+aenFxuICAgIGNvbnN0IHNob3dIaWdodGxpZ2h0ID0gKHNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgICAvLyDlhYjnp7vpmaTml6fnmoQgSGlnaHRsaWdodCDkv6Hmga9cbiAgICAgICAgcmVtb3ZlSGlnaHRsaWdodCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgICAgIC8vIGxldCBoaWdodGxpZ2h0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIC8vIGhpZ2h0bGlnaHRCb3guY2xhc3NMaXN0LmFkZCgnaGlnaHRsaWdodEJveCcpXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlm77niYfoioLngrlcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZmluZE5vZGUoaXRlbS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS53aWR0aCA9IGl0ZW0uYmJveC54MSAtIGl0ZW0uYmJveC54MCArICdweCc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLmhlaWdodCA9IGl0ZW0uYmJveC55MSAtIGl0ZW0uYmJveC55MCArICdweCc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBib3guc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICBib3guc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoaWdodGxpZ2h0Qm94Jyk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLnRvcCA9IE1hdGguYWJzKGdldEVsZW1lbnRUb3Aobm9kZSkgKyBpdGVtLmJib3gueTApICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmxlZnQgPSBNYXRoLmFicyhnZXRFbGVtZW50TGVmdChub2RlKSArIGl0ZW0uYmJveC54MCkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmFicyhnZXRFbGVtZW50VG9wKG5vZGUpICsgaXRlbS5iYm94LnkwKSArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRFbGVtZW50VG9wKG5vZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5iYm94KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJveCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlnaHRsaWdodEJveCk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaTml6fnmoQgSGlnaHRsaWdodFxuICAgIGNvbnN0IHJlbW92ZUhpZ2h0bGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgaGlnaHRsaWdodEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2h0bGlnaHRCb3gnKTtcbiAgICAgICAgICAgIHdoaWxlIChoaWdodGxpZ2h0Qm94Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAoX2EgPSBoaWdodGxpZ2h0Qm94WzBdLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChoaWdodGxpZ2h0Qm94WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoJ2RvbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDmkJzntKJcbiAgICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyDmuIXnqbrml6fnmoTmkJzntKLnu5PmnpxcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0KFtdKTtcbiAgICAgICAgbGV0IG5ld1NlYXJjaFJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9jclJlc3VsdC5jdXJyZW50KTtcbiAgICAgICAgLy8gU2VhcmNoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2NyUmVzdWx0LmN1cnJlbnQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG9jclJlc3VsdC5jdXJyZW50W2ldLmltYWdlO1xuICAgICAgICAgICAgLy8g6YGN5Y6G6K+G5Yir57uT5p6c55qE5q+P5Liq5q616JC9XG4gICAgICAgICAgICBvY3JSZXN1bHQuY3VycmVudFtpXS5saW5lcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGV4dC5yZXBsYWNlKC9cXHMvZywgJycpLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+U5ZueIHRleHTvvIjpgJrluLjmmK/kuIDmlbTooYznmoTmloflrZfvvIzlm77niYcgVVJM77yM6L+Z6KGM5paH5a2X55qEIGJib3jvvIlcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoUmVzdWx0LnVuc2hpZnQoeyAndGV4dCc6IGl0ZW0udGV4dCwgJ2ltYWdlJzogaW1hZ2UsICdiYm94JzogaXRlbS5iYm94IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldEluZGV4KDApO1xuICAgICAgICBzZXRTZWFyY2hSZXN1bHQobmV3U2VhcmNoUmVzdWx0KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyDlnKjpobXpnaLkuK3mmL7npLrmkJzntKLnu5PmnpxcbiAgICAgICAgICAgIHNob3dIaWdodGxpZ2h0KG5ld1NlYXJjaFJlc3VsdCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU5leHRCdG5DbGljayA9IChvZmZzZXQpID0+IHtcbiAgICAgICAgbGV0IHBvc3Rpb24gPSBpbmRleCArIG9mZnNldDtcbiAgICAgICAgaWYgKHBvc3Rpb24gPj0gc2VhcmNoUmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcG9zdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc3Rpb24gPCAwKSB7XG4gICAgICAgICAgICBwb3N0aW9uID0gc2VhcmNoUmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZ29Ub0ltYWdlKHNlYXJjaFJlc3VsdFtwb3N0aW9uXSk7XG4gICAgICAgIHNldEluZGV4KHBvc3Rpb24pO1xuICAgIH07XG4gICAgLy8g5a6a5L2N5Yiw5oyH5a6a5Zu+54mHXG4gICAgY29uc3QgZ29Ub0ltYWdlID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZmluZE5vZGUodGFyZ2V0LmltYWdlKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgbGVmdDogMCwgdG9wOiBnZXRFbGVtZW50VG9wKG5vZGUpICsgdGFyZ2V0LmJib3gueTAgLSAxNDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgLy8gbm9kZT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIC8vIHdpbmRvdy5zY3JvbGxCeSgwLCB0YXJnZXQuYmJveC55MCArIDEwMCk7XG4gICAgfTtcbiAgICAvLyDlr7nlm77niYfov5vooYwgT0NSXG4gICAgY29uc3QgaW1hZ2VPY3IgPSAoaW1hZ2VVcmxMaXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFRlc3NlcmFjdC5yZWNvZ25pemUoXG4gICAgICAgIC8vICAgaW1hZ2VVcmwsXG4gICAgICAgIC8vICAgJ2NoaV9zaW0nLFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIGxvZ2dlcjogbSA9PiB7XG4gICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKG0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gKS50aGVuKCh7IGRhdGE6IHsgdGV4dCB9IH0pID0+IHtcbiAgICAgICAgLy8gICByZXNvbHZlKHRleHQpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlciA9ICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVTY2hlZHVsZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlciA9IHlpZWxkICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVXb3JrZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlcjIgPSB5aWVsZCAoMCwgdGVzc2VyYWN0X2pzXzEuY3JlYXRlV29ya2VyKSgpO1xuICAgICAgICBjb25zdCB3b3JrZXIzID0geWllbGQgKDAsIHRlc3NlcmFjdF9qc18xLmNyZWF0ZVdvcmtlcikoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNCA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI1ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIC8vIGNvbnN0IHdvcmtlcjYgPSBhd2FpdCBjcmVhdGVXb3JrZXIoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNyA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI4ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIHlpZWxkIHdvcmtlci5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyLmluaXRpYWxpemUoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5pbml0aWFsaXplKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMubG9hZExhbmd1YWdlKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMuaW5pdGlhbGl6ZSgnY2hpX3NpbScpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI0LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI1LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNS5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI2LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNi5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI3LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNy5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI4LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyOC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNCk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNSk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNik7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyOCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gaW1hZ2VVcmxMaXN0Lm1hcCgoaW1hZ2VVcmwpID0+ICh7XG4gICAgICAgICAgICAncmVzdWx0Jzogc2NoZWR1bGVyLmFkZEpvYigncmVjb2duaXplJywgaW1hZ2VVcmwsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIHRleHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJsb2NrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob2NyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0c3Y6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5sdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3NkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwZGY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlR3JleTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VCaW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnaW1hZ2UnOiBpbWFnZVVybFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBuZXdJYW1nZSA9IFtdO1xuICAgICAgICBsZXQgbmV3SGlzdG9yeSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHByb21pc2UucmVzdWx0O1xuICAgICAgICAgICAgLy8gcmVzdWx0LmRhdGEudGV4dCA9IHJlc3VsdC5kYXRhLnRleHQucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvbWlzZS5pbWFnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGRhdGUxLmdldFRpbWUoKSkgLyAxMDAwKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnbGluZXMnOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgJ2ltYWdlJzogcHJvbWlzZS5pbWFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBuZXdJYW1nZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgbmV3SGlzdG9yeS5wdXNoKHsgJ2xpbmVzJzogcmVzdWx0LmRhdGEubGluZXMubWFwKGl0ZW0gPT4geyByZXR1cm4geyAnYmJveCc6IGl0ZW0uYmJveCwgJ3RleHQnOiBpdGVtLnRleHQgfTsgfSksICdpbWFnZSc6IHByb21pc2UuaW1hZ2UgfSk7XG4gICAgICAgICAgICBvY3JSZXN1bHQuY3VycmVudCA9IG5ld0hpc3Rvcnk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cob2NyUmVzdWx0LmN1cnJlbnQpO1xuICAgICAgICAvLyDkv53lrZjliLDljoblj7LorrDlvZXkuK1cbiAgICAgICAgLy8g5aaC5p6c5bey5pyJ5q2k6K6w5b2V5YiZ5LiN55So6YeN5aSN5L+d5a2YXG4gICAgICAgIGdldE9DUkhpc3RvcnkoaW1hZ2VVcmxMaXN0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICB3ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnN0b3JhZ2UubG9jYWwuZ2V0KHsgXCJvY3JSZXN1bHRcIjogW10gfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld09jclJlc3VsdCA9IFtuZXdIaXN0b3J5LCAuLi5kYXRhLm9jclJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld09jclJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld09jclJlc3VsdC5zcGxpY2UoMjApO1xuICAgICAgICAgICAgICAgICAgICB3ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnN0b3JhZ2UubG9jYWwuc2V0KHsgb2NyUmVzdWx0OiBuZXdPY3JSZXN1bHQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIHNjaGVkdWxlci50ZXJtaW5hdGUoKTsgLy8gSXQgYWxzbyB0ZXJtaW5hdGVzIGFsbCB3b3JrZXJzLlxuICAgICAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCkpIC8gMTAwMCkpO1xuICAgIH0pO1xuICAgIC8vIOiOt+WPliBPQ1Ig5Y6G5Y+y6K6w5b2VXG4gICAgY29uc3QgZ2V0T0NSSGlzdG9yeSA9IChpbWFnZVVybExpc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xLmRlZmF1bHQuc3RvcmFnZS5sb2NhbC5nZXQoeyBcIm9jclJlc3VsdFwiOiBbXSB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vY3JSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9jclJlc3VsdCA9IGRhdGEub2NyUmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIOmBjeWOhuavj+S4gOadoeWOhuWPsuiusOW9lVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2NyUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpc3RvcnlJbWFnZSA9IG9jclJlc3VsdFtpXS5tYXAoKGl0ZW0pID0+IGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaW1hZ2VVcmxMaXN0KSA9PT0gSlNPTi5zdHJpbmdpZnkoaGlzdG9yeUltYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvY3JSZXN1bHRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe8qeaUvuWbvueJh1xuICAgIGNvbnN0IHNjYWxlSW1hZ2UgPSAoaW1hZ2VVcmwsIHNjYWxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNjYWxlKTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnOyAvLyDmt7vliqAgY3Jvc3NPcmlnaW4g5bGe5oCnXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgY3R4ID09PSBudWxsIHx8IGN0eCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVkSW1hZ2VVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7IC8vIHF1YWxpdHkg5Y+v5Lul6K6+572u5Zu+54mH5Y6L57yp6LSo6YePXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2NhbGVkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDljrvlmarngrlcbiAgICBjb25zdCBkZW5vaXNlSW1hZ2UgPSAoaW1hZ2VVcmwsIHJhZGl1cykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7IC8vIOa3u+WKoCBjcm9zc09yaWdpbiDlsZ7mgKdcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChjdHggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwaXhlbHMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gcmFkaXVzICogMjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBkYXRhW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBkYXRhW2kgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gZGF0YVtpICsgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmF5ID0gKHIgKyBnICsgYikgLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHIgLSBncmF5KSA+IHRocmVzaG9sZCB8fCBNYXRoLmFicyhnIC0gZ3JheSkgPiB0aHJlc2hvbGQgfHwgTWF0aC5hYnMoYiAtIGdyYXkpID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSArIDFdID0gZGF0YVtpICsgMl0gPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShwaXhlbHMsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZW5vaXNlZEltYWdlVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIDEpOyAvLyBxdWFsaXR5IOWPr+S7peiuvue9ruWbvueJh+WOi+e8qei0qOmHj1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlbm9pc2VkSW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VEb3duJyk7XG4gICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFkgPSBTdHJpbmcob2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0T2Zmc2V0KHsgeDogZXZlbnQuY2xpZW50WCAtIHBvc2l0aW9uLngsIHk6IGV2ZW50LmNsaWVudFkgLSBwb3NpdGlvbi55IH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdQb3B1cENhcmQ6aGFuZGxlTW91c2VNb3ZlJyk7XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGRyYWdnaW5nKTtcbiAgICAgICAgaWYgKGRyYWdnaW5nICYmIHdpbmRvd0VsZW1lbnQuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB0aHJvdHRsZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgICAgICAvLyDpvKDmoIfnm7jlr7nnqpflj6Plt6bkuIrop5LnmoTlgY/np7tcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBwYXJzZUZsb2F0KHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFggfHwgJycpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHBhcnNlRmxvYXQod2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WSB8fCAnJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdYID0gZXZlbnQuY2xpZW50WCAtIG9mZnNldFg7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gZXZlbnQuY2xpZW50WSAtIG9mZnNldFk7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBpZiBpdCdzIHdpdGhpbiB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgLy8gbmV3WCA+PSBtaW5YICYmIG5ld1ggPD0gbWF4WCAmJiBuZXdZID49IG1pblkgJiYgbmV3WSA8PSBtYXhZXG4gICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHNldFBvc2l0aW9uKHsgeDogY2xhbXBlZFgsIHk6IGNsYW1wZWRZIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7Y2xhbXBlZFh9cHhgO1xuICAgICAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSBgJHtjbGFtcGVkWX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlhYPntKDliLDovr7ovrnnlYxcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZWN0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9mZnNldFkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WCA9IFN0cmluZyhvZmZzZXRYKTtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dFbGVtZW50LmN1cnJlbnQuZGF0YXNldC5vZmZzZXRZID0gU3RyaW5nKG9mZnNldFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnUG9wdXBDYXJkOmhhbmRsZU1vdXNlVXAnKTtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcIkxlYXJuaW5nRW5nbGlzaDIwMjNcIiwgcmVmOiB3aW5kb3dFbGVtZW50IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5hdl8xLk5hdiwgeyBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duIH0pLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NvbnRlbnRCb3gnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2gsIHsgcGxhY2Vob2xkZXI6IFwiaW5wdXQgc2VhcmNoIHRleHRcIiwgb25TZWFyY2g6IG9uU2VhcmNoLCBvbktleVVwOiBoYW5kbGVJbnB1dE9uS2V5RG93biwgc3R5bGU6IHsgd2lkdGg6IDIwMCB9IH0pLFxuICAgICAgICAgICAgc2VhcmNoU3RhdHVzID09PSAnc3RhbmJ5JyA/ICcnIDogc2VhcmNoUmVzdWx0Lmxlbmd0aCA9PT0gMCA/ICcwLzAnIDogaW5kZXggKyAxICsgJy8nICsgc2VhcmNoUmVzdWx0Lmxlbmd0aCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlTmV4dEJ0bkNsaWNrLmJpbmQoZXZlbnQsIC0xKSB9LCBcInByZVwiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlTmV4dEJ0bkNsaWNrLmJpbmQoZXZlbnQsIDEpIH0sIFwibmV4dFwiKSkpKTtcbn1cbmV4cG9ydHMuUG9wdXBDYXJkID0gUG9wdXBDYXJkO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHdlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIikpO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5jb25zdCBQb3B1cENhcmRfMSA9IHJlcXVpcmUoXCIuL1BvcHVwQ2FyZFwiKTtcbmNvbnN0IGNzc2luanNfMSA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9jc3NpbmpzXCIpO1xuY29uc3QgQVBQX05BTUUgPSAnX19qaWFuZy1zaG9wcGluZyc7XG4vLyDliJ3lp4vljJbkuLvlrrnlmajvvIzkuLvlrrnlmajnlKjmnaXmjILlnKjlhajlsYDmoLflvI/vvIzljIXmi6znrKzkuInmlrnnu4Tku7bnmoTmoLflvI9cbmxldCBNeUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFQUF9OQU1FKTtcbi8vIGNvbnRhaW5lciDmib/ovb0gVUkg57uE5Lu2XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyDkvb/nlKggc2hhZG93IOadpemalOemu+agt+W8j1xubGV0IHNoYWRvd1Jvb3QgPSB1bmRlZmluZWQ7XG5pZiAoTXlCb3ggIT09IG51bGwgJiYgTXlCb3ggIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIOWmguaenOW3suWtmOWcqOWuueWZqFxuICAgIC8vIGNvbnNvbGUubG9nKCflt7LlrZjlnKggQm94IOWuueWZqCcpO1xuICAgIC8vIOenu+mZpOaXp+WuueWZqO+8jOmBv+WFjeWHuueOsCAyIOS4quS4u+WuueWZqOS8muWvvOiHtCBVSSDmuLLmn5PplJnor69cbiAgICAoX2EgPSBNeUJveC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoTXlCb3gpO1xufVxuLy8g5Yib5bu65Li75a655ZmoXG5NeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuTXlCb3guaWQgPSBBUFBfTkFNRTtcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYXBwZW5kQ2hpbGQoTXlCb3gpO1xuTXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy/pu5jorqTpmpDol49cbnNoYWRvd1Jvb3QgPSBNeUJveCA9PT0gbnVsbCB8fCBNeUJveCA9PT0gdm9pZCAwID8gdm9pZCAwIDogTXlCb3guYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuc2hhZG93Um9vdCA9PT0gbnVsbCB8fCBzaGFkb3dSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4vLyDlnKggU2hhZG93IERPTSDkuK3mt7vliqDmoLflvI/vvJpcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjTGVhcm5pbmdFbmdsaXNoMjAyMyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEzLjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtMXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuaGlnaHRsaWdodEJveHtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgXG4gICAgfVxuXG4gICAgI0xlYXJuaW5nRW5nbGlzaDIwMjMgI1Njb3V0ZXJOYXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweCAxOXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNSwgNSwgNSwgLjA2KTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgIFxuICAgICAgI0xlYXJuaW5nRW5nbGlzaDIwMjMgI1Njb3V0ZXJOYXYgaW1nIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICB9XG5cbiAgYDtcbnNoYWRvd1Jvb3QgPT09IG51bGwgfHwgc2hhZG93Um9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4vLyDmjqXmlLYgYmFja2dyb3VuZCDmtojmga/vvIjnm67liY3mmK/pgJrov4fmtY/op4jlmajnmoTlj7PplK7oj5zljZXop6blj5HvvIlcbndlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xLmRlZmF1bHQucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnQgc2NyaXB0IG9uTWVzc2FnZTonKTtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ29wZW5Qb3B1cENhcmQnKSB7XG4gICAgICAgIC8vIOWkhOeQhueql+WPo1xuICAgICAgICBpZiAoTXlCb3ggIT09IG51bGwgJiYgTXlCb3ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5bey5a2Y5Zyo5a655ZmoXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bey5a2Y5ZyoIEJveCDlrrnlmagnKTtcbiAgICAgICAgICAgIE15Qm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgLy8g56e76Zmk5pen5YaF5a6577yM6YG/5YWNIDIg5qyh5riy5p+T5re35p2C5Zyo5LiA6LW3XG4gICAgICAgICAgICAoX2EgPSBjb250YWluZXIucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5LiN5a2Y5ZyoIEJveCDlrrnlmagnKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgICAgICBzaGFkb3dSb290ID09PSBudWxsIHx8IHNoYWRvd1Jvb3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgLy8g5pi+56S656qX5Y+j77yMd2luZG93LmdldFNlbGVjdGlvbigpIOaYr+W9k+WJjem8oOagh+mAieS4reeahOWMuuWfn+S/oeaBr1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkpO1xuICAgICAgICBzaG93UG9wdXBDYXJkKHdpbmRvdy5nZXRTZWxlY3Rpb24oKSwgY29udGFpbmVyLCBzaGFkb3dSb290KTtcbiAgICAgICAgLy8g55uR5ZCs6aG16Z2i54K55Ye75LqL5Lu2XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoTXlCb3ggIT09IHVuZGVmaW5lZCAmJiBNeUJveCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOeCueWHu+eahOS4jeaYr+aPkuS7tueql+WPo+WPiuWFtuWtkOWFg+e0oO+8jOWImeWFs+mXreeql+WPo1xuICAgICAgICAgICAgICAgIGlmIChNeUJveCAhPT0gZXZlbnQudGFyZ2V0ICYmICFNeUJveC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+eql+WPo1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250YWluZXIucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufSk7XG4vLyDmmL7npLrlupTnlKjnqpflj6NcbmZ1bmN0aW9uIHNob3dQb3B1cENhcmQobXNnLCBNeUJveCwgc2hhZG93Um9vdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5TdHJpY3RNb2RlLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY3NzaW5qc18xLlN0eWxlUHJvdmlkZXIsIHsgY29udGFpbmVyOiBzaGFkb3dSb290IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDYXJkXzEuUG9wdXBDYXJkLCB7IHNlbGVjdGlvbjogbXNnIH0pKSksIE15Qm94KTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWpLU1VSQlZIZ0I3WjFQYkJSVkhNZC9WZm5US0xSc1FBSk55Z0RlVEVNSjNLeEptNGdYLytFRmszcWdQU2xlYkcvbHhIS0NlR205UUR5MVhEeDRhVkU0Y2JBRXJxWkY1YWhNU1pTWWtOSkdTRFZWNm54M2Q3WnZ4cG5PN3V6Nzg5dDU3NU04ZG1ZV0JQdSs4L3YzZm0rR3lPRndPQndPaDQxMGJQSGRZRERPMWo3OVlLd0VZNm4yNlF2WHdrOUhHNUltZ0F2QktGTnorT1NFMG5Za0NXQWtHTk9rRHArY1VOaVFKSUR2cVdyMlRlT1RFNHB5a2dTd0laNmNHK2ltNFpPN2FIWHRlV1U4ZkxJZWpIOHFuK0sxMWIrZWt5Rjhja0xKVGFZQWxpNGVvYTdPRnlpTHVoQ2NVTnFLVEFHc2ZQRWF5Y1FKaFJjdmtXWmdUZm82ZDJUK1BvTkM4V29qQzU4S0lCVHRBbWdVSnhROXNCVkFvemlodEViYkM2QlJDaUtVeGRxNEZveDVrb0QySUxBb01BaG0vV0JjRE1ZTXRZQVRnR0kwQ01XbkZvVGdCTUNFTEtHRTUxc3dFNHh4YWpKT2NBSm9JeUNFdTcrczBjMzdUK25ySC81TStpMStNSVpxbnczaEJOQ21QRnhlcDh1M2xwT0U0Rk1USW5BQ2FITWdoSGUvK2kzdUhueHFVQVRaUlg0SGEzcEwyK2pIOHg2ZGU2TmJ2T3dGWXpZWTNWbC8zZ21nSUZ6NllDOU52RlVTTC9VSFk0RXlhZ3RPQUFWaTR1MFNEWi9ZSlY3eXFOcmY0YVg5R1NlQWduSHAvWDNVdXlkUzRQV29Lb0pFZCtBRVVEQlE4cjV5Wm4vOHNoZU15YVRmN3dSUVFBYU9kdExBa2M3NDVaSGFpT0FFVUZBbVRwV1NMc01LUkZ5QkUwQkJnUldJeFFJQWt6OG1YbkFDS0REdnZQNUswdVhQeFJNbmdBS1RFQWNBV0lIQjhNUUpvTUQwOVd4UCsrcHNlTUNxSXdnclhYZC9YU05IOWU2RkgyK0ZycDB2cG4xMU9oaWpPR0FsZ0t0M1Y0S2x6bWZrUUVGbmIrc0NTTi9QQVRmZ0JjTm41UUt3M3UybzBuY3d1Myt4UlR6OHdzb0MvUFQ3My9Yai92NSs2dTdPWE13cUZQUHo4L1hqcnAzSzcwMFB2N0FSUUtVVlN1aUxtNTZlcm9qQUZoWVhGK240OGVQMTg5NDkyMGdIYkZ5QWVQY0RteVlmcks2dTFvL2h1eHZaanlrRE5nSVEvYjl0a3c4ZVBIaFFQOVoxOXdNK0Z1RFJwZ1d3emZlRHBhV2wrckd1dXgrd2RBRTJXZ0RmOSt2SFZsb0EwUVY0bmtlMkVSV0F2dGljcFFVNGR1d1kyY2JLeXVaK0R1c3NRRHdGdERFR1FCb1kwbHV5ekFMWW5nS0tkei9RVUFTcXc4WUNoTmdZQU42N2R5OXlycUVNWEllSEJWQ2NBbDYvZnAwNk9qcWtEZnozWkNKYUFKMHBJR0RuQWxSWUFMSEdMb05EaHc2UlRNUU1RT2ZkRDlpNUFCVXBvQmhneVVDMlNFVUI2UFQvZ01WaWtPb1VVQlFBZXVhYlhXZS8rZk5UT3YvZDQ4cXhDZ3RscWdnRWpBdEFkUXFJeVJkOWJOL0I3VTBYV2xTbnFKRWFRRW52bEJoM0FhcFR3SGlOUFkrUFZSMmptTFFBeGdXZ09nVVVBOEM4QWRiRDVjMjk5eXBpbEVnTTBHbFpES0E2QlJUOWY5K0JuQUo0c2w0L0xwZkxORFUxUmFySSsyL01pM2tCS0Rhdm9nRHlORm5HbitBRmZ4MnYzTW5FdWpxQXloUXdIZ0RtV1dVVHpiOXFkTmNBQUNzTElEc0ZsQkVBUWpSWHpyeEtPdWpxZkpGMFkxUUFxbE5BR1FFZ25zRXpYTklibWV2RXFBQlVwNENpLzRjcHg5TzBPRE44WW5mbDdTdzZNVzRCUWxRSGdOVW5iYTRUWi9CNkh0MFlEUUpWcG9EeEFMQWQwSjBCQURZdVFMWUZRRWFCelNXY1FaQ0t1a0tJN2hvQVlPTUNaS2VBc0Nnakl5UEVHYkd2UU9kbUVCR3pMc0R5UnRCSWxkSkFEUUFZRTRCckJEVzdDQlJpVEFDMk40SUNVM3NCUkl4YWdCQWJKeDlZN1FKczN3c1lYMVN5emdMWXZoZlFaQ3U0Q0FzWFlPTmVRRk5id2VLd3NBQzJwNEM2K3dCRmpQek44U1lMVk1SdTM3NU5uSUZJWmNZcU1qcVZaR0JHQUxFbUMrNFZPN0N3c0NBMVZqSFpDU3hpeEFWd1g1VkxRdVZTdGFrQUVCaHlBWnNXQUR0aFROVEFzeEFybGJJblA1NEM2dDROSkdKRUFHSUEyTmV6ZzI1ODBrUGNPUC90NDhxVFM0SHNMSVZMQ2dpTVNFOU1BZkY4WVB5d3VhR3lUaUUrRWN6azVBTVdNUUR1Tkc0UGlWWXBBRk5QQkV2Q2tBRCszMnI5OGJWSFdTOUgxa1o4cFZMMmRuQXVLU0RRTG9DMERBQS85TSsrK1lNNG9IcWxNcklLV0RMYm1hLzliNC9YQUNZbkoybDhmTHh5SE1ZRDU5NDB1emdrdWlQVm0wRk54d0Q2QlNCWUFQeHd4OGJHS3ExUllROC80b0V3K3VhQTdBd0FrODlsSFFBWWNBR2JGaUFzcmM3T3pySmRFRklaQUFKVHk4QWhSbU9BY05JaEJLNGR2RVd0QUlZWWpRSEV1MzV3Y0pBMk5qYW82SEJvQXhNeGFnRnNiQVNKTEFQdk1iL24wR2dNME5YVlJiWVJmVjZSZVJlZ1ZRRHhHc0RodzRmSk5yZzBnb1RvRlVDc0JpQzd3c2FkK1BNS1RWY0JnVllCMk40S0xyNFhDSEJZQnRmNkw3QzlGWnpUS21DSXNSakF4azVnY1RNb2h4UVFHSXNCYkJNQTh2KzV1Ym42ZWNxcjNiVmpMQWF3U1FDWS9LR2hvZm81OG4vZGo0Skp3MWdNWUVzR2dNZ2ZreTlXQUNkT2xZZ0wyZ1JnV3cwQSt4eEdSMGNycjRPTlR6Nlh1eDlvaTBUaU5RRHgwU2hGQXBVKzNQWGlwSWRnOGpuZC9VQ2JBT0t2aHArWm1TRmJRTnYzbFkvMkI0SGZ5OFFOYlFJUS9iOHRZT0x4NkRkME9ISGMrd0MwQ1FDRmorR1R1Nm5vSUwvSHdQOHZsMkxQVm1nVEFNd2ZSeE5vT3p6dGtrTWJUZ0NXa3lTQTlucStxcU1sa2dRUVdiUGtzbHZIb1lZa0FVUzZGbGJYL2lWSGNVa1N3THg0d20zVHBrTXVtUmJnNXYxbjVDZ3VhUmFnSGdoaW8yUzhqT3NvRG1scDRKZmhBU2FmMDE0OWgxelNCREJGZ2hXQUFKd1ZLQ1pwQXNEa1I2ekE1VnZMNUdndnJ0N0p0dHdkVzN5SHR0MkZZSGpoaFJ1Zjl0REFrZWJmdnVtUVExaVRxYndBYTNrOWRpMzl1eFJHZ3pHemxRQUFtdmNYd2hNc2FkNFo2MlhUMGRxdVNKN0l2RFFrQURBV2pNbndCQTJOc0FST0JHd21NaThmQm1PdUVRR0FjakF1aENld0JKZmUyOGVxdDYwVjJud2k4NEttVEw5UkFZQXlDU0lBYVBCQWp4c1hhMkRwUk9iaElsWG5rNW9SQUlpNGd4RFpRbkFUcVpUNjVJTm1CUUFTUlFEUUFqVnd0SlA2RG15dnZIUVp3RjBnalhRVHFRWGtmYXUxVHd5L2R0MnZuYzlRYkxrL2p3QkFtV0x1d0NHVnJJbGNTZm11YWZJS0FKVEppU0FMYlJPWmwxWUVBQWFEZ2NkN2VWUnMyRTlrWGxvVkFQQ29hZzNPRW44S081RjVrU0dBRUkvMENjRk5wQ1JrQ2lDa094aW5xZW9lK29PeDFTdkIzRVFhUm9VQWt2Qm9NMDd3WTU4T2g4UGhNTUovRU9TQ0ZnQVc4K0lBQUFBQVNVVk9SSzVDWUlJPVwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjb250ZW50X3NjcmlwdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfZXh0ZW5zaW9uX3R5cGVzY3JpcHRfc3RhcnRlclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfZXh0ZW5zaW9uX3R5cGVzY3JpcHRfc3RhcnRlclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvQ29udGVudFNjcmlwdC9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==