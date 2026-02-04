import { useRef, useState, useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export const useMagneticRepulsion = (strength = 50) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Repel: Move slightly opposite to the mouse
        // If mouse is left (-), move right (+). 
        // We want the element to "drift away".
        const xMove = -(distanceX / width) * strength;
        const yMove = -(distanceY / height) * strength;

        x.set(xMove);
        y.set(yMove);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { ref, style: { x: springX, y: springY }, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
};
