import { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionWrapper({ children, delay = 0, className = "" }: MotionWrapperProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: delay 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
