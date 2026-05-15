import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configs for different lags
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 150 }); // ~0.1s lag
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 150 });
  
  const dotX = useSpring(mouseX, { damping: 25, stiffness: 80 });  // ~0.25s lag
  const dotY = useSpring(mouseY, { damping: 25, stiffness: 80 });

  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Lagging Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? (isPressed ? 40 : 60) : (isPressed ? 15 : 24),
          height: isHovering ? (isPressed ? 40 : 60) : (isPressed ? 15 : 24),
          borderColor: isHovering ? '#ff00ff' : '#00d9ff',
          borderWidth: isPressed ? 3 : 2,
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 0, 255, 0.4)' 
            : '0 0 10px rgba(0, 217, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="fixed top-0 left-0 rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Lagging Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.5 : (isHovering ? 1.5 : 1),
          backgroundColor: isHovering ? '#ff00ff' : '#00d9ff',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none shadow-[0_0_8px_rgba(0,217,255,0.6)]"
      />
    </div>
  );
}
