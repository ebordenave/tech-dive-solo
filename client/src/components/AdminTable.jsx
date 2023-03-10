import React, { useEffect, useState, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Link } from 'react-router-dom';

function AdminTable() {
  const [data, setExamData] = useState([]);
  const url = 'https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams';

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.exams);
      setExamData(data.exams);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);


  const columns = useMemo(
    () => [
      {
        accessorKey: 'patientId',
        header: 'Patient ID',
        width: 20
      },
      {
        accessorKey: 'examId',
        header: 'Exam ID',
        width: 20,
        render: rowData => (
          <Link to={`/exams/${rowData.examId}`}>
            {rowData.examId}
          </Link>
        )
      },
      {
        accessorKey: 'imageURL',
        header: 'Image',
        width: 20,
        render : item => (
          <img
            src={item.imageURL}
            alt=""
          />
          // render: item => <img src={item.img} alt="" border="3" height="100" width="100" />
        )
      },
      {
        accessorKey: 'keyFindings',
        header: 'Key Findings',
        width: 20
      },
      {
        accessorKey: 'brixiaScores',
        header: 'Brixia Scores',
        width: 20
      },
      {
        accessorKey: 'age',
        header: 'Age',
        width: 20
      },
      {
        accessorKey: 'sex',
        header: 'Sex',
        width: 20
      },
      {
        accessorKey: 'bmi',
        header: 'BMI',
        width: 20
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
        width: 20
      },
    ],
    [],
  );

  return (
    <div style={{ maxWidth: '75%', margin: 'auto'}}>
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
}

export default AdminTable;
