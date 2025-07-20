"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type FramerWrapperProps = MotionProps & {
  children: ReactNode;
  className?: string;
  index?:number
};

const FramerWrapper = ({
  children,
  className,
  initial,
  whileInView,
  transition,
  index,
  ...motionProps
}: FramerWrapperProps) => {
  return (
    <motion.div
      className={className}
      // ✅ Default fallback animation
      initial={initial ?? { opacity: 0, y: 50 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      transition={transition ?? { duration: 0.6, ease: "easeOut" ,delay:index ? 0.3*index : 0}}
      viewport={{ once: true }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FramerWrapper;
