import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import BlurBackground from '../BlurBackground/BlurBackground';
import styles from './Hero.module.css';

const toastVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [copiedToClipboard, setCopiedToClipboard] = useState('');

  return (
    <section className={styles.hero} id="hero">
      <BlurBackground>
        <div className={styles.title}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I&apos;m Dave.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Web Developer based in London.
          </motion.h2>
          <div className={styles.heroButtons}>
            <motion.a
              href="#about"
              className="button border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Tell me more <IoIosArrowRoundDown />{' '}
            </motion.a>
            <div className={styles.iconButtons}>
              <motion.a
                href="https://github.com/dave-forbes"
                target="_blank"
                className="button dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/david-forbes-b372065b/"
                target="_blank"
                className="button dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.4 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.button
                onHoverStart={() => {
                  setCopiedToClipboard('Copy to clipboard?');
                }}
                onHoverEnd={() => {
                  setCopiedToClipboard('');
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    'dave.forbes.dev@outlook.com'
                  );
                  setCopiedToClipboard('Copied!');
                  setTimeout(() => {
                    setCopiedToClipboard('');
                  }, 1000);
                }}
                className="button dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.6 }}
              >
                <HiOutlineMail />
                <motion.p
                  className={styles.toast}
                  variants={toastVariants}
                  initial="hidden"
                  animate={copiedToClipboard ? 'visible' : 'hidden'}
                >
                  {copiedToClipboard}
                </motion.p>
              </motion.button>
            </div>
          </div>
        </div>
      </BlurBackground>
    </section>
  );
}
