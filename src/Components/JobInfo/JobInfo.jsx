import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobInfo = () => {
    const jobsDetails = useLoaderData()
    // console.log(jobsDetails);
    
    const params = useParams()
 
   
   if (jobsDetails.length > 0) {
    const jobDetails = jobsDetails.find(job => job.id === parseInt(params.id))
    console.log(jobDetails);
   }

   
    
    
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default JobInfo;