import React, { useEffect, useState } from 'react'
import AddEvent from '../components/AddEvent';
import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles
import axios from 'axios'

const Events = () => {

  const [open, setOpen] = useState(false); // for defualt is empty
  const [events, setEvents] = useState([]); // for defualt is empty

  useEffect(() => {

    const fetchData = async () => {
      const resultEvents = await axios.get('/api/events/all')

      // i want first the latest users to show
      // console.log(resultEvents);
      const resultEventsData = resultEvents.data;
      // console.log(resultEventsData);
      const sortResultEventsData = resultEventsData.sort((a,b) => b.createdAt.localeCompare(a.createdAt))
      setEvents(sortResultEventsData);
    }

    fetchData();

  }, [])

//   const events = [
//     {
//         id: 1,
//         startAt: '2021-11-21T18:00:00.000Z',
//         endAt: '2021-11-21T19:00:00.000Z',
//         timezoneStartAt: 'Europe/Berlin', // optional
//         summary: 'test',
//         color: 'blue',
//         calendarID: 'work'
//     },
//     {
//         id: 2,
//         startAt: '2021-11-21T18:00:00.000Z',
//         endAt: '2021-11-21T19:00:00.000Z',
//         timezoneStartAt: 'Europe/Berlin', // optional
//         summary: 'test',
//         color: 'blue'
//     }
//     ,
//     {
//         id: 3,
//         startAt: '2022-09-25T18:00:00.000Z',
//         endAt: '2022-10-20T19:00:00.000Z',
//         timezoneStartAt: 'Europe/Berlin', // optional
//         summary: 'We are starting work for a client from America',
//         color: 'red'
//     }
// ]

  return (
    <div className='e-container'>
      <div className="e-row d-flex">
        <h3 className="e-title">Events</h3>  
        <button className="u-btn" onClick={() => setOpen(true)}>Add New</button>      
      </div>
      <div className="e-row">
      <Kalend
        //onEventClick={onEventClick}
        //onNewEventClick={onNewEventClick}
        events={events}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        //onSelectView={onSelectView}
        //selectedView={selectedView}
        //onPageChange={onPageChange}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'en'}
      />
      </div>
      {open && <AddEvent setOpen={setOpen} />}
    </div>
  )
}

export default Events