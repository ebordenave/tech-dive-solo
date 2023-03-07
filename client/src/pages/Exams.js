import AppBar from '../components/AppBar'
import React from 'react';
import ExamsTable from '../components/ExamsTable';




const Exams = () => {
  return (
    <div className="exams" >
      <AppBar />
        <ExamsTable />
    </div>
  )
}

export default Exams