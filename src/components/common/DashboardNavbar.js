import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';
import { DateAndTime } from './DateAndTime';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar
    elevation={0}
    {...rest}
  >
    <Toolbar>
      <RouterLink to="/app/dashboard">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <div>
        <DateAndTime />
      </div>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
