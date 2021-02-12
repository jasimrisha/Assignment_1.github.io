import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment'

export default class CalendarView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weekendsVisible: true,
      currentEvents: [],
      initialData: []
    }
  }
  formatDateForCalendar() {
    let initialData = []

    this.props && this.props.calendarValues.forEach((aVal,index) => {
      let startTime = moment(aVal.start_time, "MMM DD YYYY  hh:mmA").toDate()
      let endTime = moment(aVal.end_time, "MMM DD YYYY  hh:mmA").toDate()

      initialData.push({ "id":index,"start": startTime,"end":endTime ,backgroundColor:"red"})
    })
    this.setState({ initialData: initialData })
  }
  componentDidMount() {
    this.formatDateForCalendar()
  }


  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialDate={moment("2021-01-01").toDate()}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            eventContent={renderEventContent} 
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} 
            events={this.state.initialData}
          />
        </div></div>
    )
  }



  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

