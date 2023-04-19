import React from 'react';
import { planets,planetInfo,signOrder,rihannaChart,apiSignOrder } from "./data/settings";

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
    console.log(props['birthchartprop']['asc'])
    return (
      <div id='birthchart-list'>
          <select defaultValue={props['birthchartprop']['asc']} name="select-asc" className={'birthchart-dropdown-data color-'+props['birthchartprop'][planets[0]]} id={planets[0]} onChange={selectedAsc}>
            {apiSignOrder.map((object, i) => <option  key={object} className="asc-option" value={object}>{planetInfo[planets[0]]}    {planets[0]} - {object}</option>)}
          </select> 
          <table>
              <tbody>
                  {objects.splice(1,5).map((object,i) => <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[object]]} id={planets[object]}><span>{planetInfo[planets[object]]}</span>{planets[object]} - {props['birthchartprop'][planets[object]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[object+5]]} id={planets[object+5]}><span>{planetInfo[planets[object+5]]}</span>{planets[object+5]} - {props['birthchartprop'][planets[object+5]]}</td></tr>)}
              </tbody>
          </table>
      </div>
    );
  }
}

export default SignList;