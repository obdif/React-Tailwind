import React, {useEffect} from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';





const Newsletter = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration to 1200ms
        });
    }, []);


    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='faq' data-aos="fade-down">
            <div className="text-center my-8">
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Pellentesque suscipit fringilla libero eu.</h2>

            </div>
            <form action="">
            <div className="max-w-md  mx-auto items-center block">
                <TextInput className='mx-auto' id="email4" type="email" rightIcon={HiMail} placeholder="name@example.com" required />
            </div>
            <div className='mt-8 mx-auto text-center'>
                <button className='btn-primary'>Subscribe  <i className='inline-block ml-4 pt-1'><FaArrowRightLong /></i></button>

            </div>

            </form>
            

        </div>

    );
};


export default Newsletter;