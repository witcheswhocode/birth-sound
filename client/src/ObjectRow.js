import React, { useState } from 'react';
import { planets,planetInfo,signOrder } from "./data/settings";

export const ObjectRow = (props) => {
    const { obj } = props;
    return (
      <>
        <option className="asc-option" value={signOrder[{obj}]}>{planetInfo[planets[0]]}    {planets[0]} - {signOrder[{obj}]}</option>
      </>
    )
  }

  export default ObjectRow