import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStorageItem } from '../Utility/LocalStorage';



const AppliedJobs = () => {

    const allJodData = useLoaderData()
    // console.log(allJodData);
    const itemId = getStorageItem()

    // const applied = allJodData.filter(jobs => itemId.includes(jobs.id))

    const jobData = allJodData && Array.isArray(allJodData)
        ? allJodData.filter((jobs) => itemId.includes(jobs.id))
        : [];
    console.log(jobData);




    return (
        <div>
           <h1 className=' text-2xl font-bold'>Applied job {jobData.length}</h1>
        </div>
    );
};

export default AppliedJobs;