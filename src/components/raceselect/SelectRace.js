import React, { Component } from 'react';


export default function SelectRace() {
    const [races, setRaces] = useState();

    useEffect(() => {
        getRaces();
    } , []);

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
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={10}
          label="Age"
        >
         
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
          races.map(function(name) {
            <MenuItem value={10}>Ten</MenuItem>
          })}
         </Select>
        </div>
    )
}