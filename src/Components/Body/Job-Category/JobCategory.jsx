import React, { useEffect, useState } from 'react';

const JobCategory = () => {

    const [datas, setDatas] = useState([])
    // console.log(datas);


    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className="flex flex-col items-center md:py-12 py-4">
                <h2 className="md:text-5xl text-3xl font-extrabold text-[#1A1919] mb-4">Job Category List</h2>
                <p className="text-[#757575] mb-8 text-center font-medium md:text-base text-sm">
                    Explore thousands of job opportunities with all the information you need. It's your future.
                </p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[25px]  ">
                    {datas.map((category, index) => (
                        <div
                            key={index}
                            className=" w-[311px] p-6 hover:shadow-lg career-bg"
                        >
                            <div className='bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-[15px] rounded-lg w-fit mb-8'>
                            <img src={category.logo} alt='' className="w-10 h-10  " />
                            </div>
                            
                            <h3 className="text-xl font-extrabold text-[#474747]">{category.category_name}</h3>
                            <p className="text-[#A3A3A3] font-medium">{category.availability}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategory;