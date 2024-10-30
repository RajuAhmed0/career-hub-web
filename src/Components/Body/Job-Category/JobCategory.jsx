import React, { useEffect, useState } from 'react';

const JobCategory = () => {

    const [datas, setDatas] = useState([])
    console.log(datas);


    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className=' max-w-[1320px] mx-auto'>
            <div className="flex flex-col items-center py-12 ">
                <h2 className="text-5xl font-extrabold text-[#1A1919] mb-4">Job Category List</h2>
                <p className="text-[#757575] mb-8 text-center font-medium">
                    Explore thousands of job opportunities with all the information you need. It's your future.
                </p>
                <div className="flex gap-[125px] p-10 ">
                    {datas.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-6  rounded-lg shadow hover:shadow-lg transition items-start  career-bg"
                        >
                            <img src={category.logo} alt='' className="w-10 h-10 mb-8 " />
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