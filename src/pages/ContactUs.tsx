import React, { useState } from "react";
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import contactImg from '@/assets/contact-image.webp';

const contactData = [
    {
        icon: <Mail className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "hello@mavensadvisor.com",
        description: "Reach our team anytime. We respond quickly to all inquiries."
    },
    {
        icon: <Phone className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "+44 (0)203 900 1800",
        description: "Call us for immediate support and to discuss your needs."
    },
    {
        icon: <MapPin className="w-[50px] h-[50px] text-gold stroke-[1.5]" />,
        title: "London, United Kingdom",
        description: "Visit our office or schedule a virtual meeting anytime."
    }
];

const ContactUs = ({ breadcrumb }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!formData.name || !formData.phone || !formData.email) {
            return;
        }
        
    };
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
                                    With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals.
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

                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-start gap-6 justify-end">
                            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                    className="w-[40px] h-[40px]"
                                >
                                    <path d="M77.61,46.432v43.4H64.545V52.907a.923.923,0,0,1,.461-.8l11.222-6.475A.922.922,0,0,1,77.61,46.432ZM38.416,68V89.827H51.481V61.519a.922.922,0,0,0-1.382-.8L38.877,67.2A.92.92,0,0,0,38.416,68ZM12.287,83.081v6.746H25.352V76.6a.922.922,0,0,0-1.383-.8L12.748,82.284A.92.92,0,0,0,12.287,83.081Z" fill="#005aeb"></path>
                                    <path d="M93.548,88.371H84.113V41.92a1.452,1.452,0,0,0-2.177-1.258L68.871,48.2a1.451,1.451,0,0,0-.726,1.257V88.371H57.984V57.009a1.452,1.452,0,0,0-2.177-1.258L42.742,63.286a1.45,1.45,0,0,0-.726,1.257V88.371H31.855V72.1a1.451,1.451,0,0,0-2.177-1.257L16.613,78.375a1.451,1.451,0,0,0-.726,1.257v8.739H6.452a1.452,1.452,0,1,0,0,2.9h87.1a1.452,1.452,0,1,0,0-2.9Zm-22.5-38.079,10.162-5.86V88.371H71.048ZM44.919,65.382l10.162-5.86V88.371H44.919ZM18.79,80.471l10.162-5.86v13.76H18.79Zm-2.708-29.7a1.45,1.45,0,0,1,.531-1.982l60.276-34.8L66.434,11.6a1.454,1.454,0,0,1-1.092-1.742h0a1.452,1.452,0,0,1,1.741-1.09L80.312,11.8a2.242,2.242,0,0,1,1.642,2.845L77.967,27.614a1.453,1.453,0,1,1-2.777-.854L78.345,16.5l-60.28,34.8a1.45,1.45,0,0,1-1.983-.532Z"></path>
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h4 className="text-[45px] font-bold text-navy mb-1 leading-tight">
                                    <span>10</span>
                                    <span className="text-5xl font-bold">K</span>
                                </h4>
                                <h3 className="text-[17px] text-muted-foreground/70 font-semibold">
                                    Projects completed
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {contactData.map((contact, index) => (
                        <div className="group border border-[#E4E4E4] rounded-[5px] p-[40px] pt-[50px] transition-shadow duration-300">
                            {/* Icon with 360 X-axis rotation on card hover */}
                            <div className="mb-8 w-fit transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                                {contact.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-navy text-[24px] font-bold mb-3 leading-tight">
                                {contact.title}
                            </h3>

                            {/* Description */}
                            <div className="mb-6">
                                <p key={index} className="text-muted-foreground font-medium text-[18px] leading-relaxed">
                                    {contact.description}
                                </p>
                            </div>

                            {/* Read More Button */}
                            <button className="inline-flex items-center gap-3 text-navy font-semibold text-[15px] hover:text-gold group/btn">
                                <span>Read More</span>
                                <span className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 bg-[#ecf0f4] group-hover/btn:bg-gold ">
                                    <ArrowRight className="w-[20px] h-[20px] text-navy group-hover/btn:text-white transition-colors duration-300" />
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='contact-form pt-[115px] bg-[linear-gradient(180deg,#ECF0F4_42%,transparent_100%)] bg-transparent relative z-10'>
                <div className="container">
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 items-end'>
                        <div className='col-span-1'>
                            <img src={contactImg} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className='ms:col-span-1 lg:col-span-2'>
                            <div className='lg:pl-[130px] py-10'>
                                <span className="inline-block bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-2">
                                    Contact Us
                                </span>
                                <AnimatedHeading
                                    text="Get support from our team."
                                    className="text-4xl md:text-[48px] font-bold text-navy leading-tight"
                                    duration={0.6}
                                    stagger={0.01}
                                    startDelay={0.3}
                                />

                                <div className="mt-10 w-full ">
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        {/* Message */}
                                        <div>
                                            <textarea
                                                rows={5}
                                                placeholder="Message"
                                                className="w-full rounded-md border border-gray-200 bg-white p-[20px] text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400"
                                            />
                                        </div>

                                        {/* Name & Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={handleChange}
                                                    value={formData.name}
                                                    name="name"
                                                    placeholder="Full Name *"
                                                    className="w-full rounded-md border border-gray-200 bg-white px-[20px] py-[10px] text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 h-[55px]"
                                                />
                                                {submitted && !formData.name && (
                                                    <span className="block mb-[15px] font-medium px-[10px] text-[16px] text-[#dc3232]">
                                                        This field is required.
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    onChange={handleChange}
                                                    value={formData.phone}
                                                    name="phone"
                                                    placeholder="Phone Number *"
                                                    className="w-full rounded-md border border-gray-200 bg-white px-[20px] py-[10px] text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 h-[55px]"
                                                />
                                                {submitted && !formData.phone && (
                                                    <span className="block mb-[15px] font-medium px-[10px] text-[16px] text-[#dc3232]">
                                                        This field is required.
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <input
                                                type="email"
                                                onChange={handleChange}
                                                value={formData.email}
                                                name="email"
                                                placeholder="Email Address *"
                                                className="w-full rounded-md border border-gray-200 bg-white px-[20px] py-[10px] text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 h-[55px]"
                                            />
                                            {submitted && !formData.email && (
                                                <span className="block mb-[15px] font-medium px-[10px] text-[16px] text-[#dc3232]">
                                                    This field is required.
                                                </span>
                                            )}
                                        </div>

                                        {/* Checkbox */}
                                        <div className="flex items-start gap-2 text-[17px] font-medium text-gray-400 ">
                                            <input
                                                type="checkbox"
                                                id="save_info"
                                                className="mt-1 h-5 w-5 rounded border-gray-300 text-navy focus:ring-0 cursor-pointer"
                                            />
                                            <label htmlFor="save_info" className="cursor-pointer">
                                                Save my name, email, and website in this browser for the next time I
                                                comment.
                                            </label>
                                        </div>

                                        {/* Button */}
                                        <div className="" >
                                            <button
                                                type='submit'
                                                className="inline-flex items-center gap-3 bg-navy-light text-white px-[15px] pl-[25px] py-[15px] rounded-[5px] font-medium hover:bg-gold hover:scale-105 transition"
                                            >
                                                Send Message
                                                <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                                                    <ArrowRight size={18} />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map Section */}
            <div className='contact-page'>
                <GoogleMapEmbed
                    location="London Eye, London, United Kingdom"
                    placeName="London Eye"
                    address="Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom"
                    rating={4.5}
                    reviewCount="197,128"
                    placeId="ChIJc2nSALkEdkgRkuoJJBfzkUI"
                    lat={51.498057}
                    lng={-0.023389}
                    zoom={10}
                />
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;