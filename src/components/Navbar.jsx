import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = ['Home', 'About', 'Rules', 'Timeline', 'Prizes', 'Glimpses', 'Team', 'Sponsors'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-pennywise-red/30 py-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo Placeholder */}
                    <div className="w-10 h-10 bg-pennywise-red rounded-full flex items-center justify-center font-nosifer text-black text-xs">
                        PEC
                    </div>
                    <div className="text-xl md:text-2xl font-nosifer text-white tracking-wider">
                        CODEATHON
                    </div>
                </div>

                <div className="hidden lg:flex space-x-6">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-400 hover:text-pennywise-red font-courier text-sm xl:text-base transition-colors duration-200 tracking-widest relative group uppercase"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pennywise-red transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <button className="hidden md:block px-6 py-2 border border-pennywise-red text-pennywise-red font-courier text-sm hover:bg-pennywise-red hover:text-black transition-all duration-300 tracking-wider shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                    REGISTER
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
