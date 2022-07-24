import React, { useState } from 'react';
import { planets,planetInfo,signOrder } from "./data/settings";
import Select from 'react-select';

const SignList = (props) =>  {
  console.log(props['birthchartprop']);
  const options = [
    {label: "one", selected:true, value: 1, className: 'custom-class'},
    {label: "two", value: 2, className: 'awesome-class'}
    // more options...
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  function selectedAsc(e){
    console.log(e);
  }
  if (props.birthchartprop){
    return (
      <div id='birthchart-list'>
          {/* <Select className={'birthchart-dropdown-data color-'+props['birthchartprop'][planets[0]]} id={planets[0]} 
                  options={options} 
                  isSearchable={false}
                  styles={customStyles}
                  value={1}
                  components={{
                    IndicatorSeparator: () => null
                  }} />*/}
          <select name="select-asc" className={'birthchart-dropdown-data color-'+props['birthchartprop'][planets[0]]} id={planets[0]} onChange={selectedAsc}>
            <option className={"asc-option color-"+signOrder[0]} value={signOrder[0]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[0]}</option>
            <option className="asc-option" value={signOrder[1]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[1]}</option>
            <option className="asc-option" value={signOrder[2]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[2]}</option>
            <option className="asc-option" value={signOrder[3]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[3]}</option>
            <option className="asc-option" value={signOrder[4]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[4]}</option>
            <option className="asc-option" value={signOrder[5]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[5]}</option>
            <option className="asc-option" value={signOrder[6]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[6]}</option>
            <option className="asc-option" value={signOrder[7]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[7]}</option>
            <option className="asc-option" value={signOrder[8]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[8]}</option>
            <option className="asc-option" value={signOrder[9]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[9]}</option>
            <option className="asc-option" value={signOrder[10]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[10]}</option>
            <option className="asc-option" value={signOrder[11]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[11]}</option>
          </select> 
          <table>
              <tbody>
                  <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[1]]} id={planets[1]}><span>{planetInfo[planets[1]]}</span>{planets[1]} - {props['birthchartprop'][planets[1]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[6]]} id={planets[6]}><span>{planetInfo[planets[6]]}</span>{planets[6]} - {props['birthchartprop'][planets[6]]}</td></tr>
                  <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[2]]} id={planets[2]}><span>{planetInfo[planets[2]]}</span>{planets[2]} - {props['birthchartprop'][planets[2]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[7]]} id={planets[7]}><span>{planetInfo[planets[7]]}</span>{planets[7]} - {props['birthchartprop'][planets[7]]}</td></tr>
                  <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[3]]} id={planets[3]}><span>{planetInfo[planets[3]]}</span>{planets[3]} - {props['birthchartprop'][planets[3]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[8]]} id={planets[8]}><span>{planetInfo[planets[8]]}</span>{planets[8]} - {props['birthchartprop'][planets[8]]}</td></tr>
                  <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[4]]} id={planets[4]}><span>{planetInfo[planets[4]]}</span>{planets[4]} - {props['birthchartprop'][planets[4]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[9]]} id={planets[9]}><span>{planetInfo[planets[9]]}</span>{planets[9]} - {props['birthchartprop'][planets[9]]}</td></tr>
                  <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[5]]} id={planets[5]}><span>{planetInfo[planets[5]]}</span>{planets[5]} - {props['birthchartprop'][planets[5]]}</td><td className={'birthchart-table-data color-'+props['birthchartprop'][planets[10]]} id={planets[10]}><span>{planetInfo[planets[10]]}</span>{planets[10]} - {props['birthchartprop'][planets[10]]}</td></tr>
              </tbody>
          </table>
      </div>
    );
  }
  else {
    return (<p>Loading...</p>)
  }
}

export default SignList;