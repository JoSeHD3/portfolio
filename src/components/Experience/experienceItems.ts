interface ExperienceItem {
    title: string;
    company: string;
    description: string;
    tags: string[];
}

const experienceItems: ExperienceItem[] = [
    {
        title: 'britenetTitle',
        company: 'Britenet',
        description: 'britenetDescription',
        tags: ['Type Script', 'React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Shadcn/UI', 'Git', 'Jira'],
    },
    {
        title: 'epamTitle',
        company: 'EPAM Systems',
        description: 'epamDescription',
        tags: ['.NET', 'C#', 'PostgreSQL', 'Entity Framework Core', 'Git', 'Jira'],
    },
    {
        title: 'fivemTitle',
        company: 'Freelance',
        description: 'fivemDescription',
        tags: ['Lua', 'JavaScript', 'QBCore', 'FiveM', 'MySQL', 'Git', 'Jira'],
    },
    {
        title: 'saraTitle',
        company: 'SARA',
        description: 'saraDescription',
        tags: ['C#', 'Unity', 'Visual Studio', 'Git', 'Jira'],
    },
];

export { experienceItems };
