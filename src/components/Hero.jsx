import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useMagneticRepulsion } from '../hooks/useMagneticRepulsion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Anti-Gravity Hook
  const { ref: magneticRef, style: magneticStyle, onMouseMove, onMouseLeave } = useMagneticRepulsion(60);

  const [isLoading, setIsLoading] = useState(true);
  const [isEating, setIsEating] = useState(false);
  const [isBoat, setIsBoat] = useState(false);

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show smile for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic
  const calculateTimeLeft = () => {
    // March 10, 2026 09:00:00
    const difference = +new Date("2026-03-10T09:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleRegister = () => {
    // 1. Morph to Boat
    setIsBoat(true);

    // 2. Boat Sails (Wait for animation)
    setTimeout(() => {
      // 3. Eating Phase (Mouth Begins Opening)
      setIsEating(true);

      // 4. Navigate (After mouth is fully open/consumed)
      setTimeout(() => {
        window.location.href = "#register-form";
        setIsEating(false);
        setIsBoat(false);
      }, 4000); // 4 seconds for slow cinematic mouth open
    }, 2500);
  };

  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black perspective-1000">

      {/* 1. PRELOADER - SCARY SMILE */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            {/* User Provided GIF - object-contain prevents cropping */}
            <img
              src="/pennywise_smile.gif"
              alt="Pennywise Smile"
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 text-pennywise-red font-nosifer text-4xl md:text-6xl tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            >
              WE ALL FLOAT...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342242e2?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"
      />

      {/* Fog/Smoke Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Main Content with Anti-Gravity & Boat Morph */}
      <motion.div
        ref={magneticRef}
        style={magneticStyle}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={isBoat ? { scale: 0, opacity: 0, rotate: 720 } : { scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "anticipate" }}
        className="relative z-20 text-center px-4 w-full max-w-6xl animate-float-void p-10 rounded-xl"
      >

        {/* Department Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }} // Delayed for preloader
          className="mb-6 font-courier text-pennywise-red tracking-widest text-sm md:text-base uppercase"
        >
          Department of CSE and CSBS Presents
        </motion.div>

        {/* College Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-lg md:text-2xl font-courier text-gray-300 mb-8"
        >
          PRATHYUSHA ENGINEERING COLLEGE
          <span className="block text-xs text-gray-500 mt-1">An Autonomous Institution</span>
        </motion.h2>

        {/* Main Title Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 3.5, type: "spring" }}
          className="text-7xl md:text-9xl font-nosifer text-pennywise-red mb-4 drop-shadow-[0_0_30px_rgba(255,0,0,0.6)] relative inline-block glitch-container"
          data-text="CODEATHON 4.0"
        >
          CODEATHON <span className="text-white">4.0</span>
        </motion.h1>

        <motion.p
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="text-xl md:text-2xl font-courier text-gray-400 mt-4 tracking-[0.3em]"
        >
          March 10th - 11th, 2026 | 24 Hours
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-12 mb-12"
        >
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="flex flex-col items-center p-4 bg-black/50 border border-pennywise-red/30 rounded-lg backdrop-blur-sm hover:border-pennywise-red transition-all duration-300 group">
              <span className="text-4xl md:text-6xl font-nosifer text-white group-hover:text-pennywise-red transition-colors">
                {timeLeft[interval] || '0'}
              </span>
              <span className="text-xs md:text-sm font-courier text-gray-500 uppercase mt-2 tracking-widest">
                {interval}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.button
          onClick={handleRegister}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255, 0, 0)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-pennywise-red text-black font-nosifer text-xl md:text-2xl hover:bg-red-800 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.4)] clip-path-polygon relative overflow-hidden group"
        >
          <span className="relative z-10">REGISTER NOW</span>
          <div className="absolute inset-0 bg-black/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </motion.button>
      </motion.div>

      {/* Floating Elements (Balloons) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:right-20 opacity-50 z-10"
      >
        <div className="w-16 h-20 bg-pennywise-red rounded-full blur-[2px] opacity-60"></div>
        <div className="w-0.5 h-24 bg-gray-600 mx-auto mt-[-5px]"></div>
      </motion.div>

      {/* 3. PAPER BOAT ANIMATION */}
      <AnimatePresence>
        {isBoat && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: [0, 50, -50, 100], rotate: [0, 5, -5, 10] }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <img src="/paper_boat.png" alt="Paper Boat" className="w-64 md:w-96 max-w-[80vw] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MOUTH EATING SCREEN TRANSITION (Updated Asset) */}
      <AnimatePresence>
        {isEating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 4 }} // Scale 4x to ensure the "mouth" consumes the viewer
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >
            {/* Cinematic Slow Mouth Open (Zoom Effect) */}
            <motion.img
              src="/pennywise_mouth_static.png"
              alt="Consuming"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 8, opacity: 1 }} // Scale huge to consume viewer
              transition={{ duration: 4, ease: "easeIn" }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default Hero;

