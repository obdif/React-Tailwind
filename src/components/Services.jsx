import React, {useEffect} from 'react';
import {FaAmazon, FaAdversal, FaAmazonPay, FaAngular,FaApplePay, FaApple,FaAlgolia} from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration to 1200ms
        });
    }, []);


    const service = [
        { id: 1, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/GREEN MARK.png"},
        { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/GREEN MARK.png" },
        { id: 3, title: "Clugs And Group", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/GREEN MARK.png" },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service' >
            <div className="text-center my-8" data-aos="zoom-in">
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ Clients</p>

                {/* ============ SERVICES LOGOS ============= */}
                <div className="my-12 flex flex-wrap justify-between items-center cursor-pointer gap-3 icon">
                    <i className='transition-all duration-300 hover:scale-125'><FaAmazon/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaAlgolia/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaAngular/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaAmazonPay/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaAdversal/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaApple/></i>
                    <i className='transition-all duration-300 hover:scale-125'><FaApplePay/></i>
                </div>
            </div>
            {/* ================= SERVICES CARDS ============= */}
            <div className='mt-20 md:w-1/2 mx-auto text-center' data-aos="fade-up">
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralGrey'>Who is Ulearn suitable for?</p>

            </div>

            {/* ======= cards ====== */}
            <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12" data-aos="fade-up">
                {
                    service.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b -4 hover:border-indigo-700 transtion-all duration-300 flex items-center justify-center h-full   '>
                        <div>
                            <div className=' mx-auto items-center flex justify-center rounded-tl-3xl w-12 rounded-br-3xl'><img className='w-10 -ml-5' src={service.image} alt="" /></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};


export default Services;