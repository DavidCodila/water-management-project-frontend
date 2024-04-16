import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material';
import { router } from "./index.tsx"
import { id } from "./id.tsx";

export default function CreateAccountPage() {
  const ratioDefaultValue = 5;
  const [appartmentType, setAppartmentType] = useState("2BHK");
  const [corporationRatio, setCorporationRatio] = useState(5);
  const [borewellRatio, setBorewellRatio,] = useState(5);
  const accountData = { appartmentType, corporationRatio, borewellRatio };

  function onChangeAppartmentType(event: ChangeEvent<HTMLInputElement>, value: string): void {
    setAppartmentType(value);
  }

  function onChangeSlider(event: Event, valueArray: number | number[], activeThumb: number): void {
    const maxSliderValue = 10;
    var value = valueArray as number;
    setCorporationRatio(value);
    setBorewellRatio(maxSliderValue - value);
  }
  function onCreateAccountButtonClick() {
    fetch("http://localhost:81/water-accounts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      })
        .then(response => response.json())
        .then(data => {
          id.push(data.accountId);
          router.navigate("/water-accounts");
        })
        .catch(error => {
          console.error(error);
        });
  }

  return (
    <Container maxWidth="sm">
      <FormLabel id="appartment-type-radio-buttons-group-label" sx={{ textAlign: "center", marginTop: 4, display: 'block' }}>Appartment Type</FormLabel>
      <RadioGroup sx={{ textAlign: "center", marginTop: 1, display: 'block' }}
        aria-labelledby="appartment-type-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue="2BHK"
        onChange={onChangeAppartmentType}>
        <FormControlLabel value="2BHK" control={<Radio />} label="2 BHK" />
        <FormControlLabel value="3BHK" control={<Radio />} label="3 BHK" />
      </RadioGroup>
      <FormLabel id="water-ratio-label" sx={{ textAlign: "center", marginTop: 4, display: 'block' }}>Water Provider Ratio</FormLabel>
      <Slider defaultValue={ratioDefaultValue} sx={{ marginTop: 2 }} step={1} marks min={0} max={10} onChange={onChangeSlider} />
      <Button variant="contained" onClick = {onCreateAccountButtonClick} sx={{ display: "block", marginLeft: "auto" }}>Next</Button>
    </Container>
  );
}
