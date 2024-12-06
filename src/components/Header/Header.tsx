import { MdLightMode, MdDarkMode, MdNotifications, MdCalendarMonth } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import './Header.module.css';

interface HeaderProps {
    toggleStyle: {
        backgroundColor: string;
        textColor: string;
        iconColor: string;
    };
    handleToggleDarkMode: () => void;
    isBeer: boolean;
}

const Header:React.FC<HeaderProps> = (props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: props.toggleStyle.backgroundColor, borderRadius: '8px', marginBottom:'20px' }}> {/* Исправлено */}
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: props.toggleStyle.textColor }}>
                    Notes
                </Typography>
                <Link to="/calendar" style={{ textDecoration: 'none' }}>
                    <IconButton   sx={{ color: props.toggleStyle.iconColor,  '&:hover': {
                        transform: 'scale(1.1)', // Увеличение при наведении
                        transition: 'transform 0.2s', // Плавный переход
                    }  }}> {/* Исправлено */}
                        <MdCalendarMonth />
                    </IconButton>
                </Link>
                <IconButton   sx={{ color: props.toggleStyle.iconColor, '&:hover': {
                        transform: 'scale(1.1)', // Увеличение при наведении
                        transition: 'transform 0.2s', // Плавный переход
                    }  }}>
                    <MdNotifications />
                </IconButton>
                <IconButton   sx={{ color: props.toggleStyle.iconColor,  '&:hover': {
                        transform: 'scale(1.1)', // Увеличение при наведении
                        transition: 'transform 0.2s', // Плавный переход
                    }  }} onClick={props.handleToggleDarkMode}>
                    {props.darkMode ?  <MdLightMode />:<MdDarkMode /> }
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
