import React from 'react';
import { motion } from 'framer-motion';

const glimpses = [
    { title: "Codeathon 1.0", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
    { title: "Codeathon 2.0", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" },
    { title: "Codeathon 3.0", img: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop" },
];

const Glimpses = () => {
    return (
        <section id="glimpses" className="py-24 bg-neutral-900 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-nosifer text-white mb-4">
                        GLIMPSES OF THE <span className="text-pennywise-red">PAST</span>
                    </h2>
                    <p className="font-courier text-gray-400">Legacy of the Losers Club</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {glimpses.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative group overflow-hidden rounded-lg border-2 border-transparent hover:border-pennywise-red transition-all cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all z-10"></div>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-20">
                                <h3 className="text-xl font-nosifer text-white">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Glimpses;
