import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1919] md:py-[50px] py-7">
            <div className="max-w-[1320px] xl:mx-auto mx-3 ">
                <div className="md:flex justify-between">
                    <div className="w-[300px]">
                        <h2 className="lg:text-[32px] text-xl  font-extrabold  text-white">CareerHub</h2>
                        <p className=" mb-5 md:mt-5 text-[#FFFFFFB2] lg:leading-7 lg:text-base text-sm ">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
                        </p>
                        <div className="md:mb-0 mb-2">
                            <img src="./icons/social.png" alt="" />
                        </div>
                    </div>
                    <div className="  text-[#FFFFFFB2]">
                        <h2 className="lg:text-xl md:text-base text-sm font-semibold md:mb-3 mb-1 text-white">Company</h2>
                        <ul className='lg:leading-10 md:leading-6 lg:text-base md:text-sm text-[8px] '>
                            <p>About Us</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Careers</p>
                        </ul>
                    </div>
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="lg:text-xl md:text-base text-sm font-semibold md:mb-3 mb-1 text-white">Product</h2>
                        <ul className='lg:leading-10 md:leading-6 lg:text-base md:text-sm text-[6px]'>
                            <p>Prototype</p>
                            <p>Plans & Pricing</p>
                            <p>Customers</p>
                            <p>Integrations</p>
                        </ul>
                    </div>
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="lg:text-xl md:text-base text-sm font-semibold md:mb-3 mb-1 text-white">Support</h2>
                        <ul className='lg:leading-10 md:leading-6 lg:text-base md:text-sm text-[6px]'>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </ul>
                    </div>   
                    <div className=" text-[#FFFFFFB2]">
                        <h2 className="lg:text-xl md:text-base text-sm font-semibold md:mb-3 mb-1 text-white">Contact</h2>
                        <ul className='lg:leading-10 md:leading-6 lg:text-base md:text-sm text-[6px]'>
                            <p>526 S. Broadway, NYC</p>
                            <p>+1777 - 978 - 5570</p>
                          
                        </ul>
                    </div>
                </div>
                <div className=" border-t border-[#7E90FE33] md:mt-[50px] mt-2 md:mb-[50px] mb-2 text-center ">
                </div>
                <div className='text-[#FFFFFFB2] flex justify-between'>
                <p className="md:text-sm text-xs">&copy; 2023 CareerHub. All Rights Reserved.</p>
                <p className="md:text-sm text-xs">Powered by CareerHub</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;