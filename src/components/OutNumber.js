import React from 'react';

const OutNumber = ({data}) => {
  return (
  <div>
    <div className='out'>
        +7 ( {data.split('')[0]||"_"} {data.split('')[1]||"_"} {data.split('')[2]||"_"} ) 
        {data.split('')[3]||"_"} {data.split('')[4]||"_"} {data.split('')[5]||"_"}
        -{data.split('')[6]||"_"} {data.split('')[7]||"_"}
        -{data.split('')[8]||"_"} {data.split('')[9]||"_"}
    </div>
  </div>
  )
};

export default OutNumber;
