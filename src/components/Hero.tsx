import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    onScrollClick: () => void;
}

export function Hero({ imageUrl, title, subtitle, onScrollClick }: HeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden bg-background">
            {/* Background Image with Parallax & Zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, scale }}
            >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="overflow-hidden mb-4">
                    <motion.h1
                        className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wider"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {title}
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.p
                        className="font-serif text-xl md:text-2xl text-white/90 font-light tracking-wide"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={onScrollClick}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors"
                style={{ opacity }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
                    <ArrowDown className="h-6 w-6 animate-bounce" />
                </div>
            </motion.button>
        </div>
    );
}
