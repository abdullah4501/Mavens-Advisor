import { motion } from 'framer-motion';
import bannerImage from '@/assets/city-skyline.jpg';

interface PageBannerProps {
    title: string;
    subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
    return (
        <section className="relative h-[60vh] overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={bannerImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-4 lg:px-8">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                        transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
                            {title}
                        </h1>
                    </motion.div>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-white/80 text-lg md:text-xl max-w-2xl font-medium"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="h-1 w-24 bg-gold mt-8 origin-left"
                    />
                </div>
            </div>
        </section>
    );
};

export default PageBanner;
