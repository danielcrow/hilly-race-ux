import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function RaceResult(props) {

  const [splits, setSplits] = useState(false);
  const[ raceid, setRaceId]  = useState();

  RaceResult.defaultProps = {
    raceid: 0
  }

  useEffect(() => {
    setRaceId(props.raceid)
    console.log(props)
    getSplits();
  }, []);




  let columns = [
    { field: 'Position', headerName: 'Position', width: 70 },
    { field: 'bibnumber', headerName: 'Bib Number', width: 200 },
    { field: 'first_name', headerName: 'First name', width: 200 },
    { field: 'last_name', headerName: 'Last name', width: 200 },
    { field: 'finishTime', headerName: 'Finish Time', width: 200 }
   
  ]

  function getRaces(){

  }

  function getSplits() {
    console.log(props.raceid)
    if(raceid!= false){
    fetch('http://localhost:3001/results/'+props.raceid)
        .then(response => response.json())
        .then((actualData) =>{ 
        console.log("Actual Data", actualData)
            setSplits(actualData);
        });
      }
     
  }

  return (
    <div>
    
     
    <DataGrid
        rows={splits}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10]}
      />

    </div>
  )

}
