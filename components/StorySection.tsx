'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Story() {
    return (
        <div className="min-h-screen bg-[#faf9f7] text-gray-700 flex items-center justify-center px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-16 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    className="space-y-2 text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
                        <span className="font-serif italic font-light">Great </span>
                        <span className="font-extralight">STORY IS A</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
                        <span className="font-serif italic font-light">story </span>
                        <span className="font-extralight">WELL TOLD</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="space-y-4 text-center"
                >
                    <p className="text-lg md:text-xl tracking-wide font-extralight">
                        BUT IT&apos;S NOT ONLY ABOUT<br />
                        TAKING GREAT PHOTOS
                    </p>
                    <p className="text-lg md:text-xl tracking-wide font-extralight">
                        IT&apos;S ABOUT PROVIDING YOU<br />
                        WITH A WHOLE EXPERIENCE
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center"
                >
                    <Link
                        href="#contact"
                        className="inline-block text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
                    >
                        <span className="border-b pb-1">GET IN TOUCH WITH US</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}