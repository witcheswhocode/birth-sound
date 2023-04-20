var SunCalc = require('suncalc')
var geoTz = require("geo-tz")
const {DateTime} = require('luxon')
const sweph = require('sweph')
const path = require('path')

sweph.set_ephe_path(path.join(__dirname, '/../../eph'))

const { utcToJulianUt, degreesToDms, zodiacSign, utcToJulianEt } = require('./utils')

const houses = (date, position) => {
  const cleanedDate = new Date(date.toISOString().split('T')[0]);
  const sunrise = SunCalc.getTimes(cleanedDate, position.latitude, position.longitude)
  const timezone = geoTz.find(position.latitude,position.longitude);
  // PST
  //const sunriseHr = DateTime.fromJSDate(sunrise.sunrise).getHours();
  const sunriseHr = (sunrise.sunrise).toLocaleTimeString("en-US", { timeZone: timezone }).split(':')[0];
  const numHours = 1
  // 
  if (sunriseHr <= 5 && sunriseHr >= 4){
    console.log('0');
    date.setTime(date.getTime() + 1 * 60 * 60 * 1000)
  }
  else if (sunriseHr <= 6 && sunriseHr >= 5){
    console.log('1');
    date.setTime(date.getTime() + 2 * 60 * 60 * 1000)
  }
  else if (sunriseHr > 6 && sunriseHr <= 7){
    console.log('2');
    date.setTime(date.getTime() - 2 * 60 * 60 * 1000)
  }
  else if (sunriseHr > 7 && sunriseHr <= 8){
    console.log('3');
    date.setTime(date.getTime() - 1 * 60 * 60 * 1000)
  }
  // works for liz, stevo, dad. 7am sunrise, 6-630 birthtime
  /*if (sunriseHr => 7 && sunriseHr <= 8){
    date.setTime(date.getTime() - 3 * 60 * 60 * 1000)
  }*/    
  // subtracting 3 somehow returns the right ascendent the most
  //date.setTime(date.getTime() - 3 * 60 * 60 * 1000)
  // 1:50pm +3

  const julianDayUT = utcToJulianUt(date)
  const withoutGeoposition = !(position?.latitude && position?.longitude)

  if (withoutGeoposition) {
    return {
      axes: {
        asc: undefined,
        dc: undefined,
        mc: undefined,
        ic: undefined
      },
      houses: []
    }
  }

  const { houses: housesPositions } = sweph.houses(
    julianDayUT,
    position.latitude,
    position.longitude,
    'P' // placidus system...
  ).data

  const houseCollection = housesPositions.map((cuspid) => ({ position: degreesToDms(cuspid), sign: zodiacSign(cuspid) }))

  const axes = {
    asc: houseCollection[0], dc: houseCollection[6], mc: houseCollection[9], ic: houseCollection[3]
  }

  return {
    axes,
    houses: houseCollection
  }
}

module.exports = {
  houses
}
