import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ProjectData {
    data: Record<string, ProjectModule[]>;
}

interface ProjectModule {
    module: Record<string, string>;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getProjectData(projectName: string) {
    const projectData: ProjectData = {
        data: {
            christmas: [
                {
                    module: {
                        imgPath: '/seal.jpg',
                        description:
                            'A personal portfolio built with React and Tailwind CSS.',
                    },
                },
                {
                    module: {
                        imgPath: '/seal.jpg',
                        description: 'idk what do i wrtie here',
                    },
                },
            ],
            mobilewarehouse: [
                {
                    module: {
                        imgPath: '/seal.jpg',
                        description: 'i dont want to do this tbh',
                    },
                },
                {
                    module: {
                        imgPath: '/seal.jpg',
                        description: 'A boring stuff',
                    },
                },
                {
                    module: {
                        imgPath: '/seal.jpg',
                        description: 'Wooo hoo',
                    },
                },
            ],
        },
    };
    const data = projectData.data[projectName] || [];

    return data;
}
