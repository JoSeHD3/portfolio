import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ProjectParams {
    [key: string]: string | undefined;
    projectName: string;
}

const ProjectPage = () => {
    const { projectName } = useParams<ProjectParams>();
    const { t } = useTranslation();

    const listOfProjects: string[] = ['christmas', 'mobilewarehouse'];

    return (
        <>
            {listOfProjects.includes(projectName!) && (
                <span className="text-6xl">
                    {t(`${projectName}-description`)}
                </span>
            )}
        </>
    );
};

export { ProjectPage };
