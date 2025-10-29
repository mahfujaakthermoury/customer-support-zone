import React from 'react';

const NavBar = () => {
    return (

            <div className="navbar bg-base-100 flex justify-between max-w-[1250px] mx-auto my-5">
                <div className="">
                    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a> Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a> Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <a className="btn bg bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white"><span>+</span>  New Ticket</a>
                </div>
            </div>

    );
};

export default NavBar;