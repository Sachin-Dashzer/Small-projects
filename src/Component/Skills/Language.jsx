

import React from 'react'




const Language = (promps) => {
  return (
    <div className='languages'>

        <h3>{promps.data}</h3>

        <h4 style={{color : "var(--accent)"}}>{promps.level}%</h4>


    </div>
  )
}

export default Language