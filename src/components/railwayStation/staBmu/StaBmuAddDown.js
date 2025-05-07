import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import firebase from '../../../firebase/Firebase';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function StaBmuAddDown() {
  const [id, setId] = useState('');
  const [time, setTime] = useState('');
  const [destination, setDestination] = useState('');
  const [type, setType] = useState('');
  const [frequency, setFrequency] = useState('');
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Station/bemmulla/Down');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function addData(newData) {
    ref
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  }

  return (
    <div>
      <Button variant="contained" endIcon={<ArrowDownwardIcon />} onClick={handleClickOpen}>
        Add New Down
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h2>Add New Schedule DOWN Side</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            sx={{ m: 2, mr: 30, width: 200 }}
            disabled
            id="outlined-disabled"
            label="ID Auto Generated"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <TextField
            sx={{ m: 2, width: 300 }}
            id="time"
            label="Departure Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={destination}
              label="Destination"
              onChange={(e) => setDestination(e.target.value)}
            >
              <MenuItem value="Aluthgama">Aluthgama</MenuItem>
              <MenuItem value="Ambepussa">Ambepussa</MenuItem>
              <MenuItem value="Badulla">Badulla</MenuItem>
              <MenuItem value="Batticaloa">Batticaloa</MenuItem>
              <MenuItem value="Colombo Fort">Colombo Fort</MenuItem>
              <MenuItem value="Gampaha">Gampaha</MenuItem>
              <MenuItem value="Ganewaththa">Ganewaththa</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Kalutara South">Kalutara South</MenuItem>
              <MenuItem value="Kandy">Kandy</MenuItem>
              <MenuItem value="Kankesanturai">Kankesanturai</MenuItem>
              <MenuItem value="Kurunegala">Kurunegala</MenuItem>
              <MenuItem value="Maho">Maho</MenuItem>
              <MenuItem value="Mannar">Mannar</MenuItem>
              <MenuItem value="Matale">Matale</MenuItem>
              <MenuItem value="Matara">Matara</MenuItem>
              <MenuItem value="Mirigama">Mirigama</MenuItem>
              <MenuItem value="Moratuwa">Moratuwa</MenuItem>
              <MenuItem value="Panadura">Panadura</MenuItem>
              <MenuItem value="Polgahawela">Polgahawela</MenuItem>
              <MenuItem value="Rambukkana">Rambukkana</MenuItem>
              <MenuItem value="Rathmalana">Rathmalana</MenuItem>
              <MenuItem value="Talaimannar">Talaimannar</MenuItem>
              <MenuItem value="Trincomalee">Trincomalee</MenuItem>
              <MenuItem value="Vavuniya">Vavuniya</MenuItem>
              <MenuItem value="Veyangoda">Veyangoda</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Train Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="Slow">Slow</MenuItem>
              <MenuItem value="Semi Express">Semi Express</MenuItem>
              <MenuItem value="Express">Express</MenuItem>
              <MenuItem value="Intercity">Intercity</MenuItem>
              <MenuItem value="Night Mail">Night Mail</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={frequency}
              label="Frequency"
              onChange={(e) => setFrequency(e.target.value)}
            >
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekdays only">Weekdays only</MenuItem>
              <MenuItem value="Friday only">Friday only</MenuItem>
              <MenuItem value="Saturday only">Saturday only</MenuItem>
              <MenuItem value="Sundays only">Sundays only</MenuItem>
              <MenuItem value="Monday and Saturday only">Monday and Saturday only</MenuItem>
              <MenuItem value="Friday and Sunday only">Friday and Sunday only</MenuItem>
              <MenuItem value="Friday and Saturday only">Friday and Saturday only</MenuItem>
              <MenuItem value="Saturday and Sunday only">Saturday and Sunday only</MenuItem>
              <MenuItem value="Weekdays and Saturday only">Weekdays and Saturday only</MenuItem>
              <MenuItem value="Public holidays only">Public holidays only</MenuItem>
              <MenuItem value="Sunday and Poya days only">Sunday and Poya days only</MenuItem>
              <MenuItem value="Saturday, Sunday and Poya days only">Saturday, Sunday and Poya days only</MenuItem>
              <MenuItem value="Saturday, Sunday and public holidays only">Saturday, Sunday and public holidays only</MenuItem>
              <MenuItem value="Except on Sunday">Except on Sunday</MenuItem>
              <MenuItem value="Except on Public holidays">Except on Public holidays</MenuItem>
              <MenuItem value="Except on Sunday and Poya days">Except on Sunday and Poya days</MenuItem>
              <MenuItem value="Except on Sunday and public holidays">Except on Sunday and public holidays</MenuItem>
              <MenuItem value="Except on Saturday, Sunday and Poya days">Except on Saturday, Sunday and Poya days</MenuItem>
              <MenuItem value="Except on Saturday, Sunday and public holidays">Except on Saturday, Sunday and public holidays</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => addData({
              id: uuidv4(), time, destination, type, frequency, createdAt: new Date()
            })}
          >
            Save
          </Button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
