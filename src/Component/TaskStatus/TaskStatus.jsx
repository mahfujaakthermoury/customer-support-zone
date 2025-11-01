import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const TaskStatus = ({ customer, hendleResolved, hendleRemove }) => {
    //console.log(customer)
    const hendleComplete = ()=>{
        hendleResolved(customer);
         hendleRemove(customer);
         toast.success("Task Completed!", {autoClose: 1000})
    }
    return (
        <div className='card bg-base-100 w-[300px] rounded-sm shadow-sm mb-4'>
            <div className="card-body">
                <h2 className="card-title">{customer.title}</h2>
                <button onClick={hendleComplete} className='text-white bg-[#02A53B] py-2 cursor-pointer'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatus;