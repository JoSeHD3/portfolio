import { Tooltip } from '@mui/material';
import { technologyItems } from './technologyItems';

const Technology = () => {
    return (
        <section
            className="flex flex-wrap gap-16 items-center justify-center my-16 px-4"
            id="technology"
        >
            <div className="flex flex-wrap justify-center align-middle md:w-3/4 sm:w-full gap-16">
                {technologyItems.map((icon) => (
                    <Tooltip key={icon.id} title={icon.alt}>
                        <img
                            src={`/portfolio${icon.src}`}
                            alt={icon.alt}
                            className="w-16 h-16 rounded-full bg-white"
                        />
                    </Tooltip>
                ))}
            </div>
        </section>
    );
};

export { Technology };
