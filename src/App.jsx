/*
 * @Author: heywc 1842347744@qq.com
 * @Date: 2023-09-01 09:24:03
 * @LastEditors: heywc 1842347744@qq.com
 * @LastEditTime: 2023-09-01 16:21:12
 * @FilePath: /react-app/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios'
import './mock/index'

const App = ()=> {
    const [user,setUser] = useState('');
    useEffect(()=>{
        init()
    },[])
    const init = ()=>{
        axios.get('/api/user')
        .then(res => {
            // console.log(res);
            setUser(res.data) 
        })
    }


    return (
        <div className="app">
            <header className="app-header">
                test
            </header>
            <main className='app-main'>
                <div>{user.name }, { user.city  }</div>
            </main>
        </div>
    );
}

export default App;
