### About Project 
This project is to show a list of users and their activity periods.

### Libraries Used
1. @material-ui/core. --> It is installed by ### npm install  @material-ui/core. This is used for designing the web pages
  Some of the components are listed as Grid, Typography, Box,Avatar, Dialog,DialogeContent.
2. React FullCalendar --> It is installed by ### npm install fullcalendar. This is used for showing activity period on Calendar.
3. Moment             --> It is installed by ### npm install moment. This is used for converting Time To moment.
4. axios.             --> It is installed by ### npm install moment. This is used for API Integration.

### Components
1. MEMBERS         ==> a) This component is the main component called in the App.js file.
                       b) This is a functional component.
                       c) It renders the starting screen with Card that lists down users.
                       d) On click of user name, a modal opens up. This model is called ModalComponent.
2. MODALCOMPONENT  ==> a) This component is called on click of user as a popup.
                       b) This component is again a functional component.
                       c) It calls another component for CalendarView to view activity details
                       
3. CALENDARVIEW    ==> a) This component gives us the Calendar view.
                       b) This component is a class component.
                       c) It has buttons to navigate to next and previous month.
                       d) Month button helps to view Monthwise activity.
                       e) On click of Day button , user can view the time in which the user was active in a day.
                       f) This component imports FullCalendar from React FullCalendar library.
4. data.json        ==> This file is kept in the public folder of project and users data is called from this file using axios.get.


                 
  



