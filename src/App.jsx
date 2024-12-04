import { useEffect, useState } from 'react';
import axios from 'axios';

import { CiUmbrella } from "react-icons/ci";
import './App.css'

function App() {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');
      const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');

      const { location } = data.data.cwaopendata.dataset;

      setWeatherList(location);
    })()
  }, [])




  return (

    <div className='wrap'>
      <h2>36小時天氣預報</h2>

      <div className="container">
      {
        weatherList.map((city) => {
          return (
            <div className="item" key={city.locationName}>
              <h3>{city.locationName}</h3>
              <div className="content">
                {
                  city.weatherElement[0].time.map((time, index) => {
                    return (

                      <div className="item2" key={index}>
                        {/* 日期 */}
                        <p>{
                          new Date(city.weatherElement[0].time[0].starTime).toLocaleString(undefind, {
                            day: 'numeric'
                          })
                        }</p>
                        {/* 時間 */}

                        <p>{
                          new Date(time.starTime).toLocaleString(undefind, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })
                        }</p><br />
                        ~<br />
                        <p>{
                          new Date(time.endTime).toLocaleString(undefind, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })
                        }</p>
                        {/* 名稱 */}
                        <P>{time.parameter.parameterName}</P>
                        {/* 圖片 */}
                        <p><img src="{`./weatherIcon/${time.parameter.parameterName}.svg`}" alt="" /></p>


                        <p><CiUmbrella />{
                          city.weatherElement[4].time[index].parameter.parameterName
                        }

                        </p>
                      </div>

                    )


                  })
                }
              </div>
            </div>
          )
        })
      }


    </div>
    </div >

  )
}

export default App
