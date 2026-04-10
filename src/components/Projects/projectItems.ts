interface ProjectItem {
    id: number;
    title: string;
    descriptions: string[];
    tags: string[];
    imagePath: string;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        title: 'project1Title',
        descriptions: ['vjournal1', 'vjournal2', 'vjournal3', 'vjournal4'],
        tags: [
            'Next.js',
            'Tailwind CSS',
            'shadcn/ui',
            'Firebase',
            'TanStack Query',
            'ChatGPT',
        ],
        imagePath: '/vjournal-collage.png',
    },
        {
        id: 2,
        title: 'project5Title',
        descriptions: ['christmascalendar1', 'christmascalendar2'],
        tags: ['Next.js', 'MongoDB', 'shadcn/ui', 'Vercel'],
        imagePath: '/christmascalendar-collage.png',
    },
    {
        id: 3,
        title: 'project2Title',
        descriptions: ['mobilestorage1', 'mobilestorage2', 'mobilestorage3'],
        tags: ['Java', 'React', 'MySQL', 'Android Studio'],
        imagePath: '/mobilestorage-collage.png',
    },
    {
        id: 4,
        title: 'project4Title',
        descriptions: ['bdo1', 'bdo2'],
        tags: ['.NET Framework', 'Desktop', 'C#'],
        imagePath: '/bdo-collage.png',
    },

];

export { projectItems };
