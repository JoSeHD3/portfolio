import { useState } from 'react';
import { projectItems } from './projectItems';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const item = projectItems[index];

    const next = () =>
        setIndex([
            (index + 1) % projectItems.length,
            1, // forward
        ]);

    const prev = () =>
        setIndex([
            (index - 1 + projectItems.length) % projectItems.length,
            -1, // backward
        ]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
        }),
    };

    return (
        <section
            className="flex flex-col items-center justify-center mt-20 mb-20 gap-4  px-4"
            id="projects"
        >
            <div className="text-[#0DAD8D] mb-2 text-3xl font-semibold">
                {t(item.title)}
            </div>
            <div className="md:w-full gap-4 max-w-md flex items-center justify-center">
                <button
                    onClick={prev}
                    className="hover:text-[#0DAD8D] transition"
                >
                    <ArrowBackIosNewIcon fontSize="large" />
                </button>
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={item.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="w-full"
                    >
                        <div className="w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={t(item.title)}
                                className="w-full object-cover border border-neutral-700"
                            />
                        </div>
                        <div className="mt-4 text-sm">
                            {t(item.description)}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={next}
                    className="hover:text-[#0DAD8D] transition"
                >
                    <ArrowForwardIosIcon fontSize="large" />
                </button>
            </div>
            <Button
                variant="border"
                className="mt-8"
                onClick={() => {
                    if (item.id === 3) {
                        console.log('Portfolio project clicked!');
                    } else {
                        navigate(item.path || '');
                    }
                }}
            >
                {t('projectsButton')}
            </Button>
        </section>
    );
};

export { Projects };
