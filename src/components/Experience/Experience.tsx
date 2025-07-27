import { useState } from 'react';
import { experienceItems } from './experienceItems';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
    const [description, setDescription] = useState<string>(
        t(experienceItems[0].description)
    );

    const onClickHandler = (description: string): void => {
        setDescription(description);
    };

    const descriptionLines = description.split('\n');

    return (
        <main
            className="flex flex-row items-center justify-center w-full mt-20 mb-20"
            id="experience"
        >
            <div className="flex-1 px-8 space-y-1">
                {descriptionLines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-4 flex-1">
                {experienceItems.map((item, index) => (
                    <Button
                        variant="border"
                        className=""
                        key={index}
                        onClick={() => onClickHandler(t(item.description))}
                    >
                        {t(item.title)}
                    </Button>
                ))}
            </div>
        </main>
    );
};

export { Experience };
