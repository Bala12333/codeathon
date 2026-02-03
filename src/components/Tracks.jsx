import React from 'react';
import { motion } from 'framer-motion';

const tracks = [
    {
        title: "AI & ML",
        subtitle: "The Artificial Mind",
        description: "Build intelligent systems that might just take over.",
        color: "border-red-600"
    },
    {
        title: "WEB3 & BLOCKCHAIN",
        subtitle: "Decentralized Terror",
        description: "Secure the future on chains that cannot be broken.",
        color: "border-red-600"
    },
    {
        title: "IoT & ROBOTICS",
        subtitle: "The Machines Rise",
        description: "Connect the physical world to the digital nightmare.",
        color: "border-red-600"
    },
    {
        title: "OPEN INNOVATION",
        subtitle: "Unleash Chaos",
        description: "No rules. No limits. Just pure creative madness.",
        color: "border-red-600"
    }
];

const Tracks = () => {
    return (
        <section id="tracks" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-nosifer text-white mb-4">
                        CHOOSE YOUR <span className="text-pennywise-red">FEAR</span>
                    </h2>
                    <p className="font-courier text-gray-400">Select a track to compete in</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className={`bg-black p-8 border-t-4 ${track.color} relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-pennywise-red/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-pennywise-red/30"></div>

                            <h3 className="text-2xl font-nosifer text-white mb-2 relative z-10">{track.title}</h3>
                            <h4 className="text-pennywise-red font-courier text-sm mb-4 tracking-wider uppercase">{track.subtitle}</h4>
                            <p className="font-courier text-gray-400 text-sm leading-relaxed">
                                {track.description}
                            </p>

                            <button className="mt-6 text-sm font-courier text-white border-b border-pennywise-red pb-1 hover:text-pennywise-red transition-colors">
                                VIEW DETAILS &rarr;
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
