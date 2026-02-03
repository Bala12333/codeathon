import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Glimpses from './components/Glimpses';
import Team from './components/Team';

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-pennywise-red selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Rules />
            <Timeline />
            <Prizes />
            <Glimpses />
            <Team />
        </div>
    );
}

export default App;
