import React, { use } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';

const CustomerTickets = ({ customersPromise }) => {
    //console.log(customersPromise)
    const customerData = use(customersPromise);

    return (
        <div className='max-w-[1200px] mx-auto flex text-[]'>
            <div>
                <h1 className='font-semibold text-2xl pb-3'>Customer Tickets</h1>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        customerData.map(customer => <CustomerTicket customer={customer}></CustomerTicket>)
                    }
                </div>
            </div>
            <div className='ml-8'>
                <h1 className='font-semibold text-2xl pb-3'>Task Status</h1>
                {/* {
                    customerData.map(customer => <CustomerTicket customer={customer}></CustomerTicket>)
                } */}
            </div>
        </div>
    );
};

export default CustomerTickets;