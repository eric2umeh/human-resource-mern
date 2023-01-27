import React,  { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDepartment = ({setOpen}) => {

    const navigate = useNavigate();

    const [departmentName, setDepartmentName] = useState('')
    const [departmentHead, setDepartmentHead] = useState('')
    const [totalEmployee, setTotalEmployee] = useState(0); // 0 for default

    const addDepartmentHandler = async (e) => {
            e.preventDefault();
    
            try {
    
                await axios.post('/api/departments/add', {
                    departmentName,
                    departmentHead,
                    totalEmployee,
                });
                toast.success('You have successfully added a department!');
                navigate('/department')
                setOpen(false)
    
            } catch(error) {
                toast.error('Add failed, please try again!')
            }
    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addDepartmentHandler}>
          <div className="card-quick">
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required onChange={(e) => setDepartmentName(e.target.value)} placeholder='Departments Name' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" className='department-input' required onChange={(e) => setDepartmentHead(e.target.value)} placeholder='Departments Head' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="number" className='department-input' placeholder='Total Employee' onChange={(e) => setTotalEmployee(e.target.value)} min={0} defaultValue={0} required />
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

export default AddDepartment