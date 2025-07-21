import { getProjectData } from '@lib';
import { useParams } from 'react-router-dom';

interface ProjectParams {
    [key: string]: string | undefined;
    projectName: string;
}

const ProjectPage = () => {
    const { projectName } = useParams<ProjectParams>();

    const modules = getProjectData(projectName!);

    return (
        <div>
            {modules.map((item, index) => (
                <div key={index} className="flex flex-row items-center p-4">
                    {index % 2 === 0 ? (
                        <>
                            <img
                                src={item.module.imgPath}
                                alt="projectimg"
                                className="w-32 h-32 object-cover mb-8"
                            />
                            <span className="text-center ">
                                {item.module.description}
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="text-center ">
                                {item.module.description}
                            </span>
                            <img
                                src={item.module.imgPath}
                                alt="projectimg"
                                className="w-32 h-32 object-cover mb-2"
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export { ProjectPage };
