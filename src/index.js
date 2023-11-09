import * as React from "react";
import * as ReactDOM from "react-dom/client";
import WeatherApp from './Weather-app';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <WeatherApp/>
);

console.log('hello')

reportWebVitals();
