interface NavbarItem {
    name: string;
    location: string;
    num?: string;
}

export const navbarItems: NavbarItem[] = [
    {
        name: 'navbarAbout',
        location: 'header',
    },
    {
        name: 'navbarExperience',
        location: 'experience',
        num: '01.',
    },
    {
        name: 'navbarProjects',
        location: 'projects',
        num: '02.',
    },
    {
        name: 'navbarTechnologies',
        location: 'technology',
        num: '03.',
    },
    {
        name: 'navbarContact',
        location: 'contact',
        num: '04.',
    },
];
