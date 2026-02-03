import React from 'react';
import { motion } from 'framer-motion';

const events = [
    { time: "09:00 AM", date: "March 10", title: "The Sewer Opens", desc: "Registration & Inauguration" },
    { time: "10:00 AM", date: "March 10", title: "Hack Begins", desc: "Problem statements revealed. Enter the Deadlights." },
    { time: "01:30 PM", date: "March 10", title: "Feast on Fear", desc: "Lunch Break. Fuel your nightmares." },
    { time: "05:00 PM", date: "March 10", title: "Georgie's Guidance", desc: "Mentoring Session 1. Don't take balloons from strangers." },
    { time: "08:30 PM", date: "March 10", title: "Derry Dinner", desc: "Dinner. You'll float too if you don't eat." },
    { time: "01:00 AM", date: "March 11", title: "Midnight Float", desc: "Midnight Snacks & Fun. Red balloons everywhere." },
    { time: "08:00 AM", date: "March 11", title: "The Last Meal", desc: "Breakfast. Final energy boost." },
    { time: "10:00 AM", date: "March 11", title: "Hack Ends", desc: "Survive the 24 hours. Submit your prototype." },
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-nosifer text-center text-white mb-20">
                    TIMELINE OF <span className="text-pennywise-red">EVENTS</span>
                </h2>

                <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 md:pl-0">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="mb-12 relative pl-8 md:pl-0"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-2 w-5 h-5 bg-pennywise-red rounded-full border-4 border-black z-10 md:left-1/2 md:-ml-2.5"></div>

                            <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-[45%] mb-2 md:mb-0"></div>

                                <div className={`md:w-[45%] ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                    <div className="inline-block px-3 py-1 bg-gray-900 rounded text-pennywise-red font-courier text-xs mb-2 border border-gray-800">
                                        {event.date} | {event.time}
                                    </div>
                                    <h3 className="text-2xl font-nosifer text-white mb-2">{event.title}</h3>
                                    <p className="text-gray-400 font-courier">{event.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
