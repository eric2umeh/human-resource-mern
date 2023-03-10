import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser = ({setOpen}) => {

    const navigate = useNavigate();
    const [userId, setUserId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [role, setRole] = useState('')
    const [roleType, setRoleType] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')


    const addUserHandler = async (e) => {
        e.preventDefault();

        // if not password equal repeat password, then return
        if(password !== rPassword) {
            toast.error('Passwords doesn`t match!')
        }

        try {

            await axios.post('/api/users/add', {

                userId,
                firstName,
                lastName,
                email,
                mobile,
                role,
                roleType,
                password
            });
            toast.success('You have successfully added a user!');
            navigate('/users')
            setOpen(false)

        } catch(error) {
            toast.error('Add failed, please try again!')
        }
    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addUserHandler}>
          <div className="card-quick">
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" onChange={(e) => setUserId(e.target.value)} required placeholder='User ID' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text"  onChange={(e) => setFirstName(e.target.value)} required placeholder='First Name' />
                </div>
                <div className="card-row">
                    <input type="text"  onChange={(e) => setLastName(e.target.value)} required placeholder='Last Name' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text"  onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail' />
                </div>
                <div className="card-row">
                    <input type="text"  onChange={(e) => setMobile(e.target.value)} required placeholder='Mobile' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text"  onChange={(e) => setRole(e.target.value)} required placeholder='Role' />
                </div>
                <div className="card-row">
                    <select name="" id=""  onChange={(e) => setRoleType(e.target.value)}>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="HR Admin">HR Admin</option>
                        <option value="Employee">Employee</option>
                    </select>
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="password"  onChange={(e) => setPassword(e.target.value)} required placeholder='Password' />
                </div>
                <div className="card-row">
                    <input type="password"  onChange={(e) => setRPassword(e.target.value)} required placeholder='Retype Password' />
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

export default AddUser