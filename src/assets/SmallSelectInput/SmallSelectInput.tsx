import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { inputTableTypes } from "../../data/dataTypes";

interface SmallSelectInputProps {
  valueData: inputTableTypes[];
  name:string;
}

export const SmallSelectInput = ({valueData, name}: SmallSelectInputProps) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{name}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        {valueData.map(item => <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>)}
      </Select>
    </FormControl>
  );
};
