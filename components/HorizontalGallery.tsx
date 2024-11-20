'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function WeddingGallery() {
    const containerRef = useRef<HTMLDivElement>(null)
    const galleryRef = useRef<HTMLDivElement>(null)

    const slides = [
        {
            id: 1,
            image: '/slide2.webp',
            title: 'Elegant Moments from a Pre-Wedding Shoot',
            background: 'bg-neutral-900',
            textColor: 'text-white',
        },
        {
            id: 2,
            image: '/slide1.webp',
            title: 'Vibrant Celebrations of a Traditional Wedding Ceremony',
            background: 'bg-neutral-100',
            textColor: 'text-black',
        },
        {
            id: 3,
            image: '/slide3.webp',
            title: 'Joyful Memories from a Grand Wedding Reception',
            background: 'bg-neutral-900',
            textColor: 'text-white',
        },
    ]

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(slides.length - 1) * 50}%`])

    return (
        <div ref={containerRef} className="relative w-full h-[300vh]">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <motion.div
                    ref={galleryRef}
                    style={{ x }}
                    className="flex h-full w-fit"
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${slide.background} ${slide.textColor} flex-none w-screen h-full relative flex`}
                        >
                            {/* Image Section */}
                            <div className="w-[35%] h-full relative">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className={`object-cover h-full ${index == 1 ? " grayscale" : ""}`}
                                    priority
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-[65%] h-full flex items-center justify-center bg-black/20">
                                <div className="max-w-3xl px-8 space-y-6 text-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-tight"
                                    >
                                        {slide.title}
                                    </motion.h2>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        <Link
                                            href="#"
                                            className="inline-block text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
                                        >
                                            <span className="border-b-2 pb-1">EXPLORE MORE</span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    className="fixed bottom-0 left-0 right-0 h-1 bg-white/20"
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: '0%',
                    }}
                />
            </div>
        </div>
    )
}