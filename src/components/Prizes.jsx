import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
    return (
        <section id="prizes" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] bg-fixed bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-nosifer mb-16">
                    REWARDS FROM THE <span className="text-pennywise-red">SEWERS</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-16">
                    {/* 2nd Prize */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-2 md:order-1 w-full md:w-1/3 p-6 bg-gray-900/80 border border-gray-700 rounded-lg relative"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-700 p-3 rounded-full border-4 border-black">
                            <Medal size={40} className="text-gray-300" />
                        </div>
                        <h3 className="mt-8 text-2xl font-nosifer text-gray-300">2nd PRIZE</h3>
                        <p className="text-4xl font-courier font-bold text-white mt-4">₹ 10,000</p>
                        <p className="text-pennywise-red font-courier mt-2 uppercase text-sm tracking-widest">The Derry Hero</p>
                    </motion.div>

                    {/* 1st Prize */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="order-1 md:order-2 w-full md:w-1/3 p-8 bg-black/90 border-2 border-pennywise-red rounded-lg relative transform md:-translate-y-8 z-10 shadow-[0_0_50px_rgba(255,0,0,0.2)]"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-pennywise-red p-4 rounded-full border-4 border-black animate-bounce-slow">
                            <Trophy size={48} className="text-yellow-400" />
                        </div>
                        <h3 className="mt-10 text-3xl font-nosifer text-yellow-500">1st PRIZE</h3>
                        <p className="text-5xl font-courier font-bold text-white mt-4">₹ 20,000</p>
                        <p className="text-pennywise-red font-courier mt-2 uppercase text-sm tracking-widest">The Ultimate Survivor</p>
                    </motion.div>

                    {/* 3rd Prize */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="order-3 w-full md:w-1/3 p-6 bg-gray-900/80 border border-gray-700 rounded-lg relative"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-900 p-3 rounded-full border-4 border-black">
                            <Award size={40} className="text-orange-400" />
                        </div>
                        <h3 className="mt-8 text-2xl font-nosifer text-orange-400">3rd PRIZE</h3>
                        <p className="text-4xl font-courier font-bold text-white mt-4">₹ 5,000</p>
                        <p className="text-pennywise-red font-courier mt-2 uppercase text-sm tracking-widest">Georgie's Boat Award</p>
                    </motion.div>
                </div>

                <div className="max-w-xl mx-auto p-6 bg-gray-900/50 border border-pennywise-red/30 rounded-lg">
                    <h4 className="text-xl font-nosifer text-white mb-2">BEST PERFORMERS (x5)</h4>
                    <p className="text-3xl font-courier text-pennywise-red">₹ 1,000</p>
                    <p className="text-gray-500 text-sm mt-1 uppercase">Special Recognition</p>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
