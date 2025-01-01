import React from 'react'
import codes from '../utils/codes'
const flagAPI_pre = import.meta.env.VITE_FLAG_API_PRE;
const flagAPI_suf = import.meta.env.VITE_FLAG_API_SUF;

const Box = ({type, currencyCode, setCurrencyCode, countryCode, setCountryCode, countryName, setCountryName}) => {
    const flagURL = flagAPI_pre + countryCode + flagAPI_suf;

    const handleCurrencyCodeChange = (e) => {
      setCurrencyCode(e.target.value);
      codes.forEach((code) => {
          if(code.currencyCode === e.target.value) {
            setCountryCode(code.countryCode);
            setCountryName(code.countryName);
          }
      })
    }

    const handlcountryNameChange = (e) => {
      setCountryName(e.target.value);
      codes.forEach((code) => {
          if(code.countryName === e.target.value) {
            setCountryCode(code.countryCode);
            setCurrencyCode(code.currencyCode);
          }
      })
    }
  return (
    <div>
      <div className='ml-5 font-bold'> {type} </div>
      
      <div className='border-2 border-gray-600 flex items-center rounded-2xl px-4 py-1 gap-2 w-[170px]'>
        <img src={flagURL} alt="Country Flag" />
        
        <div>
          <select name={`${type}_CountryName`} className='w-fit md:w-[80px] outline-none font-semibold text-xl' value={countryName} onChange={handlcountryNameChange} >
            {
              codes.map((code, id) => {
                return <option key={id} value={code.countryName} defaultChecked={code.countryName === countryName} > {code.countryName} </option>
              })
            }
          </select>

          <select name={`${type}_currencyCode`} className='w-fit md:w-[80px] outline-none font-semibold text-xl' value={currencyCode} onChange={handleCurrencyCodeChange} >
            {
              codes.map((code, id) => {
                return <option key={id} value={code.currencyCode} defaultChecked={code.currencyCode === currencyCode} > {code.currencyCode} </option>
              })
            }
          </select>
        </div>











      </div>
    </div>
  )
}

export default Box
