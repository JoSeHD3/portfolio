import { cn } from '@lib';

const Band = ({ label, flip }: { label: string; flip?: boolean }) => {
    return (
        <div
            className={cn(
                'relative bg-[#303030] text-[#0DAD8D] font-semibold px-10 py-4 pl-10 w-1/2 text-2xl',
                flip ? 'text-right' : 'text-left'
            )}
        >
            <span
                className={cn(
                    flip ? 'right-2' : 'left-2',
                    'absolute top-1/2 -translate-y-1/2 text-[#0DAD8D]'
                )}
            >
                {flip ? '<' : '>'}
            </span>
            {label}
            <div
                className={cn(
                    flip
                        ? 'left-5 clip-path-left-arrow'
                        : '-right-1 clip-path-right-arrow',
                    'absolute top-0 h-full w-10 bg-[#262626] z-10'
                )}
            />
        </div>
    );
};

export { Band };
