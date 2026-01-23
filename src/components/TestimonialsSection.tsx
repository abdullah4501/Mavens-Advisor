import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import worldMapImage from "@/assets/map.png";
import businessWomanImage from "@/assets/contact-image.webp";
import logo1 from '@/assets/client-white-01.png';
import logo2 from '@/assets/client-white-02.png';
import logo3 from '@/assets/client-white-03.png';
import logo5 from '@/assets/client-white-05.png';
import logo6 from '@/assets/client-white-06.png';
import AnimatedHeading from './AnimatedHeading';


const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      rating: 4,
      quote: '"We needed guidance navigating complex financial regulations. Provided expert support and tailored strategies tha...',
      author: 'Adeline Wood',
      position: 'SATISFIED CLIENT',
    },
    {
      rating: 5,
      quote: '"The advice I received from gudfin was practical and actionable. They made complex financial concepts easy to understand, and I...',
      author: 'Naomi Violet',
      position: 'CEO & FOUNDER',
    },
    {
      rating: 3,
      quote: 'I had a fantastic experience with moving express. Their team was courteous, efficient, and treated my belongings as if they were...',
      author: 'Anna Briggs',
      position: 'GENERAL MANAGER',
    },
    {
      rating: 5,
      quote: '"Outstanding financial advice that transformed our business approach completely."',
      author: 'Michael Chen',
      position: 'CFO',
    },
    {
      rating: 4,
      quote: '"Professional team with deep expertise in financial planning and strategy."',
      author: 'Sarah Johnson',
      position: 'FOUNDER',
    },
  ];
  const clientLogos = [
    logo1,
    logo2,
    logo3,
    logo5,
    logo6,
  ];


  const loopedTestimonials = [...testimonials, ...testimonials];
  const loopedLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <section className="section-padding px-0 bg-transparent bg-[linear-gradient(180deg,_#ECF0F4_42.51%,_#F2295B00_100%)]" ref={ref}>
        <div className="container relative pb-[80px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-6">
              Testimonials
            </span>
            <AnimatedHeading
              text="What our customers say?"
              className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
              duration={0.6}
              stagger={0.01}
              startDelay={0.6}
              center={true}
            />
          </motion.div>

          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* LEFT - Customer Satisfaction Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 sm:col-span-5 col-span-12 bg-navy-light rounded-md p-8 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <p className="uppercase text-[13px] tracking-[widest] text-white/80 font-semibold mb-16">
                  Customer Satisfaction
                </p>
              </div>
              <div>
                <h2 className="text-6xl font-bold text-white mb-8">
                  4.9<span className="text-2xl font-bold">/5</span>
                </h2>
                <p className="text-white text-base leading-relaxed mb-5 font-[20px]">
                  We've delivered <span className="font-bold underline">56+ projects</span> that help
                  companies generate real results.
                </p>
              </div>
            </motion.div>

            {/* RIGHT - Testimonials Slider */}
            <div className="md:col-span-9 sm:col-span-7 col-span-12 relative">
              <Swiper
                modules={[Navigation]}
                loop
                speed={1200}
                watchOverflow={false}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="h-full"
              >

                {loopedTestimonials.map((testimonial, index) => (
                  <SwiperSlide key={`${testimonial.author}-${index}`} className='h-full'>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`min-h-[420px] justify-between relative h-full flex gap-1 ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                        }`}
                    >
                      <div className='bg-white p-6 rounded-md h-full flex flex-col '>
                        <div className="flex items-start justify-between mb-6">
                          {/* Stars */}
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < testimonial.rating
                                  ? 'text-gold fill-gold'
                                  : 'text-slate-300 fill-slate-300'
                                  }`}
                              />
                            ))}
                          </div>
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 text-slate-300 fill-slate-300" />
                        </div>

                        <p className="text-slate-500 text-[18px] leading-relaxed mb-6 flex-grow flex items-end italic font-semibold">
                          {testimonial.quote}
                        </p>
                      </div>
                      {/* Author */}
                      <div className="bg-white p-6 rounded-md">
                        <h4 className="font-semibold text-slate-800 text-base">
                          {testimonial.author}
                        </h4>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">
                          {testimonial.position}
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
          {/* Custom Navigation Arrows - Bottom Right */}
          <div className="absolute bottom-0 right-5 flex gap-3 z-10">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-gold text-slate-900 hover:text-white hover:border-gold transition-colors">
              <ChevronLeft className="w-5 h-5 " />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-gold text-slate-900 hover:text-white hover:border-gold transition-colors">
              <ChevronRight className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </section>
      <section className='section-padding pt-0'>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-md border border-border px-8 py-16 flex flex-col">
              <div className="flex-1 relative mb-8">
                <img
                  src={worldMapImage}
                  alt="Global Presence Map"
                  className="w-full h-full object-contain"
                />
                {/* Map Dots */}
                <div className="absolute top-[35%] left-[18%] w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="absolute top-[25%] left-[48%] w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="absolute top-[45%] left-[52%] w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="absolute top-[30%] left-[75%] w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="absolute top-[55%] left-[80%] w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-4">
                <span className="text-4xl md:text-[64px] font-bold text-gold">75+</span>
                <p className="text-slate-600 text-base font-semibold">
                  Trusted by <span className="underline font-medium">50+ businesses</span> to drive measurable<br />
                  growth and impact.
                </p>
              </div>
            </div>

            <div className="right-box bg-navy-light rounded-md relative px-4">
              <div className="grid grid-cols-12 gap-0">
                {/* LEFT CONTENT */}
                <div className="md:col-span-5 sm:col-span-6 col-span-12 flex flex-col pl-8 py-12">
                  <p className="uppercase text-[13px] tracking-widest text-white/80 font-semibold mb-12">
                    Customer Satisfaction
                  </p>

                  <h3 className="text-[64px] md:text-6xl font-bold text-[#628fff] mb-4">
                    1500+
                  </h3>

                  <p className="text-slate-300 text-base">
                    We've delivered <span className="underline font-medium">56+ projects</span> that help
                    companies generate real results.
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:col-span-7 sm:col-span-6 col-span-12 relative -mt-[22px]">
                  <img
                    src={businessWomanImage}
                    alt="Professional Business Woman"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

              </div>

              <div className="absolute bottom-[50px] left-0 w-full px-6 z-20">
                <Swiper
                  loop
                  speed={1000}
                  watchOverflow={false}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                  }}
                  className="w-full h-full [&_.swiper-wrapper]:items-center"
                >
                  {loopedLogos.map((logo, i) => (
                    <SwiperSlide
                      key={i}
                      className="flex items-center justify-center h-full"
                    >
                      <img
                        src={logo}
                        alt="Client logo"
                        className="h-10 max-w-[120px] object-contain opacity-70 hover:opacity-100 transition"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>


            </div>

          </div>
        </div>
      </section >
    </>
  );
};

export default TestimonialsSection;
