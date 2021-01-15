import React, { useMemo } from "react";
import Select from "react-select";
import sports from "../Sports.json";

function SelectSport({ setSportData }) {
  
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        color: "#9a9a9a",
        opacity: 0.8,
        padding: 20,
      }),
      control: (provided, state) => ({
        ...provided,
        color: "#9a9a9a",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
      container: (provided, state) => ({
        ...provided,
        width: 300,
        overflow: 'visible'
      }),
        indicatorsContainer: (provided, state) => ({
        ...provided,
        display: 'none'
      }),
    }),
    []
  );


  return (
    <div>
      <Select
        name="sports"
        placeholder="Sport"
        options={sports}
        styles={customStyles}
      />
    </div>
  );
}

export default SelectSport;
