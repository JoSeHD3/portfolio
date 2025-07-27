interface ProjectItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        image: '/vjournal1.png',
        title: 'project1Title',
        description: 'project1Description',
    },
    {
        id: 2,
        image: '/seal.jpg',
        title: 'Seal2',
        description: 'Quick Seal Description2',
    },
    {
        id: 3,
        image: '/seal.jpg',
        title: 'Seal3',
        description: 'Quick Seal Description3',
    },
];

export { projectItems };
