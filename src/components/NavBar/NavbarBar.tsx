import { Logo } from '..';
import { Navbar } from '.';

const NavbarBar = () => {
    return (
        <nav className="flex items-center justify-between pl-4 h-16 gap-4">
            <div className="flex items-center">
                <Logo />
            </div>
            <div className="flex items-center">
                <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK Flag"
                    className="h-6"
                />
            </div>
            <Navbar />
        </nav>
    );
};

export { NavbarBar };
