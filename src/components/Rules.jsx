import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Users, Gavel, Laptop, Zap, MapPin, Eye, MessageSquare, Video } from 'lucide-react';

const rules = [
    { icon: <ShieldAlert />, title: "Identification", desc: "Valid student ID is mandatory. Selected teams must submit Bonafide certificate." },
    { icon: <Users />, title: "The Losers Club", desc: "Teams can have up to 4 members: 1 lead and 3 members." },
    { icon: <Gavel />, title: "The Deadlights' Verdict", desc: "The decision of the jury members is final and binding." },
    { icon: <Laptop />, title: "Equipment", desc: "Teams must bring their own laptops and accessories." },
    { icon: <Zap />, title: "Tools of the Trade", desc: "Use of any technology, tools, or IoT sensors is allowed." },
    { icon: <MapPin />, title: "Venue Protocol", desc: "Work strictly within the venue. No external help permitted." },
    { icon: <Eye />, title: "Active Duty", desc: "At least one team member must be actively coding at all times." },
    { icon: <MessageSquare />, title: "Secrecy", desc: "No discussion of problems with other teams." },
    { icon: <Video />, title: "Surveillance", desc: "Referees will monitor all teams and report any violations." },
];

const Rules = () => {
    return (
        <section id="rules" className="py-20 bg-neutral-900 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-nosifer text-center text-white mb-16">
                    RULES & <span className="text-pennywise-red">GUIDELINES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-black p-6 rounded-lg border border-gray-800 hover:border-pennywise-red transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="text-pennywise-red mb-4 group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(rule.icon, { size: 32 })}
                            </div>
                            <h3 className="text-xl font-courier font-bold text-white mb-2">{rule.title}</h3>
                            <p className="text-gray-400 font-courier text-sm">{rule.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-pennywise-red font-nosifer text-xl animate-pulse">
                        WARNING: Any violation may lead to disqualification.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Rules;
