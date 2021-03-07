import React from "react";
//import "./CardList.css";

const SearchField = ({onChange, placeholder, value, style}) => {
    return <input 
        type="search" 
        placeholder={placeholder} 
        style={style} 
        value={value} 
        onChange={onChange} 
    />
}

export default SearchField;
