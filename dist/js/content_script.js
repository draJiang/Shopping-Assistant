/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    var _a, _b;
    (0, react_1.useEffect)(() => {
    }, []);
    return (react_1.default.createElement("div", { className: "statusBar" }, props.ocrPercent !== undefined && ((_a = props.ocrPercent) === null || _a === void 0 ? void 0 : _a.progress) < ((_b = props.ocrPercent) === null || _b === void 0 ? void 0 : _b.count) &&
        react_1.default.createElement("div", { style: {
                padding: '8px 0',
                display: 'flex',
                justifyContent: 'end'
            } },
            react_1.default.createElement("div", { style: {
                    width: 'auto',
                    backgroundColor: '#5746F1',
                    color: '#fff',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 2px 4px 16px, rgba(0, 0, 0, 0.06) -1px 10px 10px',
                    padding: '8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center'
                } },
                react_1.default.createElement("svg", { style: { marginRight: '4px' }, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })),
                react_1.default.createElement("span", null, props.ocrPercent.progress === 0 ? '正在处理图片，预计耗时 30s' : '正在处理图片...(' + props.ocrPercent.progress + '/' + props.ocrPercent.count + ')')))));
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
const index_1 = __webpack_require__(/*! ../index */ "./src/ContentScript/index.tsx");
const Tabs = __importStar(__webpack_require__(/*! @radix-ui/react-tabs */ "./node_modules/@radix-ui/react-tabs/dist/index.module.js"));
const antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
const StatusBar_1 = __webpack_require__(/*! ./StatusBar */ "./src/ContentScript/PopupCard/StatusBar.tsx");
const { Search } = antd_1.Input;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! @stitches/react */ "./node_modules/@stitches/react/dist/index.cjs");
const StyledItem = (0, react_2.styled)(Tabs.Root, {
    borderBottom: '1px solid gainsboro',
    color: 'red'
});
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
    const [ocrPercent, setOcrPercent] = (0, react_1.useState)();
    // 搜索框
    const inputRef = (0, react_1.useRef)(null);
    const timeIdRef = (0, react_1.useRef)();
    // const inputValue = useRef<string>('');
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
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
            windowElement.current.style.right = '20px';
            windowElement.current.style.top = '20px';
        }
        console.log('chulitupian==========');
        // 记录当前的位置
        const y = window.scrollY; // 或者使用 window.pageYOffset
        // 滚动到页面底部以让图片加载出来
        window.scrollTo(0, document.body.scrollHeight / 3);
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight / 2);
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight / 1.5);
            }, 1000);
            setTimeout(() => {
                // 回到滚动前的位置
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
                    setOcrPercent({ count: imageList.length, progress: imageList.length });
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
        console.log(event);
        if (event.keyCode === 13) {
            handleNextBtnClick(1);
        }
        if (event.keyCode === 13 && event.shiftKey) {
            handleNextBtnClick(-1);
        }
        if (event.keyCode === 27) {
            // 关闭窗口
            (0, index_1.closeContainer)();
        }
        // 缓存 input 的值
        // inputValue.current = event.target.value
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
        // const value = e.target.value
        if (value === '') {
            return;
        }
        // 停止输入 500ms 后执行搜索
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
                    newSearchResult.push({ 'text': item.text, 'image': image, 'bbox': item.bbox });
                }
            });
        }
        setIndex(0);
        setSearchResult(newSearchResult);
        setSearchStatus('end');
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
        // 显示 OCR 进度
        setOcrPercent({ count: imageUrlList.length, progress: 0 });
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
            setOcrPercent({ count: imageUrlList.length, progress: newHistory.length });
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
    const handleCloseBtnClick = () => {
        var _a;
        const container = document.getElementsByClassName('container')[0];
        (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
    };
    const onTabsValueChange = () => {
        console.log('onTabsValueChange');
    };
    const hanleInputChange = (event) => {
        setInputValue(event === null || event === void 0 ? void 0 : event.target.value);
        clearTimeout(timeIdRef.current);
        timeIdRef.current = setTimeout(() => {
            onSearch(event === null || event === void 0 ? void 0 : event.target.value);
        }, 500);
    };
    return (react_1.default.createElement("div", { id: "LearningEnglish2023", ref: windowElement },
        react_1.default.createElement(Tabs.Root, { defaultValue: "search", style: {
                backgroundColor: '#ffffff',
                boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.1), -1px 10px 10px rgba(0, 0, 0, 0.06)',
                borderRadius: '8px'
            }, onValueChange: onTabsValueChange },
            react_1.default.createElement(Tabs.List, { className: "TabsList", "aria-label": "Manage your account" },
                react_1.default.createElement(Tabs.Trigger, { className: "TabsTrigger", value: "search" },
                    react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })),
                    "Find"),
                react_1.default.createElement(Tabs.Trigger, { className: "TabsTrigger", value: "chat" },
                    react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })),
                    "Chat"),
                react_1.default.createElement("div", { className: 'closeBtn', style: {
                        flexBasis: '50%',
                        display: 'flex',
                        justifyContent: 'end'
                    } },
                    react_1.default.createElement("a", { onClick: index_1.closeContainer },
                        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))))),
            react_1.default.createElement(Tabs.Content, { className: "TabsContent", value: "search" },
                react_1.default.createElement("div", { className: 'SearchBox', style: {
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #E0E2E4',
                        borderRadius: '4px'
                    } },
                    react_1.default.createElement("div", { className: 'SearchInputBox', style: {
                            display: 'flex',
                            alignItems: 'center',
                            flex: '1'
                        } },
                        react_1.default.createElement("input", { value: inputValue, ref: inputRef, style: {
                                display: 'flex',
                                alignItems: 'center',
                                height: '30px',
                                flex: '1',
                                padding: '4px 0 4px 10px'
                            }, placeholder: "input search text", onChange: hanleInputChange, onKeyUp: handleInputOnKeyDown }),
                        react_1.default.createElement("div", { className: 'SearchResult', style: { color: '#999' } }, searchStatus === 'stanby' ? '' : searchResult.length === 0 ? '0/0' : index + 1 + '/' + searchResult.length),
                        react_1.default.createElement("div", { style: {
                                borderRight: '1.4px solid #E0E2E4',
                                height: '20px',
                                paddingLeft: '14px'
                            }, className: 'border' })),
                    react_1.default.createElement("div", { className: 'RightBtnBox', style: {
                            display: 'flex',
                            padding: '4px'
                        } },
                        react_1.default.createElement("a", { style: { paddingBottom: '4px' }, onClick: handleNextBtnClick.bind(event, -1) },
                            react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))),
                        react_1.default.createElement("a", { onClick: handleNextBtnClick.bind(event, 1) },
                            react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))))),
            react_1.default.createElement(Tabs.Content, { className: "TabsContent", value: "chat" }, "Coming soon...")),
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
exports.closeContainer = void 0;
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
const globalStyle = document.createElement('style');
globalStyle.textContent = `
  #LearningEnglish2023 {
    font-family: sans-serif;
    width: 320px;
    color: #333;
    position: fixed;
    display: flex;
    flex-direction: column;
    font-size: 13.4px;
    z-index: 9999;
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
shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(globalStyle);
const style = document.createElement('style');
style.textContent = `

/* reset */
button,
fieldset,
input {
  all: unset;
}

.SearchBox .RightBtnBox a , .closeBtn a {
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 4px;
}

.SearchBox .RightBtnBox a:hover, .closeBtn a:hover {
  background-color:#E0E2E4;
}

.TabsRoot {
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 2px 10px var(--blackA4);
}

.TabsList {
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid #E4E6E5;
  align-items: center;
  padding: 0 10px;
}

.TabsTrigger {
  font-family: inherit;
  background-color: white;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  color: var(--mauve11);
  user-select: none;
  flex-basis: 100px;
}
.TabsTrigger:first-child {
  border-top-left-radius: 6px;
}
.TabsTrigger:last-child {
  border-top-right-radius: 6px;
}
.TabsTrigger:hover {
  color: var(--violet11);
}
.TabsTrigger[data-state='active'] {
  color: #D96845;
  box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
}
.TabsTrigger:focus {
  position: relative;
}

.TabsTrigger svg {
  margin-right:4px;
}

.TabsContent {
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;
}
.TabsContent:focus {
  
}

.Text {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--mauve11);
  font-size: 15px;
  line-height: 1.5;
}

