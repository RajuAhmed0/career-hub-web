import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex max-w-[1320px] items-center justify-center mx-auto  mb-[130px]">
                <div className="w-[670px] text-left">
                    <h1 className="text-[80px] font-extrabold text-[#1A1919]">
                        One Step Closer To Your <span className="career-textAll">Dream Job</span>
                    </h1>
                    <p className="text-lg font-medium text-[#757575]">
                        Explore thousands of job opportunities with all the information you need to secure your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="career-btn mt-8">
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