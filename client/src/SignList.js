import React from 'react';
import { planets,planetInfo,signOrder,rihannaChart } from "./data/settings";

const SignList = (props) =>  {
  function selectedAsc(e){
    const { ascChange } = props;
    // change the color of the asc select box
    const selectedSign = e.target.value;
    document.getElementById('asc').className = "birthchart-dropdown-data color-"+selectedSign;
    
    // update birthchart
    ascChange(selectedSign);
  }
  
  // generate objects
  const objects = [0,1,2,3,4,5,6,7,8,9,10,11];

  if (props.birthchartprop){
    return (
      <div id='birthchart-list'>
          <select defaultValue={props['birthchartprop'][planets[0]]} name="select-asc" className={'birthchart-dropdown-data color-'+props['birthchartprop'][planets[0]]} id={planets[0]} onChange={selectedAsc}>
            {objects.map((object, i) => <option  key={object} className="asc-option" value={signOrder[object]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[object]}</option>)}
          </select> 
          <table>
              <tbody>
                  {objects.splice(1,5).map((object,i) => <tr key={object} className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[object]]} id={planets[object]}><span>{planetInfo[planets[object]]}</span>{planets[object]} - {props['birthchartprop'][planets[object]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[object+5]]} id={planets[object+5]}><span>{planetInfo[planets[object+5]]}</span>{planets[object+5]} - {props['birthchartprop'][planets[object+5]]}</td></tr>)}
              </tbody>
          </table>
      </div>
    );
  }
  else {
    return (
      <div id='birthchart-list'>
          <select defaultValue={rihannaChart[planets[0]]} name="select-asc" className={'birthchart-dropdown-data color-'+rihannaChart[planets[0]]} id={planets[0]} onChange={selectedAsc}>
            {objects.map((object, i) => <option  key={object} className="asc-option" value={signOrder[object]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[object]}</option>)}
          </select> 
          <table>
              <tbody>
                  {objects.splice(1,5).map((object,i) => <tr key={object} className='birthchart-table-row'><td className={'birthchart-table-data color-'+rihannaChart[planets[object]]} id={planets[object]}><span>{planetInfo[planets[object]]}</span>{planets[object]} - {rihannaChart[planets[object]]}</td><td className={'birthchart-table-data color-'+rihannaChart[planets[object+5]]} id={planets[object+5]}><span>{planetInfo[planets[object+5]]}</span>{planets[object+5]} - {rihannaChart[planets[object+5]]}</td></tr>)}
              </tbody>
          </table>
      </div>)
  }
}

export default SignList;