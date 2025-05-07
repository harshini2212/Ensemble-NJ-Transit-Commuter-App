import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrainIcon from '@mui/icons-material/Train';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LogoutIcon from '@mui/icons-material/Logout';
import NavItem from './NavItem';

const user = {
  avatar: '/static/avatar.png',
  jobTitle: 'lahiru.d@railway.gov.lk',
  name: 'Lahiru Dissanayake'
};

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/railwayStations',
    icon: TrainIcon,
    title: 'Railway Stations'
  },
  {
    href: '/app/trainSchedule',
    icon: AccessTimeFilledIcon,
    title: 'Train Schedule'
  },
  {
    href: '/app/trainDelays',
    icon: ErrorIcon,
    title: 'Train Delays'
  },
  {
    href: '/app/trainCancellations',
    icon: CancelIcon,
    title: 'Train Cancellations'
  },
  {
    href: '/app/ticketReservation',
    icon: ConfirmationNumberIcon,
    title: 'Ticket Reservations'
  },
  {
    href: '/login',
    icon: LogoutIcon,
    title: 'Log Out'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64,
            mb: 1
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xlDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default DashboardSidebar;
