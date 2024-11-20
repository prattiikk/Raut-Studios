'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Component() {
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() => {
        // Trigger upward animation after 2 seconds
        const timer = setTimeout(() => {
            setIsAnimating(false)
            
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }} // Smooth upward animation
                    className="fixed inset-0 z-50 flex items-center justify-center text-black bg-white"
                >
                    <div className="space-y-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                            }}
                            className="text-4xl font-sans md:text-6xl lg:text-8xl tracking-wider font-extralight"
                        >
                            WEDDING
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="text-4xl font-sans md:text-6xl lg:text-8xl tracking-wider font-extralight"
                        >
                            PHOTOGRAPHY
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="text-3xl md:text-5xl lg:text-8xl font-extralight font-serif italic text-gray-600"
                        >
                            Redefined
                        </motion.h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}