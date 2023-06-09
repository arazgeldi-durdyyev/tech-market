import React from 'react'
import { useState } from 'react';
import { computers } from '../API/Products/computers.mjs';
import { smartphones } from '../API/Products/smartphones.mjs';
import { useTranslation } from 'react-i18next';
import { Input } from "@mui/material";

const Search = () => {
    const {t} = useTranslation()

    const [filterText, setFilterText] = useState("");
    const [smart, setSmart] = useState("");
    const filteredComputers = computers.filter(
        computer =>
          computer.product_name.toLowerCase().includes(filterText) 
          // ||
          // computer.title.toLowerCase().includes(filterText)
      );
      const computersToDisplay = filterText ? filteredComputers : computers;
      //////////
      const filteredSmart = smartphones.filter(
        smarts =>
          smarts.product_name.toLowerCase().includes(smart)
          //  ||
          // smarts.title.toLowerCase().includes(smart)  ||
          // smarts.memory.toLowerCase().includes(smart)

      );
      const smartToDisplay = smart ? filteredSmart : smartphones;

      //focusing an input and displaying results
      const [focus, setFocus] = useState(false);
      const handleInputFocus = () => {
        setFocus(true)
      }
      const handleInputBlur = () => {
        setFocus(false)
      }
  return (
    <div className='search-container' style={{ padding: "0px 5px", }}>
      <Input
        id='search-field'
        type="text"
        placeholder={t('search')}
        value={filterText}
        onChange={e => {setFilterText(e.target.value); setSmart(e.target.value)}}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <img id='search-icon' src="/Images/1 Header/search.png" alt="magnifier" />

      {focus ? 
          <div id='search-container-id' className='search-container' style={{marginTop:'33px'}}>
            {!filteredComputers.length && !filteredSmart.length  && (
                <div>{t('not-found')}</div>
            )}
            {computersToDisplay.map(computer => (
                <div key={computer.id} className='search-container' style={{backgroundColor: 'cornsilk', color: 'darkblue', margin:'9px 0'}}>
                    <h3>{computer.product_name}</h3>
                    <p>{computer.make}</p>
                </div> 
            ))}
            {smartToDisplay.map(smarts => (
                    <div key={smarts.id} className='search-container' style={{backgroundColor: 'cornsilk', color: 'darkblue', margin:'9px 0'}}>
                        <h3>{smarts.product_name}</h3>
                        <p>{smarts.make}</p>
                    </div>
                ))}
          </div>
          :
          null}
    </div>
  )
}

export default Search