import React from 'react';

const HelloWorld = ({ tech }) => {
  console.log(tech)
  return (
    <div>
      {tech}
    </div>
  )
}

export default HelloWorld;