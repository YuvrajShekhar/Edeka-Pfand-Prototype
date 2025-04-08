import React from 'react'
import Laptop from '../assets/laptop.jpg'

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt='/' />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">
            ABOUT DASHBOARD 
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            ABOUT BEARLOCAL COMPANY 
          </h1>
          <p>                        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, nisl nec malesuada sodales, lorem velit semper augue, sed ullamcorper mauris est quis tellus. Phasellus posuere malesuada lacinia. Aliquam tincidunt vulputate auctor. Curabitur lacinia ut purus id porttitor. Sed sit amet vulputate elit, a sodales urna. Integer lorem erat, lacinia ac magna at, varius pulvinar nulla. Nulla blandit odio congue, luctus nunc in, tincidunt arcu. Quisque vitae lacus augue. Morbi vehicula leo enim, nec facilisis nisi faucibus a. Vivamus feugiat, erat at eleifend imperdiet, ante mi vulputate dolor, vitae mollis nunc lectus quis arcu. Curabitur nec nisl sollicitudin, laoreet mauris ut, laoreet mi.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Know More</button>
        </div>
      </div>

    </div>
  )
}

export default About