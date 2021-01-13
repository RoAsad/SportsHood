import React, { useMemo, useState } from "react";
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
        components={{
          IndicatorSeparator: () => null,
        }}

        onChange={(e) => {
          const selectedSport = e.value;
          setSportData(selectedSport);
        }}
      />
    </div>
  );
}

export default SelectSport;
