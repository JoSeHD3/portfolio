import Button from '@mui/material/Button';
import { Logo } from '..';

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between px-4 h-16 gap-4">
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
                    <Button color="basic" className="xl:w-48 h-full">
                        aaaaa
                    </Button>
                    <Button color="basic" className="xl:w-48 h-full">
                        Button template
                    </Button>
                    <Button color="basic" className="xl:w-48 h-full">
                        Button template
                    </Button>
                    <Button color="basic" className="xl:w-48 h-full">
                        Button template
                    </Button>
                </div>
            </nav>
        </>
    );
};

export { Navbar };
