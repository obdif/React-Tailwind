import React, {useEffect} from 'react';
import learn from '../assets/learn.svg';
import { FaUsers, FaCreditCard,FaDiagramProject, FaFilePen } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration to 1200ms
        });
    }, []);



    return (
        <div >
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='about'>
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8" data-aos="fade-up">
                    <div>
                        <img src={learn} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The Unseen of spending three years at Ulearn</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente dignissimos sed, architecto ullam maiores adipisci autem quod laboriosam vitae culpa voluptas mollitia, perspiciatis, repellat doloribus. Expedita ipsa iusto adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat eos inventore possimus optio quae quasi blanditiis natus architecto, fugiat voluptatem eveniet placeat neque repellendus quam quidem aliquam asperiores modi?</p>
                        <button className='my-10 bg-brandPrimary px-7 p-2 rounded text-semibold text-white transition-all duration-300  hover:bg-neutralDGrey hover:-translate-y-2'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* ================ COMPANY STATS ============= */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver  py-16" data-aos="fade">

                <div className="flex flex-col md:flex-row justify-betwwen items-center gap-8">
                    <div className="">
                        <div className="md:w-4/6">
                            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br /> <span className='text-brandPrimary'>business reinvent itself</span> </h2>
                            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente dignissimos sed, architecto ullam maiores adipisci autem quod laboriosam vitae culpa voluptas mollitia, perspiciatis, repellat doloribus. Expedita ipsa iusto adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat eos inventore possimus optio quae quasi blanditiis natus architecto, fugiat voluptatem eveniet placeat neque repellendus quam quidem aliquam asperiores modi?</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 mx-auto flex sm:flex-col flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-18 gap-8 flex sm:flex-row flex-col">
                            <div className="flex items-center gap-4">
                                <i className='text-3xl text-brandPrimary'><FaUsers /></i>
                                <div className="div">
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,474,372</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <i className='text-3xl text-brandPrimary'><FaDiagramProject /></i>
                                <div className="div">
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>74,372</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 gap-8 flex sm:flex-row flex-col">
                            <div className="flex items-center gap-4">
                                <i className='text-3xl text-brandPrimary'><FaFilePen /></i>
                                <div className="div">
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>474,372</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <i className='text-3xl text-brandPrimary'><FaCreditCard /></i>
                                <div className="div">
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,474,372</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Services;