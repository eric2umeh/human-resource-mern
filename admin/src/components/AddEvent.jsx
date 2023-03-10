import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddEvent = ({setOpen}) => {

    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [summary, setSummary] = useState('')
    const [color, setColor] = useState('')

    const addEventHandler = async (e) => {
        e.preventDefault();

        try {

            await axios.post('/api/events/add', {

                startDate,
                endDate,
                summary,
                color
            });
            toast.success('You have successfully added an event!');
            navigate('/events')
            setOpen(false)

        } catch(error) {
            toast.error('Add failed, please try again!')
        }
    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addEventHandler}>
          <div className="card-quick">
            <div className="card-flex">

            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="date"  onChange={(e) => setStartDate(e.target.value)} required placeholder='Start Date' />
                </div>
                <div className="card-row">
                    <input type="date"  onChange={(e) => setEndDate(e.target.value)} required placeholder='End Date' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text"  onChange={(e) => setSummary(e.target.value)} required placeholder='Summary' />
                </div>
                <div className="card-row">
                    <input type="color"  onChange={(e) => setColor(e.target.value)} required placeholder='COlor' />
                </div>
            </div>
            
            <div className="card-flex">
                <div className="card-row">
                    <button className='add'>Add</button>
                </div>
            </div>
          </div>
          <button className='back' onClick={() => setOpen(false)}>Close</button>
        </form>
    </div>
  )
}

export default AddEvent