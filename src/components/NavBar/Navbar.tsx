import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between px-4 h-16">
                <div className="flex items-center">
                    <div className="text-[#00C4B4] text-2xl font-bold border-2 border-[#00C4B4] rounded-sm w-8 h-8 flex items-center justify-center">
                        S
                    </div>
                </div>
                <div className="flex items-center">
                    <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt="UK Flag"
                        className="h-6"
                    />
                </div>
                <div className="h-full right-0 flex">
                    <Button color="basic" className="w-48 h-full">
                        aaaaa
                    </Button>
                    <Button color="basic" className="w-48 h-full">
                        Button template
                    </Button>
                    <Button color="basic" className="w-48 h-full">
                        Button template
                    </Button>
                    <Button color="basic" className="w-48 h-full">
                        Button template
                    </Button>
                </div>
            </nav>
        </>
    );
};

export { Navbar };
