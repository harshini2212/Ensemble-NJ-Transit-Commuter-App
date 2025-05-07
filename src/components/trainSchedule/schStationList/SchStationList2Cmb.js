import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkeletonModel from 'src/components/subCommon/SkeletonModel';
import SchCmbToGleAdd from '../schCmb/SchCmbToGleAdd';
import SchCmbToGleTable from '../schCmb/SchCmbToGleTable';
import SchCmbToMahoAdd from '../schCmb/SchCmbToMahoAdd';
import SchCmbToMahoTable from '../schCmb/SchCmbToMahoTable';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SchStationList2Cmb() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, display: 'flex'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Aluthgama" {...a11yProps(0)} />
        <Tab label="Ambepussa" {...a11yProps(1)} />
        <Tab label="Badulla" {...a11yProps(2)} />
        <Tab label="Batticaloa" {...a11yProps(3)} />
        <Tab label="Colombo Fort" {...a11yProps(4)} disabled />
        <Tab label="Gampaha" {...a11yProps(5)} />
        <Tab label="Galle" {...a11yProps(6)} />
        <Tab label="Jaffna" {...a11yProps(7)} />
        <Tab label="Kalutara South" {...a11yProps(8)} />
        <Tab label="Kandy" {...a11yProps(9)} />
        <Tab label="Kankesanturai" {...a11yProps(10)} />
        <Tab label="Kurunegala" {...a11yProps(11)} />
        <Tab label="Maho" {...a11yProps(12)} />
        <Tab label="Mannar" {...a11yProps(13)} />
        <Tab label="Matale" {...a11yProps(14)} />
        <Tab label="Matara" {...a11yProps(15)} />
        <Tab label="Mirigama" {...a11yProps(16)} />
        <Tab label="Moratuwa" {...a11yProps(17)} />
        <Tab label="Panadura" {...a11yProps(18)} />
        <Tab label="Polgahawela" {...a11yProps(19)} />
        <Tab label="Rambukkana" {...a11yProps(20)} />
        <Tab label="Rathmalana" {...a11yProps(21)} />
        <Tab label="Talaimannar" {...a11yProps(22)} />
        <Tab label="Trincomalee" {...a11yProps(23)} />
        <Tab label="Vavuniya" {...a11yProps(24)} />
        <Tab label="Veyangoda" {...a11yProps(25)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SkeletonModel />
      </TabPanel>
      {/* Galle */}
      <TabPanel value={value} index={6}>
        <SchCmbToGleAdd />
        <br />
        <SchCmbToGleTable />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <SkeletonModel />
      </TabPanel>
      {/* Maho */}
      <TabPanel value={value} index={12}>
        <SchCmbToMahoAdd />
        <br />
        <SchCmbToMahoTable />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={15}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={16}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={17}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={18}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={19}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={20}>
        <SkeletonModel />
      </TabPanel>
    </Box>
  );
}
