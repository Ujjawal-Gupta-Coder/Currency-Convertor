import React from 'react'

const Amount = ({amount, setAmount}) => {
  const handleAmountChange = (e) => {
      setAmount(e.target.value);
  }
  return (
    <div className='flex flex-col items-center md:w-[68%] md:min-w-[450px] '>
        <label htmlFor='amount' className="w-[80%] md:w-full font-bold">Enter Amount</label>
        <input type="number" id='amount' name='amount' className='border-2 border-gray-500 rounded-lg w-[90%] md:w-full py-3 px-5 font-semibold text-2xl' value={amount} onChange={handleAmountChange} />
    </div>
  )
}

export default Amount
