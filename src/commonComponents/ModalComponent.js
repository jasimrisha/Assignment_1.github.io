import React from "react";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import cancel from "../assets/images/close.png"
import Table from "@material-ui/core/Table";
import CalendarView from "./calendarView"


export default function ModalComponent(props) {
  const [showCalendar, setShowCalendar] = React.useState(false)


  React.useEffect(() => {
    localStorage.setItem("timePeriod", JSON.stringify(props.index))

  }, [props]);

  const handleCalendar = () => {
    setShowCalendar(true)
  }



  return (
    <>
      <Dialog style={{ marginTop: '-50px' }}
        onClose={props.handleClose}
        open={true}
        fullWidth
        BackdropProps={{ invisible: true }}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            Activity of {props.userName}
            <img src={cancel} onClick={props.handleClose}></img>
          </div>
        </DialogTitle>
        <DialogContent >
          <CalendarView calendarValues={props.index}></CalendarView>

        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', paddingBottom: '23px' }}>

        </DialogActions>
      </Dialog>
    </>
  );
}
