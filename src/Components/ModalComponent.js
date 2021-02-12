import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import cancel from "../assets/images/close.png"
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
      </Dialog>
    </>
  );
}
