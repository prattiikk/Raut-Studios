'use client'

import { ArrowUp } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#f5f5f5] px-6 py-16 md:px-12 lg:px-24 text-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm mb-2">EMAIL US AT:</p>
                            <a
                                href="mailto:hello@rautatharva.com"
                                className="text-2xl font-serif italic hover:opacity-70 transition-opacity"
                            >
                                hello@rautatharva.com
                            </a>
                        </div>
                        <p className="text-sm max-w-[300px]">
                            OUR BOOKING MANAGER ATHARVA USUALLY RESPONDS IN LESS THAN 3 HOURS.
                        </p>
                        <p className="text-lg">
                            <span className="font-serif italic">PUNE</span> & NEARBY
                        </p>
                    </div>

                    {/* Center Column */}
                    <div className="space-y-4">
                        <Link href="/real-weddings" className="block hover:opacity-70 transition-opacity">
                            WEEDINGS
                        </Link>
                        <Link href="/portfolio" className="block hover:opacity-70 transition-opacity">
                            PRE-WEEDINGS
                        </Link>
                        <Link href="/portfolio" className="block hover:opacity-70 transition-opacity">
                            RECEPTIONS
                        </Link>


                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <Link href="/about-us" className="block hover:opacity-70 transition-opacity">
                            ABOUT US
                        </Link>
                        <Link href="/contact-us" className="block hover:opacity-70 transition-opacity">
                            CONTACT US
                        </Link>
                        <Link href="/for-photographers" className="block hover:opacity-70 transition-opacity">
                            FOR PHOTOGRAPHERS
                        </Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-16">
                    <p className="text-lg tracking-wide">SHUBHAM STUDIOS</p>
                    <button
                        onClick={scrollToTop}
                        className="rounded-full border border-black p-4 hover:bg-black hover:text-white transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </footer>
    )
}