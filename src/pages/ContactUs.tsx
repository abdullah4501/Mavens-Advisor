import React, { useState, useEffect, useRef } from "react";
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import contactImg from '@/assets/contact-image.webp';
import { InlineWidget } from "react-calendly";


const contactData = [
    {
        icon: <Mail className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "info@yallastartup.com",
        description: "Get in touch with Yalla Startup to explore funding solutions.",
        link: "mailto:info@yallastartup.com"
    },
    {
        icon: <Phone className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "+44 7944 148580",
        description: "Call us for immediate support and to discuss your growth goals.",
        link: "tel:+447944148580"
    },
    {
        icon: <MapPin className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "Sharjah, UAE",
        description: "Sharjah Media City, Sharjah, UAE. Registered advisory firm."
    },
];

const ContactUs = ({ breadcrumb }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const calendlyRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            calendlyRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    }, []);


    return (
        <>
            <Header />
            <section className="relative min-h-[550px] overflow-hidden flex flex-col justify-end items-center">
                {/* Background Images with Fade */}
                <div
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                >
                    <img
                        src={image}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Content Container */}
                <div className='container pt-[150px] pb-[30px] flex items-end'>
                    <div className='grid grid-cols-12 relative items-center'>
                        <div className="relative col-span-12 lg:col-span-7">
                            <div className="">
                                {/* Main Heading with fade animation */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                        exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="mb-5 flex text-white text-[16px] items-center leading-[30px] font-[500]"
                                        >
                                            <span>
                                                <Link to={'/'}>Home</Link>
                                            </span>
                                            <span>
                                                <ChevronRight size={20} className='mx-1' />
                                            </span>
                                            <span>
                                                {breadcrumb}
                                            </span>
                                        </div>
                                        <h1 className="text-[45px] md:text-[55px] lg:text-[70px] font-bold text-white leading-tight lg:mb-12 mb-6">
                                            {breadcrumb}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='lg:mt-[30px] lg:ml-[125px] mb-[25px]'>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-white text-[16px] lg:text-[18px] lg:leading-[30px] font-[500] z-10 self-end"
                                >
                                    Get in touch with Yalla Startup to explore funding solutions tailored to your business growth and investment goals.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container section-padding'>
                <div className="grid grid-cols-2 gap-y-8 mb-16 items-center">
                    {/* Left side - Badge and Title */}
                    <div className='col-span-2 lg:col-span-1'>
                        <span className="inline-block bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-6">
                            Reach Out
                        </span>
                        <AnimatedHeading
                            text="Feel free to our contact & hire us for your finance !!"
                            className="text-4xl md:text-[48px] font-bold text-navy leading-tight"
                            duration={0.6}
                            stagger={0.01}
                            startDelay={0.3}
                        />
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                    {contactData.map((contact, index) => (
                        <div className="group border border-[#E4E4E4] rounded-[5px] p-[40px] pt-[50px] transition-shadow duration-300">
                            {/* Icon with 360 X-axis rotation on card hover */}
                            <div className="mb-8 w-fit transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                                {contact.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-navy text-[24px] font-bold mb-3 leading-tight break-words hover:text-gold">
                                <a href={contact.link}>{contact.title}</a>
                            </h3>

                            {/* Description */}
                            <div className="mb-5">
                                <p key={index} className="text-muted-foreground font-medium text-[18px] leading-relaxed">
                                    {contact.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='contact-form pt-[115px] bg-[linear-gradient(180deg,#ECF0F4_42%,transparent_100%)] bg-transparent relative z-10' ref={calendlyRef}>
                <div className="container">

                    <div className='grid md:grid-cols-1 lg:grid-cols-3 items-start mt-10'>
                        <div className='col-span-1'>
                            <div className="mb-20">
                                <span className=" bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-2">
                                    Book a Call
                                </span>
                                <AnimatedHeading
                                    text="Book a 15 Minute Meeting."
                                    className="text-4xl md:text-[48px] font-bold text-navy leading-tight"
                                    duration={0.6}
                                    stagger={0.01}
                                    startDelay={0.3}
                                />
                            </div>
                            <img src={contactImg} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className='ms:col-span-1 lg:col-span-2'>
                            <div className=''>


                                <div className=" w-full ">
                                    <InlineWidget
                                        url="https://calendly.com/nabeel-shaikh/15min"
                                        styles={{ height: "100vh" }}
                                        className="new_calendly-inline-widget"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map Section */}
            <div className='contact-page'>
                <GoogleMapEmbed
                    location="Sharjah Media City, Sharjah, UAE"
                    placeName="Sharjah Media City (Shams)"
                    address="Al Messaned, Sharjah, United Arab Emirates"
                    rating={4.7}
                    reviewCount="5,124"
                    placeId="ChIJ_S_R_S_R_S_R_S_R_S_R_S_R"
                    lat={25.3462}
                    lng={55.4209}
                    zoom={12}
                />
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;