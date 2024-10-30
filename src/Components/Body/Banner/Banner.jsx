import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex  items-center justify-center h-screen bg-gray-50 p-6">
                <div className="w-[570px] text-left">
                    <h1 className="text-[80px] font-extraboldbold text-[#1A1919]">
                        One Step Closer To Your <span className="text-indigo-500">Dream Job</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Explore thousands of job opportunities with all the information you need to secure your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 focus:outline-none">
                        Get Started
                    </button>
                </div>
                <div className="mt-10">
                <img src={`/images/user.png`} alt="" className='w-[816px] h-[744px]'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;