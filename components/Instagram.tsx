'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Instagram() {
    const images = [
        {
            src: '/slide1.webp',
            alt: 'Wedding reception celebration',
            href: '#'
        },
        {
            src: '/slide1.webp',
            alt: 'Bride and family moment',
            href: '#'
        },
        {
            src: '/slide1.webp',
            alt: 'Wedding jewelry details',
            href: '#'
        },
        // {
        //     src: '/slide1.webp',
        //     alt: 'Bride with vintage car',
        //     href: '#'
        // }
    ]

    return (
        <div className="py-16 md:py-24 px-4 md:px-8 bg-[#faf9f7] text-black">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
                >
                    <span className="font-extralight tracking-tight">CHECK OUT OUR </span>
                    <span className="font-serif italic">instagram</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 overflow-hidden"
                >
                    {images.map((image, index) => (
                        <Link
                            key={index}
                            href={image.href}
                            className="block group relative aspect-[4/5] overflow-hidden"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}