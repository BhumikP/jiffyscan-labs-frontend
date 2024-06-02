import React from "react";
import Select, {  StylesConfig } from "react-select";

 interface Option {
  label: string;
  value: string ;
}

interface CommonSelectProps  {
  options: Option[];
  label?: string;
} 

const ReactSelect: React.FC< CommonSelectProps|any> = ({
  options,
  label,
  ...props
}) => {
  const customStyles: StylesConfig<Option, false> = {
    control: (provided) => ({
      ...provided,
      width: "152px",
      fontSize: "14px",
      border: "1px solid #EBEBEB",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "blue",
    }),
    menu: (provided) => ({
      ...provided,
      width: "152px",
      fontSize: "14px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "blue" : "black",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
      "&:hover": {
        backgroundColor: "lightgrey",
      },
    }),
  };

  return (
    <div className="common-select ">
      {label && <label>{label}</label>}
      <Select options={options} styles={customStyles} {...props} />
    </div>
  );
};

export default ReactSelect;
