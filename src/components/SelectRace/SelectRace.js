import React, { Component } from 'react';
import {useState, useEffect} from 'react';

import { Select,MenuItem } from '@mui/material';


export default function SelectRace(props) {
    const [races, setRaces] = useState();
  

    useEffect(() => {
      //setRaces([{"id":1}, {"id": 2}])
        
        getRaces();
    } , []);


    function changeit(e){
      console.log("target", e.target)
     props.changeRace(e.target.value,e.target.value);
    }

    function getRaces() {
    fetch('http://localhost:3001/races')
        .then(response => response.json())
        .then((actualData) =>{ 
            console.log(actualData);
            setRaces(actualData);
        });
        
    
    }

    return (
        <div>
 <Select id="race" name="hell" label="Race" onChange={changeit}>
         
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {
          races?.map((n) =>
            <MenuItem value={n.raceid} name={n.racename}>{n.racename}</MenuItem>
          )}
         </Select>
        </div>
    )
}