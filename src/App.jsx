import React from 'react';
import Weather from './Components/Weather';

const App = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Weather temperature={22}/>
    </div>
  );
}

export default App;
