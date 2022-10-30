# Description
A simple and minimalistic nodejs-weather-api using "Easy Global Weather API"

## Requirements
- node
- npm

## How to use
- 1 - Download the project & go to project root
- 2 - Install dependencies
   > npm i 
- 3 - Get weather API_KEY from [weather-api](https://www.visualcrossing.com/weather-api)
- 4 - Change values in .env
- 5 - Launch project
   > npm start
- 6 - Request weather data using target location Latitude & Longitude
   > localhost:<PORT>/api/v1/weather/<Lat,Lon> 

   > // exemple: http://localhost:3001/api/v1/weather/45.764042,4.835659

## Tips
To easily get Lat,Lon information using a city name use [latlong.net](https://www.latlong.net)