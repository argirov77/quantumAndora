import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

function useOnScreen(
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin = '0px',
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: Element | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(true);
      },
      { rootMargin },
    );
    if (ref?.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

const LazyShow = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef, '-60px');

  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
