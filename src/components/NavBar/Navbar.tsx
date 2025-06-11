import { useEffect, useState } from 'react';
import { NavbarDesktop, NavbarMobile } from '.';

const Navbar = () => {
    const [mobile, setMobile] = useState<boolean>();

    useEffect(() => {
        const updateMobile = () => {
            setMobile(window.innerWidth < 576 ? true : false);
        };

        updateMobile();
        window.addEventListener('resize', updateMobile);
        return () => {
            window.removeEventListener('resize', updateMobile);
        };
    }, []);

    return typeof mobile !== 'undefined' ? (
        mobile ? (
            <NavbarMobile />
        ) : (
            <NavbarDesktop />
        )
    ) : null;
};

export { Navbar };
