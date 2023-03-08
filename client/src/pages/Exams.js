import AppBar from '../components/AppBar'
import React from 'react';
import ExamsTable from '../components/ExamsTable';




const Exams = () => {
  return (
    <div className="exams" >
      <AppBar />
      <br></br>
      <h2>Exams Page Here</h2>
        <ExamsTable />
    </div>
  )
}

export default Exams