import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { id } from "./id.tsx";

export default function AddPeopleToAccountPage() {
  const [peopleAdded, setPeopleAdded] = useState("");

  function handleAppPeople() {
    const userID = id[id.length - 1];
    const peopleToAddJSON = {"peopleToAdd": peopleAdded}
    var URL = "http://localhost:81/water-accounts/" + userID;
    fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(peopleToAddJSON),
    })
      .then(response => response.json())
      .then(data => {
        //replace regex expression strips off (") form the start and end of the message
        alert(JSON.stringify(data.response).replace(/^"(.+(?="$))"$/, '$1'))
      })
      .catch(error => {
        console.error(error);
      });
  }

  function ButtonLink() {
    return <Link to={"/billPage/"}><Button variant="contained">Print bill</Button></Link>;
  }
  
  return (
    <Container maxWidth="sm">
      <TextField id="peopleToAddTextField" label="People to add" sx={{ display: "flex", textAlign: 'center' }} onChange={(e) => setPeopleAdded(e.target.value)} />
      <Button variant="contained" onClick= {handleAppPeople}>App people</Button>
      <ButtonLink />
    </Container>
  );
}
