import { useState } from 'react';
import IconFall from './IconFall';
import { motion } from 'framer-motion';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { memo } from 'react';

const MemoizedIconFall = memo(IconFall);

export default function Hero() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  return (
    <div className="hero">
      <MemoizedIconFall />
      <div className="title blurry-element"></div>
      <div className="title">
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
          A web Developer based in London.
        </motion.h2>
        <div className="hero-buttons">
          <motion.button
            className="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Tell me more <IoIosArrowRoundDown />{' '}
          </motion.button>
          <div className="icon-buttons">
            <motion.a
              href="https://github.com/dave-forbes"
              target="_blank"
              className="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/david-forbes-b372065b/"
              target="_blank"
              className="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.button
              onClick={() => {
                navigator.clipboard.writeText(
                  'dave.forbes.dev@outlook.com'
                );
                setCopiedToClipboard(true);
              }}
              className="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <HiOutlineMail />
            </motion.button>

            <p
              className="clipboard-confirm"
              style={{ opacity: copiedToClipboard ? 1 : 0 }}
            >
              Copied to clipboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
