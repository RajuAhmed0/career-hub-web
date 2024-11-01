import { useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoCalendarOutline, IoCallOutline } from "react-icons/io5";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";

const JobInfo = () => {
    const jobsDatas = useLoaderData()
    console.log(jobsDatas);
    const params = useParams()


    // Check if jobsDatas is defined and is an array before accessing its elements
    const jobDetailsData = jobsDatas && Array.isArray(jobsDatas)
        ? jobsDatas.find((jobData) => jobData.id === parseInt(params.id))
        : null;

    // Render loading or error messages if jobDetailsData is not found
    if (!jobDetailsData) {
        return <p>Loading or Job not found...</p>;
    }

    // const jobDetailsData = jobsDatas.find((jobData) => jobData.id === parseInt(params.id));


    // const jobsDetails = useLoaderData()
    // console.log(jobsDetails);

    // const params = useParams()


    // if (jobsDetails.length > 0) {
    //     const jobDetails = jobsDetails.find(job => job.id === parseInt(params.id))
    //     // console.log(jobDetails);
    // }




    return (
        <div className='relative'>
            <div className='career-bg'>
                <div className='absolute -top-2 right-0 lg:block hidden' >
                    <img src="/images/bg2.png" alt="" />
                </div>
                <h1 className='text-[32px] text-[#1A1919] font-extrabold text-center'>Job Details</h1>
                <div className='lg:block hidden '>
                    <img src="/images/bg1.png" alt="" />
                </div>

                <div className="max-w-[1320px] xl:mx-auto md:mx-3 mx-2 justify-between flex flex-col md:flex-row md:mt-[130px] mt-10 gap-6">
                    <div className="flex-1 text-gray-800">

                        <p className="mb-4 font-medium text-[#757575]"><span className="text-[#1A1919] font-extrabold">Job Description:</span> {jobDetailsData.job_description}</p>

                        <p className="mb-4 font-medium text-[#757575]"><span className="text-[#1A1919] font-extrabold">Job Responsibility:</span> {jobDetailsData.job_responsibility}</p>

                        <h2 className="text-[#1A1919] font-extrabold mb-4">Educational Requirements:</h2>
                        <p className="mb-4">{jobDetailsData.educational_requirements}</p>

                        <h2 className="text-[#1A1919] font-extrabold mb-4">Experience:</h2>
                        <p className="mb-4">{jobDetailsData.experiences}</p>


                    </div>

                    <div className=" max-w-[424px] mb-[130px]">
                        <div className="card-color p-[30px] ">
                            <h3 className="text-xl font-extrabold text-[#1A1919]">Job Details</h3>
                            <div className="border-b my-6"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <PiCurrencyCircleDollarBold className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"> <span className="text-[#474747] font-extrabold">Salary:</span> {jobDetailsData.salary} (Per Month)</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <IoCalendarOutline className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"> <span className="text-[#474747] font-extrabold">Job Title:</span> {jobDetailsData.job_title}</p>
                            </div>

                            <h3 className="text-xl font-extrabold text-[#1A1919] mt-8">Contact Information</h3>
                            <div className="border-b my-6"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <IoCallOutline className="text-[#7E90FE] text-2xl " />
                                <p className="text-xl font-medium text-[#757575]"><span className="text-[#474747] font-extrabold">Phone:</span> {jobDetailsData.contact_information.phone}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <CiMail className="text-[#7E90FE] text-2xl" />
                                <p className="text-xl font-medium text-[#757575]"><span className="text-[#474747] font-extrabold">Email:</span>{jobDetailsData.contact_information.email}</p>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <CiLocationOn className="text-[#7E90FE] text-5xl text-center" />
                                <p className="text-xl font-medium text-[#757575] "><span className="text-[#474747] font-extrabold">Address:</span> {jobDetailsData.contact_information.address}</p>
                            </div>

                        </div>
                        <button className=" flex justify-center mt-6  career-btn2 w-full">Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobInfo;