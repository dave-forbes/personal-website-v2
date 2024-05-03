import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface IconFlakeProps {
  Icon: IconType;
}

export default function IconFlake({ Icon }: IconFlakeProps) {
  const randomPos = Math.floor(Math.random() * 1000) - 1000 / 2;

  const randomDuration = Math.floor(Math.random() * 10) + 5;

  const randomDelay = Math.floor(Math.random() * 10);

  const randomOpacity = Math.random() * (0.9 - 0.2) + 0.2;

  const randomSize = Math.floor(Math.random() * 30) + 20;
  const iconStyle = {
    width: randomSize,
    height: randomSize,
  };

  return (
    <motion.div
      className="rain-icon-container"
      initial={{ y: 0, opacity: 0, x: randomPos }}
      animate={{
        y: '100vh',
        opacity: [0, randomOpacity, 0],
      }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'easeIn',
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
      }}
    >
      <Icon style={iconStyle} />
    </motion.div>
  );
}
