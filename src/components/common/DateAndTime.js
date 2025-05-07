import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

export const DateAndTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        {date.toDateString()}
        <span>&nbsp;&nbsp;&nbsp;</span>
        {date.toLocaleTimeString()}
        <span>&nbsp;&nbsp;</span>
      </Typography>
    </div>
  );
};

export default DateAndTime;
