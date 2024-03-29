import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { inputTableTypes } from "../../data/dataTypes";

interface SmallSelectInputProps {
  valueData: inputTableTypes[];
  name:string;
  onClick: (element:number) => void;
}

export const SmallSelectInput = ({valueData, name, onClick}: SmallSelectInputProps) => {
  const [number, setNumber] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNumber(event.target.value);
  }; 

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{name}</InputLabel>
      <Select
        labelId="select number"
        id='select-number'
        value={number}
        label="Age"
        onChange={handleChange}
      >
        {valueData.map(item => <MenuItem key={item.id} value={item.value} onClick={() => onClick(item.value)}>{item.value}</MenuItem>)}
      </Select>
    </FormControl>
  );
};
