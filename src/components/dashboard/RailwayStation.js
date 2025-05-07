import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import TrainIcon from '@mui/icons-material/Train';

const RailwayStation = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            RAILWAY
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            Stations
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: blue[600],
              height: 56,
              width: 56
            }}
          >
            <TrainIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default RailwayStation;
