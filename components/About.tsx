'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="min-h-screen bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Left Side - Image */}
                <div className="relative h-[80vh] md:h-screen bg-white">
                    <Image
                        src="/placeholder.svg?height=1200&width=800"
                        alt="Professional photographers in studio"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center px-8 md:px-16 py-16 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl tracking-tight leading-tight">
                            <span className="font-extralight">TEN YEARS OF PERFECTING</span>{' '}
                            <span className="font-serif italic">wedding</span>{' '}
                            <span className="font-extralight">PHOTOGRAPHY AROUND THE GLOBE AND</span>{' '}
                            <span className="font-serif italic">understanding</span>{' '}
                            <span className="font-extralight">HOW MUCH SOME DAYS CHANGE THE COURSE OF</span>{' '}
                            <span className="font-serif italic">your life.</span>
                        </h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <Link
                                href="/about"
                                className="inline-block text-sm tracking-[0.2em] hover:opacity-70 transition-opacity mt-8"
                            >
                                <span className="border-b pb-1">ABOUT US</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}