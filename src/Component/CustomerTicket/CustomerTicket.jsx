import React from 'react';
import date from "../../assets/date.png"

const CustomerTicket = ({ customer }) => {
    console.log(customer)
    return (
        <div>
            <div className="card bg-base-100 w-[450px] rounded-sm shadow-sm">
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">Card title!</h2>
                        <div className='flex items-center bg-[#46df7c] px-3 py-1 rounded-4xl'>
                            <div className='h-3  w-3 mr-2 rounded-full bg-[#02A53B]'></div>
                            <h3>Open</h3>
                        </div>
                    </div>
                    <p className='text-[#627382]'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="flex justify-between text-[#627382]">
                        <div className='flex'>
                            <p>#01</p>
                            <p className='pl-2 text-yellow-400'>MEDIUM PRIORITY</p>
                        </div>
                        <div className='flex'>
                            <p>James Anderson</p>
                            <img className='pr-1 pl-2' src={date} alt="" />
                            <p>1/21/2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <aside>

            </aside>
        </div>
    );
};

export default CustomerTicket;