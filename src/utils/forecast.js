const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4a52d277bc897ab3dc4628949f819d82&query=' + latitude + ',' + longitude + '&units=f'

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