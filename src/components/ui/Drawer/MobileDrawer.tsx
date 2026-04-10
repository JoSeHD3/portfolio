import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const MobileDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#09111d',
        backgroundImage:
            'linear-gradient(180deg, rgba(11, 20, 36, 0.98) 0%, rgba(9, 17, 29, 0.96) 55%, rgba(5, 10, 19, 0.92) 100%)',
        backdropFilter: 'blur(12px)',
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export { MobileDrawer };
