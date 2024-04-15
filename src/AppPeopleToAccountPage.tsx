import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { id } from "./id.tsx";

export default function AppartmentDetailsPage() {
  const [peopleAdded, setPeopleAdded] = useState("");

  function handleAppPeople() {
    const userID = id[id.length - 1];
    console.log("User ID: " + userID);
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
        console.log(JSON.stringify(data));
        alert("You added " + peopleAdded + " people to your account.")
      })
      .catch(error => {
        console.error(error);
      });
    console.log("Number of people to add " + peopleAdded);
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
