import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { purple } from '@material-ui/core/colors';

const TrainSchedule = (props) => (
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
            TRAIN
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            Schedule
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: purple[600],
              height: 56,
              width: 56
            }}
          >
            <AccessTimeFilledIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TrainSchedule;
