import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet, nisi vero quas commodi expedita nemo animi velit ab possimus quos nulla reiciendis doloremque assumenda quasi quo laboriosam veniam perferendis placeat. Iure reiciendis soluta odio ab commodi tenetur consequuntur harum sequi vel eligendi non in rem, tempora dicta, nulla laboriosam.</p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="Hero Image" className='animated-image'/>
        <span>
            <img src="/Vector.png" alt="Vector image" />
        </span>
      </div>
    </div>
  )
}

export default Hero
