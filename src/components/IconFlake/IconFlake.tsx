import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface IconFlakeProps {
  Icon: IconType;
}

export default function IconFlake({ Icon }: IconFlakeProps) {
  const randomPos = Math.floor(Math.random() * 601) + 50;

  const randomDuration = Math.floor(Math.random() * 30) + 10;

  const randomDelay = Math.floor(Math.random() * 5);

  const randomOpacity = Math.random() * (0.7 - 0.2) + 0.2;

  const randomSize = Math.floor(Math.random() * 30) + 20;
  const iconStyle = {
    width: randomSize,
    height: randomSize,
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0, x: randomPos }}
      animate={{
        y: '100vh',
        opacity: [0, randomOpacity, 0],
      }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
      }}
    >
      <Icon style={iconStyle} />
    </motion.div>
  );
}
