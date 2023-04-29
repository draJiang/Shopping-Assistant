import browser from 'webextension-polyfill'
import Tesseract from 'tesseract.js';
import { createWorker, createScheduler } from 'tesseract.js';
import { Input, Space } from 'antd';

const { Search } = Input;


import React, { useEffect, useState, useRef, useContext } from "react";

import { Nav } from "../../Components/Nav"

export function PopupCard(props: any) {

  // 窗口拖拽逻辑
  const [dragging, setDragging] = useState(false);

  const windowElement = useRef<HTMLDivElement>(null);

  const ocrResult = useRef<Array<{ data: { data: { text: string, lines: { text: string, bbox: { x0: number, x1: number, y0: number, y1: number } }[] } }; image: string }[]>>([]);

  const [searchResult, setSearchResult] = useState<Array<{ data: { data: object }, image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }>>([]);
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {

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

      const newX = maxX - 20
      const newY = props.selection.anchorNode.parentElement.offsetTop + props.selection.anchorNode.parentElement.clientHeight + 20

      const clampedX = Math.max(minX, Math.min(newX, maxX));
      const clampedY = Math.max(minY, Math.min(newY, maxY));
      // console.log(props.selection.getRangeAt(0));

      windowElement.current.style.right = '10px';
      windowElement.current.style.top = '10px';
    }

    console.log('chulitupian==========');


    let imageNode = document.getElementById('J-detail-content')?.getElementsByTagName('img')
    let imageList = new Array()
    if (imageNode !== undefined) {

      console.log(imageNode);

      for (let i = imageNode?.length - 1; i > -1; i--) {
        let url: string = imageNode[i]['currentSrc'].replace('.avif', '')
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

        } else {
          url = 'https:' + imageNode[i].getAttribute('data-lazyload')?.replace('.avif', '')
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

        imageList.push(url)



        // imageList.forEach(imageUrl => {
        //   imageOcr(imageUrl).then((text) => {
        //     console.log(text);

        //   })
        // })

        // testtt()

      }

      // OCR 图片
      imageOcr(imageList)
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


  useEffect(() => {

    if (searchResult.length > 0) {
      goToImage(searchResult[0])
    }


  }, [searchResult]);

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

  const findNode = (imageUrl: string) => {
    const imageNode = document.getElementById('J-detail-content')?.getElementsByTagName('img')
    if (imageNode !== undefined) {
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

      return null

    }
  }

  function getElementTop(elem: any) {
    let top = 0;
    while (elem) {
      top += elem.offsetTop;
      elem = elem.offsetParent;
    }
    return top;
  }

  function getElementLeft(elem: any) {
    let left = 0;
    while (elem) {
      left += elem.offsetLeft;
      elem = elem.offsetParent;
    }
    return left;
  }

  const showHightlight = (searchResult: { data: { data: object }; image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }[]) => {


    console.log(searchResult);

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


      box.classList.add('hightlightBox')
      document.body.appendChild(box);





      console.log(box);



    });

  }

  const removeHightlight = () => {
    let hightlightBox = document.getElementsByClassName('hightlightBox')
    for(let i=0;i<hightlightBox.length;i++){
      hightlightBox[i].parentNode?.removeChild(hightlightBox[i])
    }
  }

  const onSearch = (value: string) => {

    setSearchResult([])
    // let newSearchResult = []

    // 移除旧的高亮
    removeHightlight()

    let newSearchResult: { data: { data: object }; image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }[] = []


    console.log(value);
    console.log(ocrResult.current);
    // Search
    for (let i = 0; i < ocrResult.current[0].length - 1; i++) {
      const text = ocrResult.current[0][i].data.data.text
      const image = ocrResult.current[0][i].image

      // 遍历识别结果的每个段落
      ocrResult.current[0][i].data.data.lines.forEach((item) => {
        if (item.text.replace(/\s/g, '').indexOf(value) >= 0) {


          newSearchResult.unshift({ 'data': ocrResult.current[0][i].data, 'image': image, 'bbox': item.bbox })


        }
      })

      // if (text.indexOf(value) >= 0) {
      //   console.log('======');

      //   console.log(text);
      //   console.log(image);
      //   newSearchResult.unshift({ 'data': ocrResult.current[0][i].data, 'image': image })

      //   console.log('======');

      // }


    }
    setIndex(0)
    setSearchResult(newSearchResult)
    showHightlight(newSearchResult)

    console.log(newSearchResult);

    // // 定位到 DOM 元素
    // setTimeout(() => {
    //   goToImage(searchResult[0])
    // }, 10);



  }

  const handleNextBtnClick = (offset: number) => {
    console.log('handleNextBtnClick');
    console.log(searchResult);

    console.log(offset);

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

  const goToImage = (target: { image: string, bbox: { x0: number, x1: number, y0: number, y1: number } }) => {

    const node = findNode(target.image)
    console.log(node?.getBoundingClientRect());
    console.log(target.bbox);

    window.scrollTo(0, getElementTop(node) + target.bbox.y0 - 40)

    // if (node) {
    //   node.scrollIntoView({
    //     behavior: 'smooth', // 平滑滚动
    //     // inline: 'nearest' // 滚动到离元素最近的边缘
    //   });
    // }

  }

  const imageOcr = async (imageUrlList: Array<string>) => {


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

    for (const promise of promises) {
      const result = await promise.result;
      // result.data.text = result.data.text.replace(/\s/g, '')
      console.log(promise.image)
      console.log(Math.floor((new Date().getTime() - date1.getTime()) / 1000));
      console.log(result);

      const data = {
        'data': result,
        'image': promise.image
      }

      newIamge.push(data)

      ocrResult.current[ocrResult.current.length == 0 ? 0 : ocrResult.current.length - 1] = newIamge


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
    await scheduler.terminate(); // It also terminates all workers.

    let date2 = new Date()

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


  return (
    <div id="LearningEnglish2023" ref={windowElement}>

      <Nav onMouseDown={handleMouseDown} />
      <div
        className='contentBox'
        style={{
          marginTop: '45px'
        }}
      >
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        {searchResult.length === 0 ? '' : index + 1 + '/' + searchResult.length}

        <button onClick={handleNextBtnClick.bind(event, -1)}>pre</button>
        <button onClick={handleNextBtnClick.bind(event, 1)}>next</button>

      </div>

    </div>

  );
};