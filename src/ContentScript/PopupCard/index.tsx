import browser, { events } from 'webextension-polyfill'
import Tesseract from 'tesseract.js';
import { createWorker, createScheduler } from 'tesseract.js';
import { closeContainer } from '../index'

import * as Tabs from '@radix-ui/react-tabs';

import { Input, Space, Progress } from 'antd';
import { StatusBar } from './StatusBar'


const { Search } = Input;


import React, { useEffect, useState, useRef, useContext } from "react";

import { Nav } from "../../Components/Nav"


import { styled } from '@stitches/react';

const StyledItem = styled(Tabs.Root, {
  borderBottom: '1px solid gainsboro',
  color: 'red'
});


export function PopupCard(props: any) {

  // 窗口拖拽逻辑
  const [dragging, setDragging] = useState(false);

  const windowElement = useRef<HTMLDivElement>(null);

  // 保存 OCR 识别的结果，用于后续的搜索
  const ocrResult = useRef<Array<{ lines: Array<{ bbox: { x0: number, x1: number, y0: number, y1: number }, text: string }>, image: string }>>([]);
  // 保存搜索结果
  const [searchResult, setSearchResult] = useState<Array<{ text: string; image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }>>([]);
  // 保存搜索结果中，当前定位到哪个位置
  const [index, setIndex] = useState<number>(0)

  const [searchStatus, setSearchStatus] = useState('stanby')

  const [ocrPercent, setOcrPercent] = useState<{ count: number, progress: number }>();

  // 搜索框
  const inputRef = useRef<HTMLInputElement>(null);

  const timeIdRef = useRef<NodeJS.Timeout>();

  // const inputValue = useRef<string>('');
  const [inputValue, setInputValue] = useState<string>('')


  useEffect(() => {

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
    let imageList = getProductImage()
    if (imageList.length >= 0) {

      // 获取 OCR 结果的历史记录
      getOCRHistory(imageList).then((data: any) => {
        if (data) {
          // 当前页面中的图片的 OCR 结果在本地记录中找到了，则直接用历史记录的数据
          ocrResult.current = data
          setOcrPercent({ count: imageList.length, progress: imageList.length })

        } else {
          // OCR 图片
          imageOcr(imageList)

        }
      })



    }

  }, [props]);

  // 窗口拖拽时触发
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // console.log('useEffect return');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);



  // 搜索完毕后触发
  useEffect(() => {

    // 搜索完毕后，定位到第一个搜索结果
    if (searchResult.length > 0) {
      goToImage(searchResult[0])
    }

  }, [searchResult]);


  const getProductImage = () => {

    // 获取页面上需要 OCR 的图片
    let imageNode = document.getElementById('J-detail-content')?.getElementsByTagName('img')
    let imageList = new Array()
    if (imageNode !== undefined) {

      for (let i = 0; i < imageNode?.length; i++) {
        let url: string = imageNode[i]['currentSrc'].replace('.avif', '')

        if (imageNode[i]['currentSrc'].indexOf('.gif') < 0) {

        } else {
          let linkHeard = ''
          let lazyload = imageNode[i].getAttribute('data-lazyload')
          if (lazyload) {
            if (lazyload.indexOf('http') < 0) {
              linkHeard = 'https:'
            }
          }

          url = linkHeard + imageNode[i].getAttribute('data-lazyload')?.replace('.avif', '')

        }

        imageList.push(url)

      }

      if (imageList.length === 0) {
        const content = document.getElementById('J-detail-content')
        const imageDOMList = content?.getElementsByClassName('ssd-module')
        if (imageDOMList !== undefined) {
          for (let j = 0; j < imageDOMList.length; j++) {

            const element = imageDOMList[j]
            const styles = window.getComputedStyle(element);
            let backgroundImage = styles.getPropertyValue('background-image');
            backgroundImage = backgroundImage.replace('url("', '').replace('.avif', '').replace('")', '')
            imageList.push(backgroundImage)

          }
        }



      }

    }

    return imageList

  }

  // 二值化函数
  function binarizeImage(imageData: any, threshold: any) {
    for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      const binary = gray < threshold ? 0 : 255;
      imageData.data[i] = binary;
      imageData.data[i + 1] = binary;
      imageData.data[i + 2] = binary;
    }
    return imageData;
  }

  const handleInputOnKeyDown = (event: any) => {
    console.log('handleInputOnKeyDown');
    console.log(event);

    if (event.keyCode === 13) {
      handleNextBtnClick(1)
    }

    if (event.keyCode === 13 && event.shiftKey) {
      handleNextBtnClick(-1)
    }

    if (event.keyCode === 27) {
      // 关闭窗口
      closeContainer()
    }
    // 缓存 input 的值
    // inputValue.current = event.target.value
    // event.preventDefault()
    event.stopPropagation()
  }

  // 通过图片的 URL 获取对应的图片 DOM 链接
  const findNode = (imageUrl: string) => {
    const imageNode = document.getElementById('J-detail-content')?.getElementsByTagName('img')
    if (imageNode !== undefined && imageNode.length > 0) {
      for (let i = 0; i < imageNode.length; i++) {

        let thisUrl = imageNode[i].currentSrc

        if (thisUrl.indexOf('.gif') >= 0) {
          thisUrl = 'https:' + imageNode[i].getAttribute('data-lazyload')?.replace('.avif', '')
        }

        if (thisUrl.indexOf(imageUrl) >= 0) {
          console.log(imageNode[i]);

          return imageNode[i]

        }

      }



    } else {
      // 图片是放置在 div 的 background-image 属性中
      const content = document.getElementById('J-detail-content')
      const imageDOMList = content?.getElementsByClassName('ssd-module')
      if (imageDOMList !== undefined) {
        for (let j = 0; j < imageDOMList.length; j++) {

          const element = imageDOMList[j]
          const styles = window.getComputedStyle(element);
          let backgroundImage = styles.getPropertyValue('background-image');
          backgroundImage = backgroundImage.replace('url("', '').replace('.avif', '').replace('")', '')

          if (backgroundImage.indexOf(imageUrl) >= 0) {

            return element

          }

        }
      }

    }

    return null

  }

  // 获取指定 DOM 元素在整个页面中的 Y 坐标
  const getElementTop = (elem: any) => {
    let top = 0;
    while (elem) {
      top += elem.offsetTop;
      elem = elem.offsetParent;
    }
    return top;
  }

  // 获取指定 DOM 元素在整个页面中的 X 坐标
  const getElementLeft = (elem: any) => {
    let left = 0;
    while (elem) {
      left += elem.offsetLeft;
      elem = elem.offsetParent;
    }
    return left;
  }

  // 根据搜索结果，在页面上渲染 Hightlight，帮助用户找到搜索结果
  const showHightlight = (searchResult: { text: string; image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }[]) => {

    // 先移除旧的 Hightlight 信息
    removeHightlight().then(() => {
      console.log(searchResult);
      // let hightlightBox = document.createElement('div')
      // hightlightBox.classList.add('hightlightBox')

      searchResult.forEach(item => {

        // 图片节点
        const node = findNode(item.image)

        let box = document.createElement('div')
        box.style.width = item.bbox.x1 - item.bbox.x0 + 'px'
        box.style.height = item.bbox.y1 - item.bbox.y0 + 'px'
        box.style.position = 'absolute'
        box.style.zIndex = '1'
        box.style.backgroundColor = 'red'
        box.style.opacity = '0.5'
        box.classList.add('hightlightBox')

        if (node) {
          box.style.top = Math.abs(getElementTop(node) + item.bbox.y0) + 'px'
          box.style.left = Math.abs(getElementLeft(node) + item.bbox.x0) + 'px'

          console.log('==========');


          console.log(box);
          console.log(Math.abs(getElementTop(node) + item.bbox.y0) + 'px');

          console.log('------');

          console.log(node);
          console.log(getElementTop(node));
          console.log(item.bbox);


          console.log('==========');

        }


        document.body.appendChild(box)

        console.log(box);

      });
    })



    // document.body.appendChild(hightlightBox);

  }

  // 移除旧的 Hightlight
  const removeHightlight = () => {
    return new Promise((resolve, reject) => {
      let hightlightBox = document.getElementsByClassName('hightlightBox');
      while (hightlightBox.length > 0) {
        hightlightBox[0].parentNode?.removeChild(hightlightBox[0]);
      }
      resolve('done');
    });
  };


  // 搜索
  const onSearch = (value: string) => {

    // const value = e.target.value

    if (value === '') {
      return
    }

    // 停止输入 500ms 后执行搜索




    // 清空旧的搜索结果
    setSearchResult([])

    let newSearchResult: { text: string; image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }[] = []

    console.log(value);
    console.log(ocrResult.current);
    // Search
    for (let i = 0; i < ocrResult.current.length - 1; i++) {
      const image = ocrResult.current[i].image

      // 遍历识别结果的每个段落
      ocrResult.current[i].lines.forEach((item) => {
        if (item.text.replace(/\s/g, '').indexOf(value) >= 0) {

          // 返回 text（通常是一整行的文字，图片 URL，这行文字的 bbox）
          newSearchResult.push({ 'text': item.text, 'image': image, 'bbox': item.bbox })

        }
      })

    }

    setIndex(0)
    setSearchResult(newSearchResult)
    setSearchStatus('end')

    setTimeout(() => {
      // 在页面中显示搜索结果
      showHightlight(newSearchResult)
    }, 10);




  }

  const handleNextBtnClick = (offset: number) => {

    let postion = index + offset

    if (postion >= searchResult.length) {
      postion = 0
    }

    if (postion < 0) {
      postion = searchResult.length - 1
    }


    goToImage(searchResult[postion])


    setIndex(postion)

  }

  // 定位到指定图片
  const goToImage = (target: { image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }) => {

    const node = findNode(target.image)

    window.scrollTo({ left: 0, top: getElementTop(node) + target.bbox.y0 - 140, behavior: 'smooth' })
    // node?.scrollIntoView({ behavior: 'smooth' });
    // window.scrollBy(0, target.bbox.y0 + 100);


  }

  // 对图片进行 OCR
  const imageOcr = async (imageUrlList: Array<string>) => {

    // 显示 OCR 进度
    setOcrPercent({ count: imageUrlList.length, progress: 0 })

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
    let date1 = new Date()

    const scheduler = createScheduler();

    const worker = await createWorker();
    const worker2 = await createWorker();
    const worker3 = await createWorker();
    // const worker4 = await createWorker();
    // const worker5 = await createWorker();
    // const worker6 = await createWorker();
    // const worker7 = await createWorker();
    // const worker8 = await createWorker();

    await worker.loadLanguage('chi_sim');
    await worker.initialize('chi_sim');

    await worker2.loadLanguage('chi_sim');
    await worker2.initialize('chi_sim');

    await worker3.loadLanguage('chi_sim');
    await worker3.initialize('chi_sim');

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
    })


    );

    let newIamge = []

    let newHistory: any = []

    for (const promise of promises) {
      const result = await promise.result;
      // result.data.text = result.data.text.replace(/\s/g, '')
      console.log(promise.image)
      console.log(Math.floor((new Date().getTime() - date1.getTime()) / 1000));
      console.log(result);

      const data = {
        'lines': result,
        'image': promise.image,
      }

      // newIamge.push(data)


      newHistory.push({ 'lines': result.data.lines.map(item => { return { 'bbox': item.bbox, 'text': item.text } }), 'image': promise.image })

      setOcrPercent({ count: imageUrlList.length, progress: newHistory.length })

      ocrResult.current = newHistory


    }


    console.log(ocrResult.current);



    // 保存到历史记录中

    // 如果已有此记录则不用重复保存
    getOCRHistory(imageUrlList).then((data) => {
      if (!data) {
        browser.storage.local.get({ "ocrResult": [] }).then((data: any) => {
          console.log(data);
          let newOcrResult = [newHistory, ...data.ocrResult]

          console.log(newOcrResult);

          newOcrResult.splice(20)

          browser.storage.local.set({ ocrResult: newOcrResult }).then(() => {

            console.log('save');

          })

        })
      }
    })



    await scheduler.terminate(); // It also terminates all workers.

    let date2 = new Date()

    console.log(Math.floor((date2.getTime() - date1.getTime()) / 1000));

  }

  // 获取 OCR 历史记录
  const getOCRHistory = (imageUrlList: Array<string>) => {

    return new Promise((resolve, reject) => {
      browser.storage.local.get({ "ocrResult": [] }).then((data: any) => {
        console.log(data.ocrResult);

        const ocrResult = data.ocrResult

        // 遍历每一条历史记录
        for (let i = 0; i < ocrResult.length; i++) {
          const historyImage = ocrResult[i].map((item: { image: string }) => item.image)
          if (JSON.stringify(imageUrlList) === JSON.stringify(historyImage)) {
            resolve(ocrResult[i])
            break
          }
        }

        resolve(null)

      })
    })


  }

  // 缩放图片
  const scaleImage = (imageUrl: string, scale: number) => {
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
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const scaledImageUrl = canvas.toDataURL('image/jpeg'); // quality 可以设置图片压缩质量

        // console.log(scaledImageUrl);

        resolve(scaledImageUrl);
      };
    });
  }

  // 去噪点
  const denoiseImage = (imageUrl: any, radius: number) => {
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
  }


  const handleMouseDown = (event: any) => {
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

  const handleMouseMove = (event: any) => {
    // // console.log('PopupCard:handleMouseMove');
    // // console.log(dragging);


    if (dragging && windowElement.current) {

      // Use requestAnimationFrame to throttle the mousemove event handling
      // 鼠标相对窗口左上角的偏移
      const offsetX = parseFloat(windowElement.current.dataset.offsetX || '');
      const offsetY = parseFloat(windowElement.current.dataset.offsetY || '');

      const newX = event.clientX - offsetX
      const newY = event.clientY - offsetY

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

      } else {
        // 元素到达边界
        // const rect = windowElement.current.getBoundingClientRect();
        // const offsetX = event.clientX - rect.left;
        // const offsetY = event.clientY - rect.top;
        // windowElement.current.dataset.offsetX = String(offsetX);
        // windowElement.current.dataset.offsetY = String(offsetY);
      }

    }


  };

  const handleMouseUp = () => {
    // // console.log('PopupCard:handleMouseUp');
    setDragging(false);
  };

  const handleCloseBtnClick = () => {
    const container = document.getElementsByClassName('container')[0]
    container.parentNode?.removeChild(container);
  }

  const onTabsValueChange = () => {

    console.log('onTabsValueChange');

  }

  const hanleInputChange = (event: any) => {
    setInputValue(event?.target.value)

    clearTimeout(timeIdRef.current)

    timeIdRef.current = setTimeout(() => {
      onSearch(event?.target.value)
    }, 500);


  }


  return (
    <div id="LearningEnglish2023" ref={windowElement}>

      {/* <Nav onMouseDown={handleMouseDown} /> */}


      <Tabs.Root defaultValue="search"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.1), -1px 10px 10px rgba(0, 0, 0, 0.06)',
          borderRadius: '8px'
        }}
        onValueChange={onTabsValueChange}
      >

        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="search">
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            Find
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="chat">
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            Chat
          </Tabs.Trigger>

          <div
            className='closeBtn'
            style={{
              flexBasis: '50%',
              display: 'flex',
              justifyContent: 'end'
            }}
          >
            <a
              onClick={closeContainer}
            ><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></a>
          </div>

        </Tabs.List>

        <Tabs.Content className="TabsContent" value="search">

          <div
            className='SearchBox'
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E0E2E4',
              borderRadius: '4px'
            }}
          >


            <div className='SearchInputBox'
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: '1'
              }}
            >
              <input
                value={inputValue}
                ref={inputRef}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px',
                  flex: '1',
                  padding: '4px 0 4px 10px'
                }}
                placeholder="input search text" onChange={hanleInputChange} onKeyUp={handleInputOnKeyDown} />

              <div className='SearchResult'
                style={{ color: '#999' }}
              >
                {searchStatus === 'stanby' ? '' : searchResult.length === 0 ? '0/0' : index + 1 + '/' + searchResult.length}
              </div>

              <div
                style={{
                  borderRight: '1.4px solid #E0E2E4',
                  height: '20px',
                  paddingLeft: '14px'
                }}
                className='border'></div>

            </div>

            {/* <Search placeholder="input search text" onSearch={onSearch} onKeyUp={handleInputOnKeyDown} style={{ width: 200 }} /> */}



            <div className='RightBtnBox'
              style={{
                display: 'flex',
                padding: '4px'
              }}
            >
              <a style={{ paddingBottom: '4px' }} onClick={handleNextBtnClick.bind(event, -1)}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>
              <a onClick={handleNextBtnClick.bind(event, 1)}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>

              {/* <button onClick={handleNextBtnClick.bind(event, -1)}>pre</button>
              <button onClick={handleNextBtnClick.bind(event, 1)}>next</button> */}

            </div>


          </div>


        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="chat">
          Coming soon...
        </Tabs.Content>
      </Tabs.Root>

      <StatusBar ocrPercent={ocrPercent} />


    </div>

  );
};