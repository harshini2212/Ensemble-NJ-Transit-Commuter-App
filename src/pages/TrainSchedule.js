import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import SchStationList1 from 'src/components/trainSchedule/schStationList/SchStationList1';

const TrainSchedule = () => (
  <>
    <Helmet>
      <title>Train Schedule</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Typography variant="h1" component="div" gutterBottom>
            Train Schedule
          </Typography>
          <hr />
          <SchStationList1 />
        </Box>
      </Container>
    </Box>
  </>
);

export default TrainSchedule;
