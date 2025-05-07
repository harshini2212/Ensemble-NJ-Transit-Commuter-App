import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import TicAdd from 'src/components/ticketReservation/TicAdd';
import TicTable from 'src/components/ticketReservation/TicTable';

const TicketReservation = () => (
  <>
    <Helmet>
      <title>Ticket Reservation</title>
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
            Ticket Reservations
          </Typography>
          <hr />
          <br />
          <TicAdd />
          <br />
          <TicTable />
        </Box>
      </Container>
    </Box>
  </>
);

export default TicketReservation;
