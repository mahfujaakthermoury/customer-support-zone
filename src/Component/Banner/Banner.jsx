import React from 'react';
//import vectorTwo from "../../assets/vectortwo.png"

const Banner = ({ inProgress, resolved }) => {

  return (
    <div className=' max-w-[1200px] mx-auto my-15 text-white text-2xl flex flex-col lg:flex-row'>

      <div className=' mb-5 grid place-content-center h-[220px] w-[650px] rounded-xl
        mr-5 bg-[linear-gradient(65deg,#632EE3,#9F62F2)] bg-cover bg-center relative'>

          <img src="/image/vector.png" alt="" className="absolute"  />
          <img src="/image/vector.png" alt="" className="absolute right-0 transform scale-x-[-1] "/>
          <h1>In Progress</h1>
        <h1 className='text-6xl font-semibold pt-4 ps-11'>{inProgress.length}</h1>
        </div>

      <div className='grid place-content-center h-[220px] w-[650px]  
      rounded-xl bg-[linear-gradient(65deg,#16f759,#049b54)] bg-cover bg-center relative'>
         <img src="/image/vector.png" alt="" className="absolute"  />
          <img src="/image/vector.png" alt="" className="absolute right-0 transform scale-x-[-1] "/>
        <h1>Resolved</h1>
        <h1 className='text-6xl font-semibold pt-4 ps-8'>{resolved.length}</h1>
      </div>
    </div>
  );
};

export default Banner;