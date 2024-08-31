import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";



const Newsletter = () => {

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
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