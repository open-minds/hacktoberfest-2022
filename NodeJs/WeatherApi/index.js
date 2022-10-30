/**
 * Dependencies
 */
const express = require("express")
const http = require("http")
const axios = require("axios")
const dotenv = require("dotenv").config()

/**
 * Express app
 */
const app = express()
const {PORT, WEATHER_API_KEY} = process.env


// Weather endpoint
const weather_router = express.Router()
weather_router.get("/:latLon", (req, res) => {
    const {latLon} = req.params
    const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latLon}?unitGroup=metric&include=current&key=${WEATHER_API_KEY}&contentType=json`
    
    axios.get(api_url)
    .then(({data})=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
    
})
app.use("/api/v1/weather", weather_router)

/**
 * Server
 */
const server = http.createServer(app)
server.listen(PORT, () =>{
    console.log(`> Listening on port ${PORT} ...`);
})