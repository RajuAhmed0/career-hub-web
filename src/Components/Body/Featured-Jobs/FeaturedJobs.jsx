import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const FeaturedJobs = () => {

    const [datas, setDatas] = useState([])
    const [slice, setSlice] = useState(false)
    // console.log(datas);


    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div className="max-w-[1320px] xl:mx-auto lg:mx-2 mx-3 md:mt-[130px] mt-12 md:mb-[130px] mb-12">
            <h2 className="md:text-5xl text-3xl font-extrabold text-center mb-4 text-[#1A1919]">Featured Jobs</h2>
            <p className="text-center text-[#757575] font-medium mb-8">Explore thousands of job opportunities with all the information you need. It's your future.</p>
            {!slice ?
                <div className="grid lg:grid-cols-2 grid-cols-1  gap-6">
                    {datas?.slice(0, 4).map((job, index) => (
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
                                <div className='flex items-center gap-2'>
                                    <IoLocationOutline className='text-2xl text-[#757575]' />
                                    <p className="text-[#757575] text-xl font-semibold">{job.location}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineDollar className='text-2xl text-[#757575]' />
                                    <p className="text-[#757575] text-xl font-semibold">Salary : {job.salary}</p>
                                </div>
                            </div>
                            <button className="!text-xl !font-extrabold text-white !px-[18px] !py-[11px] !rounded career-btn">View Details</button>
                        </div>
                    ))}
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {datas?.map((job, index) => (
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
                                <div className='flex items-center gap-2'>
                                    <IoLocationOutline className='text-2xl text-[#757575]' />
                                    <p className="text-[#757575] text-xl font-semibold">{job.location}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineDollar className='text-2xl text-[#757575]' />
                                    <p className="text-[#757575] text-xl font-semibold">Salary : {job.salary}</p>
                                </div>
                            </div>
                            <button className="!text-xl !font-extrabold text-white !px-[18px] !py-[11px] !rounded career-btn">View Details</button>
                        </div>

                    ))}
                </div>
            }


            <div className="text-center mt-10">
                <button onClick={() => setSlice(!slice)} className='career-btn'>{!slice ? "See All Jobs" : "See Less Jobs"}</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;