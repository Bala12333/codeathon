import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticRepulsion } from '../hooks/useMagneticRepulsion';

const About = () => {
    // Anti-Gravity Hook
    const { ref: magneticRef, style: magneticStyle, onMouseMove, onMouseLeave } = useMagneticRepulsion(40);

    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            {/* Background Splatters */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pennywise-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <motion.div
                ref={magneticRef}
                style={magneticStyle}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="container mx-auto px-6 animate-float-void deadlights-glow p-8 rounded-2xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-16"
                >
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-nosifer text-white relative inline-block">
                            <span className="text-pennywise-red">ABOUT</span> THE EVENT
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-pennywise-red" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </h2>

                        <div className="font-courier text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Welcome to <span className="text-pennywise-red font-bold">Codeathon 4.0</span>, the ultimate coding challenge where innovation meets creativity! Organized by the Department of Computer Science & Engineering, Prathyusha Engineering College, this event brings together students, problem-solvers, and tech enthusiasts.
                            </p>
                            <p>
                                Showcase your coding skills, collaborate on exciting projects, and compete for amazing rewards. Whether you're a beginner or an expert, Codeathon offers a platform to test your abilities, learn from peers, and build something extraordinary.
                            </p>
                            <p>
                                With challenging problem statements, mentorship from industry experts, and an opportunity to network with like-minded individuals, this is your chance to <span className="text-white font-bold decoration-pennywise-red underline decoration-wavy">code, compete, and conquer</span>!
                            </p>
                            <p className="text-xl text-pennywise-red font-nosifer text-center pt-4">
                                Are you ready to take on the challenge?
                            </p>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-pennywise-red/20 transform rotate-3 scale-105 rounded-xl transition-transform group-hover:rotate-6"></div>
                        <div className="relative z-10 overflow-hidden rounded-xl border-2 border-gray-800 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding Event"
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6 text-white text-xl font-courier">
                 //"UNLEASH YOUR POTENTIAL"
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
