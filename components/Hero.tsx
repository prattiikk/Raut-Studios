import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <main className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/Hero.webp"
                    alt="Editorial wedding photography"
                    fill
                    className="object-cover object-center brightness-95 grayscale"
                    priority
                />
            </div>

            {/* Dark Transparent Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            <div className="relative z-10 flex min-h-screen items-center text-white justify-end pr-8 md:pr-16 lg:pr-24">
                <div className="max-w-4xl space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-2"
                    >
                        <motion.h1

                            className=" font-serif text-6xl md:text-9xl italic tracking-tighter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Real editorial
                        </motion.h1>
                        <motion.h1
                            className="font-sans text-6xl md:text-9xl font-extralight tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            WEDDING
                        </motion.h1>
                        <motion.h1

                            className=" font-serif font-extralight text-5xl md:text-9xl italic tracking-tighter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            photography
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="text-sm tracking-[0.2em] mt-8"
                    >
                        ALLOWING YOUR UNIQUE MOMENTS TO AGE GRACEFULLY
                    </motion.p>
                </div>
            </div>
        </main>
    );
};

export default Hero;