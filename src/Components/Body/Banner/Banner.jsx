import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex max-w-[1320px] items-center justify-center xl:mx-auto lg:mx-2 mx-3  mb-[130px]">
                <div className="w-[670px] text-left ">
                    <h1 className=" xl:!leading-[100px] lg:!leading-[80px] md:leading-[60px]  xl:text-[80px] lg:text-6xl md:text-4xl text-xl  font-extrabold text-[#1A1919] md:mb-6">
                        One Step Closer To Your <span className="career-textAll">Dream Job</span>
                    </h1>
                    <p className="lg:text-lg md:text-sm text-[8px] font-medium text-[#757575]">
                        Explore thousands of job opportunities with all the information you need to secure your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="career-btn mt-8 lg:!text-xl md:!text-base !text-xs md:!px-7 md:!py-[19px] !px-4 !py-3">
                        Get Started
                    </button>
                </div>
                <div className="mt-[41px]">
                    <img src={`/images/user.png`} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;