import React, { useEffect, useState } from 'react'
import Box from './Box'
import Amount from './Amount'
const baseURL = import.meta.env.VITE_BASE_URL;

const Hero = () => {
    const [amount, setAmount] = useState(1);
    const [exchangeRateDate, setExchangeRateDate] = useState();
    const [fromCurrencyCode, setFromCurrencyCode] = useState('USD');
    const [fromCountryCode, setFromCountryCode] = useState('US');
    const [fromCountryName, setFromCountryName] = useState('United States');
    const [toCurrencyCode, setToCurrencyCode] = useState('INR');
    const [toCountryCode, setToCountryCode] = useState('IN');
    const [toCountryName, setToCountryName] = useState('India');
    const [result, setResult] = useState();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const getDate = (dateInput) => {
      const dateObject = new Date(dateInput);

      const day = dateObject.getDate();
      const month = months[dateObject.getMonth()];
      const year = dateObject.getFullYear();
      const date = day + ' ' + month + ' ' + year;
      setExchangeRateDate(date)
    }

    const handleSwap = () => {
      const tempCountryCode = fromCountryCode;
      const tempCurrencyCode = fromCurrencyCode;
      const tempCountryName = fromCountryName;
      setFromCountryCode(toCountryCode);
      setFromCurrencyCode(toCurrencyCode);
      setFromCountryName(toCountryName);
      setToCountryCode(tempCountryCode);
      setToCurrencyCode(tempCurrencyCode);
      setToCountryName(tempCountryName);
    }

    const getExchangeRate = async () => {
      if(amount < 0) {
        setResult("Amount is Invalid");
        return;
      };
      try {
        const URL = `${baseURL}${fromCurrencyCode.toLowerCase()}.json`;
        const raw = await fetch(URL);
        const response = await raw.json();
        const convertedAmount =(response[fromCurrencyCode.toLowerCase()][toCurrencyCode.toLowerCase()] * amount);
        setResult(`${amount} ${fromCurrencyCode} = ${convertedAmount} ${toCurrencyCode}`)
        getDate(response.date);
      } catch (err) {
        setResult('Something Went Wrong');
      }
    }

    useEffect(() => {
      getExchangeRate();
      getDate(new Date());
    }, []);

  return (
    <div className='bg-white w-[90%] md:w-[70%] md:min-w-[700px] max-w-[800px] h-fit rounded-[40px] shadow-lg flex justify-center items-center flex-col gap-y-6 px-2 py-6'>
      
      <div className='text-3xl md:text-5xl text-center text-purple-600 pt-serif-caption-regular'>Currency Convertor</div>
      
      <Amount amount={amount} setAmount={setAmount} />

      <div className='flex flex-col md:flex-row md:gap-x-12 w-[70%] justify-center items-center'>
        <Box type={"From"} currencyCode={fromCurrencyCode} setCurrencyCode={setFromCurrencyCode} countryCode={fromCountryCode} setCountryCode={setFromCountryCode} countryName={fromCountryName} setCountryName={setFromCountryName} />
        <button onClick={handleSwap}> <i className="fa-solid fa-right-left rotate-90 md:rotate-0 text-4xl mt-4"></i> </button>
        <Box type={"To"} currencyCode={toCurrencyCode} setCurrencyCode={setToCurrencyCode} countryCode={toCountryCode} setCountryCode={setToCountryCode} countryName={toCountryName} setCountryName={setToCountryName} />
      </div>

      <div className="font-semibold text-xl text-center text-purple-500 " >{result}</div>

      <button className="bg-purple-600 border-2 border-gray-600 px-4 py-2 rounded-xl md:text-2xl text-white text-[17px] shadow-lg vast-shadow-regular" onClick={getExchangeRate} >Get Exchange Rate</button>
        
      <div className='text-[14px] text-red-300'>*Exchange rates as of {exchangeRateDate}.</div>

    </div>
  )
}

export default Hero
