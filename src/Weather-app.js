import { useState } from 'react';
import './Weather-App.css';

function WeatherApp() {

  const currentDate = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonth = months[currentDate.getMonth()];

  // Define an array of weekday names for formatting the day
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = weekdays[currentDate.getDay()];

  // Get the date
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();


  const [searchh, setSearch] = useState('');
  const api_key2='4a8e43db88c942e10dcaac5100f91190'

  const api_key = '4a8e43db88c942e10dcaac5100f91190';
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData2, setWeatherData2] = useState(null);
  const [changeImage, setChangeImage] = useState('');

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchh}&units=Metric&appid=${api_key}`;
    const URL2=`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${searchh}&lat=44.34&lon=10.99&appid=${api_key2}`

    try {
      const response = await fetch(URL);
      const data = await response.json();
      const response2 = await fetch(URL2);
      const data2 = await response2.json();
      if (data && data.weather && data.weather.length > 0) {
        const iconCode = data.weather[0].icon;
        console.log(iconCode);
        if (iconCode === '01d') {
          setChangeImage('sun (1).png');
        }
       else if (iconCode === '01n') {
          setChangeImage('moon.png');
        }
        else if (iconCode === '02d') {
          setChangeImage('partly-cloudy.png');
        }
        else if (iconCode === '02n') {
          setChangeImage('night.png');
        }
        else if (iconCode === '03d') {
          setChangeImage('cloud-computing.png');
        }
        else if (iconCode === '03n') {
          setChangeImage('cloud-computing.png');
        }
        else if (iconCode === '04d') {
          setChangeImage('clouds (1).png');
        }
        else if (iconCode === '04n') {
          setChangeImage('clouds (1).png');
        }

        else if (iconCode === '09d') {
          setChangeImage('shower.png');
        }

        else if (iconCode === '10d') {
          setChangeImage('sun-shower.png');
        }

        else if (iconCode === '10n') {
          setChangeImage('rain.png');
        }

        else if (iconCode === '11d') {
          setChangeImage('scattered-thunderstorms.png');
        }
        else if (iconCode === '13d') {
          setChangeImage('snowflake.png');
        }
        else if (iconCode === '11n') {
          setChangeImage('thunder.png');
        }
        else if (iconCode === '13n') {
          setChangeImage('snowflake.png');
        }
        else if (iconCode === '50d') {
          setChangeImage('cloud.png');
        }
        else if (iconCode === '50n') {
          setChangeImage('cloud.png');
        }
      }
      setWeatherData(data);
      setWeatherData2(data2);

    } catch (error) {
      // Handle any errors that occur during the fetch
    }
    console.log('weee')
    
  };

  const search = (value) => {
    setSearch(value);
  };

  
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />

    </head>
    <div className="cards" style={{height:weatherData? '750px' :'150px'}}>
      <div className="search">
        <input type="text" value={searchh} onChange={(e) => search(e.target.value)} placeholder='ENTER YOUR CITY NAME'/>
        <div className="circle">
          <img src="pngwing.com (36).png" alt="" width={'20px'} onClick={fetchWeather} />
        </div>
      </div>

      {weatherData ?(
        <>
<div className="both">
      <h1> {currentDay}</h1>
      <p> {day} {currentMonth}  {year}</p>
      </div>


          <img src={changeImage} alt="" width="20%" />
<p className='desc'>{weatherData.weather[0].description}</p>
          <div className="temperature-icon">
          <h1>{Math.round(weatherData.main.temp)} </h1>
 <p>°C</p>
          </div>

          <div className="p">
            <h1>{weatherData.name},{weatherData.sys.country}</h1>
          </div>
         <div className="feels-like">
         <div className="pairs">
            <div className="pair">
              <div className="top">
               
                <p>{weatherData.main.temp_min}</p>
                <p className='percentage'><p>°C</p></p>
              </div>

              <div className="bottom">
                <h1 className='humidity'>Min Temp</h1>
              </div>
            </div>

            <div className="pair">
              <div className="top">
              
                <p>{weatherData.main.temp_max}</p>
                <p className='percentage'><p>°C</p></p>
              </div>

              <div className="bottom">
                <h1>Max Temp</h1>
              </div>
            </div>
          </div>
         </div>
          <div className="pairs">
            <div className="pair">
              <div className="top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-water"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"
                  ></path>
                </svg>
                <p>{weatherData.main.humidity}</p>
                <p className='percentage'>%</p>
              </div>

              <div className="bottom">
                <h1 className='humidity'>Humidity</h1>
              </div>
            </div>

            <div className="pair">
              <div className="top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-wind"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
                <p>{weatherData.wind.speed}</p>
                <p className='percentage'>Kmh</p>
              </div>

              <div className="bottom">
                <h1>Wind Speed</h1>
              </div>
            </div>
          </div>
          

          
        </>
      ) :''}
    </div>
    </>
  );
}

export default WeatherApp;
