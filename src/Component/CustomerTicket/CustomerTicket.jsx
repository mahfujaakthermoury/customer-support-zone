
import date from "../../assets/date.png"

const CustomerTicket = ({ customer, hendelInProgress }) => {
    //console.log(customer)

    return (
        <div>
            <div onClick={() =>
                hendelInProgress(customer)} className="cursor-pointer card bg-base-100 w-[430px] rounded-sm shadow-sm">
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">{customer.title}</h2>
                        <div
                            className={`flex items-center px-3 py-1 rounded-4xl ${customer.status === "Open"
                                ? "bg-[#B9F8CF]" // green
                                :
                                "bg-[#F8F3B9]" // yellow              
                                }`}
                        >
                            <div
                                className={`h-3 w-3 mr-2 rounded-full ${customer.status === "Open"
                                    ? "bg-[#02A53B]"
                                    :
                                    "bg-[#e1b600]"
                                    }`}
                            ></div>
                            <h3>{customer.status}</h3>
                        </div>
                    </div>
                    <p className='text-[#627382]'>{customer.description}</p>
                    <div className="flex justify-between text-[#627382]">
                        <div className='flex'>
                            <p>{customer.id}</p>
                            <p className={`pl-2 ${customer.priority === "LOW PRIORITY"
                                ? "text-[#02A53B]"
                                : customer.priority === "MEDIUM PRIORITY"
                                    ? "text-[#FEBB0C]"
                                    : "text-[#F83044]"
                                }`} >{customer.priority}</p>
                        </div>
                        <div className='flex'>
                            <p>{customer.customer}</p>
                            <img className='pr-1 pl-2' src={date} alt="" />
                            <p>{customer.createdAt}</p>
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