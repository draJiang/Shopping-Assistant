import browser from 'webextension-polyfill'
import { createParser, ParsedEvent, ReconnectInterval } from 'eventsource-parser'
import { createWorker, createScheduler } from 'tesseract.js';

// 插件安装事件
browser.runtime.onInstalled.addListener(function () {

});

// 卸载插件后打开指定链接
// browser.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSdobGQN3O0Ck4fVrgfvRZMme3de-2OaEp1pFtibZkU0koc37w/viewform?usp=sf_link");

// 创建右键菜单
browser.contextMenus.create({
    id: "1",
    title: "Shopping",
    contexts: ["selection", "page"],
},
    () => {
        browser.runtime.lastError
    });


// 右键菜单点击事件
browser.contextMenus.onClicked.addListener(async function (info, _tab) {

    console.log('右键菜单点击事件');

    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        console.log(tabs);
        const activeTab = tabs[0]
        let tID = activeTab.id ?? -1

        if (activeTab && activeTab.id !== undefined) {

            // 唤起 Content Script 中的 PopupCard
            let b = browser.tabs.sendMessage(tID, { type: 'openPopupCard', info, })

            // 已知情况：刚安装插件时直接使用会报错（刷新页面后使用则正常），此时需要载入 content_script.js 才行
            b.catch(e => {
                console.log(e);
                console.log('catch');

                browser.scripting.executeScript({
                    target: { tabId: tID },
                    files: ["js/vendor.js", "js/content_script.js"],
                }).then(() => {
                    console.log('chrome.scripting.executeScript');
                }).then(() => {
                    browser.tabs.sendMessage(tID, { type: 'open-souter', info, })
                })

            })

        }


    })

})

// 长连接，处理 Content Script 发来的消息
browser.runtime.onConnect.addListener(port => {
    // 收到 content script 消息
    console.log('连接中------------')

    // 接收 content script 的消息
    port.onMessage.addListener(async (msg: any) => {
        console.log('接收消息：', msg)
    })
})


browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request: any, sender: any, sendResponse: any) {

    console.log("Message from the content script: " + request.type);

    if (request.type === 'imageOCR') {


        imageOcr(request.messages.element)

    }

}


const imageOcr = async (imageUrlList: Array<string>) => {

    console.log(imageUrlList);
    
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

        // ocrResult.current[ocrResult.current.length == 0 ? 0 : ocrResult.current.length - 1] = newIamge


    }


    // console.log(ocrResult.current);



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