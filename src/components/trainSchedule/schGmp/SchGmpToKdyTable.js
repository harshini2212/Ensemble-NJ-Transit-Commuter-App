import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Loading from 'src/components/subCommon/Loading';
import firebase from '../../../firebase/Firebase';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SchGmpToKdyTable() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Schedule/gampaha/Kandy');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getData() {
    setLoading(true);
    ref
      .orderBy('departureTime')
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
        setLoading(false);
      });
  }

  function deleteData(data) {
    ref
      .doc(data)
      .delete()
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Train No</StyledTableCell>
            <StyledTableCell align="center">Train Name</StyledTableCell>
            <StyledTableCell align="center">Train Type</StyledTableCell>
            <StyledTableCell align="center">Arrival Time</StyledTableCell>
            <StyledTableCell align="center">Departure Time</StyledTableCell>
            <StyledTableCell align="center">End Time</StyledTableCell>
            <StyledTableCell align="center">Destination</StyledTableCell>
            <StyledTableCell align="center">Destination Time</StyledTableCell>
            <StyledTableCell align="center">Frequency</StyledTableCell>
            <StyledTableCell align="center">Available Classes</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? <Loading /> : null}
          {Data.map((data) => (
            <StyledTableRow className="data" key={data.id}>
              <StyledTableCell align="left">{data.trainNo}</StyledTableCell>
              <StyledTableCell align="left">{data.trainName}</StyledTableCell>
              <StyledTableCell align="left">{data.trainType}</StyledTableCell>
              <StyledTableCell align="left">{data.arrivalTime}</StyledTableCell>
              <StyledTableCell align="left">{data.departureTime}</StyledTableCell>
              <StyledTableCell align="left">{data.endTime}</StyledTableCell>
              <StyledTableCell align="left">{data.destination}</StyledTableCell>
              <StyledTableCell align="left">{data.destinationTime}</StyledTableCell>
              <StyledTableCell align="left">{data.frequency}</StyledTableCell>
              <StyledTableCell align="left">{data.availableClasses}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete" color="error" size="small" onClick={handleClickOpen}>
                  <DeleteIcon />
                </IconButton>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    <h2>Delete Record</h2>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div style={{
                        marginTop: 5,
                        marginLeft: 10,
                        marginRight: 50,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      >
                        <WarningIcon color="error" fontSize="large" sx={{ mr: 5 }} />
                        <span>
                          Do you really want to delete this record?
                          <br />
                          This process cannot be undone.
                        </span>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions sx={{ m: 1 }}>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteData(data.id)} autoFocus>Delete</Button>
                    <span>&nbsp;&nbsp;</span>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                  </DialogActions>
                </Dialog>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
