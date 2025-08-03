interface ProjectItem {
    id: number;
    image: string;
    title: string;
    description: string;
    path?: string;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        image: '/vjournal1.png',
        title: 'project1Title',
        description: 'project1Description',
        path: '/projects/vjournal',
    },
    {
        id: 2,
        image: '/mobilestorage1.png',
        title: 'project2Title',
        description: 'project2Description',
        path: '/projects/mobilestorage',
    },
    {
        id: 3,
        image: '/seal.jpg',
        title: 'project3Title',
        description: 'project3Description',
    },
    {
        id: 4,
        image: '/bdo1.png',
        title: 'project4Title',
        description: 'project4Description',
        path: '/projects/bdo',
    },
    {
        id: 5,
        image: '/christmascalendar1.png',
        title: 'project5Title',
        description: 'project5Description',
        path: '/projects/christmascalendar',
    },
];

export { projectItems };
