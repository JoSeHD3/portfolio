import { experienceItems } from './experienceItems';
import { useTranslation } from 'react-i18next';
import { Card, Tag } from '..';

const Experience = () => {
    const { t } = useTranslation();

    return (
        <main
            className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 items-start justify-center w-full mb-20"
            id="experience"
        >
            {experienceItems.map((item) => (
                <Card key={item.title}>
                    {(() => {
                        const title = t(item.title);
                        const [firstWord, ...rest] = title.split(' ');
                        const remainingTitle = rest.join(' ');

                        return (
                            <p className='mb-4 text-3xl font-semibold'>
                                <span className='text-[#e2e2e2]'>{firstWord}</span>
                                {remainingTitle && (
                                    <span className='text-[#0DAD8D]'> {' '}
                                        {remainingTitle}
                                    </span>
                                )}
                            </p>
                        );
                    })()}
                    <p className='text-[#cfcfcf] mb-4 text-lg'>{item.company}</p>
                    {t(item.description).split('\n').map((line, index) => (
                        <p key={index} className='text-[#cfcfcf]'>{line}</p>
                    ))}
                    <br />
                    {item.tags && (item.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            content={tag}  
                        /> 
                    )))}    
                </Card>
            ))}
        </main>
    );
};

export { Experience };
