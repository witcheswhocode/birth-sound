import React from "react";
import { currentBirthChart,planets } from "./data/settings";

const SignList = () => {  
  return (
    <div id='birthchart-list'>
        <table>
            <tbody>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[0]]} id={planets[0]}>{planets[0]} - {currentBirthChart[planets[0]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[6]]} id={planets[6]}>{planets[6]} - {currentBirthChart[planets[6]]}</td></tr>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[1]]} id={planets[1]}>{planets[1]} - {currentBirthChart[planets[1]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[7]]} id={planets[7]}>{planets[7]} - {currentBirthChart[planets[7]]}</td></tr>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[2]]} id={planets[2]}>{planets[2]} - {currentBirthChart[planets[2]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[8]]} id={planets[8]}>{planets[8]} - {currentBirthChart[planets[8]]}</td></tr>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[3]]} id={planets[3]}>{planets[3]} - {currentBirthChart[planets[3]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[9]]} id={planets[9]}>{planets[9]} - {currentBirthChart[planets[9]]}</td></tr>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[4]]} id={planets[4]}>{planets[4]} - {currentBirthChart[planets[4]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[10]]} id={planets[10]}>{planets[10]} - {currentBirthChart[planets[10]]}</td></tr>
                <tr className='birthchart-table-row'><td className={'birthchart-table-data color-'+currentBirthChart[planets[5]]} id={planets[5]}>{planets[5]} - {currentBirthChart[planets[5]]}</td><td className={'birthchart-table-data color-'+currentBirthChart[planets[11]]} id={planets[11]}>{planets[11]} - {currentBirthChart[planets[11]]}</td></tr>
            </tbody>
        </table>
    </div>
  );
}

export default SignList;