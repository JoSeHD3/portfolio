import { projectItems } from './projectItems';
import { useTranslation } from 'react-i18next';
import { Tag } from '..';
import { Link } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-10 mb-20 px-4" id="projects">
            <div className="container mx-auto flex flex-col gap-6">
                {projectItems.map((item, index) => {
                    const isReversed = index % 2 === 1;

                    return (
                        <article
                            key={item.id}
                            className={`overflow-hidden rounded-3xl border border-[#0DAD8D]/25 bg-[#262626]/80 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:flex ${
                                isReversed ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            <div className="relative min-h-[260px] border-b border-[#0DAD8D]/15 bg-[radial-gradient(circle_at_top,_rgba(13,173,141,0.16),_transparent_58%),linear-gradient(135deg,_rgba(255,255,255,0.04),_rgba(0,0,0,0.04))] lg:w-1/2 lg:border-b-0 lg:border-r lg:border-[#0DAD8D]/15">
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.08),_rgba(0,0,0,0.28))]" />
                                <div className="relative flex h-full items-center justify-center p-8">
                                    <img
                                        src={`/portfolio${item.imagePath}`}
                                        alt={t(item.title)}
                                        className="h-auto max-w-full rounded-2xl object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 px-6 py-6 md:px-8 md:py-8 lg:w-1/2 lg:px-10 lg:py-10">
                                <p className="text-xs uppercase tracking-[0.35em] text-[#0DAD8D]/80">
                                    Project {String(item.id).padStart(2, '0')}
                                </p>
                                <h3 className="text-2xl font-semibold text-[#f0f0f0] md:text-3xl">
                                    {t(item.title)}
                                </h3>
                                <div className="space-y-4 text-sm leading-7 text-[#cfcfcf]">
                                    {item.descriptions.map((description) => (
                                        <p key={description}>
                                            {t(description)}
                                        </p>
                                    ))}
                                </div>
                                {item.button && (
                                    <Link
                                        href="https://piotrbozek.pl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="cursor-pointer py-2 flex justify-end text-sm font-medium text-[#0DAD8D] shadow-md transition duration-200 hover:text-[#0DAD8D]/80 hover:shadow-lg">
                                            {t('projectsButton')}{' '}
                                            <OpenInNew
                                                className="ml-1"
                                                fontSize="small"
                                            />
                                        </span>
                                    </Link>
                                )}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {item.tags.map((tag) => (
                                        <Tag key={tag} content={tag} />
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export { Projects };
