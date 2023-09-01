/*
 * @Author: heywc 1842347744@qq.com
 * @Date: 2023-09-01 09:24:03
 * @LastEditors: heywc 1842347744@qq.com
 * @LastEditTime: 2023-09-01 16:20:33
 * @FilePath: /react-app/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
