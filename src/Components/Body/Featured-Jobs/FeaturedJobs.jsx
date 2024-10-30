import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const FeaturedJobs = () => {

    const [datas, setDatas] = useState([])
    console.log(datas);


    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div className="max-w-[1320px] mx-auto mt-[130px] mb-[130px]">
            <h2 className="text-5xl font-extrabold text-center mb-4 text-[#1A1919]">Featured Jobs</h2>
            <p className="text-center text-[#757575] font-medium mb-8">Explore thousands of job opportunities with all the information you need. It's your future.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {datas.map((job, index) => (
                    <div key={index} className="border p-10 rounded-lg hover:shadow-lg">
                        <div className=" items-center mb-2">
                            <img src={job.logo} alt="" className="mb-8" />
                            <h3 className="text-2xl font-extrabold text-[#474747]">{job.job_title}</h3>
                        </div>
                        <p className="text-[#757575] text-xl font-semibold mb-4">{job.company_name}</p>
                        <div className="flex items-center mb-2 gap-4">
                            <span className="career-bg career-textAll font-extrabold px-[19px] py-[9px] rounded border1 ">{job.remote_or_onsite}</span>
                            <span className="career-bg career-textAll font-extrabold px-[19px] py-[9px] rounded border1">{job.job_type}</span>
                        </div>
                        <div className='flex gap-6 mt-4 mb-6'>
                            <p className="text-[#757575] text-xl font-semibold">{job.location}</p>
                            <p className="text-[#757575] text-xl font-semibold">Salary : {job.salary}</p>
                        </div>
                        <button className="text-xl font-extrabold text-white px-[18px] py-[11px] rounded bg-color">View Details</button>
                    </div>
                ))}

            </div>
            <div className="text-center mt-10">
                <button className="career-btn ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;