export const planets = ['sun', 'moon', 'asc', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'/*, 'northnode', 'chiron', 'mc' */];
//export const signOrder = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
export const signOrder = ['pisces','aquarius','capricorn','sagittarius','scorpio','libra','virgo','leo','cancer','gemini','taurus','aries'];

export const planetInfo = require('./planetInfo.json');

export const scale = 2;
export const type = 'major';


const lizBirthChart = require('./lizbc.json');
const krystophChart = require('./krystophbc.json');
const taylorChart = require('./taylorbc.json');
const rihannaChart = require('./rihannabc.json');
const macmillerChart = require('./macmbc.json'); // chart is off by one shift
const britthowardChart = require('./brittanyhbc.json');
export const currentBirthChart = lizBirthChart;