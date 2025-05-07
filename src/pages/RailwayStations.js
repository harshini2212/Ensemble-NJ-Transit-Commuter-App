import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import StaTrainLine from 'src/components/railwayStation/staCommon/StaTrainLine';

const RailwayStations = () => (
  <>
    <Helmet>
      <title>Railway Stations</title>
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
            Railway Stations
          </Typography>
          <hr />
          <StaTrainLine />
        </Box>
      </Container>
    </Box>
  </>
);

export default RailwayStations;
