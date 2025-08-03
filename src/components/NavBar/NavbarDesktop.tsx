import Button from '@mui/material/Button';
import { navbarItems } from '.';
import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NavbarDesktop = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-nowrap h-full right-0">
            {navbarItems.map(
                (item, index) =>
                    item.num !== undefined && (
                        <Button
                            LinkComponent={Link}
                            onClick={() =>
                                navigate('/', {
                                    state: { scrollTo: item.location },
                                })
                            }
                            key={index}
                            color="basic"
                            className="h-full xl:w-48"
                        >
                            <span className="text-lg text-clip text-[#a8a8a8]">
                                {item.num}
                            </span>
                            <span className="text-lg text-clip ">
                                {t(item.name)}
                            </span>
                        </Button>
                    )
            )}
        </div>
    );
};

export { NavbarDesktop };
