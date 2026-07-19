interface ProjectItem {
    id: number;
    title: string;
    descriptions: string[];
    tags: string[];
    imagePath: string;
    button?: boolean;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        title: 'projectPBTitle',
        descriptions: ['projectPBDescription', 'projectPBDescription2'],
        tags: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Motion', 'Cloudflare'],
        imagePath: '/piotrbozek-collage.png',
        button: true,
    },
    {
        id: 2,
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
        id: 3,
        title: 'project5Title',
        descriptions: ['christmascalendar1', 'christmascalendar2'],
        tags: ['Next.js', 'MongoDB', 'shadcn/ui', 'Vercel'],
        imagePath: '/christmascalendar-collage.png',
    },
    {
        id: 4,
        title: 'project2Title',
        descriptions: ['mobilestorage1', 'mobilestorage2', 'mobilestorage3'],
        tags: ['Java', 'React', 'MySQL', 'Android Studio'],
        imagePath: '/mobilestorage-collage.png',
    },
];

export { projectItems };
