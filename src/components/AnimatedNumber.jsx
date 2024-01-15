import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let start = 0;
    const end = targetNumber;
    const duration = 1000;
    const interval = 15;
    const updateCount = () => {
      const increment = Math.ceil((end - start) / (duration / interval));
      if (start < end) {
        setCount((prevCount) => {
          const nextCount = Math.min(prevCount + increment, end); // Ensure count doesn't exceed target
          start += increment;
          return nextCount;
        });
        setTimeout(updateCount, interval);
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(ref.current);
        }
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [targetNumber]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedNumber;
