import CustomerTicket from '../CustomerTicket/CustomerTicket';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../TaskStatus/ResolvedTask';
import React, { use } from 'react';

const CustomerTickets = ({ inProgress, customersPromise, hendelInProgress, resolved, hendleResolved, hendleRemove}) => {

    const customerData = use(customersPromise);
    //const taskStatusData = use()


    return (
        <div>
            <div className='max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row '>
                <div className='mb-20'>
                    <h1 className='font-semibold text-2xl pb-3'>Customer Tickets</h1>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            customerData.map(customer => <CustomerTicket customer={customer} hendelInProgress={hendelInProgress}></CustomerTicket>)
                        }
                    </div>
                </div>
                <div className=''>
                    <div className='ml-8'>
                        <h1 className='font-semibold text-2xl pb-3'>Task Status</h1>
                        {
                            inProgress.length > 0 ? (inProgress.map(customer => <TaskStatus customer={customer} 
                                hendleResolved={hendleResolved} hendleRemove={hendleRemove}></TaskStatus>)
                            ) : (
                                <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                            )
                        }
                    </div>
                    <div className='ml-8 py-10'>
                        <h1 className='font-semibold text-2xl pb-3'>Resolved Task</h1>
                        {
                            resolved.length > 0 ? (resolved.map(customer => <ResolvedTask customer={customer}></ResolvedTask>)
                            ) : (
                                <p className='text-[#627382]'>No resolved tasks yet.</p>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerTickets;