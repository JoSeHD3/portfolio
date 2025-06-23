interface NavbarItem {
    name: string;
    location: string;
    num?: string;
}

export const navbarItems: NavbarItem[] = [
    {
        name: 'About',
        location: '#header',
    },
    {
        name: 'Experience',
        location: '#experience',
        num: '01.',
    },
    {
        name: 'Projects',
        location: '#projects',
        num: '02.',
    },
    {
        name: 'Technologies',
        location: '#technology',
        num: '03.',
    },
    {
        name: 'Contact',
        location: '#contact',
        num: '04.',
    },
];
