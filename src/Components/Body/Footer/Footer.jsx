import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1919] py-[50px]">
            <div className="max-w-[1320px] mx-auto ">
                <div className="flex justify-between">
                    <div className="w-[300px]">
                        <h2 className="text-[32px] font-extrabold  text-white">CareerHub</h2>
                        <p className=" mb-5 mt-5 text-[#FFFFFFB2] leading-7">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
                        </p>
                        <div className="">
                            <img src="./icons/social.png" alt="" />
                        </div>
                    </div>
                    <div className="  text-[#FFFFFFB2]">
                        <h2 className="text-xl font-semibold mb-3 text-white">Company</h2>
                        <ul className='leading-10'>
                            <p>About Us</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Careers</p>
                        </ul>
                    </div>
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="text-xl font-semibold mb-3 text-white">Product</h2>
                        <ul className='leading-10'>
                            <p>Prototype</p>
                            <p>Plans & Pricing</p>
                            <p>Customers</p>
                            <p>Integrations</p>
                        </ul>
                    </div>
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="text-xl font-semibold mb-3 text-white">Support</h2>
                        <ul className='leading-10'>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </ul>
                    </div>   
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
                        <ul className='leading-10'>
                            <p>526 S. Broadway, NYC</p>
                            <p>+1777 - 978 - 5570</p>
                          
                        </ul>
                    </div>
                </div>
                <div className=" border-t border-[#7E90FE33] mt-[50px] mb-[50px] text-center ">
                </div>
                <div className='text-[#FFFFFFB2] flex justify-between'>
                <p className="text-sm">&copy; 2023 CareerHub. All Rights Reserved.</p>
                <p className="text-sm">Powered by CareerHub</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;