import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Activities = ({setOpen}) => {

  const adminInfo = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null
  // console.log(adminInfo)

  const navigate = useNavigate();

  const [activity, setActivity] = useState([]); // for defualt is empty

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const resultActivities = await axios.get('/api/activities/all')

      // i want first the latest users to show
      // console.log(resultActivities);
      const resultActivitiesData = resultActivities.data;
      // console.log(resultActivitiesData);
      const sortResultActivitiesData = resultActivitiesData.sort((a,b) => b.createdAt.localeCompare(a.createdAt))
      setActivity(sortResultActivitiesData);
    }

    fetchData();

  }, [])

  const addHandler = async (e) => {
    e.preventDefault();

        try {

            await axios.post('/api/activities/add', {

                title,
                message,
                author: adminInfo.adminName,
                isAdmin: adminInfo.adminIs
            });
            toast.success('You have successfully added a post!');
            navigate('/activities')
            setOpen(false)

        } catch(error) {
            toast.error('Add failed, please try again!')
        }
    }


  return (
    <div className='a-container'>
      <div className="a-row">
        <h3 className="u-title">TIMELINE ACTIVITY</h3>
      </div>
      <div className="a-row">
        <form className='form' onSubmit={addHandler}>
          <div className="form-group">
            <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button className='p-btn'>Post</button>
          </div>
        </form>
      </div>
      <div className="a-row">
        <h5 className="u-title">ALL POST</h5>
      </div>
      <div className="a-row">
        <div className="a-posts">
          {
            activity === 0 ? (<h3 className="no-data">There are currently no users!</h3>
            ) : (
            activity.map((item) => (
              <div className="a-post" key={item._id}>
                <div className="a-postHead">
                  <h3 className="a-postTitle">{item.title}</h3>
                  <p className="a-postDesc">{item.message}</p>
                </div>
                <div className="a-postBody">
                  <span>{item.author} - {item.isAdmin === 'true' ? ('Admin') : ('Intruder :D')}</span> 
                  <span>{item.createdAt?.slice(0, 10)}</span>
                </div>
              </div>
            ))
            )
          } 
        </div>
      </div>
    </div>
  )
}

export default Activities