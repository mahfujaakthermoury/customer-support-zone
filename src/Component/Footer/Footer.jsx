import React from 'react';
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import fb from "../../assets/fb.png";
import email from "../../assets/email.png";

const Footer = () => {
    return (
        <div className='bg-black text-white '>
            <div className='md:flex gap-10 max-w-[1200px] mx-auto row-auto py-15 sm:grid grid-cols-1'>
                <div className='flex-2 pr-10 pt-2'>
                    <h1 className='font-bold text-2xl pb-4'>CS — Ticket System</h1>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex-1 sm: pt-2'>
                    <ul className='space-y-2 text-[#A1A1AA]'>
                        <li className='text-white text-xl'>Company</li>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div className='flex-1 sm: pt-2'>
                    <ul className='space-y-2 text-[#A1A1AA]'>
                        <li className='text-white text-xl'>Services</li>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className='flex-1 sm: pt-2'>
                    <ul className='space-y-2 text-[#A1A1AA]'>
                        <li className='text-white text-xl' >Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className='flex-1 sm: pt-2'>
                    <ul className='space-y-2 text-[#A1A1AA]'>
                        <li className='text-white text-xl'>Social Links</li>
                        <li className='flex items-center'> <img src={twitter} className='pr-1 h-[17px] w-[20px]' alt="" />@CS—Ticket System</li>
                        <li className='flex items-center'> <img src={linkedin} className='pr-1 h-[17px] w-[20px]' alt="" />@CS—Ticket System</li>
                        <li className='flex items-center'> <img src={fb} className='pr-1 h-[17px] w-[20px]' alt="" />@CS—Ticket System</li>
                        <li className='flex items-center'> <img src={email} className='pr-1 h-[17px] w-[20px]' alt="" />support@cst.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='border-t border-gray-500 mx-20 text-center py-6'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;