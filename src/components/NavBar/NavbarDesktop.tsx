import Button from '@mui/material/Button';
import { navbarItems } from '.';

const NavbarDesktop = () => {
    return (
        <div className="flex flex-nowrap h-full right-0">
            {navbarItems.map((item, index) => (
                <Button key={index} color="basic" className="h-full xl:w-48">
                    <span className="text-lg text-clip overflow-hidden">
                        {item}
                    </span>
                </Button>
            ))}
        </div>
    );
};

export { NavbarDesktop };
