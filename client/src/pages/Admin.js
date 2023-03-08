import AppBar from '../components/AppBar'
import React from 'react';
import ExamsTable from '../components/ExamsTable';
import { Button } from '@mui/material'




const Admin = () => {
  return (
    <div className="admin" >
      <AppBar />
      <br></br>
      <Button variant="contained">Create Exam</Button>
      <h2>admin page here</h2>
        <ExamsTable />
    </div>
  )
}

export default Admin