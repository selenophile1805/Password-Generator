import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css'

function App() {
const[password, setPassword]= useState('');
const[length, setLength]= useState(8);
const[numbersActive, setNumbersActive]= useState(false);
const[symbolsActive, setSymbolsActive]= useState(false);

const passwordRef = useRef(null);


const copyPassword= useCallback(()=>{
passwordRef.current?.select();
window.navigator.clipboard.writeText(password);
},[password]);

const passwordGenerator =useCallback( () =>{
  let pass = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(numbersActive) characters += '0123456789';
  if(symbolsActive) characters += '!@#$%^&*()_+';
  for(let i=0; i<length; i++){
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  setPassword(pass);
}, [length, numbersActive, symbolsActive, setPassword ]);


useEffect(() => {
  passwordGenerator()}, [length, symbolsActive, numbersActive, passwordGenerator]);

  return (
    <>
      <h1 className='bg-black text-4xl text-center text-white'> Password Generator </h1>
      
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
  <div className="flex items-center justify-center">
    <input
      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      type="text"
      value={password}
      placeholder="Password"
      readOnly
      ref={passwordRef}

    />
    <button className="p-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" onClick={copyPassword}>
      Copy
    </button>
  </div>
  <div className="flex items-center justify-center">
    <input
      id="length"
      type="range"
      min={6}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>{setLength(e.target.value);}}
    /><label htmlFor='length'>{length}</label>
    <input
    type="checkbox"
    id="numbers"
    checked={numbersActive} 
    onChange={() => setNumbersActive((prev) => !prev)} 
    /><label htmlFor="numbers">Numbers</label>

    <input type="checkbox" id='characters' checked={symbolsActive} onChange={()=>setSymbolsActive((prev) => !prev)} /><label htmlFor="characters"> Characters</label>
  </div>
</div>




    </>
  )
}

export default App
