import { Logo } from '..';
import { Navbar } from '.';
import { FlagButton } from '@components/ui';

const NavbarBar = () => {
    return (
        <nav className="sticky top-0 overflow-hidden z-20 bg-[#262626] flex items-center justify-between pl-4 h-16 gap-4">
            <div className="flex items-center">
                <Logo />
            </div>
            <div className="flex items-center">
                <FlagButton />
            </div>
            <Navbar />
        </nav>
    );
};

export { NavbarBar };
