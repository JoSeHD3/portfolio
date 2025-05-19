import { useState } from 'react';
import { projectItems } from './projectItems';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@mui/material/Button';

const Projects = () => {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
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
        <section className="flex flex-col items-center justify-center mt-20 mb-20 relative px-4">
            <div className="text-[#0DAD8D] mb-2 text-3xl font-semibold">
                {item.title}
            </div>
            <div className="relative w-80 md:w-full max-w-md h-[400px] flex items-center justify-center">
                <button
                    onClick={prev}
                    className="absolute left-[-40px] hover:text-[#0DAD8D] transition"
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
                        className="w-full absolute"
                    >
                        <div className="relative w-full h-80 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-cover border border-neutral-700"
                            />
                        </div>
                        <div className="mt-4 text-sm">{item.description}</div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={next}
                    className="absolute right-[-40px] hover:text-[#0DAD8D] transition"
                >
                    <ArrowForwardIosIcon fontSize="large" />
                </button>
            </div>
            <Button variant="border">Find out more!</Button>
        </section>
    );
};

export { Projects };
