import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './BlurBackground.module.css';

interface BlurBackgroundProps {
  children: ReactNode;
}

export default function BlurBackground({
  children,
}: BlurBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [blurDimensions, setBlurDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const setBlur = () => {
      if (backgroundRef.current) {
        const width = backgroundRef.current.offsetWidth;
        const height = backgroundRef.current.offsetHeight;
        setBlurDimensions({
          width: width + 20,
          height: height + 100,
        });
      }
    };
    setBlur();

    const resize = () => {
      setBlur();
    };

    window.addEventListener('resize', resize);
    return window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className={styles.blurBackground} ref={backgroundRef}>
      <div
        className={styles.blurryElement}
        style={blurDimensions}
      ></div>
      {children}
    </div>
  );
}
