import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [typingDone, setTypingDone] = useState(false);
    const { t } = useTranslation();
    const greeting = t('greeting');
    const name = t('name');
    const briefDesc = t('brief_desc');
    const fullDesc = t('full_desc');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayedText(greeting.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === greeting.length) {
                clearInterval(interval);
                setTypingDone(true);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [greeting]);

    return (
        <header
            className="flex flex-col container mx-auto mt-20 mb-34 px-4 min-h-104 md:min-h-62"
            id="header"
        >
            <span
                className="semibold text-[#0DAD8D] mb-4"
                style={{ minHeight: '2rem' }}
            >
                {displayedText}
                <span className="blinking-cursor">|</span>
            </span>

            <AnimatePresence>
                {typingDone && (
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <h1 className="bold text-[#e2e2e2] text-6xl mb-4">
                            {name}
                        </h1>
                        <h2 className="bold text-4xl mb-8 text-[#cfcfcf]">{briefDesc}</h2>
                        <span className="semibold w-100 text-[#cfcfcf]">{fullDesc}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.2rem;
          color: #0DAD8D;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
        </header>
    );
};

export { Header };
