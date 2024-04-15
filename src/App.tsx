import './App.css';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-router-dom';

function App() {
  const ratioDefaultValue = 5;
  const [page, setPage] = useState('main');
  const [appartmentType, setAppartmentType] = useState("2BHK");
  const [corporationRatio, setCorporationRatio] = useState(5);
  const [borewellRatio, setBorewellRatio,] = useState(5);
  const [addedpeople, setAddedPeople] = useState(0);
  const [userID, setUserID] = useState("");
  const data = { appartmentType, corporationRatio, borewellRatio };

  function onChangeAppartmentType(event: ChangeEvent<HTMLInputElement>, value: string): void {
    setAppartmentType(value);
  }

  function onChangeSlider(event: Event, valueArray: number | number[], activeThumb: number): void {
    const maxSliderValue = 10;
    var value = valueArray as number;
    setCorporationRatio(value);
    setBorewellRatio(maxSliderValue - value);
  }
  function ButtonLink() {
      fetch("http://localhost:81/water-accounts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          setUserID(data.accountId);
        })
        .catch(error => {
          console.error(error);
        });
    return <Link to={"/water-accounts/"+userID}><Button variant="contained" sx={{ display: "block", marginLeft: "auto" }}>Next</Button></Link>;
  }

  return (
    <Container maxWidth="sm">
    <FormLabel id="appartment-type-radio-buttons-group-label" sx={{ textAlign: "center", marginTop: 4, display: 'block' }}>Appartment Type</FormLabel>
    <RadioGroup sx={{ textAlign: "center", marginTop: 1, display: 'block' }}
      aria-labelledby="appartment-type-radio-buttons-group-label"
      name="radio-buttons-group"
      defaultValue="2BHK"
      onChange={onChangeAppartmentType}
    >
      <FormControlLabel value="2BHK" control={<Radio />} label="2 BHK" />

      <FormControlLabel value="3BHK" control={<Radio />} label="3 BHK" />
    </RadioGroup>
    <FormLabel id="water-ratio-label" sx={{ textAlign: "center", marginTop: 4, display: 'block' }}>Water Provider Ratio</FormLabel>
    <Slider defaultValue={ratioDefaultValue} sx={{ marginTop: 2 }} step={1} marks min={0} max={10} onChange={onChangeSlider} />
    <ButtonLink />
  </Container>
  );
}

export default App;
