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
            vjournal: [
                {
                    module: {
                        imgPath: '/vjournal1.png',
                        description: 'vjournal1',
                    },
                },
                {
                    module: {
                        imgPath: '/vjournal2.png',
                        description: 'vjournal2',
                    },
                },
                {
                    module: {
                        imgPath: '/vjournal3.png',
                        description: 'vjournal3',
                    },
                },
                {
                    module: {
                        imgPath: '/vjournal4.png',
                        description: 'vjournal4',
                    },
                },
            ],
            mobilestorage: [
                {
                    module: {
                        imgPath: '/mobilestorage1.png',
                        description: 'mobilestorage1',
                    },
                },
                {
                    module: {
                        imgPath: '/mobilestorage2.png',
                        description: 'mobilestorage2',
                    },
                },
                {
                    module: {
                        imgPath: '/mobilestorage3.png',
                        description: 'mobilestorage3',
                    },
                },
            ],
            bdo: [
                {
                    module: {
                        imgPath: '/bdo1.png',
                        description: 'bdo1',
                    },
                },
                {
                    module: {
                        imgPath: '/bdo2.png',
                        description: 'bdo2',
                    },
                },
            ],
            christmascalendar: [
                {
                    module: {
                        imgPath: '/christmascalendar1.png',
                        description: 'christmascalendar1',
                    },
                },
                {
                    module: {
                        imgPath: '/christmascalendar2.png',
                        description: 'christmascalendar2',
                    },
                },
            ],
        },
    };
    const data = projectData.data[projectName] || [];

    return data;
}
