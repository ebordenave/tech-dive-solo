import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';

function ExamsTable(){
    const [data, setData] = useState([]);

    const getData = async () => {
        await axios.get('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams').then((res) => {
            setData(res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];

    const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];
      
      

    console.log(exams);
    return <div></div>
}


export default ExamsTable;
