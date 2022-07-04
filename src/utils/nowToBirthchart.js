
import Moment from 'moment';
import { apiSignOrder, currentBirthChart } from '../data/settings';
var ts = require('@mapbox/timespace');

export async function nowToBirthchart(){
    const date = Moment().format('YYYY-MM-DD HH:mm:00');
    console.log(date);
    var point = [-118.2437,34.0522];
    var time = await ts.getFuzzyLocalTimeFromPoint(new Date(date), point);
    console.log(time.format().replaceAll(':','%3A'));
    const url = "time="+ts.getFuzzyLocalTimeFromPoint(new Date(time), point).format().replaceAll(':','%3A')
                                                                    +"&latitude="+point[1]+"&longitude="+point[0]
    console.log(url);
    return fetch("http://localhost:3001/horoscope?"+url)
        .then(res => res.json())
        .then((result)=>{
            console.log(result);
            return {"sun":apiSignOrder[result.data.astros.sun.sign-1],
                    "moon":apiSignOrder[result.data.astros.moon.sign-1],
                    "mercury":apiSignOrder[result.data.astros.mercury.sign-1],
                    "venus":apiSignOrder[result.data.astros.venus.sign-1],
                    "mars":apiSignOrder[result.data.astros.mars.sign-1],
                    "jupiter":apiSignOrder[result.data.astros.jupiter.sign-1],
                    "saturn":apiSignOrder[result.data.astros.saturn.sign-1],
                    "uranus":apiSignOrder[result.data.astros.uranus.sign-1],
                    "neptune":apiSignOrder[result.data.astros.neptune.sign-1],
                    "pluto":apiSignOrder[result.data.astros.pluto.sign-1],
                    "asc":apiSignOrder[result.data.axes.asc.sign-1]};
        });
}

export async function dateToBirthchart(startDate,value,point){
    const date = Moment(startDate).format('YYYY-MM-DD');
    const datetime = Moment(date+' '+value, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm:00');
    var time = ts.getFuzzyLocalTimeFromPoint(new Date(datetime), point);
    console.log(time.format().replaceAll(':','%3A'))
    const url = "time="+ts.getFuzzyLocalTimeFromPoint(new Date(datetime), point).format().replaceAll(':','%3A')
                                                                    +"&latitude="+point[1]+"&longitude="+point[0]
    console.log(url)
    fetch("http://localhost:3001/horoscope?"+url)
    //fetch("http://localhost:3000/horoscope?time=1993-08-06T16%3A50%3A00-04%3A00&latitude=-33.41167&longitude=-70.66647")
    .then(res => res.json())
    .then((result)=>{
        console.log(apiSignOrder[result.data.astros.sun.sign-1]);
    })
    console.log(url);
    return fetch("http://localhost:3001/horoscope?"+url)
        .then(res => res.json())
        .then((result)=>{
            console.log(result);
            return {"sun":apiSignOrder[result.data.astros.sun.sign-1],
                    "moon":apiSignOrder[result.data.astros.moon.sign-1],
                    "mercury":apiSignOrder[result.data.astros.mercury.sign-1],
                    "venus":apiSignOrder[result.data.astros.venus.sign-1],
                    "mars":apiSignOrder[result.data.astros.mars.sign-1],
                    "jupiter":apiSignOrder[result.data.astros.jupiter.sign-1],
                    "saturn":apiSignOrder[result.data.astros.saturn.sign-1],
                    "uranus":apiSignOrder[result.data.astros.uranus.sign-1],
                    "neptune":apiSignOrder[result.data.astros.neptune.sign-1],
                    "pluto":apiSignOrder[result.data.astros.pluto.sign-1],
                    "asc":apiSignOrder[result.data.axes.asc.sign-2]};
        });
}