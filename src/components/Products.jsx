import React from 'react';
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import { FaAmazon, FaAdversal, FaAngular, FaArrowRightLong, FaApple, FaAlgolia } from 'react-icons/fa6';




const Products = () => {

    return (
        <div >
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <img src={Image1} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to Design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente dignissimos sed, architecto ullam maiores adipisci autem quod laboriosam vitae culpa voluptas mollitia, perspiciatis, repellat doloribus. Expedita ipsa iusto adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat eos inventore possimus optio quae quasi blanditiis natus architecto, fugiat voluptatem eveniet placeat neque repellendus quam quidem aliquam asperiores modi?</p>
                        <button className='my-10 bg-brandPrimary px-7 p-2 rounded text-semibold text-white transition-all duration-300  hover:bg-neutralDGrey hover:-translate-y-2'>Learn More</button>

                    </div>
                </div>

                {/* ================ COMPANY STATS ============= */}
                <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver rounded  py-16">

                    <div className="flex flex-col md:flex-row justify-betwwen items-center gap-8">

                        <div className="md:w-1/3">
                            <img src={Image2} alt="" srcSet="" className='img' />
                        </div>


                        <div className="md:w-2/3 mx-auto ">

                            <div className="div">
                                <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam, magnam aliquid quasi ducimus aspernatur, blanditiis repudiandae mollitia neque atque ratione similique voluptate eaque. Repellat nulla asperiores voluptatem non quisquam.l Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut hic autem vitae reprehenderit, blanditiis quo dolore illum at earum corrupti ipsa dolorem ex. Cum quam eligendi iusto officiis quos!</p>
                                <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                                <p className='text-base text-neutralGrey mb-4'>British Dragon Boat Racing Association</p>
                                <div>
                                    <div className='flex flex-wrap items-center justify-between items-center gap-8 text-3xl'>
                                        <i><FaAmazon /></i>
                                        <i><FaAlgolia /></i>
                                        <i><FaAngular /></i>
                                        <i><FaAdversal /></i>
                                        <i><FaApple /></i>

                                        <div className='flex items-center gap-2 text-brandPrimary transition-all duration-400 hover:text-medium  '
                                        >
                                            <a href="/" className=' meet font-semibold '>Meet all customers</a> <i className='inline-block meet'><FaArrowRightLong /></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;