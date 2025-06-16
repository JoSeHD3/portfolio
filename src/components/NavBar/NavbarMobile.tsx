import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Link, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { navbarItems } from '.';
import { MobileDrawer } from '@components/ui';

const NavbarMobile = () => {
    const [isOpenned, setIsOpenned] = useState<boolean>(false);

    const handleDrawerOpenning = (): void => {
        setIsOpenned((isOpenned) => !isOpenned);
    };

    return (
        <>
            <IconButton
                onClick={handleDrawerOpenning}
                className="flex flex-nowrap h-full right-0"
            >
                <MenuIcon className="text-[#a8a8a8]" />
            </IconButton>
            <MobileDrawer
                variant="temporary"
                anchor="right"
                open={isOpenned}
                onClose={handleDrawerOpenning}
                ModalProps={{ keepMounted: true }}
            >
                <List>
                    {navbarItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <Button
                                LinkComponent={Link}
                                href={item.location}
                                key={index}
                                color="basic"
                                className="h-full w-full"
                                style={{ justifyContent: 'flex-start' }}
                            >
                                <span className="text-lg text-clip overflow-hidden my-2">
                                    {item.name}
                                </span>
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </MobileDrawer>
        </>
    );
};

export { NavbarMobile };
