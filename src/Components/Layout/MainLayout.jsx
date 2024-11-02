import React from 'react';
import Navbar from '../Body/Navbar/Navbar';
import Banner from '../Body/Banner/Banner';
import JobCategory from '../Body/Job-Category/JobCategory';
import FeaturedJobs from '../Body/Featured-Jobs/FeaturedJobs';
import Footer from '../Body/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='career-bg relative'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;