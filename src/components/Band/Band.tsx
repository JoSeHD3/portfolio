import { cn } from '@lib';
import { useTranslation } from 'react-i18next';

const Band = ({ label, flip }: { label: string; flip?: boolean }) => {
    const { t } = useTranslation();

    return (
        <div
            className={cn(
                'w-full flex',
                flip ? 'justify-end' : 'justify-start'
            )}
        >
            <div
                className={cn(
                    'relative bg-[#303030] text-[#0DAD8D] font-semibold px-10 py-6 pl-10 w-2/3 text-2xl flex items-center',
                    flip ? 'justify-end' : 'justify-start'
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
                {t(label)}
                <div
                    className={cn(
                        flip
                            ? '-left-1 clip-path-left-arrow'
                            : '-right-1 clip-path-right-arrow',
                        'absolute top-0 h-full w-10 bg-[#262626] z-10'
                    )}
                />
            </div>
        </div>
    );
};

export { Band };
