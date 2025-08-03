import { getProjectData } from '@lib';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ProjectParams {
    [key: string]: string | undefined;
    projectName: string;
}

const ProjectPage = () => {
    const { projectName } = useParams<ProjectParams>();
    const { t } = useTranslation();

    const modules = getProjectData(projectName!);

    return (
        <div className="container mx-auto flex flex-col items-center justify-center py-8 px-4">
            {modules.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center justify-center text-center gap-4 p-4 w-full`}
                >
                    <>
                        <img
                            src={`/portfolio${item.module.imgPath}`}
                            alt="projectimg"
                            className="md:w-3/5 sm:w-full object-cover rounded-xl"
                        />
                        <span className="text-left">
                            {t(item.module.description)}
                        </span>
                    </>
                </div>
            ))}
        </div>
    );
};

export { ProjectPage };
