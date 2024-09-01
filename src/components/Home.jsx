import { Carousel } from "flowbite-react";
import React, { useEffect } from 'react';
import image1 from '../assets/image1.png';
import Earn from '../assets/earn.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration to 1200ms
        });
    }, []);

    return (
        <div className='bg-neutralSilver' id="home" data-aos="fade-up" data-aos-duration="1500">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className=''>
                            <img src={image1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug"> Lessons and Insights <span className=" text-brandPrimary loading-snug">from 8 years.</span></h1>
                            <p className="text-neutralGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>


                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className=''>
                            <img src={image1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug"> Learn and Earn<span className=" text-brandPrimary loading-snug"> in 4 Months.</span></h1>
                            <p className="text-neutralGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>



                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className=''>
                            <img src={image1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 loading-snug"> Learn and Earn <span className=" text-brandPrimary loading-snug">Money with us.</span></h1>
                            <p className="text-neutralGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Home;