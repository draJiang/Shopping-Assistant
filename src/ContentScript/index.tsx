import browser from 'webextension-polyfill'

import React, { useEffect, useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

import { PopupCard } from "./PopupCard"

import { StyleProvider } from '@ant-design/cssinjs';

const APP_NAME = '__jiang-test'

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
const style = document.createElement('style');
style.textContent = `
  #LearningEnglish2023 {
    font-family: sans-serif;
    width: 400px;
    height: 500px;
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
          container.parentNode?.removeChild(container);
        }
      }
    }

  }

});

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