'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Component() {
  const images = [
    { src: "/slide1.webp", alt: "Gallery Image 1", width: 600, height: 800 },
    { src: "/slide2.webp", alt: "Gallery Image 2", width: 600, height: 800 },
    { src: "/slide3.webp", alt: "Gallery Image 3", width: 600, height: 800 },
    { src: "/slide1.webp", alt: "Gallery Image 4", width: 600, height: 800 },
    { src: "/slide2.webp", alt: "Gallery Image 5", width: 600, height: 800 },
    { src: "/slide3.webp", alt: "Gallery Image 6", width: 600, height: 800 },
    { src: "/slide1.webp", alt: "Gallery Image 7", width: 600, height: 800 },
    { src: "/slide2.webp", alt: "Gallery Image 8", width: 600, height: 800 },
    { src: "/slide3.webp", alt: "Gallery Image 9", width: 600, height: 800 },
  ]

  return (
    <div className=" mx-auto px-4 py-10 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative aspect-[3/5] overflow-hidden rounded-none ${
              index % 4 === 0
                ? 'mt-0' // First column
                : index % 4 === 1
                ? 'md:-mt-8' // Second column
                : index % 4 === 2
                ? 'lg:-mt-16' // Third column
                : 'xl:-mt-32' // Fourth column
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}