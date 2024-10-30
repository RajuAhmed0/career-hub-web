import React from 'react';
import Navbar from '../Body/Navbar/Navbar';
import Banner from '../Body/Banner/Banner';
import JobCategory from '../Body/Job-Category/JobCategory';
import FeaturedJobs from '../Body/Featured-Jobs/FeaturedJobs';
import Footer from '../Body/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='career-bg'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;