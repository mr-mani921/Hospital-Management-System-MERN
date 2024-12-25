import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='biography container'>
      <div className="banner">
        <img src={imageUrl} alt="Biography Image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are?</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt rem laudantium non beatae voluptate repellat, voluptatum facere veritatis excepturi. Qui accusamus ipsum adipisci, cumque harum quaerat unde vel blanditiis.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reprehenderit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde laborum animi.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolorem est ab nulla voluptatum laborum.</p>
      </div>
    </div>
  )
}

export default Biography
