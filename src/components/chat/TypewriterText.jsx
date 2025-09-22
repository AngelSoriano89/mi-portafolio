import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ 
  text, 
  speed = 20, 
  delay = 0, 
  onComplete = () => {},
  className = '',
  showCursor = true 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Accelerate for longer texts to improve UX
      const dynamicSpeed = text.length > 500 ? Math.max(speed * 0.5, 5) : speed;
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, dynamicSpeed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
    }
  }, [delay]);

  return (
    <div className={`inline ${className}`}>
      <span 
        dangerouslySetInnerHTML={{ __html: displayText }} 
        className="whitespace-pre-wrap"
      />
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-5 bg-primary-700 ml-1"
        />
      )}
    </div>
  );
};

export default TypewriterText;
