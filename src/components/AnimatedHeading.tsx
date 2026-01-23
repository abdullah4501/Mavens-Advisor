import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
  startDelay?: number; 
  center?: boolean;
};

const AnimatedHeading = ({
  text,
  className = "",
  duration = 0.8,   // ⬅ longer duration
  stagger = 0.06,   // ⬅ smoother stagger
  startDelay = 0.4,
  center = false,
}: AnimatedHeadingProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap leading-tight ${center ? 'justify-center' : ''}`} aria-label={text}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-flex mr-2">
          {word.split("").map((char, cIndex) => {
            const index = wIndex * 10 + cIndex;

            return (
              <motion.span
                key={cIndex}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration,
                  delay: startDelay + index * stagger,
                }}
                className={className}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
