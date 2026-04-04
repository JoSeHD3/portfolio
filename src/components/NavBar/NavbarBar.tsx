import { Logo } from '..';
import { Navbar } from '.';
import { FlagButton } from '../../components/ui';

const NavbarBar = () => {
    return (
        <nav className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 overflow-hidden border-b border-cyan-300/10 bg-gradient-to-b from-[#0b1424]/95 via-[#09111d]/92 to-[#050a13]/85 pl-4 backdrop-blur-md shadow-[0_1px_0_rgba(89,243,233,0.08)]">
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
