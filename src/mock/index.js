/*
 * @Author: heywc 1842347744@qq.com
 * @Date: 2023-09-01 09:49:30
 * @LastEditors: heywc 1842347744@qq.com
 * @LastEditTime: 2023-09-01 09:52:40
 * @FilePath: /react-app/src/mock/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs';

Mock.mock('/api/user', {
    name: "@name()", 
    city: "@city()"
})