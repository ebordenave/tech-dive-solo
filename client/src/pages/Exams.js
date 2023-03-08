import AppBar from '../components/AppBar'
import React from 'react';
import ExamsTable from '../components/ExamsTable';




const Exams = () => {
  return (
    <div className="exams" >
      <AppBar />
      <br></br>
        <ExamsTable />
    </div>
  )
}

export default Exams