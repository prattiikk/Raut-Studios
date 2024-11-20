import React from 'react';
import Link from 'next/link';

const Menu = ({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 z-50 bg-white">
            <div className="flex h-full flex-col items-center justify-center space-y-8">
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-8 text-sm tracking-[0.2em] text-gray-700 hover:opacity-70 transition-opacity"
                >
                    CLOSE
                </button>
                <nav className="flex flex-col items-center space-y-6 text-4xl text-gray-700 font-serif italic">
                    <Link href="/portfolio" className="hover:opacity-70 transition-opacity">Portfolio</Link>
                    <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
                    <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
                    <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
                </nav>
            </div>
        </div>
    );
};

export default Menu;