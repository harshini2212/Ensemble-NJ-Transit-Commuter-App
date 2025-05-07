import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '1',
    imgPath:
      '/static/banner_1.jpg',
  },
  {
    label: '2',
    imgPath:
      '/static/banner_2.jpg',
  },
  {
    label: '3',
    imgPath:
      '/static/banner_3.jpg',
  },
  {
    label: '4',
    imgPath:
      '/static/banner_4.jpg',
  },
  {
    label: '5',
    imgPath:
      '/static/banner_5.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval="5000"
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 5 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Carousel;
