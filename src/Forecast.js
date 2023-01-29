import React from "react";
import './App.css';

export default function forecast() {
    let days = [
        {name: 'Sunday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        },
        {name: 'Monday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        },
        {name: 'Tuesday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        },
        {name: 'Wednesday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        },
        {name: 'Thursday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        },
        {name: 'Friday',
        icon: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        day: 10,
        night: 5
        }   
      ];
    

    return (
        <div className='row'>
        
            {days.map(function(day, index) {
                     return (
                    <div className="col-2" key={index}>
                        <div >            
                            <div className="weather-forecast-date">{day.name}</div>
                                <img  src={day.icon} alt="weather-pic"  width="32"/>
                                <div className="weather-forecast-temperatures">
                                <span className="weather-forecast-temperature-max">{day.day} ℃ </span> /
                                <span className="weather-forecast-temperature-min">{day.night} ℃ </span>
                            </div>
                        </div>  
                    </div>  
            );}
            
            )}
           
        </div>
    );
}