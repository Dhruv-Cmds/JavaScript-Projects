import { useState } from 'react'
import React from 'react'

const App = () => {

  const [value, setValue] = useState(0);

  return (

    <div className="App">

      <div className='value'>
        {value}
      </div>

      <button onClick={() => { setValue(value + 1) }}>click me</button>

    </div>
  );

}

export default App

