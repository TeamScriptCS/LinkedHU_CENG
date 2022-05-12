import React from 'react'
import { useState } from "react"

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import JSONData from './MOCK_DATA.json';


import "./search-box.css";


const SearchBox = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = JSONData.filter((value) => {
            return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };






    return (

        <div className="search">
            <div className="searchInputs">
                <input
                type="text"
                placeholder={"Search Users"}
                value={wordEntered}
                onChange={handleFilter}
                />
                <div className="searchIcon">
                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
                </div>
            </div>
        {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <a className="dataItem" href="#">
                        <p> {value.first_name} </p>
                    </a>
                    );
                })}
            </div>
        )}
        </div>
    );

    /*         {/* <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Users"
                inputProps={{ 'aria-label': 'search users' }}
                value={inputName}
                onChange={inputChanged}
            />
            <IconButton onClick={searchButtonClicked} sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper> */



        


    /* ); */ 

}

export default SearchBox;