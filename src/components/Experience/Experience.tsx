import { useState } from 'react';
import { experienceItems } from './experienceItems';
import Button from '@mui/material/Button';

const Experience = () => {
    const [description, setDescription] = useState<string>(
        experienceItems[0].description
    );

    const onClickHandler = (description: string): void => {
        setDescription(description);
    };

    return (
        <main
            className="flex flex-row items-center justify-center w-full mt-20 mb-20"
            id="experience"
        >
            <span className="flex-1 px-8">{description}</span>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-4 flex-1">
                {experienceItems.map((item, index) => (
                    <Button
                        variant="border"
                        className=""
                        key={index}
                        onClick={() => onClickHandler(item.description)}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
        </main>
    );
};

export { Experience };
