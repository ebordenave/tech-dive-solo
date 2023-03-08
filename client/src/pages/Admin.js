import AppBar from '../components/AppBar'
import React from 'react';
import ExamsTable from '../components/ExamsTable';
import { Button } from '@mui/material'

import { Link } from 'react-router-dom';

const pages = ['create'];




const Admin = () => {
  return (
    <div className="admin" >
      <AppBar />
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {pages.map((page) => (
      <Button variant="contained" key={page} component={ Link } to={`/${page.toLowerCase()}`} >Create Exam</Button>
      ))}
      </div>
      <p></p>
        <ExamsTable />
    </div>
  )
}

export default Admin
