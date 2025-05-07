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
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import firebase from '../../firebase/Firebase';

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

export default function TicTable() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Ticket');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getData() {
    setLoading(true);
    ref
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
            <StyledTableCell align="center">Reference No</StyledTableCell>
            <StyledTableCell align="center">Train</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Payment</StyledTableCell>
            <StyledTableCell align="center">More Details</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? <Loading /> : null}
          {Data.map((data) => (
            <StyledTableRow className="data" key={data.id}>
              <StyledTableCell align="left">{data.reference}</StyledTableCell>
              <StyledTableCell align="left">{data.train}</StyledTableCell>
              <StyledTableCell align="left">{data.clz}</StyledTableCell>
              <StyledTableCell align="left">{data.time}</StyledTableCell>
              <StyledTableCell align="left">{data.date}</StyledTableCell>
              <StyledTableCell align="left">{data.firstName}</StyledTableCell>
              <StyledTableCell align="left">{data.lastName}</StyledTableCell>
              <StyledTableCell align="left">{data.payment}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="text" onClick={handleClickOpen}>
                  Click Here
                </Button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h2>More Details</h2>
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Container>
                      <Table aria-label="customized table">
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Reference No</StyledTableCell>
                          <StyledTableCell align="right">
                            {data.reference}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>
                            Start
                            <span>&nbsp;&amp;&nbsp;</span>
                            End
                            <span>&nbsp;</span>
                            Stations
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {data.startStation}
                            <span>&nbsp;</span>
                            to
                            <span>&nbsp;</span>
                            {data.endStation}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Train</StyledTableCell>
                          <StyledTableCell align="right">{data.train}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Class</StyledTableCell>
                          <StyledTableCell align="right">{data.clz}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>
                            Date
                            <span>&nbsp;&amp;&nbsp;</span>
                            Time
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {data.date}
                            <span>&nbsp;</span>
                            {data.time}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>No of Seats</StyledTableCell>
                          <StyledTableCell align="right">{data.noOfSeats}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Name</StyledTableCell>
                          <StyledTableCell align="right">
                            {data.firstName}
                            <span>&nbsp;</span>
                            {data.lastName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>ID</StyledTableCell>
                          <StyledTableCell align="right">{data.id}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Email</StyledTableCell>
                          <StyledTableCell align="right">{data.email}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Tel No</StyledTableCell>
                          <StyledTableCell align="right">{data.tel}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Total</StyledTableCell>
                          <StyledTableCell align="right">
                            {data.price}
                            <span>&nbsp;</span>
                            LKR
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Payment</StyledTableCell>
                          <StyledTableCell align="right">{data.payment}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left" sx={{ fontWeight: 'bold' }}>Reserved at</StyledTableCell>
                          <StyledTableCell align="right">
                            {new Date(data.createdAt.toDate()).toDateString()}
                            <span>&nbsp;</span>
                            {new Date(data.createdAt.toDate()).toLocaleTimeString()}
                          </StyledTableCell>
                        </StyledTableRow>
                      </Table>
                    </Container>
                  </DialogContent>
                  <DialogActions sx={{ m: 1 }}>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete" color="error" size="small">
                  <DeleteIcon />
                </IconButton>
                <Dialog
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
