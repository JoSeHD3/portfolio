import Button from '@mui/material/Button';
import { Logo } from '..';
import { navbarItems } from '.';

const Navbar = () => {
    return (
        <>
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
                <div className="flex flex-nowrap h-full right-0">
                    {navbarItems.map((item, index) => (
                        <Button
                            key={index}
                            color="basic"
                            className="h-full xl:w-48"
                        >
                            <span className="text-lg text-clip overflow-hidden">
                                {item}
                            </span>
                        </Button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export { Navbar };
