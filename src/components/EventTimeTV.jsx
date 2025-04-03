import React from 'react';
import day2Bg from '../assets/designs/Layout.svg';
import Image from '../../public/events/BlogAThon2023/img1.png'
import bgImage from '../assets/designs/backgroung.gif'
function EventTimeTV() {
  return (
    <div >
    <div className="py-8 pl-8 bg-black pb-2 "  style={{ backgroundImage: `url(${bgImage})` }}>
              <span className="bg-yellow-400 px-6 text-3xl font-bold rounded-sm md:rounded-md">TechnoVista</span>
              <p className="text-white text-6xl  leading-none">EVENTS</p>
            </div>
            <hr className="border-t-2  border-white" />
            
    <div className="min-h-fit bg-black overflow-hidden relative flex flex-row justify-around flex-wrap p-4" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Day 1 */}
      <div className="relative w-[300px] h-[600px] bg-black text-white font-mono mb-8">
        <img src={day2Bg} alt="Day 2 Background"  style={{ height: '600px', width: '700px', objectFit: 'cover' }}/>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold tracking-widest text-white">
          DAY1
        </div>
        <img src={Image} alt="" className='absolute bottom-[55%] '  style={{ height: '150px', width: '200px',marginLeft:"50px", objectFit: 'contain' }} />
        <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%]  p-2 rounded text-center">
          <div className="text-xl">APRIL 25TH 2025</div>
          </div>
          <div className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 w-[80%]  p-2 rounded text-center">
          <ul className="list-disc pl-5 mt-2 text-sm ">
            <li >Guest Lecture</li>
            <li >ML Challenge</li>
          </ul>
          <button className="mt-4 w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300">
            Register
          </button>
        </div>
        </div>

      {/* Day 2 */}
      <div className="relative w-[300px] h-[600px] bg-black  text-white font-mono mb-8">
        <img src={day2Bg} alt="Day 2 Background" style={{ height: '600px', width: '700px', objectFit: 'cover' }} />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold tracking-widest text-white">
          DAY2
        </div>
        <img src={Image} alt="" className='absolute bottom-[55%] '  style={{ height: '150px', width: '200px',marginLeft:"50px", objectFit: 'contain' }} />
        <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%]  p-2 rounded text-center">
          <div className="text-xl">APRIL 26TH 2025</div>
          </div>
          <div className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[80%]  p-2 rounded text-center">
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li >Blogathon</li>
            <li >DQ Code Fest</li>
            <li >Debug or Die</li>
          </ul>
          <button className="mt-4 w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300">
            Register
          </button>
        </div>
        </div>
        
    

      {/* Day 3 */}
      <div className="relative w-[300px] h-[600px] bg-black  text-white font-mono mb-8">
        <img src={day2Bg} alt="Day 2 Background" style={{ height: '600px', width: '700px', objectFit: 'cover' }} />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold tracking-widest text-white">
          DAY3
        </div>
        <img src={Image} alt="" className='absolute bottom-[55%] '  style={{ height: '150px', width: '200px',marginLeft:"50px", objectFit: 'contain' }} />
        <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%]  p-2 rounded  text-center">
          <div className="text-xl">APRIL 27TH 2025</div>
          </div>
          <div className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[80%] p-2 rounded text-center">
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li >24hr Hackathon</li>
            <li >Workshop</li>
          </ul>
          <button className="mt-4 w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300">
            Register
          </button>
        </div>
        </div>
    </div>
    
    </div>
  );
}

export default EventTimeTV;