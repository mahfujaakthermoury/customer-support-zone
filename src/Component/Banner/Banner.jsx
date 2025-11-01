import React from 'react';
//import vectorTwo from "../../assets/vectorTwo.png"

const Banner = ({ inProgress, resolved }) => {



  return (
    <div className='max-w-[1200px] mx-auto my-15 flex text-white text-2xl'>
      <div className='grid place-content-center h-[220px] w-[650px] rounded-xl
        mr-5 bg bg-linear-65 from-[#632EE3] to-[#9F62F2]'
      //       style={{
      //   backgroundImage: `linear-gradient(to right, rgb(99 46 227), rgb(159 98 242), url(${vectorTwo})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }} 
      >
        <h1>In Progress</h1>
        <h1 className='text-6xl font-semibold pt-4 ps-11'>{inProgress.length}</h1>
      </div>
      <div className='grid place-content-center h-[220px] w-[650px]  
      rounded-xl bg bg-linear-65 from-[#16f759] to-[#049b54]'>
        <h1>Resolved</h1>
        <h1 className='text-6xl font-semibold pt-4 ps-8'>{resolved.length}</h1>
      </div>
    </div>
  );
};

export default Banner;