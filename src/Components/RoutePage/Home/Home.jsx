import React from 'react';
import Banner from '../../Body/Banner/Banner';
import JobCategory from '../../Body/Job-Category/JobCategory';
import FeaturedJobs from '../../Body/Featured-Jobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
          <div className='career-bg'>
           <Banner></Banner>
           </div>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;