.Fieldset {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.Label {
  font-size: 13px;
  line-height: 1;
  margin-bottom: 10px;
  color: var(--violet12);
  display: block;
}

.Input {
  flex: 1 0 auto;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet11);
  box-shadow: 0 0 0 1px var(--violet7);
  height: 35px;
}
.Input:focus {
  box-shadow: 0 0 0 2px var(--violet8);
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.green {
  background-color: var(--green4);
  color: var(--green11);
}
.Button.green:hover {
  background-color: var(--green5);
}
.Button.green:focus {
  box-shadow: 0 0 0 2px var(--green7);
}

.statusBar svg path {
  transform-origin: center;
  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
const closeContainer = () => {
    var _a, _b;
    if (MyBox !== undefined && MyBox !== null) {
        // 隐藏窗口
        (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
        // 隐藏高亮
        let hightlightBox = document.getElementsByClassName('hightlightBox');
        while (hightlightBox.length > 0) {
            (_b = hightlightBox[0].parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(hightlightBox[0]);
        }
    }
};
exports.closeContainer = closeContainer;
// 显示应用窗口
function showPopupCard(msg, MyBox, shadowRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
            react_1.default.createElement(cssinjs_1.StyleProvider, { container: shadowRoot },
                react_1.default.createElement(PopupCard_1.PopupCard, { selection: msg }))), MyBox);
    });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1EQUFtRCx3QkFBd0I7QUFDM0UsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQix1REFBdUQsU0FBUyxvQkFBb0Isc0dBQXNHO0FBQzFMLDREQUE0RCw2Z0RBQTZnRDtBQUN6a0Q7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUNuREo7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixnREFBZ0QsbUJBQU8sQ0FBQyw0RkFBdUI7QUFDL0UsdUJBQXVCLG1CQUFPLENBQUMsOERBQWM7QUFDN0MsZ0JBQWdCLG1CQUFPLENBQUMsK0NBQVU7QUFDbEMsMEJBQTBCLG1CQUFPLENBQUMsc0ZBQXNCO0FBQ3hELGVBQWUsbUJBQU8sQ0FBQyw2Q0FBTTtBQUM3QixvQkFBb0IsbUJBQU8sQ0FBQyxnRUFBYTtBQUN6QyxRQUFRLFNBQVM7QUFDakIsNkJBQTZCLG1CQUFPLENBQUMsNENBQU87QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBcUQ7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4RUFBOEU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0RBQXNEO0FBQ2pHO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBOEU7QUFDeEcsa0NBQWtDLG9CQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlDQUF5QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVEsUUFBUTtBQUNyQztBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlDQUF5QyxTQUFTLHlDQUF5QywyQkFBMkI7QUFDcEosNEJBQTRCLHlEQUF5RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxpQkFBaUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UseUJBQXlCO0FBQ2pHO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsaUJBQWlCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBOEQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEIsaUNBQWlDLDBCQUEwQjtBQUMzRCxzREFBc0QsU0FBUztBQUMvRCxxREFBcUQsU0FBUztBQUM5RDtBQUNBLGlCQUFpQixFQU9KO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxtREFBbUQsK0NBQStDO0FBQ2xHLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9DQUFvQztBQUNqRCx1REFBdUQsNERBQTREO0FBQ25ILDhEQUE4RCwyQ0FBMkM7QUFDekcsMkRBQTJELG9HQUFvRztBQUMvSixnRUFBZ0UsNGRBQTRkO0FBQzVoQjtBQUNBLDhEQUE4RCx5Q0FBeUM7QUFDdkcsMkRBQTJELG9HQUFvRztBQUMvSixnRUFBZ0Usc21CQUFzbUI7QUFDdHFCO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5REFBeUQsaUNBQWlDO0FBQzFGLCtEQUErRCxvR0FBb0c7QUFDbkssb0VBQW9FLHdrQkFBd2tCO0FBQzVvQiwwREFBMEQsMkNBQTJDO0FBQ3JHLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtGQUErRjtBQUM1SCwrREFBK0Qsb0NBQW9DLGlCQUFpQjtBQUNwSCwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRCwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiw2REFBNkQsU0FBUyxzQkFBc0IsK0NBQStDO0FBQzNJLG1FQUFtRSxvR0FBb0c7QUFDdkssd0VBQXdFLHVZQUF1WTtBQUMvYyw2REFBNkQsNENBQTRDO0FBQ3pHLG1FQUFtRSxvR0FBb0c7QUFDdkssd0VBQXdFLHVZQUF1WTtBQUMvYywwREFBMEQseUNBQXlDO0FBQ25HLCtEQUErRCx3QkFBd0I7QUFDdkY7QUFDQSxpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7O0FDbHBCYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QixnREFBZ0QsbUJBQU8sQ0FBQyw0RkFBdUI7QUFDL0UsZ0NBQWdDLG1CQUFPLENBQUMsNENBQU87QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsb0RBQVc7QUFDdkQsb0JBQW9CLG1CQUFPLENBQUMsNERBQWE7QUFDekMsa0JBQWtCLG1CQUFPLENBQUMsMkVBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZ0ZBQWdGLGNBQWM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSx1QkFBdUI7QUFDNUYsdUVBQXVFLGdCQUFnQjtBQUN2RixLQUFLO0FBQ0w7Ozs7Ozs7VUMxU0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxzQ0FBc0MsaUVBQWlFO1dBQ3ZHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDVkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbnRlbnRTY3JpcHQvUG9wdXBDYXJkL1N0YXR1c0Jhci50c3giLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvQ29udGVudFNjcmlwdC9Qb3B1cENhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL0NvbnRlbnRTY3JpcHQvaW5kZXgudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGF0dXNCYXIgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBTdGF0dXNCYXIocHJvcHMpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN0YXR1c0JhclwiIH0sIHByb3BzLm9jclBlcmNlbnQgIT09IHVuZGVmaW5lZCAmJiAoKF9hID0gcHJvcHMub2NyUGVyY2VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2dyZXNzKSA8ICgoX2IgPSBwcm9wcy5vY3JQZXJjZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY291bnQpICYmXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDAnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2VuZCdcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU3NDZGMScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4xKSAycHggNHB4IDE2cHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgLTFweCAxMHB4IDEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAnNHB4JyB9LCB3aWR0aDogXCIxNVwiLCBoZWlnaHQ6IFwiMTVcIiwgdmlld0JveDogXCIwIDAgMTUgMTVcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMS45MDMyMSA3LjI5Njc3QzEuOTAzMjEgMTAuMzQxIDQuMTEwNDEgMTIuNDE0NyA2LjU4ODkzIDEyLjg0MzlDNi44NzI1NSAxMi44OTMgNy4wNjI2NiAxMy4xNjI3IDcuMDEzNTUgMTMuNDQ2NEM2Ljk2NDQ0IDEzLjczIDYuNjk0NzEgMTMuOTIwMSA2LjQxMTA5IDEzLjg3MUMzLjQ5OTQyIDEzLjM2NjggMC44NjA4NCAxMC45MTI3IDAuODYwODQgNy4yOTY3N0MwLjg2MDgzOSA1Ljc2MDA5IDEuNTU5OTYgNC41NTI0NSAyLjM3NjM5IDMuNjMzNzdDMi45NjEyNCAyLjk3NTY4IDMuNjMwMzQgMi40NDEzNSA0LjE2ODQ2IDIuMDMyMDJMMi41MzIwNSAyLjAzMjAyQzIuMjU1OTEgMi4wMzIwMiAyLjAzMjA1IDEuODA4MTYgMi4wMzIwNSAxLjUzMjAyQzIuMDMyMDUgMS4yNTU4OCAyLjI1NTkxIDEuMDMyMDIgMi41MzIwNSAxLjAzMjAyTDUuNTMyMDUgMS4wMzIwMkM1LjgwODE5IDEuMDMyMDIgNi4wMzIwNSAxLjI1NTg4IDYuMDMyMDUgMS41MzIwMkw2LjAzMjA1IDQuNTMyMDJDNi4wMzIwNSA0LjgwODE2IDUuODA4MTkgNS4wMzIwMiA1LjUzMjA1IDUuMDMyMDJDNS4yNTU5MSA1LjAzMjAyIDUuMDMyMDUgNC44MDgxNiA1LjAzMjA1IDQuNTMyMDJMNS4wMzIwNSAyLjY4NjQ1TDUuMDMwNTQgMi42ODc1OUw1LjAzMDQ1IDIuNjg3NjZMNS4wMzA0NCAyLjY4NzY3TDUuMDMwNDMgMi42ODc2N0M0LjQ1ODk2IDMuMTE4NjggMy43NjA1OSAzLjY0NTM4IDMuMTU1NTQgNC4zMjYyQzIuNDQxMDIgNS4xMzAyMSAxLjkwMzIxIDYuMTAxNTQgMS45MDMyMSA3LjI5Njc3Wk0xMy4wMTA5IDcuNzAzMjFDMTMuMDEwOSA0LjY5MTE1IDEwLjg1MDUgMi42Mjk2IDguNDAzODQgMi4xNzAyOUM4LjEyMDkzIDIuMTE3MTggNy45MzQ2NSAxLjg0NDc5IDcuOTg3NzYgMS41NjE4OEM4LjA0MDg3IDEuMjc4OTggOC4zMTMyNiAxLjA5MjcgOC41OTYxNiAxLjE0NTgxQzExLjQ3MDQgMS42ODU0MSAxNC4wNTMyIDQuMTI2MDUgMTQuMDUzMiA3LjcwMzIxQzE0LjA1MzIgOS4yMzk4OCAxMy4zNTQxIDEwLjQ0NzUgMTIuNTM3NyAxMS4zNjYyQzExLjk1MjggMTIuMDI0MyAxMS4yODM3IDEyLjU1ODYgMTAuNzQ1NiAxMi45NjhMMTIuMzgyMSAxMi45NjhDMTIuNjU4MiAxMi45NjggMTIuODgyMSAxMy4xOTE4IDEyLjg4MjEgMTMuNDY4QzEyLjg4MjEgMTMuNzQ0MSAxMi42NTgyIDEzLjk2OCAxMi4zODIxIDEzLjk2OEw5LjM4MjA1IDEzLjk2OEM5LjEwNTkxIDEzLjk2OCA4Ljg4MjA1IDEzLjc0NDEgOC44ODIwNSAxMy40NjhMOC44ODIwNSAxMC40NjhDOC44ODIwNSAxMC4xOTE4IDkuMTA1OTEgOS45Njc5NiA5LjM4MjA1IDkuOTY3OTZDOS42NTgxOSA5Ljk2Nzk2IDkuODgyMDUgMTAuMTkxOCA5Ljg4MjA1IDEwLjQ2OEw5Ljg4MjA1IDEyLjMxMzVMOS44ODM2MiAxMi4zMTIzQzEwLjQ1NTEgMTEuODgxMyAxMS4xNTM1IDExLjM1NDYgMTEuNzU4NSAxMC42NzM4QzEyLjQ3MzEgOS44Njk3NiAxMy4wMTA5IDguODk4NDQgMTMuMDEwOSA3LjcwMzIxWlwiLCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBcImZpbGwtcnVsZVwiOiBcImV2ZW5vZGRcIiwgXCJjbGlwLXJ1bGVcIjogXCJldmVub2RkXCIgfSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBwcm9wcy5vY3JQZXJjZW50LnByb2dyZXNzID09PSAwID8gJ+ato+WcqOWkhOeQhuWbvueJh++8jOmihOiuoeiAl+aXtiAzMHMnIDogJ+ato+WcqOWkhOeQhuWbvueJhy4uLignICsgcHJvcHMub2NyUGVyY2VudC5wcm9ncmVzcyArICcvJyArIHByb3BzLm9jclBlcmNlbnQuY291bnQgKyAnKScpKSkpKTtcbn1cbmV4cG9ydHMuU3RhdHVzQmFyID0gU3RhdHVzQmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3B1cENhcmQgPSB2b2lkIDA7XG5jb25zdCB3ZWJleHRlbnNpb25fcG9seWZpbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpKTtcbmNvbnN0IHRlc3NlcmFjdF9qc18xID0gcmVxdWlyZShcInRlc3NlcmFjdC5qc1wiKTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi4vaW5kZXhcIik7XG5jb25zdCBUYWJzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJAcmFkaXgtdWkvcmVhY3QtdGFic1wiKSk7XG5jb25zdCBhbnRkXzEgPSByZXF1aXJlKFwiYW50ZFwiKTtcbmNvbnN0IFN0YXR1c0Jhcl8xID0gcmVxdWlyZShcIi4vU3RhdHVzQmFyXCIpO1xuY29uc3QgeyBTZWFyY2ggfSA9IGFudGRfMS5JbnB1dDtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0XzIgPSByZXF1aXJlKFwiQHN0aXRjaGVzL3JlYWN0XCIpO1xuY29uc3QgU3R5bGVkSXRlbSA9ICgwLCByZWFjdF8yLnN0eWxlZCkoVGFicy5Sb290LCB7XG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdhaW5zYm9ybycsXG4gICAgY29sb3I6ICdyZWQnXG59KTtcbmZ1bmN0aW9uIFBvcHVwQ2FyZChwcm9wcykge1xuICAgIC8vIOeql+WPo+aLluaLvemAu+i+kVxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGZhbHNlKTtcbiAgICBjb25zdCB3aW5kb3dFbGVtZW50ID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICAvLyDkv53lrZggT0NSIOivhuWIq+eahOe7k+aenO+8jOeUqOS6juWQjue7reeahOaQnOe0olxuICAgIGNvbnN0IG9jclJlc3VsdCA9ICgwLCByZWFjdF8xLnVzZVJlZikoW10pO1xuICAgIC8vIOS/neWtmOaQnOe0oue7k+aenFxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHQsIHNldFNlYXJjaFJlc3VsdF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW10pO1xuICAgIC8vIOS/neWtmOaQnOe0oue7k+aenOS4re+8jOW9k+WJjeWumuS9jeWIsOWTquS4quS9jee9rlxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKDApO1xuICAgIGNvbnN0IFtzZWFyY2hTdGF0dXMsIHNldFNlYXJjaFN0YXR1c10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoJ3N0YW5ieScpO1xuICAgIGNvbnN0IFtvY3JQZXJjZW50LCBzZXRPY3JQZXJjZW50XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpO1xuICAgIC8vIOaQnOe0ouahhlxuICAgIGNvbnN0IGlucHV0UmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKShudWxsKTtcbiAgICBjb25zdCB0aW1lSWRSZWYgPSAoMCwgcmVhY3RfMS51c2VSZWYpKCk7XG4gICAgLy8gY29uc3QgaW5wdXRWYWx1ZSA9IHVzZVJlZjxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoJycpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOiuvue9rueql+WPo+eahOm7mOiupOS9jee9rlxuICAgICAgICBpZiAod2luZG93RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3dIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgLy8gY29uc3QgbmV3WCA9IG1heFggLSAyMFxuICAgICAgICAgICAgLy8gY29uc3QgbmV3WSA9IHByb3BzLnNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wICsgcHJvcHMuc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAyMFxuICAgICAgICAgICAgLy8gY29uc3QgY2xhbXBlZFggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihuZXdYLCBtYXhYKSk7XG4gICAgICAgICAgICAvLyBjb25zdCBjbGFtcGVkWSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG5ld1ksIG1heFkpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGlvbi5nZXRSYW5nZUF0KDApKTtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS5yaWdodCA9ICcyMHB4JztcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5zdHlsZS50b3AgPSAnMjBweCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NodWxpdHVwaWFuPT09PT09PT09PScpO1xuICAgICAgICAvLyDorrDlvZXlvZPliY3nmoTkvY3nva5cbiAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDmiJbogIXkvb/nlKggd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgIC8vIOa7muWKqOWIsOmhtemdouW6lemDqOS7peiuqeWbvueJh+WKoOi9veWHuuadpVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAzKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAvIDEuNSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWbnuWIsOa7muWKqOWJjeeahOS9jee9rlxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB5KTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgLy8g6I635Y+W6aG16Z2i5LiK6ZyA6KaBIE9DUiDnmoTlm77niYdcbiAgICAgICAgbGV0IGltYWdlTGlzdCA9IGdldFByb2R1Y3RJbWFnZSgpO1xuICAgICAgICBpZiAoaW1hZ2VMaXN0Lmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICAvLyDojrflj5YgT0NSIOe7k+aenOeahOWOhuWPsuiusOW9lVxuICAgICAgICAgICAgZ2V0T0NSSGlzdG9yeShpbWFnZUxpc3QpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3pobXpnaLkuK3nmoTlm77niYfnmoQgT0NSIOe7k+aenOWcqOacrOWcsOiusOW9leS4reaJvuWIsOS6hu+8jOWImeebtOaOpeeUqOWOhuWPsuiusOW9leeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICBvY3JSZXN1bHQuY3VycmVudCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHNldE9jclBlcmNlbnQoeyBjb3VudDogaW1hZ2VMaXN0Lmxlbmd0aCwgcHJvZ3Jlc3M6IGltYWdlTGlzdC5sZW5ndGggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPQ1Ig5Zu+54mHXG4gICAgICAgICAgICAgICAgICAgIGltYWdlT2NyKGltYWdlTGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHNdKTtcbiAgICAvLyDnqpflj6Pmi5bmi73ml7bop6blj5FcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZUVmZmVjdCByZXR1cm4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgfSwgW2RyYWdnaW5nXSk7XG4gICAgLy8g5pCc57Si5a6M5q+V5ZCO6Kem5Y+RXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIC8vIOaQnOe0ouWujOavleWQju+8jOWumuS9jeWIsOesrOS4gOS4quaQnOe0oue7k+aenFxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdvVG9JbWFnZShzZWFyY2hSZXN1bHRbMF0pO1xuICAgICAgICB9XG4gICAgfSwgW3NlYXJjaFJlc3VsdF0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8g6I635Y+W6aG16Z2i5LiK6ZyA6KaBIE9DUiDnmoTlm77niYdcbiAgICAgICAgbGV0IGltYWdlTm9kZSA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKLWRldGFpbC1jb250ZW50JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgIGxldCBpbWFnZUxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKGltYWdlTm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChpbWFnZU5vZGUgPT09IG51bGwgfHwgaW1hZ2VOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWFnZU5vZGUubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGltYWdlTm9kZVtpXVsnY3VycmVudFNyYyddLnJlcGxhY2UoJy5hdmlmJywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZU5vZGVbaV1bJ2N1cnJlbnRTcmMnXS5pbmRleE9mKCcuZ2lmJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlua0hlYXJkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXp5bG9hZCA9IGltYWdlTm9kZVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF6eWxvYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhenlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF6eWxvYWQuaW5kZXhPZignaHR0cCcpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIZWFyZCA9ICdodHRwczonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGxpbmtIZWFyZCArICgoX2IgPSBpbWFnZU5vZGVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWxhenlsb2FkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCcuYXZpZicsICcnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlTGlzdC5wdXNoKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW1hZ2VMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRE9NTGlzdCA9IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzc2QtbW9kdWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRE9NTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VET01MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2VET01MaXN0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZS5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnLmF2aWYnLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaXN0LnB1c2goYmFja2dyb3VuZEltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VMaXN0O1xuICAgIH07XG4gICAgLy8g5LqM5YC85YyW5Ye95pWwXG4gICAgZnVuY3Rpb24gYmluYXJpemVJbWFnZShpbWFnZURhdGEsIHRocmVzaG9sZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICBjb25zdCBncmF5ID0gKGltYWdlRGF0YS5kYXRhW2ldICsgaW1hZ2VEYXRhLmRhdGFbaSArIDFdICsgaW1hZ2VEYXRhLmRhdGFbaSArIDJdKSAvIDM7XG4gICAgICAgICAgICBjb25zdCBiaW5hcnkgPSBncmF5IDwgdGhyZXNob2xkID8gMCA6IDI1NTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2ldID0gYmluYXJ5O1xuICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDFdID0gYmluYXJ5O1xuICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdID0gYmluYXJ5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZURhdGE7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUlucHV0T25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVJbnB1dE9uS2V5RG93bicpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaGFuZGxlTmV4dEJ0bkNsaWNrKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlTmV4dEJ0bkNsaWNrKC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIC8vIOWFs+mXreeql+WPo1xuICAgICAgICAgICAgKDAsIGluZGV4XzEuY2xvc2VDb250YWluZXIpKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g57yT5a2YIGlucHV0IOeahOWAvFxuICAgICAgICAvLyBpbnB1dFZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIC8vIOmAmui/h+WbvueJh+eahCBVUkwg6I635Y+W5a+55bqU55qE5Zu+54mHIERPTSDpk77mjqVcbiAgICBjb25zdCBmaW5kTm9kZSA9IChpbWFnZVVybCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBpbWFnZU5vZGUgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBpZiAoaW1hZ2VOb2RlICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNVcmwgPSBpbWFnZU5vZGVbaV0uY3VycmVudFNyYztcbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKCcuZ2lmJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVXJsID0gJ2h0dHBzOicgKyAoKF9iID0gaW1hZ2VOb2RlW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5bG9hZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgnLmF2aWYnLCAnJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpc1VybC5pbmRleE9mKGltYWdlVXJsKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlTm9kZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZU5vZGVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5Zu+54mH5piv5pS+572u5ZyoIGRpdiDnmoQgYmFja2dyb3VuZC1pbWFnZSDlsZ7mgKfkuK1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSi1kZXRhaWwtY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VET01MaXN0ID0gY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NzZC1tb2R1bGUnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZURPTUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VET01MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbWFnZURPTUxpc3Rbal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCcuYXZpZicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UuaW5kZXhPZihpbWFnZVVybCkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICAvLyDojrflj5bmjIflrpogRE9NIOWFg+e0oOWcqOaVtOS4qumhtemdouS4reeahCBZIOWdkOagh1xuICAgIGNvbnN0IGdldEVsZW1lbnRUb3AgPSAoZWxlbSkgPT4ge1xuICAgICAgICBsZXQgdG9wID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIHRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wO1xuICAgIH07XG4gICAgLy8g6I635Y+W5oyH5a6aIERPTSDlhYPntKDlnKjmlbTkuKrpobXpnaLkuK3nmoQgWCDlnZDmoIdcbiAgICBjb25zdCBnZXRFbGVtZW50TGVmdCA9IChlbGVtKSA9PiB7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgIGxlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH07XG4gICAgLy8g5qC55o2u5pCc57Si57uT5p6c77yM5Zyo6aG16Z2i5LiK5riy5p+TIEhpZ2h0bGlnaHTvvIzluK7liqnnlKjmiLfmib7liLDmkJzntKLnu5PmnpxcbiAgICBjb25zdCBzaG93SGlnaHRsaWdodCA9IChzZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgLy8g5YWI56e76Zmk5pen55qEIEhpZ2h0bGlnaHQg5L+h5oGvXG4gICAgICAgIHJlbW92ZUhpZ2h0bGlnaHQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdCk7XG4gICAgICAgICAgICAvLyBsZXQgaGlnaHRsaWdodEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAvLyBoaWdodGxpZ2h0Qm94LmNsYXNzTGlzdC5hZGQoJ2hpZ2h0bGlnaHRCb3gnKVxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5Zu+54mH6IqC54K5XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBib3guc3R5bGUud2lkdGggPSBpdGVtLmJib3gueDEgLSBpdGVtLmJib3gueDAgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5oZWlnaHQgPSBpdGVtLmJib3gueTEgLSBpdGVtLmJib3gueTAgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGlnaHRsaWdodEJveCcpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS50b3AgPSBNYXRoLmFicyhnZXRFbGVtZW50VG9wKG5vZGUpICsgaXRlbS5iYm94LnkwKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5sZWZ0ID0gTWF0aC5hYnMoZ2V0RWxlbWVudExlZnQobm9kZSkgKyBpdGVtLmJib3gueDApICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm94KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coTWF0aC5hYnMoZ2V0RWxlbWVudFRvcChub2RlKSArIGl0ZW0uYmJveC55MCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0RWxlbWVudFRvcChub2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uYmJveCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZ2h0bGlnaHRCb3gpO1xuICAgIH07XG4gICAgLy8g56e76Zmk5pen55qEIEhpZ2h0bGlnaHRcbiAgICBjb25zdCByZW1vdmVIaWdodGxpZ2h0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGhpZ2h0bGlnaHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdodGxpZ2h0Qm94Jyk7XG4gICAgICAgICAgICB3aGlsZSAoaGlnaHRsaWdodEJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gaGlnaHRsaWdodEJveFswXS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoaGlnaHRsaWdodEJveFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCdkb25lJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g5pCc57SiXG4gICAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YGc5q2i6L6T5YWlIDUwMG1zIOWQjuaJp+ihjOaQnOe0olxuICAgICAgICAvLyDmuIXnqbrml6fnmoTmkJzntKLnu5PmnpxcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0KFtdKTtcbiAgICAgICAgbGV0IG5ld1NlYXJjaFJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9jclJlc3VsdC5jdXJyZW50KTtcbiAgICAgICAgLy8gU2VhcmNoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2NyUmVzdWx0LmN1cnJlbnQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG9jclJlc3VsdC5jdXJyZW50W2ldLmltYWdlO1xuICAgICAgICAgICAgLy8g6YGN5Y6G6K+G5Yir57uT5p6c55qE5q+P5Liq5q616JC9XG4gICAgICAgICAgICBvY3JSZXN1bHQuY3VycmVudFtpXS5saW5lcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGV4dC5yZXBsYWNlKC9cXHMvZywgJycpLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+U5ZueIHRleHTvvIjpgJrluLjmmK/kuIDmlbTooYznmoTmloflrZfvvIzlm77niYcgVVJM77yM6L+Z6KGM5paH5a2X55qEIGJib3jvvIlcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VhcmNoUmVzdWx0LnB1c2goeyAndGV4dCc6IGl0ZW0udGV4dCwgJ2ltYWdlJzogaW1hZ2UsICdiYm94JzogaXRlbS5iYm94IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldEluZGV4KDApO1xuICAgICAgICBzZXRTZWFyY2hSZXN1bHQobmV3U2VhcmNoUmVzdWx0KTtcbiAgICAgICAgc2V0U2VhcmNoU3RhdHVzKCdlbmQnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyDlnKjpobXpnaLkuK3mmL7npLrmkJzntKLnu5PmnpxcbiAgICAgICAgICAgIHNob3dIaWdodGxpZ2h0KG5ld1NlYXJjaFJlc3VsdCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU5leHRCdG5DbGljayA9IChvZmZzZXQpID0+IHtcbiAgICAgICAgbGV0IHBvc3Rpb24gPSBpbmRleCArIG9mZnNldDtcbiAgICAgICAgaWYgKHBvc3Rpb24gPj0gc2VhcmNoUmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcG9zdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc3Rpb24gPCAwKSB7XG4gICAgICAgICAgICBwb3N0aW9uID0gc2VhcmNoUmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZ29Ub0ltYWdlKHNlYXJjaFJlc3VsdFtwb3N0aW9uXSk7XG4gICAgICAgIHNldEluZGV4KHBvc3Rpb24pO1xuICAgIH07XG4gICAgLy8g5a6a5L2N5Yiw5oyH5a6a5Zu+54mHXG4gICAgY29uc3QgZ29Ub0ltYWdlID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZmluZE5vZGUodGFyZ2V0LmltYWdlKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgbGVmdDogMCwgdG9wOiBnZXRFbGVtZW50VG9wKG5vZGUpICsgdGFyZ2V0LmJib3gueTAgLSAxNDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgLy8gbm9kZT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIC8vIHdpbmRvdy5zY3JvbGxCeSgwLCB0YXJnZXQuYmJveC55MCArIDEwMCk7XG4gICAgfTtcbiAgICAvLyDlr7nlm77niYfov5vooYwgT0NSXG4gICAgY29uc3QgaW1hZ2VPY3IgPSAoaW1hZ2VVcmxMaXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOaYvuekuiBPQ1Ig6L+b5bqmXG4gICAgICAgIHNldE9jclBlcmNlbnQoeyBjb3VudDogaW1hZ2VVcmxMaXN0Lmxlbmd0aCwgcHJvZ3Jlc3M6IDAgfSk7XG4gICAgICAgIC8vIFRlc3NlcmFjdC5yZWNvZ25pemUoXG4gICAgICAgIC8vICAgaW1hZ2VVcmwsXG4gICAgICAgIC8vICAgJ2NoaV9zaW0nLFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIGxvZ2dlcjogbSA9PiB7XG4gICAgICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKG0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gKS50aGVuKCh7IGRhdGE6IHsgdGV4dCB9IH0pID0+IHtcbiAgICAgICAgLy8gICByZXNvbHZlKHRleHQpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlciA9ICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVTY2hlZHVsZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlciA9IHlpZWxkICgwLCB0ZXNzZXJhY3RfanNfMS5jcmVhdGVXb3JrZXIpKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlcjIgPSB5aWVsZCAoMCwgdGVzc2VyYWN0X2pzXzEuY3JlYXRlV29ya2VyKSgpO1xuICAgICAgICBjb25zdCB3b3JrZXIzID0geWllbGQgKDAsIHRlc3NlcmFjdF9qc18xLmNyZWF0ZVdvcmtlcikoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNCA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI1ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIC8vIGNvbnN0IHdvcmtlcjYgPSBhd2FpdCBjcmVhdGVXb3JrZXIoKTtcbiAgICAgICAgLy8gY29uc3Qgd29ya2VyNyA9IGF3YWl0IGNyZWF0ZVdvcmtlcigpO1xuICAgICAgICAvLyBjb25zdCB3b3JrZXI4ID0gYXdhaXQgY3JlYXRlV29ya2VyKCk7XG4gICAgICAgIHlpZWxkIHdvcmtlci5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyLmluaXRpYWxpemUoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5sb2FkTGFuZ3VhZ2UoJ2NoaV9zaW0nKTtcbiAgICAgICAgeWllbGQgd29ya2VyMi5pbml0aWFsaXplKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMubG9hZExhbmd1YWdlKCdjaGlfc2ltJyk7XG4gICAgICAgIHlpZWxkIHdvcmtlcjMuaW5pdGlhbGl6ZSgnY2hpX3NpbScpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI0LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI1LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNS5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI2LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNi5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI3LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyNy5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICAvLyBhd2FpdCB3b3JrZXI4LmxvYWRMYW5ndWFnZSgnY2hpX3NpbStlbmcnKTtcbiAgICAgICAgLy8gYXdhaXQgd29ya2VyOC5pbml0aWFsaXplKCdjaGlfc2ltK2VuZycpO1xuICAgICAgICBzY2hlZHVsZXIuYWRkV29ya2VyKHdvcmtlcik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMik7XG4gICAgICAgIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyMyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNCk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNSk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNik7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyNyk7XG4gICAgICAgIC8vIHNjaGVkdWxlci5hZGRXb3JrZXIod29ya2VyOCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gaW1hZ2VVcmxMaXN0Lm1hcCgoaW1hZ2VVcmwpID0+ICh7XG4gICAgICAgICAgICAncmVzdWx0Jzogc2NoZWR1bGVyLmFkZEpvYigncmVjb2duaXplJywgaW1hZ2VVcmwsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIHRleHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJsb2NrczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob2NyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0c3Y6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5sdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3NkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwZGY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlR3JleTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VCaW5hcnk6IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnaW1hZ2UnOiBpbWFnZVVybFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBuZXdJYW1nZSA9IFtdO1xuICAgICAgICBsZXQgbmV3SGlzdG9yeSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHByb21pc2UucmVzdWx0O1xuICAgICAgICAgICAgLy8gcmVzdWx0LmRhdGEudGV4dCA9IHJlc3VsdC5kYXRhLnRleHQucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvbWlzZS5pbWFnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGRhdGUxLmdldFRpbWUoKSkgLyAxMDAwKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnbGluZXMnOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgJ2ltYWdlJzogcHJvbWlzZS5pbWFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBuZXdJYW1nZS5wdXNoKGRhdGEpXG4gICAgICAgICAgICBuZXdIaXN0b3J5LnB1c2goeyAnbGluZXMnOiByZXN1bHQuZGF0YS5saW5lcy5tYXAoaXRlbSA9PiB7IHJldHVybiB7ICdiYm94JzogaXRlbS5iYm94LCAndGV4dCc6IGl0ZW0udGV4dCB9OyB9KSwgJ2ltYWdlJzogcHJvbWlzZS5pbWFnZSB9KTtcbiAgICAgICAgICAgIHNldE9jclBlcmNlbnQoeyBjb3VudDogaW1hZ2VVcmxMaXN0Lmxlbmd0aCwgcHJvZ3Jlc3M6IG5ld0hpc3RvcnkubGVuZ3RoIH0pO1xuICAgICAgICAgICAgb2NyUmVzdWx0LmN1cnJlbnQgPSBuZXdIaXN0b3J5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG9jclJlc3VsdC5jdXJyZW50KTtcbiAgICAgICAgLy8g5L+d5a2Y5Yiw5Y6G5Y+y6K6w5b2V5LitXG4gICAgICAgIC8vIOWmguaenOW3suacieatpOiusOW9leWImeS4jeeUqOmHjeWkjeS/neWtmFxuICAgICAgICBnZXRPQ1JIaXN0b3J5KGltYWdlVXJsTGlzdCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgd2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEuZGVmYXVsdC5zdG9yYWdlLmxvY2FsLmdldCh7IFwib2NyUmVzdWx0XCI6IFtdIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdPY3JSZXN1bHQgPSBbbmV3SGlzdG9yeSwgLi4uZGF0YS5vY3JSZXN1bHRdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdPY3JSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBuZXdPY3JSZXN1bHQuc3BsaWNlKDIwKTtcbiAgICAgICAgICAgICAgICAgICAgd2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEuZGVmYXVsdC5zdG9yYWdlLmxvY2FsLnNldCh7IG9jclJlc3VsdDogbmV3T2NyUmVzdWx0IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBzY2hlZHVsZXIudGVybWluYXRlKCk7IC8vIEl0IGFsc28gdGVybWluYXRlcyBhbGwgd29ya2Vycy5cbiAgICAgICAgbGV0IGRhdGUyID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coTWF0aC5mbG9vcigoZGF0ZTIuZ2V0VGltZSgpIC0gZGF0ZTEuZ2V0VGltZSgpKSAvIDEwMDApKTtcbiAgICB9KTtcbiAgICAvLyDojrflj5YgT0NSIOWOhuWPsuiusOW9lVxuICAgIGNvbnN0IGdldE9DUkhpc3RvcnkgPSAoaW1hZ2VVcmxMaXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3ZWJleHRlbnNpb25fcG9seWZpbGxfMS5kZWZhdWx0LnN0b3JhZ2UubG9jYWwuZ2V0KHsgXCJvY3JSZXN1bHRcIjogW10gfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub2NyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBvY3JSZXN1bHQgPSBkYXRhLm9jclJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyDpgY3ljobmr4/kuIDmnaHljoblj7LorrDlvZVcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9jclJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaXN0b3J5SW1hZ2UgPSBvY3JSZXN1bHRbaV0ubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGltYWdlVXJsTGlzdCkgPT09IEpTT04uc3RyaW5naWZ5KGhpc3RvcnlJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob2NyUmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnvKnmlL7lm77niYdcbiAgICBjb25zdCBzY2FsZUltYWdlID0gKGltYWdlVXJsLCBzY2FsZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzY2FsZSk7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJzsgLy8g5re75YqgIGNyb3NzT3JpZ2luIOWxnuaAp1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlZEltYWdlVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpOyAvLyBxdWFsaXR5IOWPr+S7peiuvue9ruWbvueJh+WOi+e8qei0qOmHj1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjYWxlZEltYWdlVXJsKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNjYWxlZEltYWdlVXJsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g5Y675Zmq54K5XG4gICAgY29uc3QgZGVub2lzZUltYWdlID0gKGltYWdlVXJsLCByYWRpdXMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnOyAvLyDmt7vliqAgY3Jvc3NPcmlnaW4g5bGe5oCnXG4gICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxzID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcGl4ZWxzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHJhZGl1cyAqIDI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnID0gZGF0YVtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gZGF0YVtpICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IGRhdGFbaSArIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JheSA9IChyICsgZyArIGIpIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhyIC0gZ3JheSkgPiB0aHJlc2hvbGQgfHwgTWF0aC5hYnMoZyAtIGdyYXkpID4gdGhyZXNob2xkIHx8IE1hdGguYWJzKGIgLSBncmF5KSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2kgKyAxXSA9IGRhdGFbaSArIDJdID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEocGl4ZWxzLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVub2lzZWRJbWFnZVVybCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAxKTsgLy8gcXVhbGl0eSDlj6/ku6Xorr7nva7lm77niYfljovnvKnotKjph49cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkZW5vaXNlZEltYWdlVXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUG9wdXBDYXJkOmhhbmRsZU1vdXNlRG93bicpO1xuICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgaWYgKHdpbmRvd0VsZW1lbnQuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFggPSBTdHJpbmcob2Zmc2V0WCk7XG4gICAgICAgICAgICB3aW5kb3dFbGVtZW50LmN1cnJlbnQuZGF0YXNldC5vZmZzZXRZID0gU3RyaW5nKG9mZnNldFkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldE9mZnNldCh7IHg6IGV2ZW50LmNsaWVudFggLSBwb3NpdGlvbi54LCB5OiBldmVudC5jbGllbnRZIC0gcG9zaXRpb24ueSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnUG9wdXBDYXJkOmhhbmRsZU1vdXNlTW92ZScpO1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhkcmFnZ2luZyk7XG4gICAgICAgIGlmIChkcmFnZ2luZyAmJiB3aW5kb3dFbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gdGhyb3R0bGUgdGhlIG1vdXNlbW92ZSBldmVudCBoYW5kbGluZ1xuICAgICAgICAgICAgLy8g6byg5qCH55u45a+556qX5Y+j5bem5LiK6KeS55qE5YGP56e7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gcGFyc2VGbG9hdCh3aW5kb3dFbGVtZW50LmN1cnJlbnQuZGF0YXNldC5vZmZzZXRYIHx8ICcnKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSBwYXJzZUZsb2F0KHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFkgfHwgJycpO1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IGV2ZW50LmNsaWVudFggLSBvZmZzZXRYO1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IGV2ZW50LmNsaWVudFkgLSBvZmZzZXRZO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGJvdW5kYXJpZXNcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50V2lkdGggPSB3aW5kb3dFbGVtZW50LmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gd2luZG93RWxlbWVudC5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSAwO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhYID0gd2luZG93V2lkdGggLSBlbGVtZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93SGVpZ2h0IC0gZWxlbWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRYID0gTWF0aC5tYXgobWluWCwgTWF0aC5taW4obmV3WCwgbWF4WCkpO1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFkgPSBNYXRoLm1heChtaW5ZLCBNYXRoLm1pbihuZXdZLCBtYXhZKSk7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcG9zaXRpb24gaWYgaXQncyB3aXRoaW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgICAgICAgIC8vIG5ld1ggPj0gbWluWCAmJiBuZXdYIDw9IG1heFggJiYgbmV3WSA+PSBtaW5ZICYmIG5ld1kgPD0gbWF4WVxuICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXRQb3NpdGlvbih7IHg6IGNsYW1wZWRYLCB5OiBjbGFtcGVkWSB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmN1cnJlbnQuc3R5bGUubGVmdCA9IGAke2NsYW1wZWRYfXB4YDtcbiAgICAgICAgICAgICAgICB3aW5kb3dFbGVtZW50LmN1cnJlbnQuc3R5bGUudG9wID0gYCR7Y2xhbXBlZFl9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5YWD57Sg5Yiw6L6+6L6555WMXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVjdCA9IHdpbmRvd0VsZW1lbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvZmZzZXRYID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvZmZzZXRZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvd0VsZW1lbnQuY3VycmVudC5kYXRhc2V0Lm9mZnNldFggPSBTdHJpbmcob2Zmc2V0WCk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93RWxlbWVudC5jdXJyZW50LmRhdGFzZXQub2Zmc2V0WSA9IFN0cmluZyhvZmZzZXRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ1BvcHVwQ2FyZDpoYW5kbGVNb3VzZVVwJyk7XG4gICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJylbMF07XG4gICAgICAgIChfYSA9IGNvbnRhaW5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uVGFic1ZhbHVlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb25UYWJzVmFsdWVDaGFuZ2UnKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVJZFJlZi5jdXJyZW50KTtcbiAgICAgICAgdGltZUlkUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG9uU2VhcmNoKGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH07XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBcIkxlYXJuaW5nRW5nbGlzaDIwMjNcIiwgcmVmOiB3aW5kb3dFbGVtZW50IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhYnMuUm9vdCwgeyBkZWZhdWx0VmFsdWU6IFwic2VhcmNoXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMnB4IDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTFweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4J1xuICAgICAgICAgICAgfSwgb25WYWx1ZUNoYW5nZTogb25UYWJzVmFsdWVDaGFuZ2UgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhYnMuTGlzdCwgeyBjbGFzc05hbWU6IFwiVGFic0xpc3RcIiwgXCJhcmlhLWxhYmVsXCI6IFwiTWFuYWdlIHlvdXIgYWNjb3VudFwiIH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGFicy5UcmlnZ2VyLCB7IGNsYXNzTmFtZTogXCJUYWJzVHJpZ2dlclwiLCB2YWx1ZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB2aWV3Qm94OiBcIjAgMCAxNSAxNVwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTAgNi41QzEwIDguNDMzIDguNDMzIDEwIDYuNSAxMEM0LjU2NyAxMCAzIDguNDMzIDMgNi41QzMgNC41NjcgNC41NjcgMyA2LjUgM0M4LjQzMyAzIDEwIDQuNTY3IDEwIDYuNVpNOS4zMDg4NCAxMC4wMTU5QzguNTM5MDEgMTAuNjMxOCA3LjU2MjUxIDExIDYuNSAxMUM0LjAxNDcyIDExIDIgOC45ODUyOCAyIDYuNUMyIDQuMDE0NzIgNC4wMTQ3MiAyIDYuNSAyQzguOTg1MjggMiAxMSA0LjAxNDcyIDExIDYuNUMxMSA3LjU2MjUxIDEwLjYzMTggOC41MzkwMSAxMC4wMTU5IDkuMzA4ODRMMTIuODUzNiAxMi4xNDY0QzEzLjA0ODggMTIuMzQxNyAxMy4wNDg4IDEyLjY1ODMgMTIuODUzNiAxMi44NTM2QzEyLjY1ODMgMTMuMDQ4OCAxMi4zNDE3IDEzLjA0ODggMTIuMTQ2NCAxMi44NTM2TDkuMzA4ODQgMTAuMDE1OVpcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICBcIkZpbmRcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGFicy5UcmlnZ2VyLCB7IGNsYXNzTmFtZTogXCJUYWJzVHJpZ2dlclwiLCB2YWx1ZTogXCJjaGF0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxNFwiLCBoZWlnaHQ6IFwiMTRcIiwgdmlld0JveDogXCIwIDAgMTUgMTVcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTEyLjUgM0wyLjUgMy4wMDAwMkMxLjY3MTU3IDMuMDAwMDIgMSAzLjY3MTYgMSA0LjUwMDAyVjkuNTAwMDNDMSAxMC4zMjg1IDEuNjcxNTcgMTEgMi41IDExSDcuNTAwMDNDNy42MzI2NCAxMSA3Ljc1OTgyIDExLjA1MjcgNy44NTM1OCAxMS4xNDY1TDEwIDEzLjI5MjlWMTEuNUMxMCAxMS4yMjM5IDEwLjIyMzkgMTEgMTAuNSAxMUgxMi41QzEzLjMyODQgMTEgMTQgMTAuMzI4NSAxNCA5LjUwMDAzVjQuNUMxNCAzLjY3MTU3IDEzLjMyODQgMyAxMi41IDNaTTIuNDk5OTkgMi4wMDAwMkwxMi41IDJDMTMuODgwNyAyIDE1IDMuMTE5MjkgMTUgNC41VjkuNTAwMDNDMTUgMTAuODgwNyAxMy44ODA3IDEyIDEyLjUgMTJIMTFWMTQuNUMxMSAxNC43MDIyIDEwLjg3ODIgMTQuODg0NSAxMC42OTEzIDE0Ljk2MTlDMTAuNTA0NSAxNS4wMzkzIDEwLjI4OTQgMTQuOTk2NSAxMC4xNDY0IDE0Ljg1MzZMNy4yOTI5MiAxMkgyLjVDMS4xMTkyOSAxMiAwIDEwLjg4MDcgMCA5LjUwMDAzVjQuNTAwMDJDMCAzLjExOTMxIDEuMTE5MjggMi4wMDAwMyAyLjQ5OTk5IDIuMDAwMDJaXCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgXCJDaGF0XCIpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY2xvc2VCdG4nLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleEJhc2lzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IG9uQ2xpY2s6IGluZGV4XzEuY2xvc2VDb250YWluZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTVcIiwgaGVpZ2h0OiBcIjE1XCIsIHZpZXdCb3g6IFwiMCAwIDE1IDE1XCIsIGZpbGw6IFwibm9uZVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTIuODUzNiAyLjg1MzU1QzEzLjA0ODggMi42NTgyOSAxMy4wNDg4IDIuMzQxNzEgMTIuODUzNiAyLjE0NjQ1QzEyLjY1ODMgMS45NTExOCAxMi4zNDE3IDEuOTUxMTggMTIuMTQ2NCAyLjE0NjQ1TDcuNSA2Ljc5Mjg5TDIuODUzNTUgMi4xNDY0NUMyLjY1ODI5IDEuOTUxMTggMi4zNDE3MSAxLjk1MTE4IDIuMTQ2NDUgMi4xNDY0NUMxLjk1MTE4IDIuMzQxNzEgMS45NTExOCAyLjY1ODI5IDIuMTQ2NDUgMi44NTM1NUw2Ljc5Mjg5IDcuNUwyLjE0NjQ1IDEyLjE0NjRDMS45NTExOCAxMi4zNDE3IDEuOTUxMTggMTIuNjU4MyAyLjE0NjQ1IDEyLjg1MzZDMi4zNDE3MSAxMy4wNDg4IDIuNjU4MjkgMTMuMDQ4OCAyLjg1MzU1IDEyLjg1MzZMNy41IDguMjA3MTFMMTIuMTQ2NCAxMi44NTM2QzEyLjM0MTcgMTMuMDQ4OCAxMi42NTgzIDEzLjA0ODggMTIuODUzNiAxMi44NTM2QzEzLjA0ODggMTIuNjU4MyAxMy4wNDg4IDEyLjM0MTcgMTIuODUzNiAxMi4xNDY0TDguMjA3MTEgNy41TDEyLjg1MzYgMi44NTM1NVpcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIgfSkpKSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGFicy5Db250ZW50LCB7IGNsYXNzTmFtZTogXCJUYWJzQ29udGVudFwiLCB2YWx1ZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnU2VhcmNoQm94Jywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFMEUyRTQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnU2VhcmNoSW5wdXRCb3gnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogaW5wdXRWYWx1ZSwgcmVmOiBpbnB1dFJlZiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCAwIDRweCAxMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBsYWNlaG9sZGVyOiBcImlucHV0IHNlYXJjaCB0ZXh0XCIsIG9uQ2hhbmdlOiBoYW5sZUlucHV0Q2hhbmdlLCBvbktleVVwOiBoYW5kbGVJbnB1dE9uS2V5RG93biB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnU2VhcmNoUmVzdWx0Jywgc3R5bGU6IHsgY29sb3I6ICcjOTk5JyB9IH0sIHNlYXJjaFN0YXR1cyA9PT0gJ3N0YW5ieScgPyAnJyA6IHNlYXJjaFJlc3VsdC5sZW5ndGggPT09IDAgPyAnMC8wJyA6IGluZGV4ICsgMSArICcvJyArIHNlYXJjaFJlc3VsdC5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogJzEuNHB4IHNvbGlkICNFMEUyRTQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogJ2JvcmRlcicgfSkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ1JpZ2h0QnRuQm94Jywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206ICc0cHgnIH0sIG9uQ2xpY2s6IGhhbmRsZU5leHRCdG5DbGljay5iaW5kKGV2ZW50LCAtMSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjE1XCIsIGhlaWdodDogXCIxNVwiLCB2aWV3Qm94OiBcIjAgMCAxNSAxNVwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0zLjEzNTIzIDguODQxOTdDMy4zMjQxIDkuMDQzNDMgMy42NDA1MiA5LjA1MzYzIDMuODQxOTcgOC44NjQ3N0w3LjUgNS40MzUzNkwxMS4xNTggOC44NjQ3N0MxMS4zNTk1IDkuMDUzNjMgMTEuNjc1OSA5LjA0MzQzIDExLjg2NDggOC44NDE5N0MxMi4wNTM2IDguNjQwNTEgMTIuMDQzNCA4LjMyNDA5IDExLjg0MiA4LjEzNTIzTDcuODQxOTcgNC4zODUyM0M3LjY0OTY0IDQuMjA0OTIgNy4zNTAzNiA0LjIwNDkyIDcuMTU4MDMgNC4zODUyM0wzLjE1ODAzIDguMTM1MjNDMi45NTY1NyA4LjMyNDA5IDIuOTQ2MzcgOC42NDA1MSAzLjEzNTIzIDguODQxOTdaXCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiLCBcImNsaXAtcnVsZVwiOiBcImV2ZW5vZGRcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgb25DbGljazogaGFuZGxlTmV4dEJ0bkNsaWNrLmJpbmQoZXZlbnQsIDEpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxNVwiLCBoZWlnaHQ6IFwiMTVcIiwgdmlld0JveDogXCIwIDAgMTUgMTVcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMy4xMzUyMyA2LjE1ODAzQzMuMzI0MSA1Ljk1NjU3IDMuNjQwNTIgNS45NDYzNyAzLjg0MTk3IDYuMTM1MjNMNy41IDkuNTY0NjRMMTEuMTU4IDYuMTM1MjNDMTEuMzU5NSA1Ljk0NjM3IDExLjY3NTkgNS45NTY1NyAxMS44NjQ4IDYuMTU4MDNDMTIuMDUzNiA2LjM1OTQ5IDEyLjA0MzQgNi42NzU5MSAxMS44NDIgNi44NjQ3N0w3Ljg0MTk3IDEwLjYxNDhDNy42NDk2NCAxMC43OTUxIDcuMzUwMzYgMTAuNzk1MSA3LjE1ODAzIDEwLjYxNDhMMy4xNTgwMyA2Ljg2NDc3QzIuOTU2NTcgNi42NzU5MSAyLjk0NjM3IDYuMzU5NDkgMy4xMzUyMyA2LjE1ODAzWlwiLCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBcImZpbGwtcnVsZVwiOiBcImV2ZW5vZGRcIiwgXCJjbGlwLXJ1bGVcIjogXCJldmVub2RkXCIgfSkpKSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhYnMuQ29udGVudCwgeyBjbGFzc05hbWU6IFwiVGFic0NvbnRlbnRcIiwgdmFsdWU6IFwiY2hhdFwiIH0sIFwiQ29taW5nIHNvb24uLi5cIikpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdGF0dXNCYXJfMS5TdGF0dXNCYXIsIHsgb2NyUGVyY2VudDogb2NyUGVyY2VudCB9KSkpO1xufVxuZXhwb3J0cy5Qb3B1cENhcmQgPSBQb3B1cENhcmQ7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbG9zZUNvbnRhaW5lciA9IHZvaWQgMDtcbmNvbnN0IHdlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIikpO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5jb25zdCBQb3B1cENhcmRfMSA9IHJlcXVpcmUoXCIuL1BvcHVwQ2FyZFwiKTtcbmNvbnN0IGNzc2luanNfMSA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9jc3NpbmpzXCIpO1xuY29uc3QgQVBQX05BTUUgPSAnX19qaWFuZy1zaG9wcGluZyc7XG4vLyDliJ3lp4vljJbkuLvlrrnlmajvvIzkuLvlrrnlmajnlKjmnaXmjILlnKjlhajlsYDmoLflvI/vvIzljIXmi6znrKzkuInmlrnnu4Tku7bnmoTmoLflvI9cbmxldCBNeUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFQUF9OQU1FKTtcbi8vIGNvbnRhaW5lciDmib/ovb0gVUkg57uE5Lu2XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyDkvb/nlKggc2hhZG93IOadpemalOemu+agt+W8j1xubGV0IHNoYWRvd1Jvb3QgPSB1bmRlZmluZWQ7XG5pZiAoTXlCb3ggIT09IG51bGwgJiYgTXlCb3ggIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIOWmguaenOW3suWtmOWcqOWuueWZqFxuICAgIC8vIGNvbnNvbGUubG9nKCflt7LlrZjlnKggQm94IOWuueWZqCcpO1xuICAgIC8vIOenu+mZpOaXp+WuueWZqO+8jOmBv+WFjeWHuueOsCAyIOS4quS4u+WuueWZqOS8muWvvOiHtCBVSSDmuLLmn5PplJnor69cbiAgICAoX2EgPSBNeUJveC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoTXlCb3gpO1xufVxuLy8g5Yib5bu65Li75a655ZmoXG5NeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuTXlCb3guaWQgPSBBUFBfTkFNRTtcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uYXBwZW5kQ2hpbGQoTXlCb3gpO1xuTXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy/pu5jorqTpmpDol49cbnNoYWRvd1Jvb3QgPSBNeUJveCA9PT0gbnVsbCB8fCBNeUJveCA9PT0gdm9pZCAwID8gdm9pZCAwIDogTXlCb3guYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuc2hhZG93Um9vdCA9PT0gbnVsbCB8fCBzaGFkb3dSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4vLyDlnKggU2hhZG93IERPTSDkuK3mt7vliqDmoLflvI/vvJpcbmNvbnN0IGdsb2JhbFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbmdsb2JhbFN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjTGVhcm5pbmdFbmdsaXNoMjAyMyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxMy40cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB9XG5cbiAgICAuaGlnaHRsaWdodEJveHtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgXG4gICAgfVxuXG4gICAgI0xlYXJuaW5nRW5nbGlzaDIwMjMgI1Njb3V0ZXJOYXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweCAxOXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNSwgNSwgNSwgLjA2KTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgIFxuICAgICAgI0xlYXJuaW5nRW5nbGlzaDIwMjMgI1Njb3V0ZXJOYXYgaW1nIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICB9XG5cbiAgYDtcbnNoYWRvd1Jvb3QgPT09IG51bGwgfHwgc2hhZG93Um9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhZG93Um9vdC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZSk7XG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcblxuLyogcmVzZXQgKi9cbmJ1dHRvbixcbmZpZWxkc2V0LFxuaW5wdXQge1xuICBhbGw6IHVuc2V0O1xufVxuXG4uU2VhcmNoQm94IC5SaWdodEJ0bkJveCBhICwgLmNsb3NlQnRuIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLlNlYXJjaEJveCAuUmlnaHRCdG5Cb3ggYTpob3ZlciwgLmNsb3NlQnRuIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNFMEUyRTQ7XG59XG5cbi5UYWJzUm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCB2YXIoLS1ibGFja0E0KTtcbn1cblxuLlRhYnNMaXN0IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTRFNkU1O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5UYWJzVHJpZ2dlciB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogdmFyKC0tbWF1dmUxMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbGV4LWJhc2lzOiAxMDBweDtcbn1cbi5UYWJzVHJpZ2dlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbn1cbi5UYWJzVHJpZ2dlcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbn1cbi5UYWJzVHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS12aW9sZXQxMSk7XG59XG4uVGFic1RyaWdnZXJbZGF0YS1zdGF0ZT0nYWN0aXZlJ10ge1xuICBjb2xvcjogI0Q5Njg0NTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCBjdXJyZW50Q29sb3IsIDAgMXB4IDAgMCBjdXJyZW50Q29sb3I7XG59XG4uVGFic1RyaWdnZXI6Zm9jdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5UYWJzVHJpZ2dlciBzdmcge1xuICBtYXJnaW4tcmlnaHQ6NHB4O1xufVxuXG4uVGFic0NvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uVGFic0NvbnRlbnQ6Zm9jdXMge1xuICBcbn1cblxuLlRleHQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbWF1dmUxMSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLkZpZWxkc2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLkxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXZpb2xldDEyKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5JbnB1dCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHZhcigtLXZpb2xldDExKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXZpb2xldDcpO1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uSW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tdmlvbGV0OCk7XG59XG5cbi5CdXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uQnV0dG9uLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW40KTtcbiAgY29sb3I6IHZhcigtLWdyZWVuMTEpO1xufVxuLkJ1dHRvbi5ncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuNSk7XG59XG4uQnV0dG9uLmdyZWVuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWdyZWVuNyk7XG59XG5cbi5zdGF0dXNCYXIgc3ZnIHBhdGgge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogc3BpbiAxLjRzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuXG5gO1xuc2hhZG93Um9vdCA9PT0gbnVsbCB8fCBzaGFkb3dSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbi8vIOaOpeaUtiBiYWNrZ3JvdW5kIOa2iOaBr++8iOebruWJjeaYr+mAmui/h+a1j+iniOWZqOeahOWPs+mUruiPnOWNleinpuWPke+8iVxud2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEuZGVmYXVsdC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCBzY3JpcHQgb25NZXNzYWdlOicpO1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgaWYgKG1zZy50eXBlID09PSAnb3BlblBvcHVwQ2FyZCcpIHtcbiAgICAgICAgLy8g5aSE55CG56qX5Y+jXG4gICAgICAgIGlmIChNeUJveCAhPT0gbnVsbCAmJiBNeUJveCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlt7LlrZjlnKjlrrnlmahcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflt7LlrZjlnKggQm94IOWuueWZqCcpO1xuICAgICAgICAgICAgTXlCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAvLyDnp7vpmaTml6flhoXlrrnvvIzpgb/lhY0gMiDmrKHmuLLmn5Pmt7fmnYLlnKjkuIDotbdcbiAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkuI3lrZjlnKggQm94IOWuueWZqCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgICAgIHNoYWRvd1Jvb3QgPT09IG51bGwgfHwgc2hhZG93Um9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAvLyDmmL7npLrnqpflj6PvvIx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkg5piv5b2T5YmN6byg5qCH6YCJ5Lit55qE5Yy65Z+f5L+h5oGvXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5nZXRTZWxlY3Rpb24oKSk7XG4gICAgICAgIHNob3dQb3B1cENhcmQod2luZG93LmdldFNlbGVjdGlvbigpLCBjb250YWluZXIsIHNoYWRvd1Jvb3QpO1xuICAgICAgICAvLyDnm5HlkKzpobXpnaLngrnlh7vkuovku7ZcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChNeUJveCAhPT0gdW5kZWZpbmVkICYmIE15Qm94ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c54K55Ye755qE5LiN5piv5o+S5Lu256qX5Y+j5Y+K5YW25a2Q5YWD57Sg77yM5YiZ5YWz6Zet56qX5Y+jXG4gICAgICAgICAgICAgICAgaWYgKE15Qm94ICE9PSBldmVudC50YXJnZXQgJiYgIU15Qm94LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP56qX5Y+jXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lci5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59KTtcbmNvbnN0IGNsb3NlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKE15Qm94ICE9PSB1bmRlZmluZWQgJiYgTXlCb3ggIT09IG51bGwpIHtcbiAgICAgICAgLy8g6ZqQ6JeP56qX5Y+jXG4gICAgICAgIChfYSA9IGNvbnRhaW5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgLy8g6ZqQ6JeP6auY5LquXG4gICAgICAgIGxldCBoaWdodGxpZ2h0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaHRsaWdodEJveCcpO1xuICAgICAgICB3aGlsZSAoaGlnaHRsaWdodEJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAoX2IgPSBoaWdodGxpZ2h0Qm94WzBdLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVDaGlsZChoaWdodGxpZ2h0Qm94WzBdKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnRzLmNsb3NlQ29udGFpbmVyID0gY2xvc2VDb250YWluZXI7XG4vLyDmmL7npLrlupTnlKjnqpflj6NcbmZ1bmN0aW9uIHNob3dQb3B1cENhcmQobXNnLCBNeUJveCwgc2hhZG93Um9vdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5TdHJpY3RNb2RlLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY3NzaW5qc18xLlN0eWxlUHJvdmlkZXIsIHsgY29udGFpbmVyOiBzaGFkb3dSb290IH0sXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDYXJkXzEuUG9wdXBDYXJkLCB7IHNlbGVjdGlvbjogbXNnIH0pKSksIE15Qm94KTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udGVudF9zY3JpcHRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX2V4dGVuc2lvbl90eXBlc2NyaXB0X3N0YXJ0ZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0NvbnRlbnRTY3JpcHQvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=