import React from "react";
import { currentBirthChart,planets } from "./data/settings";

const SignList = () => {  
  return (
    <div id='birthchart-list'>
        <table>
            <tbody>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[0]}>{planets[0]} - {currentBirthChart[planets[0]]}</td><td class='birthchart-table-data' id={planets[6]}>{planets[6]} - {currentBirthChart[planets[6]]}</td></tr>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[1]}>{planets[1]} - {currentBirthChart[planets[1]]}</td><td class='birthchart-table-data' id={planets[7]}>{planets[7]} - {currentBirthChart[planets[7]]}</td></tr>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[2]}>{planets[2]} - {currentBirthChart[planets[2]]}</td><td class='birthchart-table-data' id={planets[8]}>{planets[8]} - {currentBirthChart[planets[8]]}</td></tr>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[3]}>{planets[3]} - {currentBirthChart[planets[3]]}</td><td class='birthchart-table-data' id={planets[9]}>{planets[9]} - {currentBirthChart[planets[9]]}</td></tr>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[4]}>{planets[4]} - {currentBirthChart[planets[4]]}</td><td class='birthchart-table-data' id={planets[10]}>{planets[10]} - {currentBirthChart[planets[10]]}</td></tr>
                <tr class='birthchart-table-row'><td class='birthchart-table-data' id={planets[5]}>{planets[5]} - {currentBirthChart[planets[5]]}</td><td class='birthchart-table-data' id={planets[11]}>{planets[11]} - {currentBirthChart[planets[11]]}</td></tr>
            </tbody>
        </table>
    </div>
  );
}

export default SignList;