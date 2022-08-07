
import Moment from 'moment';
import { apiSignOrder, currentBirthChart } from '../data/settings';
var ts = require('@mapbox/timespace');

export async function nowToBirthchart(){
    const date = Moment().format('YYYY-MM-DD HH:mm:00');
    var birthlocation = [-118.2437,34.0522];
    var time = await ts.getFuzzyLocalTimeFromPoint(new Date(date), birthlocation);
    const url = "time="+ts.getFuzzyLocalTimeFromPoint(new Date(time), birthlocation).format().replaceAll(':','%3A')
                                                                    +"&latitude="+birthlocation[1]+"&longitude="+birthlocation[0]
    console.log('what');
    return fetch("/horoscope?"+url)
        .then(res => res.json())
        .then((result)=>{
            console.log("first");
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
        }).catch(function(error) {
            return fetch("http://localhost:3001/horoscope?"+url)
            .then(res => res.json())
            .then((result)=>{
                console.log(result.data.axes.asc);
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
        });
}

export async function dateToBirthchart(birthdate,birthtime,birthlocation){
    const date = Moment(birthdate).format('YYYY-MM-DD');
    const datetime = Moment(date+' '+birthtime, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm:00');
    var time = ts.getFuzzyLocalTimeFromPoint(new Date(datetime), birthlocation);
    const url = "time="+ts.getFuzzyLocalTimeFromPoint(new Date(datetime), birthlocation).format().replaceAll(':','%3A')
                                                                    +"&latitude="+birthlocation[1]+"&longitude="+birthlocation[0]

    return fetch("/api/horoscope?"+url)
        .then(res => res.json())
        .then((result)=>{
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
        }).catch(function(error) {
            return fetch("http://localhost:3001/horoscope?"+url)
            .then(res => res.json())
            .then((result)=>{
                console.log(error);
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
        });
}