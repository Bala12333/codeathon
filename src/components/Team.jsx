import React from 'react';

const Team = () => {
    return (
        <section id="team" className="py-20 bg-black text-white border-t border-gray-900">
            <div className="container mx-auto px-6 text-center">

                {/* Team Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-nosifer mb-12 text-gray-200">
                        THE <span className="text-pennywise-red">TEAM</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        {['PACE', 'GSA Club', 'ACM', 'SCOPE'].map((org) => (
                            <div key={org} className="flex flex-col items-center group">
                                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4 ring-2 ring-gray-700 group-hover:ring-pennywise-red transition-all">
                                    <span className="font-courier font-bold">{org.substring(0, 3)}</span>
                                </div>
                                <span className="font-courier text-sm text-gray-400">{org}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sponsors Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-nosifer mb-12 text-gray-200">
                        PARTNERS IN <span className="text-pennywise-red">CRIME</span>
                    </h2>
                    <div className="flex justify-center gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="px-8 py-4 bg-white/5 rounded border border-white/10 font-courier text-gray-400">
                                Partner {i}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-gray-900">
                    <p className="font-courier text-sm text-gray-500">
                        &copy; 2026 Codeathon 4.0. All rights reserved in this dimension.
                    </p>
                    <p className="font-courier text-xs text-gray-600 mt-2">
                        Department of CSE, Prathyusha Engineering College
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Team;
