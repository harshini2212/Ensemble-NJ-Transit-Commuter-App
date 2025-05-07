import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkeletonModel from 'src/components/subCommon/SkeletonModel';
import StaBlgAddGrid from '../staBlg/StaBlgAddGrid';
import StaBlgTab from '../staBlg/StaBlgTab';
import StaGneAddGrid from '../staGne/StaGneAddGrid';
import StaGneTab from '../staGne/StaGneTab';
import StaGmpAddGrid from '../staGmp/StaGmpAddGrid';
import StaGmpTab from '../staGmp/StaGmpTab';
import StaDrlAddGrid from '../staDrl/StaDrlAddGrid';
import StaDrlTab from '../staDrl/StaDrlTab';
import StaBmuAddGrid from '../staBmu/StaBmuAddGrid';
import StaBmuTab from '../staBmu/StaBmuTab';

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

export default function StaStationListML() {
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
        <Tab label="Maradana" {...a11yProps(0)} />
        <Tab label="Dematagoda" {...a11yProps(1)} />
        <Tab label="Kelaniya" {...a11yProps(2)} />
        <Tab label="Wanawasala" {...a11yProps(3)} />
        <Tab label="Hunupitiya" {...a11yProps(4)} />
        <Tab label="Ederamulla" {...a11yProps(5)} />
        <Tab label="Horape" {...a11yProps(6)} />
        <Tab label="Ragama" {...a11yProps(7)} />
        <Tab label="Walpola" {...a11yProps(8)} />
        <Tab label="Batuwaththa" {...a11yProps(9)} />
        <Tab label="Bulugahagoda" {...a11yProps(10)} />
        <Tab label="Ganemulla" {...a11yProps(11)} />
        <Tab label="Yagoda" {...a11yProps(12)} />
        <Tab label="Gampaha" {...a11yProps(13)} />
        <Tab label="Daraluwa" {...a11yProps(14)} />
        <Tab label="Bemmulla" {...a11yProps(15)} />
        <Tab label="Magalegoda" {...a11yProps(16)} />
        <Tab label="Heendeniya" {...a11yProps(17)} />
        <Tab label="Veyangoda" {...a11yProps(18)} />
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
      <TabPanel value={value} index={6}>
        <SkeletonModel />
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
      {/* Bulugahagoda */}
      <TabPanel value={value} index={10}>
        <StaBlgAddGrid />
        <br />
        <StaBlgTab />
      </TabPanel>
      {/* Ganemulla */}
      <TabPanel value={value} index={11}>
        <StaGneAddGrid />
        <br />
        <StaGneTab />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <SkeletonModel />
      </TabPanel>
      {/* Gampaha */}
      <TabPanel value={value} index={13}>
        <StaGmpAddGrid />
        <br />
        <StaGmpTab />
      </TabPanel>
      {/* Daraluwa */}
      <TabPanel value={value} index={14}>
        <StaDrlAddGrid />
        <br />
        <StaDrlTab />
      </TabPanel>
      {/* Bemmulla */}
      <TabPanel value={value} index={15}>
        <StaBmuAddGrid />
        <br />
        <StaBmuTab />
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
    </Box>
  );
}
