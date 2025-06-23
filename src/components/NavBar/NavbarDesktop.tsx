import Button from '@mui/material/Button';
import { navbarItems } from '.';
import { Link } from '@mui/material';

const NavbarDesktop = () => {
    return (
        <div className="flex flex-nowrap h-full right-0">
            {navbarItems.map(
                (item, index) =>
                    item.num !== undefined && (
                        <Button
                            LinkComponent={Link}
                            href={item.location}
                            key={index}
                            color="basic"
                            className="h-full xl:w-48"
                        >
                            <span className="text-lg text-clip text-[#a8a8a8]">
                                {item.num}
                            </span>
                            <span className="text-lg text-clip ">
                                {item.name}
                            </span>
                        </Button>
                    )
            )}
        </div>
    );
};

export { NavbarDesktop };
