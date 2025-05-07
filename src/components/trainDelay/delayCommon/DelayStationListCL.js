import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkeletonModel from 'src/components/subCommon/SkeletonModel';

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

export default function DelayStationListCL() {
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
        <Tab label="Colombo Fort" {...a11yProps(0)} />
        <Tab label="Secretariat Halt" {...a11yProps(1)} />
        <Tab label="Kompanna Vidiya" {...a11yProps(2)} />
        <Tab label="Kollupitiya" {...a11yProps(3)} />
        <Tab label="Bambalapitiya" {...a11yProps(4)} />
        <Tab label="Wellawatta" {...a11yProps(5)} />
        <Tab label="Dehiwela" {...a11yProps(6)} />
        <Tab label="Mount Lavinia" {...a11yProps(7)} />
        <Tab label="Ratmalana" {...a11yProps(8)} />
        <Tab label="Angulana" {...a11yProps(9)} />
        <Tab label="Lunawa" {...a11yProps(10)} />
        <Tab label="Moratuwa" {...a11yProps(11)} />
        <Tab label="Koralawella" {...a11yProps(12)} />
        <Tab label="Egoda Uyana" {...a11yProps(13)} />
        <Tab label="Panadura" {...a11yProps(14)} />
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
      <TabPanel value={value} index={10}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <SkeletonModel />
      </TabPanel>
    </Box>
  );
}
