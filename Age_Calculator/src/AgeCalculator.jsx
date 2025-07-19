import React, { useState } from 'react'

function AgeCalculator() {

  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');


  const calculateAge = () => {
    if(!birthDate) {
      setError('Please select your birthdate...');
      setresult('')
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError('⛈️ Oops! Are you come from the future?');
      setresult('');
      return;
    }
    
    setError('');

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if(months< 0) {
      years -= 1;
      months += 12;
    }

    const ageMessage = `🎉 You are <strong>${years}</strong> year${years !== 1  ? 's' : ''},
    <strong>${months}</strong> month${months !== 1 ? 's' : ''}, and <strong>${days}</strong>
    day${days !== 1 ? 's' : ''} young! ✨`;
    setResult(ageMessage);
  };

  return (
    <div className='calculator-container'>
      <div className='glass-card'>
        <h1 className='title'> ✨ Dynamic Age Calculator ✨ </h1>
        <p className='description'> Time to discover your exact age-fabulous!</p>

        <div className='date-input-container'>
          <label htmlFor="birthdate" className='inout-label'> 📆 Your Birthdate</label>
          <input type="date"
          id='birthdate'
          className='date-input'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          aria-label='Enter your birthdate' />

        </div>
        <button className='calculator-button' onClick={calculateAge}>
          🎯Show My Real Age
        </button>
        {error && <p className='error-message'>{error}</p>}

        <div className='result' dangerouslySetInnerHTML={{ __html: result}}></div>
      </div>
    </div>
  )
}

export default AgeCalculator
