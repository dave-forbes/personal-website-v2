import { ReactNode, useEffect, useRef, useState } from 'react';

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
    if (backgroundRef.current) {
      const width = backgroundRef.current.offsetWidth;
      const height = backgroundRef.current.offsetHeight;
      setBlurDimensions({ width: width + 200, height: height + 200 });
    }
  }, []);

  return (
    <div className="blur-background" ref={backgroundRef}>
      <div className="blurry-element" style={blurDimensions}></div>
      {children}
    </div>
  );
}
