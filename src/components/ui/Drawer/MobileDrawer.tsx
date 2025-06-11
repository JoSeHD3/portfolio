import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const MobileDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#262626',
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export { MobileDrawer };
