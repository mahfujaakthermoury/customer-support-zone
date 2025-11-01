import React from 'react';

const ResolvedTask = ({customer}) => {
    return (
        <div>
             <div className='card bg-[#E0E7FF] w-[300px] rounded-sm shadow-sm mb-4'>
            <div className="card-body">
                <h2 className="card-title">{customer.title}</h2>
            </div>
        </div>
        </div>
    );
};

export default ResolvedTask;