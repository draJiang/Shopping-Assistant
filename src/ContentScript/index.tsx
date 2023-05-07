import browser from 'webextension-polyfill'

import React, { useEffect, useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

import { PopupCard } from "./PopupCard"

import { StyleProvider } from '@ant-design/cssinjs';

const APP_NAME = '__jiang-shopping'

// 初始化主容器，主容器用来挂在全局样式，包括第三方组件的样式
let MyBox: HTMLElement | null = document.getElementById(APP_NAME);
// container 承载 UI 组件
let container = document.createElement('div')
// 使用 shadow 来隔离样式
let shadowRoot: any = undefined

if (MyBox !== null && MyBox !== undefined) {
  // 如果已存在容器
  // console.log('已存在 Box 容器');
  // 移除旧容器，避免出现 2 个主容器会导致 UI 渲染错误
  MyBox.parentNode?.removeChild(MyBox);

}

// 创建主容器
MyBox = document.createElement('div')
MyBox.id = APP_NAME
document.getElementsByTagName('html')[0].appendChild(MyBox);
MyBox.style.display = 'none' //默认隐藏

shadowRoot = MyBox?.attachShadow({ mode: 'open' });
container.className = 'container'
shadowRoot?.appendChild(container)

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

  `
shadowRoot?.appendChild(globalStyle);

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


`
shadowRoot?.appendChild(style);

// 接收 background 消息（目前是通过浏览器的右键菜单触发）
browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

  console.log('content script onMessage:');
  console.log(msg);
  if (msg.type === 'openPopupCard') {

    // 处理窗口

    if (MyBox !== null && MyBox !== undefined) {
      // 如果已存在容器

      // console.log('已存在 Box 容器');
      MyBox.style.display = 'block'
      // 移除旧内容，避免 2 次渲染混杂在一起
      container.parentNode?.removeChild(container);

    } else {
      // console.log('不存在 Box 容器');
    }


    container = document.createElement('div')
    container.className = 'container'
    shadowRoot?.appendChild(container)

    // 显示窗口，window.getSelection() 是当前鼠标选中的区域信息
    console.log(window.getSelection());

    showPopupCard(window.getSelection(), container, shadowRoot)

    // 监听页面点击事件
    document.onmousedown = function (event) {

      if (MyBox !== undefined && MyBox !== null) {
        // 如果点击的不是插件窗口及其子元素，则关闭窗口
        if (MyBox !== event.target && !MyBox.contains(event.target as Node)) {
          // 隐藏窗口
          // container.parentNode?.removeChild(container);
        }
      }
    }

  }

});

export const closeContainer = () => {

  if (MyBox !== undefined && MyBox !== null) {
    // 隐藏窗口
    container.parentNode?.removeChild(container);
    // 隐藏高亮
    let hightlightBox = document.getElementsByClassName('hightlightBox');
    while (hightlightBox.length > 0) {
      hightlightBox[0].parentNode?.removeChild(hightlightBox[0]);
    }
  }

}

// 显示应用窗口
async function showPopupCard(msg: any, MyBox: any, shadowRoot: any) {

  ReactDOM.render(
    <React.StrictMode>
      <StyleProvider container={shadowRoot}>
        <PopupCard selection={msg} />
      </StyleProvider>
    </React.StrictMode>,
    MyBox
  );

}