import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import DelayTrainLine from 'src/components/trainDelay/delayCommon/DelayTrainLine';

const TrainDelays = () => (
  <>
    <Helmet>
      <title>Train Delays</title>
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
            Train Delays
          </Typography>
          <hr />
          <DelayTrainLine />
        </Box>
      </Container>
    </Box>
  </>
);

export default TrainDelays;
