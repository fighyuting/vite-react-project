import { useEffect, useState } from 'react'


import { CiUmbrella } from "react-icons/ci";
import './App.css'

function App() {


  return (
    <>
      <div className='wrap'>
        <h2>36小時天氣預報</h2>

        {/* 一列兩欄 */}

        {/* 第一欄 */}
        <div className='row'>
          <div className='col'>
            {/* 卡片樣式 */}
            <div className='card'>
              {/* 卡片標題 */}
              <div className='card-title'>台北市</div>


              {/* 卡片內容 */}
              <div className='card-body'>
                {/* 一列三欄 */}
                <div className='row2'>
                  <div className='col2'><p>2日</p>
                    <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00<br />
                    </p>
                    <p>
                      <img src='./public/weatherIcon/晴時多雲.svg'></img>
                    </p>
                    <p>晴時多雲</p>
                    <p><CiUmbrella />10%</p>

                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      </>
      )
}

      export default App
