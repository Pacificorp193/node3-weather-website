const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=60a4653aaf4479a401926cd172e5045b&query' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast