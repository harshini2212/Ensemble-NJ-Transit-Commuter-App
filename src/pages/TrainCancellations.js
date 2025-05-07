import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import CancelAdd from 'src/components/trainCancel/CancelAdd';
import CancelTab from '../components/trainCancel/CancelTab';

const TrainCancellations = () => (
  <>
    <Helmet>
      <title>Train Cancellations</title>
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
            Train Cancellations
          </Typography>
          <hr />
          <br />
          <CancelAdd />
          <br />
          <CancelTab />
        </Box>
      </Container>
    </Box>
  </>
);

export default TrainCancellations;
